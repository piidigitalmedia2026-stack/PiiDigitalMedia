#!/usr/bin/env node
/**
 * Test utility for PII Google Sheet Webhook Integration
 * Usage: node scripts/test-sheet.js
 */

const fs = require('fs');
const path = require('path');

// Read .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
let webhookSecret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET;

if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('GOOGLE_SHEET_WEBHOOK_URL=')) {
      webhookUrl = trimmed.split('=')[1].trim();
    }
    if (trimmed.startsWith('GOOGLE_SHEET_WEBHOOK_SECRET=')) {
      webhookSecret = trimmed.split('=')[1].trim();
    }
  }
}

if (!webhookUrl) {
  console.error('❌ Error: GOOGLE_SHEET_WEBHOOK_URL not found in .env.local');
  process.exit(1);
}

console.log('--- Testing Google Sheet Webhook ---');
console.log('Webhook URL:', webhookUrl);
console.log('Secret Configured:', Boolean(webhookSecret));

async function run() {
  // Test 1: GET Ping
  console.log('\n[1/2] Sending GET ping to verify Apps Script deployment...');
  try {
    const getRes = await fetch(webhookUrl, { redirect: 'follow' });
    const getText = await getRes.text();
    console.log('GET Response (status ' + getRes.status + '):', getText.slice(0, 150));
  } catch (err) {
    console.error('GET Ping failed:', err.message);
  }

  // Test 2: POST Lead
  console.log('\n[2/2] Sending test lead row via POST...');
  const testPayload = {
    secret: webhookSecret || '',
    id: 'TEST-VERIFY-' + Date.now().toString().slice(-4),
    institutionName: 'Verification School',
    contactPerson: 'Lead Test Officer',
    email: 'admissions-test@example.com',
    phone: '9876543210',
    institutionType: 'K-12 School',
    city: 'Hyderabad',
    servicesRequired: ['Admissions Growth', 'Meta Ads'],
    primaryChallenge: 'Automated Sheet Verification',
    preferredContactMethod: 'whatsapp',
    consent: true,
    submittedAt: new Date().toISOString()
  };

  try {
    const postRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPayload),
      redirect: 'follow'
    });

    const postText = await postRes.text();
    console.log('POST Response (status ' + postRes.status + '):', postText);

    try {
      const data = JSON.parse(postText);
      if (data.ok) {
        console.log('\n✅ SUCCESS: Google Sheet is connected and accepting leads!');
        console.log('A test row was successfully written to your Google Sheet tab "Leads".');
      } else {
        console.log('\n⚠️ Apps Script returned an error:', data.error);
      }
    } catch {
      console.log('\n⚠️ Returned HTML/Non-JSON response. Check deployment permissions (must be "Anyone").');
    }
  } catch (err) {
    console.error('POST request failed:', err.message);
  }
}

run();
