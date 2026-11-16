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
    "School Website & SEO",
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
      setReferenceId(json.referenceId || "Pii-CONFIRMED");
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
      <div className="bg-[#18181b] rounded-[12px] p-6 sm:p-8 border border-[#ffffff47] shadow-2xl text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-[10px] bg-[#27272a] text-white border border-[#ffffff1f] flex items-center justify-center mb-3">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09090b] text-[#94a3b8] border border-[#ffffff1f] font-mono text-xs mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          <span>ENQUIRY RECEIVED</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Thank You, {formData.contactPerson}
        </h3>
        <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
          We have received your enquiry for <strong className="text-white">{formData.institutionName}</strong>. Our team will get back to you shortly.
        </p>

        <div className="my-4 px-4 py-2.5 rounded-[8px] bg-[#09090b] border border-[#ffffff1f] flex items-center justify-between w-full max-w-xs text-xs">
          <span className="text-[#71717a] font-mono">Reference ID:</span>
          <span className="font-mono font-bold text-white">{referenceId}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto mt-2">
          <a
            href={`https://wa.me/917989995014?text=Hi%20Pii%20Digital%20Media%2C%20I%20just%20booked%20a%20strategy%20consultation%20for%20${encodeURIComponent(formData.institutionName)}%20(Ref%3A%20${referenceId}).`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[12px] bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="px-5 py-2.5 rounded-[12px] bg-transparent hover:bg-white/5 text-[#a1a1aa] hover:text-white border border-[#ffffff1f] font-mono text-xs transition-colors cursor-pointer"
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
      className="bg-[#09090b] rounded-[12px] p-4 sm:p-8 border border-[#ffffff1f] shadow-2xl"
    >
      {/* Header */}
      <div className="mb-5 sm:mb-6 pb-4 border-b border-[#ffffff1f]">
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
          Direct Admissions Desk
        </div>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
          Request School Strategy Consultation
        </h3>
        <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
          Tell us about your institution and what you need help with.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-4 p-3 rounded-[8px] bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <div>{errorMessage}</div>
        </div>
      )}

      <div className="space-y-4">
        {/* Row 1: School Name & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5 uppercase tracking-wider">
              School / College Name *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.institutionName}
                onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                placeholder="e.g. CMR School, Kompally"
                className="w-full h-11 px-3.5 pl-9 rounded-[8px] bg-[#18181b] border border-[#ffffff1f] focus:border-[#ffffff47] text-white text-base sm:text-xs placeholder:text-[#71717a] outline-none transition-colors"
              />
              <Building className="w-4 h-4 text-[#71717a] absolute left-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5 uppercase tracking-wider">
              Your Name & Role *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                placeholder="e.g. Principal / Management"
                className="w-full h-11 px-3.5 pl-9 rounded-[8px] bg-[#18181b] border border-[#ffffff1f] focus:border-[#ffffff47] text-white text-base sm:text-xs placeholder:text-[#71717a] outline-none transition-colors"
              />
              <User className="w-4 h-4 text-[#71717a] absolute left-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5 uppercase tracking-wider">
              Phone / WhatsApp Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full h-11 px-3.5 pl-9 rounded-[8px] bg-[#18181b] border border-[#ffffff1f] focus:border-[#ffffff47] text-white text-base sm:text-xs placeholder:text-[#71717a] outline-none transition-colors font-mono"
              />
              <PhoneCall className="w-4 h-4 text-[#71717a] absolute left-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5 uppercase tracking-wider">
              Official Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admissions@yourschool.edu"
                className="w-full h-11 px-3.5 pl-9 rounded-[8px] bg-[#18181b] border border-[#ffffff1f] focus:border-[#ffffff47] text-white text-base sm:text-xs placeholder:text-[#71717a] outline-none transition-colors"
              />
              <Mail className="w-4 h-4 text-[#71717a] absolute left-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Quick Scope Selection */}
        <div>
          <label className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase tracking-wider">
            Primary Area of Focus:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quickGoals.map((goal) => {
              const selected = formData.servicesRequired.includes(goal);
              return (
                <button
                  type="button"
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`p-2.5 min-h-[42px] flex items-center justify-center rounded-[8px] font-mono text-xs text-center border transition-all cursor-pointer ${
                    selected
                      ? "bg-white text-black font-semibold border-white"
                      : "bg-[#18181b] border-[#ffffff1f] text-[#a1a1aa] hover:border-[#ffffff47] hover:text-white"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5 uppercase tracking-wider">
            Notes / Current Admission Challenge (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about your upcoming admission targets, target grades, or digital requirements..."
            className="w-full p-3 rounded-[8px] bg-[#18181b] border border-[#ffffff1f] focus:border-[#ffffff47] text-white text-base sm:text-xs placeholder:text-[#71717a] outline-none transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 sm:h-12 rounded-[8px] bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Booking Strategy Consultation...</span>
              </>
            ) : (
              <>
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </>
            )}
          </button>
        </div>

      </div>
    </form>
  );
}
