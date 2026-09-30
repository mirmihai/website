import Image from "next/image";
import Link from "next/link";
import {
  LuPhone,
  LuShieldCheck,
  LuCamera,
  LuCircleCheck,
  LuMessageSquare,
  LuMapPin,
  LuArrowRight,
  LuHouse,
  LuDrill,
  LuWrench,
  LuHammer,
  LuPaintbrush,
  LuUsers,
  LuHardHat,
} from "react-icons/lu";

import HandymanDivider from "@/components/ui/HandymanDivider";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import RecentProjectsGallery from "@/components/ui/RecentProjectsGallery";
import { irReviews } from "@/app/data/reviews";

// --- DATA ARRAYS ---
const portfolio = [
  {
    id: 1,
    title: "Studio from the ground up.",
    category: "New Build",
    img: "/assets/projects/studio/studio-34.jpg",
  },
];

const services = [
  {
    iconNode: (
      <LuDrill className="w-6 h-6 text-emerald-700" aria-hidden="true" />
    ),
    title: "House Extensions",
    desc: "Create the extra space your home needs with a professionally built extension. We manage the project from groundwork and structural construction through to the final interior finishes.",
    imageUrl: "/assets/maintenance.jpeg",
    animation: {
      rest: { x: 0, y: 0 },
      hover: {
        x: [0, -1.5, 1.5, -1.5, 1.5, -1.5, 1.5, 0],
        y: [0, 1.5, -1.5, 1.5, -1.5, 1.5, -1.5, 0],
        transition: { duration: 0.5 },
      },
    },
  },
  {
    iconNode: <LuHouse className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "Granny Flats",
    desc: "We build and convert spaces into practical, comfortable granny flats and additional living accommodation tailored to your property.",
    imageUrl: "/assets/garden-room.jpeg",
    animation: {
      rest: { scale: 1 },
      hover: { scale: [1, 1.15, 0.95, 1.05, 1], transition: { duration: 0.5 } },
    },
  },
  {
    iconNode: (
      <LuWrench className="w-6 h-6 text-stone-400" aria-hidden="true" />
    ),
    title: "Garage Conversions",
    desc: "Turn an unused garage into a bedroom, home office, living room, playroom or other valuable space.",
    imageUrl: "/assets/repairs.jpeg",
    animation: {
      rest: { rotate: 0 },
      hover: { rotate: [0, 45, 0, 45, 0], transition: { duration: 0.6 } },
    },
  },
  {
    iconNode: (
      <LuHammer className="w-6 h-6 text-amber-500" aria-hidden="true" />
    ),
    title: "Shed & Outbuilding Conversions",
    desc: "We transform suitable sheds and outbuildings into practical finished spaces for residential use.",
    imageUrl: "/assets/construction-structural.jpeg",
    animation: {
      rest: { rotate: 0 },
      hover: {
        rotate: [0, -40, 15, -20, 10, 0],
        transition: { duration: 0.6 },
      },
    },
  },
  {
    iconNode: (
      <LuPaintbrush className="w-6 h-6 text-cyan-500" aria-hidden="true" />
    ),
    title: "Home Renovations",
    desc: "From individual rooms to complete property renovations, we carry out structural alterations, refurbishment and finishing work.",
    imageUrl: "/assets/interior-painter.jpeg",
    animation: {
      rest: { x: 0, rotate: 0 },
      hover: {
        x: [0, -5, 10],
        rotate: [0, -15, -20],
        transition: { duration: 1.5 },
      },
    },
  },
  {
    iconNode: (
      <LuHardHat className="w-6 h-6 text-orange-500" aria-hidden="true" />
    ),
    title: "General Building Works",
    desc: "Groundworks, foundations, blockwork, structural alterations, plastering, flooring, tiling, decorating and other residential building works.",
    imageUrl: "/assets/general-work.jpeg",
    animation: {
      rest: { y: 0, scale: 1 },
      hover: {
        y: [0, -4, 0, -2, 0],
        scale: [1, 1.05, 1],
        transition: { duration: 0.6 },
      },
    },
  },
];

