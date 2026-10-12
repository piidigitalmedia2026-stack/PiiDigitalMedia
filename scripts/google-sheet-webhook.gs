/**
 * PII Digital Media — website lead form → Google Sheet Webhook.
 *
 * HOW TO DEPLOY IN 30 SECONDS:
 * 1. Open your Google Sheet (where you want leads to be added).
 * 2. In the top menu, click Extensions → Apps Script.
 * 3. Delete everything in the code editor, and PASTE THIS ENTIRE FILE.
 * 4. Click the Save icon (💾).
 * 5. In the top right, click "Deploy" → "Manage deployments".
 * 6. Click the pencil icon (Edit) on the active deployment:
 *    - Version: select "New version" (IMPORTANT!).
 *    - Web app: Execute as "Me", Who has access: "Anyone".
 * 7. Click "Deploy". Done! The URL will stay exactly the same.
 */

// Shared secret matching GOOGLE_SHEET_WEBHOOK_SECRET in .env.local
var WEBHOOK_SECRET = "07f861246bdce9b43b92a4e5ce753a4bdbaecefc8f7d676b";

var SHEET_NAME = "Leads";

var COLUMNS = [
  ["Submitted At", "submittedAt"],
  ["Reference ID", "id"],
  ["School", "institutionName"],
  ["Contact Person", "contactPerson"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["School Type", "institutionType"],
  ["City", "city"],
  ["Services", "servicesRequired"],
  ["Message", "primaryChallenge"],
  ["Preferred Contact", "preferredContactMethod"],
  ["Consent", "consent"]
];

// Open the web app URL in a browser to verify it is working
function doGet(e) {
  var configuredSecret = WEBHOOK_SECRET || PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
  return respond({
    ok: true,
    service: "PII Digital Media Leads Webhook",
    status: "active",
    sheetName: SHEET_NAME,
    hasSecretConfigured: Boolean(configuredSecret && configuredSecret.trim() !== ""),
    timestamp: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return respond({ ok: false, error: "Empty request payload" });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return respond({ ok: false, error: "Invalid JSON format: " + parseErr.message });
    }

    // Check secret if configured on script; if empty, accept seamlessly
    var scriptSecret = WEBHOOK_SECRET || PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    if (scriptSecret && scriptSecret.trim() !== "") {
      if (data.secret !== scriptSecret) {
        return respond({ ok: false, error: "unauthorized" });
      }
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sheet = getLeadsSheet();
      sheet.appendRow(COLUMNS.map(function (col) { return toCell(data[col[1]]); }));
    } finally {
      lock.releaseLock();
    }

    return respond({
      ok: true,
      message: "Lead recorded in Google Sheet",
      referenceId: data.id
    });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  }
}

function getLeadsSheet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName(SHEET_NAME) || doc.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(function (col) { return col[0]; }));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Visitors type these values, so stop Sheets treating any of them as a formula.
function toCell(value) {
  if (value === undefined || value === null) return "";
  if (Array.isArray(value)) value = value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  value = String(value);
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function respond(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
