"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, PhoneCall, Building, User, Mail, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
  defaultSegment?: string;
}

export function ContactForm({ defaultService, defaultSegment }: ContactFormProps) {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    institutionType: defaultSegment || "K-12 School",
    servicesRequired: defaultService ? [defaultService] : ["Admissions Growth"],
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const quickGoals = [
    "Admissions Growth",
    "Social Media & Reels",
    "Paid Ads & Leads",
    "Complete Marketing",
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(goal);
      const updated = exists
        ? prev.servicesRequired.filter((s) => s !== goal)
        : [...prev.servicesRequired, goal];
      return {
        ...prev,
        servicesRequired: updated.length > 0 ? updated : [goal],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          institutionName: formData.institutionName,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          institutionType: formData.institutionType,
          city: "Specified in School Name",
          servicesRequired: formData.servicesRequired,
          primaryChallenge: formData.notes,
          preferredContactMethod: "whatsapp",
          consent: true,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
      setReferenceId(json.referenceId || "PII-CONFIRMED");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : "An unexpected error occurred. Please contact us via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CBD5C8]/80 shadow-[0_10px_30px_rgba(13,21,29,0.06)] text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1E9] text-[#2F523E] font-semibold text-xs mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Enquiry Logged</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D151D] tracking-tight">
          Thank You, {formData.contactPerson}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
          We have received your enquiry for <strong>{formData.institutionName}</strong>. Our school growth team will reach out within 24 hours.
        </p>

        <div className="my-4 px-4 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#CBD5C8]/60 flex items-center justify-between w-full max-w-xs text-xs">
          <span className="text-slate-500">Ref Code:</span>
          <span className="font-mono font-bold text-[#0D151D]">{referenceId}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
          <a
            href="https://wa.me/917989995014?text=Hi%20PII%20Digital%20Media%2C%20I%20just%20submitted%20an%20enquiry%20for%20our%20school."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#182620] hover:bg-[#0D151D] text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-[#CBD5C8]/80 shadow-[0_10px_30px_rgba(13,21,29,0.06)]"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-2 pb-3 border-b border-[#CBD5C8]/40">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#0D151D] tracking-tight">
            Send an Enquiry
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">
            Quick 60-second form for a customized school growth proposal.
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#2F523E] bg-[#EBF1E9] px-2.5 py-1 rounded-full shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] animate-pulse" />
          <span>24h Response</span>
        </span>
      </div>

      {status === "error" && (
        <div className="mb-3.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{errorMessage}</div>
        </div>
      )}

      <div className="space-y-3.5">
        {/* Row 1: School Name & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1">
              School Name & City *
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Oakridge, Hyderabad"
                value={formData.institutionName}
                onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#CBD5C8]/80 rounded-xl text-sm text-[#0D151D] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6C836F]/40 focus:border-[#6C836F] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1">
              Your Name & Role *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Principal / Director"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#CBD5C8]/80 rounded-xl text-sm text-[#0D151D] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6C836F]/40 focus:border-[#6C836F] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1">
              WhatsApp / Phone *
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#CBD5C8]/80 rounded-xl text-sm text-[#0D151D] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6C836F]/40 focus:border-[#6C836F] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1">
              Official Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="name@school.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#CBD5C8]/80 rounded-xl text-sm text-[#0D151D] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6C836F]/40 focus:border-[#6C836F] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Quick Goal Selector */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1.5">
            Primary Area of Focus
          </label>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {quickGoals.map((goal) => {
              const selected = formData.servicesRequired.includes(goal);
              return (
                <button
                  type="button"
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-semibold transition-all cursor-pointer text-center ${
                    selected
                      ? "bg-[#182620] border-[#182620] text-white shadow-xs"
                      : "bg-[#FAF9F5] border-[#CBD5C8]/80 text-[#2C3E50] hover:border-[#6C836F] hover:bg-white"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        {/* Optional Note */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0D151D] mb-1">
            Note / Target Goals <span className="font-normal text-slate-400 normal-case">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Looking to increase Grade 1 & 11 enrollments"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#CBD5C8]/80 rounded-xl text-sm text-[#0D151D] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6C836F]/40 focus:border-[#6C836F] transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-1.5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-full bg-[#182620] hover:bg-[#0D151D] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Request Growth Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Trust & WhatsApp Link */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-1.5 text-center sm:text-left">
          <span>🔒 Strictly Confidential • No Spam</span>
          <a
            href="https://wa.me/917989995014?text=Hi%20PII%20Digital%20Media%2C%20I%20would%20like%20to%20discuss%20marketing%20for%20our%20school."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#2F523E] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </form>
  );
}
