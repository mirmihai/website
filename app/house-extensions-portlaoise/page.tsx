import { Metadata } from "next";
import Link from "next/link";
import {
  LuHouse,
  LuHammer,
  LuCircleCheck,
  LuPhone,
  LuMail,
  LuMapPin,
  LuClipboardList,
  LuHardHat,
  LuCircleHelp,
  LuArrowRight,
} from "react-icons/lu";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "House Extensions Portlaoise",
  description:
    "Planning a house extension in Portlaoise or Co. Laois? Prime Build Construction manages extensions from groundwork and structural work through to final finishes. Request a quote today.",
};

const extensionTypes = [
  "Kitchen extensions",
  "Rear house extensions",
  "Side extensions",
  "Additional bedrooms",
  "Open-plan kitchen and living areas",
  "Utility rooms",
  "Home offices",
  "Additional living rooms",
  "Granny flat extensions",
  "Structural alterations to existing properties",
  "Full renovation and extension projects",
];

const constructionStages = [
  {
    title: "Groundworks & Foundations",
    desc: "Site preparation, excavation, foundations and associated groundwork required for the new structure.",
  },
  {
    title: "Blockwork & Structural Construction",
    desc: "External and internal walls, structural openings and the main construction of the extension.",
  },
  {
    title: "Roofing",
    desc: "Installation and completion of the roof structure required for the extension.",
  },
  {
    title: "Insulation",
    desc: "Appropriate insulation works throughout the walls, floors and roof areas as required by the project.",
  },
  {
    title: "Windows & External Doors",
    desc: "Preparation and installation coordination for windows, patio doors and external doors.",
  },
  {
    title: "Internal Construction",
    desc: "Stud walls, plasterboard, ceilings and preparation of the new internal spaces.",
  },
  {
    title: "Plastering & Finishing",
    desc: "Plastering, skimming and preparation for decoration.",
  },
  {
    title: "Flooring, Tiling & Decorating",
    desc: "Final interior works required to bring the extension to a finished standard. (Where specialist electrical, plumbing or gas work is required, we coordinate the appropriate trades).",
  },
];

const processSteps = [
  {
    title: "Initial Enquiry",
    desc: "Contact Prime Build Construction and tell us what you are planning. This may include the approximate size of the extension, what you want to use the new space for and whether you already have drawings or planning information.",
  },
  {
    title: "Site Visit",
    desc: "Where appropriate, we can arrange to view the property and discuss the proposed work in more detail.",
  },
  {
    title: "Project Information",
    desc: "For larger structural projects, proper drawings, specifications and engineering information may be required before an accurate quotation can be prepared.",
  },
  {
    title: "Quotation",
    desc: "Once the required project information is available, we can prepare a quotation based on the agreed scope of work.",
  },
  {
    title: "Construction",
    desc: "Work begins according to the agreed project requirements. We manage the building stages and coordinate the specialist trades needed during the project.",
  },
  {
    title: "Final Finishing",
    desc: "Once the structural and installation stages are complete, we move into plastering, flooring, tiling, decorating and the other finishing work included in the agreed scope.",
  },
];

const faqs = [
  {
    q: "How much does a house extension cost in Portlaoise?",
    a: "The cost depends on the size of the extension, specification, structural requirements, site access and level of finish. A small straightforward extension and a large open-plan kitchen extension with major structural alterations can have very different costs. The best way to establish a realistic budget is to have proper plans and specifications prepared and then request a quotation based on the actual project.",
  },
  {
    q: "Do I need planning permission for a house extension?",
    a: "Planning requirements depend on the individual property and the proposed extension. Some residential extensions may qualify for planning exemptions, while others require planning permission. Homeowners should confirm the planning requirements for their specific project with the appropriate planning professional or local authority before construction begins.",
  },
  {
    q: "Can you manage the whole extension?",
    a: "We can manage the main building works and coordinate the specialist trades required throughout the project. The exact scope is agreed before construction begins so everyone is clear about what is included.",
  },
  {
    q: "Do you do the electrical and plumbing work?",
    a: "Where electrical, plumbing or gas work is required, we coordinate the appropriate specialist trades as part of the project.",
  },
  {
    q: "Can you renovate the existing house at the same time?",
    a: "Yes. Many extension projects include renovation works to the existing property, such as opening rooms, flooring, plastering, tiling, decorating and internal alterations. These works can be included within the overall project scope.",
  },
];

