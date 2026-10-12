# Backend Integration Requirements & Production Specification

**Project:** PII Digital Media — Digital Marketing Agency for Educational Institutions  
**Document Version:** 1.0.0  
**Target Architecture:** Next.js App Router (Node.js runtime) + Supabase / PostgreSQL + LeadSquared / NoPaperForms CRM Integration

---

## 1. Executive Summary

This document specifies the backend integrations, schemas, environment configurations, and external API webhooks required for full production operation of the PII Digital Media platform.

The frontend is built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. All inquiry submissions currently pass through `/api/contact` with rigorous server-side validation and logging.

---

## 2. Environment Variables Specification

Create a `.env.local` file in the root directory with the following variables:

```env
# Application Base URL
NEXT_PUBLIC_SITE_URL=https://piidigitalmedia.com

# Database (Supabase / Postgres)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-keep-private

# CRM Webhook Endpoint (e.g., LeadSquared, NoPaperForms, HubSpot)
CRM_WEBHOOK_URL=https://api.leadsquared.com/v2/LeadManagement.svc/Lead.Capture
CRM_API_KEY=your_crm_api_key_secret

# Email Notifications (Resend / SendGrid / Postmark)
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL_TO=admissions@piidigitalmedia.com,growth@piidigitalmedia.com
NOTIFICATION_EMAIL_FROM=notifications@piidigitalmedia.com

# WhatsApp Business API (Twilio / Interakt / Wati)
WHATSAPP_API_ENDPOINT=https://api.interakt.ai/v1/public/message/
WHATSAPP_API_TOKEN=your_whatsapp_token_here
```

---

## 3. Database Schema (PostgreSQL / Supabase)

### Table: `leads`
```sql
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id VARCHAR(32) NOT NULL UNIQUE,
    institution_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    institution_type VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    services_required TEXT[] DEFAULT '{}',
    approximate_budget VARCHAR(100),
    primary_challenge TEXT,
    preferred_contact_method VARCHAR(20) DEFAULT 'whatsapp',
    consent BOOLEAN DEFAULT TRUE,
    crm_synced BOOLEAN DEFAULT FALSE,
    crm_lead_id VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for searching and CRM synchronization
CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX idx_leads_email ON public.leads (email);
CREATE INDEX idx_leads_phone ON public.leads (phone);
```

---

## 4. Webhook Dispatch Flow on Submission

When a form submission is accepted at `POST /api/contact`:

1. **Validation & Deduplication:** Validate email format, 10-digit phone number, and required fields.
2. **Database Persistence:** Insert record into `public.leads` table via Supabase client.
3. **Internal Notification:** Send transactional notification email to the executive growth team via Resend.
4. **Instant Parent/Trustee WhatsApp Prospectus:** Trigger automated WhatsApp template via official Business API containing download link to the PII Digital Media Institutional Growth Dossier.
5. **CRM Push:** Forward lead payload to institutional CRM (LeadSquared / NoPaperForms / HubSpot) with UTM parameters and lead source attribution.

---

## 5. Security & Data Protection Rules

- **Client-Side Exposure:** Never prefix internal secrets with `NEXT_PUBLIC_`.
- **Rate Limiting:** Implement token bucket or Upstash Redis rate limiting on `POST /api/contact` (max 5 requests per 10 minutes per IP).
- **CORS Policies:** Restrict POST methods to `https://piidigitalmedia.com` and authorized preview domains.
- **Data Retention:** Retain applicant and inquiry details in compliance with relevant data privacy principles.
