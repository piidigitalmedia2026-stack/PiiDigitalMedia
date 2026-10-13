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
      <div className="bg-[#121820] rounded-3xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-[#132E20] text-[#4ADE80] border border-[#224A32] flex items-center justify-center mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132E20] text-[#4ADE80] border border-[#224A32] font-semibold text-xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#82A386]" />
          <span>Enquiry Logged</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Thank You, {formData.contactPerson}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
          We have received your enquiry for <strong>{formData.institutionName}</strong>. We will get back to you.
        </p>

        <div className="my-4 px-4 py-2.5 rounded-xl bg-[#0E141B] border border-white/[0.08] flex items-center justify-between w-full max-w-xs text-xs">
          <span className="text-slate-400">Ref Code:</span>
          <span className="font-mono font-bold text-white">{referenceId}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
          <a
            href="https://wa.me/917989995014?text=Hi%20PII%20Digital%20Media%2C%20I%20just%20submitted%20an%20enquiry%20for%20our%20school."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#132E20] hover:bg-[#1A3D2A] text-[#4ADE80] border border-[#224A32] font-semibold text-xs transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="px-5 py-2.5 rounded-full bg-[#17202B] hover:bg-[#223242] text-slate-200 border border-white/[0.08] font-semibold text-xs transition-colors cursor-pointer"
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
      className="bg-[#121820] rounded-3xl p-5 sm:p-7 border border-white/[0.08] shadow-2xl"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Send an Enquiry
          </h3>
          <p className="text-slate-400 text-xs mt-0.5">
            Tell us about your school and what you need help with.
          </p>
        </div>
      </div>

      {status === "error" && (
        <div className="mb-3.5 p-3 rounded-xl bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <div>{errorMessage}</div>
        </div>
      )}

      <div className="space-y-3.5">
        {/* Row 1: School Name & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
              School Name & City *
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="School name, city"
                value={formData.institutionName}
                onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#0E141B] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-slate-500 focus:bg-[#17202B] focus:outline-none focus:ring-2 focus:ring-[#82A386]/30 focus:border-[#82A386] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
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
                className="w-full pl-9 pr-3 py-2 bg-[#0E141B] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-slate-500 focus:bg-[#17202B] focus:outline-none focus:ring-2 focus:ring-[#82A386]/30 focus:border-[#82A386] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
              WhatsApp / Phone *
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-[#0E141B] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-slate-500 focus:bg-[#17202B] focus:outline-none focus:ring-2 focus:ring-[#82A386]/30 focus:border-[#82A386] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
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
                className="w-full pl-9 pr-3 py-2 bg-[#0E141B] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-slate-500 focus:bg-[#17202B] focus:outline-none focus:ring-2 focus:ring-[#82A386]/30 focus:border-[#82A386] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Quick Goal Selector */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
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
                      ? "bg-[#132E20] border-[#224A32] text-[#4ADE80] shadow-sm"
                      : "bg-[#0E141B] border-white/[0.08] text-slate-300 hover:border-white/[0.2] hover:bg-[#17202B]"
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
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
            Note / Target Goals <span className="font-normal text-slate-500 normal-case">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="What would you like help with?"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 bg-[#0E141B] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-slate-500 focus:bg-[#17202B] focus:outline-none focus:ring-2 focus:ring-[#82A386]/30 focus:border-[#82A386] transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-1.5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#0B0F14]" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F14]" />
              </>
            )}
          </button>
        </div>

        {/* Trust & WhatsApp Link */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-1.5 text-center sm:text-left">
          <span>We use your details only to respond to you.</span>
          <a
            href="https://wa.me/917989995014?text=Hi%20PII%20Digital%20Media%2C%20I%20would%20like%20to%20discuss%20marketing%20for%20our%20school."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#4ADE80] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </form>
  );
}