export default function HouseExtensionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 md:py-32 selection:bg-handy-orange selection:text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-handy-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* === PAGE HEADER === */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-20 md:mb-28 mt-12">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-6 text-handy-orange font-bold tracking-widest text-xs uppercase bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 w-fit mx-auto shadow-sm">
            <LuMapPin size={16} aria-hidden="true" />
            <span>House Extensions in Portlaoise & Co. Laois</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Complete House Extensions <br className="hidden md:block" />
            <span className="text-handy-orange">
              From Groundwork to Final Finish
            </span>
          </h1>
          <div className="text-lg md:text-xl leading-relaxed font-light space-y-6 max-w-3xl mx-auto">
            <p className="font-medium">Need more space without moving home?</p>
            <p>
              Prime Build Construction provides complete house extension
              services throughout Portlaoise, Co. Laois and surrounding areas.
            </p>
            <p>
              Whether you are planning a larger kitchen, additional bedroom,
              open-plan living space, home office, utility room or a substantial
              extension, we can manage the building work from the initial
              groundwork through to the final finish. We coordinate the
              different stages of the project so you have one main point of
              contact throughout the build.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center bg-handy-orange text-white font-extrabold text-base px-10 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              Discuss Your Project
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* === BUILDERS IN PORTLAOISE & TYPES === */}
      <section className="bg-slate-900 py-20 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              House Extension Builders in Portlaoise
            </h2>
            <p className="text-lg mb-6 leading-relaxed font-light">
              A well-designed extension can completely change how your home
              works.
            </p>
            <p className="text-lg mb-8 leading-relaxed font-light">
              Instead of moving to a larger property, extending your existing
              home can provide the additional space your family needs while
              allowing you to stay in the area and home you already know.
            </p>
            <p className="text-lg  mb-6 leading-relaxed font-light">
              Prime Build Construction works with homeowners on extensions of
              different sizes and styles, including:
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extensionTypes.map((type, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <LuCircleCheck
                      className="w-5 h-5 text-handy-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-medium ">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CONSTRUCTION STAGES === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-900 rounded-full border border-slate-800 shadow-inner">
                  <LuHammer className="w-8 h-8 text-handy-orange" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                From Foundations to <span>Finished Room</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto font-light">
                We can manage the main construction stages required to take your
                extension from the ground to a completed living space. Depending
                on the project, this can include:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionStages.map((stage, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-colors relative overflow-hidden">
                  {/* <span className="text-handy-orange/20 font-black text-5xl absolute top-4 right-6 pointer-events-none select-none">
                    0{idx + 1}
                  </span> */}
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    {stage.title}
                  </h3>
                  <p className="font-light leading-relaxed relative z-10">
                    {stage.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === EXTENSION STYLES DETAILS === */}
      <section className="bg-slate-900 py-24 px-6 border-y border-slate-800">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2 h-full bg-handy-orange" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Kitchen Extensions
              </h3>
              <p className=" font-light leading-relaxed mb-4 text-lg">
                Kitchen extensions are one of the most effective ways to
                transform an existing home. Many older properties have separate
                kitchens, dining rooms and smaller living areas that no longer
                suit modern family life.
              </p>
              <p className=" font-light leading-relaxed text-lg">
                A rear or side extension can create space for a larger kitchen,
                dining area and open-plan living space while improving the
                connection between the house and garden. Prime Build
                Construction can carry out the structural building work and
                manage the construction process through to the internal finish.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2 h-full bg-blue-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Open-Plan Extensions
              </h3>
              <p className="font-light leading-relaxed mb-4 text-lg">
                Opening existing rooms and combining them with a new extension
                can create a much brighter and more practical living space. This
                can involve removing existing walls, creating structural
                openings and connecting the original house with the new
                extension.
              </p>
              <p className="font-light leading-relaxed text-lg">
                Every property is different, so structural changes should be
                based on the appropriate drawings and engineering requirements
                for the project. We work from the approved project information
                and carry out the building work accordingly.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2 h-full bg-emerald-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Rear & Side Extensions
              </h3>
              <p className="font-light leading-relaxed mb-4 text-lg">
                Depending on the layout of your property, an extension may be
                possible to the rear, side or a combination of both. A rear
                extension is commonly used to enlarge kitchens and living areas.
              </p>
              <p className=" font-light leading-relaxed text-lg">
                Side extensions can make use of underused space beside a
                property and may provide room for a utility area, additional
                bedroom, office or larger living space. The best option depends
                on the property, site layout, planning requirements and what you
                want to achieve from the finished space.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute left-0 top-0 w-2 h-full bg-amber-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Extension & Renovation Projects
              </h3>
              <p className=" font-light leading-relaxed mb-6 text-lg">
                Sometimes an extension is only one part of a larger renovation.
                For example, a homeowner may want to extend the kitchen while
                also:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6">
                {[
                  "Opening existing rooms",
                  "Renovating the ground floor",
                  "Replacing flooring",
                  "Updating doors",
                  "Reconfiguring bedrooms",
                  "Adding a utility room",
                  "Improving insulation",
                  "Redecorating the property",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <LuCircleCheck
                      className="w-5 h-5 text-handy-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-light leading-relaxed text-lg">
                Prime Build Construction can combine the extension work with
                wider renovation works, helping to keep the overall project
                under one main building contractor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === WHY CHOOSE US & AREAS WE SERVE === */}
      <section className="bg-slate-900 py-24 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl text-center font-extrabold text-white mb-8">
                Why Choose{" "}
                <span className="text-handy-orange font-bold">
                  Prime Build Construction
                </span>{" "}
                ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <LuHardHat className="w-6 h-6 text-handy-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Complete Building Service
                    </h4>
                    <p className="font-light">
                      We carry out general building work from the early
                      construction stages through to the final finish.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <LuCircleCheck className="w-6 h-6 text-handy-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      One Main Point of Contact
                    </h4>
                    <p className="font-light">
                      We manage the building process and coordinate the
                      specialist trades required throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <LuHouse className="w-6 h-6 text-handy-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Quality Finish
                    </h4>
                    <p className="font-light">
                      The final stages matter just as much as the structure
                      itself. We pay attention to the finishing work that turns
                      a building project into a completed home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === PROCESS SECTION === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-900 rounded-full border border-slate-800 shadow-inner">
                  <LuClipboardList className="w-8 h-8 text-handy-orange" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Our House Extension{" "}
                <span className="text-handy-orange">Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={idx}>
                <div className="flex flex-col sm:flex-row gap-6 bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 items-start shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-950 text-handy-orange font-black text-xl flex items-center justify-center rounded-full border border-slate-700 shadow-inner">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <LuMapPin className="text-handy-orange w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">
                  Areas We Serve
                </h3>
              </div>
              <p className="font-light mb-6">
                Prime Build Construction provides house extension services
                throughout Portlaoise and surrounding areas of Co. Laois,
                including:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Portlaoise",
                  "Mountmellick",
                  "Portarlington",
                  "Abbeyleix",
                  "Mountrath",
                  "Stradbally",
                  "Durrow",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full font-medium text-sm"
                  >
                    {area}
                  </span>
                ))}
                <span className="flex items-center">
                  and surrounding areas.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === FAQS === */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-10">
              <LuCircleHelp className="w-8 h-8 text-handy-orange" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                House Extension FAQs
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                  <p className="font-light leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className="bg-slate-900 py-24 px-6 mt-auto border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-handy-orange opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Planning a House Extension in Portlaoise?
            </h2>
            <p className="text-lg mb-10 leading-relaxed font-light">
              If you are considering a house extension in Portlaoise or anywhere
              in Co. Laois, speak with Prime Build Construction about your
              project. Whether you already have drawings prepared or are still
              at the early planning stage, contact us to discuss what you want
              to achieve.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all"
              >
                Request a Quote
                <LuArrowRight size={20} />
              </Link>
              <a
                href="tel:089 25 74 741"
                className="flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-md text-white font-extrabold text-lg px-10 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all"
              >
                <LuPhone size={24} />
                Call Us Now
              </a>
            </div>
            <a
              href="mailto:info@primebuildconstruction.ie"
              className="text-2xl mt-6 flex items-center justify-center gap-2  hover:text-handy-orange transition-colors"
            >
              <LuMail size={22} className="pt-1" />
              <span>info@primebuildconstruction.ie</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