const whyChooseUs = [
  "All-in-One Project Management",
  "Uncompromising Quality Standards",
  "Health & Safety Certified",
  "Rapid, Team-Based Execution",
  "Flawless Attention To Detail",
  "Clean & Respectful Site Practices",
];

export default function Home() {
  // Data loads instantly on the server.
  const googleReviews = irReviews;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white pt-20">
      <section
        className="bg-slate-950 py-20 md:py-28"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* LEFT SIDE: Intro Text & CTAs */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">
              <ScrollReveal>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 shadow-sm">
                    <LuMapPin
                      className="text-handy-orange shrink-0"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                      Portlaoise & Co. Laois
                    </span>
                  </div>
                </div>

                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight"
                >
                  Complete Building Projects <br className="hidden sm:block" />
                  <span className="text-slate-400 text-3xl sm:text-4xl lg:text-4xl">
                    From Groundwork to Final Finish
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed font-light">
                  Prime Build Construction provides professional residential
                  building services throughout Portlaoise, Co. Laois and
                  surrounding areas. We specialise in{" "}
                  <span className="font-bold text-white">
                    house extensions, granny flats, garage and shed conversions,
                    home renovations and general building works.
                  </span>
                </p>
                <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-light">
                  From foundations and structural work through to plastering,
                  flooring, tiling, decorating and final finishes, we manage
                  your project from start to completion.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-lg hover:bg-orange-600 transition-all text-center"
                  >
                    REQUEST A QUOTE
                  </Link>
                  <Link
                    href="tel:089 25 74 741"
                    className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/80 backdrop-blur-md font-bold hover:bg-slate-800 transition-all text-center"
                  >
                    <LuPhone size={20} aria-hidden="true" />
                    <span>CALL US NOW</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT SIDE: Visual Branding */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center isolate">
                  <Image
                    src="/assets/company-logo-hi-vis-1.jpeg"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt="Prime Build Construction Ireland Background"
                    className="object-cover opacity-80 mix-blend-luminosity hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/95 via-slate-900/70 to-slate-950/40 pointer-events-none" />
                  <div className="relative z-10 p-6">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-white drop-shadow-xl">
                      Prime Build <br />
                      <span className="text-handy-orange">Construction</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      {/* === RECENT PROJECTS GALLERY === */}
      <section
        className="bg-slate-950 py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="portfolio-heading"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-handy-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-6 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuCamera
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  Before & Afters Available
                </span>
              </div>
              <h2
                id="portfolio-heading"
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter"
              >
                Recent <span className="text-slate-400">Projects</span>
              </h2>
              <p>
                Take a look at some of our recently completed extensions,
                conversions, renovations and building projects.{" "}
              </p>
            </div>
          </div>

          {/* Injected Client Component */}
          <Link href="/projects">
            <RecentProjectsGallery portfolio={portfolio} />
          </Link>

          <div className="mt-12 flex justify-end w-full relative z-20">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/80 hover:bg-slate-800 transition-all font-bold shadow-lg group"
            >
              <span>VIEW OUR PROJECTS</span>
              <LuArrowRight
                size={20}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section id="services" className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Our Building <span className="text-slate-400">Services.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-handy-orange to-orange-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Map over the extracted ServiceCard component */}
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center bg-slate-900 border-2 border-dashed border-slate-700 hover:border-handy-orange/50 rounded-3xl p-8 text-center group transition-all duration-300 shadow-xl h-full min-h-[400px]">
                <div className="mb-6 p-5 bg-slate-950 rounded-full group-hover:scale-110 transition-transform duration-500 border border-slate-800 shadow-inner">
                  <LuArrowRight
                    className="w-10 h-10 text-handy-orange group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  View All Services
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 font-light">
                  Discover our complete range of professional services in
                  detail.
                </p>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-10 rounded-full text-white bg-handy-orange font-bold shadow-lg hover:bg-orange-600 transition-all"
                >
                  EXPLORE ALL
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === ONE CONTRACTOR SECTION === */}
      <section className="bg-slate-950 py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-slate-900 rounded-full border border-slate-800 shadow-inner inline-flex items-center justify-center">
                <LuUsers
                  className="w-8 h-8 text-handy-orange"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-8 leading-tight">
              One Contractor From{" "}
              <span className="text-handy-orange">Start to Finish.</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
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

      {/* === SERVICE AREA SECTION === */}
      <section className="bg-slate-900 py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-16 shadow-2xl text-center flex flex-col items-center">
              <div className="flex items-center gap-2 mb-8 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuMapPin
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  Service Area
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
                Building in Portlaoise and Co. Laois
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-6 max-w-3xl leading-relaxed font-light">
                Prime Build Construction is based in Co. Laois and works with
                homeowners throughout{" "}
                <span className="font-bold text-slate-300">
                  Portlaoise, Mountmellick, Portarlington, Abbeyleix, Mountrath,
                  Stradbally
                </span>{" "}
                and surrounding areas.
              </p>
              <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
                If you are considering an extension, renovation, conversion or
                another building project, contact us to discuss your plans.
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-handy-orange text-white font-extrabold text-base px-10 py-4 rounded-full hover:bg-orange-600 transition-all shadow-lg tracking-wide"
              >
                GET IN TOUCH
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CONTACT CTA SECTION === */}
      {/* <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-5 bg-slate-950 rounded-full border border-slate-800 mb-8 shadow-inner">
              <LuMessageSquare
                className="w-8 h-8 text-handy-orange"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-4 px-12 rounded-full text-white bg-handy-orange font-bold shadow-lg hover:bg-orange-600 transition-all"
            >
              GET IN TOUCH
            </Link>
          </div>
        </ScrollReveal>
      </section> */}

      <HandymanDivider />

      {/* === WHY CHOOSE US === */}
      <section className="bg-slate-950 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Why Choose <span className="text-handy-orange">Prime Build.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              We combine skilled labour, the right tools, and a strong work
              ethic to deliver reliable results on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <ScrollReveal key={index}>
                <div className="flex items-center gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors h-full">
                  <LuCircleCheck
                    className="text-handy-orange shrink-0"
                    size={24}
                  />
                  <p className="text-slate-200 font-bold tracking-wide">
                    {reason}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === REVIEWS SECTION === */}
      <section className="bg-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-handy-orange to-orange-400" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter">
                Trusted by local{" "}
                <span className="text-slate-400">clients.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {googleReviews.length > 0 ? (
                googleReviews.slice(0, 3).map((review, index) => (
                  <ScrollReveal key={index}>
                    <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between h-full shadow-inner">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={
                              review.authorAttribution?.photoUri ||
                              `https://ui-avatars.com/api/?name=${encodeURIComponent(review.authorAttribution?.displayName || "User")}&background=ea580c&color=ffffff&size=128`
                            }
                            alt={
                              review.authorAttribution?.displayName || "User"
                            }
                            className="w-12 h-12 rounded-full object-cover border border-slate-700"
                            loading="lazy"
                          />
                          <h4 className="font-bold text-base text-white tracking-wide">
                            {review.authorAttribution?.displayName}
                          </h4>
                        </div>
                        <p className="text-slate-400 font-light text-base leading-relaxed mb-6 italic">
                          &quot;{review.text?.text}&quot;
                        </p>
                      </div>
                      <span className="block text-slate-500 text-xs mt-auto border-t border-slate-800/60 pt-4 uppercase tracking-widest font-semibold">
                        {review.relativePublishTimeDescription}
                      </span>
                    </div>
                  </ScrollReveal>
                ))
              ) : (
                <p className="text-slate-500 col-span-full text-center font-light">
                  No reviews found.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === CAREERS SECTION === */}
      <section className="bg-slate-900 py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-16 shadow-2xl text-center flex flex-col items-center">
              <div className="flex items-center gap-2 mb-8 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuUsers
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  We Are Hiring
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
                Looking for hardworking people to join our team.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
                If you have experience, are willing to learn, and take pride in
                the work you do, we want to hear from you.
              </p>
              <Link
                href="mailto:info@primebuildconstruction.ie"
                className="inline-flex justify-center items-center bg-white text-slate-950 font-extrabold text-base px-10 py-4 rounded-full hover:bg-slate-200 transition-all shadow-lg"
              >
                Send your CV to info@primebuildconstruction.ie
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
