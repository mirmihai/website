import Image from "next/image";
import Link from "next/link";
import {
  LuHammer,
  LuPaintbrush,
  LuHouse,
  LuWrench,
  LuPhone,
  LuDrill,
  LuHardHat,
} from "react-icons/lu";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesPage() {
  // STRICT DATA: Only using the exact text provided by the owners.
  const services = [
    {
      iconNode: (
        <LuDrill className="w-8 h-8 text-emerald-700" aria-hidden="true" />
      ),
      title: "House Extensions",
      desc: "Create the extra space your home needs with a professionally built extension. We manage the project from groundwork and structural construction through to the final interior finishes.",
      imageUrl: "/assets/maintenance.jpeg",
    },
    {
      iconNode: (
        <LuHouse className="w-8 h-8 text-blue-400" aria-hidden="true" />
      ),
      title: "Granny Flats",
      desc: "We build and convert spaces into practical, comfortable granny flats and additional living accommodation tailored to your property.",
      imageUrl: "/assets/garden-room.jpeg",
    },
    {
      iconNode: (
        <LuWrench className="w-8 h-8 text-stone-400" aria-hidden="true" />
      ),
      title: "Garage Conversions",
      desc: "Turn an unused garage into a bedroom, home office, living room, playroom or other valuable space.",
      imageUrl: "/assets/repairs.jpeg",
    },
    {
      iconNode: (
        <LuHammer className="w-8 h-8 text-amber-500" aria-hidden="true" />
      ),
      title: "Shed & Outbuilding Conversions",
      desc: "We transform suitable sheds and outbuildings into practical finished spaces for residential use.",
      imageUrl: "/assets/construction-structural.jpeg",
    },
    {
      iconNode: (
        <LuPaintbrush className="w-8 h-8 text-cyan-500" aria-hidden="true" />
      ),
      title: "Home Renovations",
      desc: "From individual rooms to complete property renovations, we carry out structural alterations, refurbishment and finishing work.",
      imageUrl: "/assets/interior-painter.jpeg",
    },
    {
      iconNode: (
        <LuHardHat className="w-8 h-8 text-orange-500" aria-hidden="true" />
      ),
      title: "General Building Works",
      desc: "Groundworks, foundations, blockwork, structural alterations, plastering, flooring, tiling, decorating and other residential building works.",
      imageUrl: "/assets/general-work.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-24 md:py-34 selection:bg-handy-orange selection:text-white relative overflow-hidden">
      {/* === PAGE HEADER === */}
      <section className="bg-slate-950 p-5 pb-10 text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto mt-12">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Our Building <span className="text-handy-orange">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Complete Building Projects - From Groundwork to Final Finish
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* === INTRODUCTION SECTION === */}
      <section className="bg-slate-900/50 py-16 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              One Contractor From Start to Finish
            </h2>
            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Managing a building project shouldn&apos;t mean dealing with
                multiple contractors yourself.
              </p>
              <p>
                Prime Build Construction manages the construction process and
                coordinates the specialist trades required throughout the
                project, giving you one main point of contact from the beginning
                of the work through to completion.
              </p>
              <p>
                We focus on quality workmanship, clear communication and
                delivering a finished project that our customers can be proud
                of.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === EXPANDED SERVICES LIST === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {services.map((service, idx) => (
            <ScrollReveal key={idx}>
              <article
                className={`flex flex-col lg:items-center ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16 group`}
              >
                {/* Image Side */}
                <div className="w-full sm:w-4/5 md:w-2/3 lg:w-5/12 mx-auto relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shrink-0">
                  <Image
                    src={service.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={`Prime Build Construction - ${service.title}`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Text Side (Reformatted to highlight exact text) */}
                <div className="w-full lg:flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-handy-orange transition-colors duration-500">
                      {service.iconNode}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-800 shadow-lg relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-handy-orange opacity-5 blur-3xl rounded-full pointer-events-none" />
                    <p className="text-xl text-slate-300 leading-relaxed font-light relative z-10">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="bg-slate-900 py-24 px-6 mt-auto border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Planning a Building Project?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              Tell us what you&apos;re planning and we can discuss the project,
              arrange a site visit where required and provide a quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a Quote
              </Link>
              <a
                href="tel:089 25 74 741"
                className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md text-white font-extrabold text-lg px-10 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <LuPhone size={24} aria-hidden="true" />
                Call Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
