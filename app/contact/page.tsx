import { LuMail, LuPhone, LuCalendarDays, LuClock } from "react-icons/lu";
import CalendlyWidget from "@/components/ui/CaledlyWidget";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 md:py-42 selection:bg-handy-orange selection:text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* === PAGE HEADER === */}
        <div className="mb-12 md:mb-16 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4 text-handy-orange font-bold tracking-widest text-xs uppercase w-fit mx-auto">
              <LuMail size={18} aria-hidden="true" />
              <span>We&apos;re Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-handy-orange">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to start your construction or renovation project? Send us a
              message with your project details or book a dedicated consultation
              time below.
            </p>
          </ScrollReveal>
        </div>

        {/* === FULL-WIDTH DIRECT CONTACT INFO SECTION === */}
        <ScrollReveal>
          <div className="mb-12 p-8 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col gap-8">
            {/* Decorative subtle top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-amber-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                  <LuPhone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                    Phone Number
                  </h3>
                  <a
                    href="tel:089 25 74 741"
                    className="text-white text-lg font-medium hover:text-handy-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm"
                  >
                    089 25 74 741
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                  <LuMail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@primebuildconstruction.ie"
                    className="text-white text-lg font-medium hover:text-handy-orange transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-sm"
                  >
                    info@primebuildconstruction.ie
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-handy-orange shadow-inner shrink-0">
                  <LuClock size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-slate-300 font-light text-sm leading-relaxed">
                    <div className="flex justify-between gap-5">
                      <span>Monday - Friday:</span>
                      <span className="text-white font-normal">
                        8:00 AM – 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between gap-5">
                      <span>Saturday:</span>
                      <span className="text-white font-normal">
                        9:00 AM – 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === LEFT COLUMN: CONTACT FORM === */}
          <section
            id="contact-form-section"
            className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            aria-labelledby="form-heading"
          >
            <div className="p-8 bg-slate-950/50 border-b border-slate-800 shrink-0">
              <h2
                id="form-heading"
                className="text-2xl font-extrabold text-white tracking-tight"
              >
                Request a Project Quote
              </h2>
              <p className="text-slate-400 text-sm font-light mt-1">
                Fill out the details below and our team will get back to you
                promptly.
              </p>
            </div>

            {/* Injected Client Form Component */}
            <ContactForm />
          </section>

          {/* === RIGHT COLUMN: CALENDLY BOOKING === */}
          <ScrollReveal>
            <div className="h-full flex flex-col">
              <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-slate-950/50 border-b border-slate-800 flex items-center gap-5 shrink-0">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
                    <LuCalendarDays
                      className="text-handy-orange"
                      size={28}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">
                      Book a Consultation
                    </h2>
                    <p className="text-slate-400 text-sm font-light mt-1">
                      Select a date and time to discuss your build.
                    </p>
                  </div>
                </div>

                <div className="grow overflow-hidden bg-slate-950 w-full relative">
                  <CalendlyWidget />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
