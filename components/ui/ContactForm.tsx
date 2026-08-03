// components/ui/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    if (formData.get("website")) {
      setIsSubmitting(false);
      return;
    }

    try {
      // NOTE: Ensure you have your /api/contact backend set up
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 flex flex-col gap-6 flex-grow bg-slate-900/40"
    >
      {/* --- HONEYPOT FIELD (Hidden from humans) --- */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this out if you are human:</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-slate-300"
          >
            Full Name <span className="text-handy-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
            placeholder="e.g. David O'Connor"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-slate-300"
          >
            Phone Number <span className="text-handy-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
            placeholder="08X XX XX XXX"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-slate-300">
          Email Address <span className="text-handy-orange">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all shadow-inner"
          placeholder="email@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="project"
          className="text-sm font-semibold text-slate-300"
        >
          Project Description <span className="text-handy-orange">*</span>
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-handy-orange transition-all resize-none shadow-inner"
          placeholder="Tell us about your project"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-handy-orange hover:bg-orange-600 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-extrabold text-lg py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-handy-orange flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            "SUBMIT"
          )}
        </button>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-950/30 py-3 rounded-lg border border-emerald-900/50"
            >
              <LuCircleCheck size={18} />
              <span>Message sent successfully! We&apos;ll be in touch.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
