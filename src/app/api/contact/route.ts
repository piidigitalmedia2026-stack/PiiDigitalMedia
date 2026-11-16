import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export interface ContactSubmission {
  id: string;
  institutionName: string;
  contactPerson: string;
  email: string;
  phone: string;
  institutionType: string;
  city: string;
  servicesRequired: string[];
  approximateBudget?: string;
  primaryChallenge?: string;
  preferredContactMethod: "phone" | "whatsapp" | "email";
  consent: boolean;
  submittedAt: string;
}

const CONTACT_FALLBACK = "Please call or WhatsApp us on +91 79899 95014.";

// Save every lead to a persistent local JSON file as backup
async function saveLeadToLocalBackup(
  submission: ContactSubmission,
  sheetSuccess: boolean,
  sheetError?: string
) {
  try {
    const dataDir = process.env.VERCEL ? "/tmp/data" : path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });
    const backupFile = path.join(dataDir, "leads.json");

    let leads: Array<ContactSubmission & { sheetSynced: boolean; sheetError?: string }> = [];
    try {
      const existing = await fs.readFile(backupFile, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      leads = [];
    }

    leads.unshift({
      ...submission,
      sheetSynced: sheetSuccess,
      sheetError: sheetError || undefined,
    });

    await fs.writeFile(backupFile, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("[Pii Lead API] Failed to write local backup:", err);
  }
}

// Appends the lead as a row in the Google Sheet, through the Apps Script web app
async function saveLeadToSheet(submission: ContactSubmission) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET;
  if (!url) {
    return { ok: false, skipped: true };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: secret || "", ...submission }),
    signal: AbortSignal.timeout(12000),
    cache: "no-store",
    redirect: "follow",
  });

  const text = await res.text();
  let result: { ok?: boolean; error?: string };
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(
      `Google Sheet webhook returned a non-JSON response (HTTP ${res.status}). Verify Web App deployment access is set to 'Anyone'.`
    );
  }

  if (!result.ok) {
    if (result.error === "unauthorized") {
      throw new Error(
        "Google Apps Script returned unauthorized. Please update your Google Sheet Apps Script secret and re-deploy."
      );
    }
    throw new Error(`Google Sheet webhook rejected the lead: ${result.error ?? "unknown error"}`);
  }

  return result;
}

// Diagnostics endpoint to test Google Sheet webhook connection
export async function GET() {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET;

  if (!url) {
    return NextResponse.json({
      status: "ready",
      sheetConnected: false,
      message: "Lead submission active (local storage fallback). Set GOOGLE_SHEET_WEBHOOK_URL in environment variables to sync with Google Sheets.",
    });
  }

  try {
    const res = await fetch(url, {
      method: "GET",
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
      cache: "no-store",
    });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text.slice(0, 300) };
    }

    return NextResponse.json({
      status: "online",
      webhookUrl: url,
      hasSecretInEnv: Boolean(secret),
      sheetResponse: data,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        status: "error",
        error: message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      institutionName,
      contactPerson,
      email,
      phone,
      institutionType,
      city,
      servicesRequired,
      approximateBudget,
      primaryChallenge,
      preferredContactMethod,
      consent,
    } = data;

    // Validation
    if (!institutionName?.trim() || !contactPerson?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in your school name, contact name, email, and phone number.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (phone.replace(/[^0-9]/g, "").length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number with at least 10 digits." },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      id: `Pii-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      institutionName: institutionName.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim(),
      phone: phone.trim(),
      institutionType: institutionType || "K-12 School",
      city: city || "Specified in School Name",
      servicesRequired: Array.isArray(servicesRequired) ? servicesRequired : [],
      approximateBudget: approximateBudget || "Undisclosed",
      primaryChallenge: primaryChallenge || "",
      preferredContactMethod: preferredContactMethod || "whatsapp",
      consent: consent !== undefined ? Boolean(consent) : true,
      submittedAt: new Date().toISOString(),
    };

    let sheetSuccess = false;
    let sheetErrorMsg = "";

    try {
      const sheetRes = await saveLeadToSheet(submission);
      if (sheetRes && sheetRes.ok) {
        sheetSuccess = true;
      }
    } catch (error: unknown) {
      sheetErrorMsg = error instanceof Error ? error.message : String(error);
      console.warn(`[Pii Lead API] Note: Google Sheet sync unavailable (${sheetErrorMsg}). Saved to backup.`);
    }

    // Always persist lead locally so no lead is ever lost
    await saveLeadToLocalBackup(submission, sheetSuccess, sheetErrorMsg);

    // Return success to the user so their enquiry is confirmed without showing backend setup errors
    return NextResponse.json({
      success: true,
      message: "Thank you! We have received your consultation enquiry.",
      referenceId: submission.id,
      data: {
        institutionName: submission.institutionName,
        contactPerson: submission.contactPerson,
        submittedAt: submission.submittedAt,
      },
    });
  } catch (error: unknown) {
    console.error("[Pii Lead API] Error handling submission:", error);
    return NextResponse.json(
      { success: false, error: `Something went wrong sending your enquiry. ${CONTACT_FALLBACK}` },
      { status: 500 }
    );
  }
}
