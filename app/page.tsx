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
    iconNode: <LuHouse className="w-6 h-6 text-blue-400" aria-hidden="true" />,
    title: "Garden Rooms & Granny Flats",
    desc: "Expand your living space with our specialized builds, including custom garden rooms, studio apartments, and fully equipped granny flats tailored to Ireland properties.",
    imageUrl: "/assets/garden-room.jpeg",
    animation: {
      rest: { scale: 1 },
      hover: { scale: [1, 1.15, 0.95, 1.05, 1], transition: { duration: 0.5 } },
    },
  },
  {
    iconNode: (
      <LuDrill className="w-6 h-6 text-emerald-700" aria-hidden="true" />
    ),
    title: "Renovations",
    desc: "Transform your space with our comprehensive renovation solutions. Whether you're modernizing a single room or undertaking a full-scale home refurbishment, we provide expert craftsmanship tailored to your space and style.",
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
    iconNode: (
      <LuWrench className="w-6 h-6 text-stone-400" aria-hidden="true" />
    ),
    title: "Property Maintenance",
    desc: "Keep your property in top shape with our maintenance services, covering everything from small construction jobs to general repairs for Ireland homeowners and landlords.",
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
    title: "Small Constructions & Structural",
    desc: "From groundworks to final product. We handle reinforced concrete, block wall construction, and precision timber frame structures across Ireland.",
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
    title: "Interior Finishes",
    desc: "Complete interior transformations including plasterboard installation, joint taping and skimming, painting and decorating, tiling, laminate flooring, and door/window installations.",
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
      {/* === HERO SECTION === */}
      <section
        className="bg-slate-950 py-20 md:py-28"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 bg-slate-900 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                <LuMapPin
                  className="text-handy-orange"
                  size={16}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                  Laois Based, Serving All of Ireland
                </span>
              </div>

              <div className="relative p-24 sm:p-40 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 shadow-2xl inline-block isolate">
                <Image
                  src="/assets/company-logo-hi-vis-1.jpeg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                  alt="Prime Build Construction Ireland Background"
                  className="object-cover opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90 pointer-events-none" />
                <div className="relative z-10">
                  <h1
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white text-center"
                  >
                    Prime Build{" "}
                    <span className="text-handy-orange">Construction</span>
                  </h1>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                Reliable Ireland construction company specializing in property
                renovations. From complete home modernizations and flawless
                interior finishes to custom granny flats and small structural
                builds, we bring exact precision and enduring craftsmanship to
                every space we transform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === ABOUT US TEASER === */}
      <section
        className="bg-slate-900 py-20 md:py-28"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Side: Added sizing wrapper */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
                  <Image
                    src="/assets/about-us.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    alt="Ireland construction professionals on site"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>

            {/* Text Side: Added sizing wrapper */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <div className="w-full flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-6 bg-slate-950 px-5 py-2.5 rounded-full border border-slate-800 shadow-sm w-fit">
                    <LuShieldCheck
                      className="text-handy-orange"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">
                      Health & Safety Certified
                    </span>
                  </div>

                  <h2
                    id="about-heading"
                    className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight"
                  >
                    Your Trusted Ireland Builders.
                    <br />
                    <span className="text-slate-400">Start to Finish.</span>
                  </h2>

                  <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                    PrimeBuildConstruction is a growing Laois, Ireland based
                    company built on hard work, practical experience, and a
                    commitment to doing the right job. Our goal is to offer
                    clients a stress-free experience by managing multiple stages
                    of a project under one company across the greater Ireland
                    area.
                  </p>
                  <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed font-light">
                    We maintain core standards of high quality, consistency,
                    attention to detail, and on-time delivery. Our skilled and
                    expanding team brings multi-trade capability to every site.
                  </p>
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
                Recent{" "}
                <span className="text-slate-400">Projects In Ireland.</span>
              </h2>
            </div>
          </div>

          {/* Injected Client Component */}
          <RecentProjectsGallery portfolio={portfolio} />

          <div className="mt-12 flex justify-end w-full relative z-20">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white border border-slate-700 bg-slate-900/80 hover:bg-slate-800 transition-all font-bold shadow-lg group"
            >
              <span>SEE MORE RECENT PROJECTS</span>
              <LuArrowRight
                size={20}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      <HandymanDivider />

      {/* === SERVICES SECTION === */}
      <section id="services" className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Our Construction <span className="text-slate-400">Services.</span>
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

      {/* === WHY CHOOSE US === */}
      <section className="bg-slate-950 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Why Choose <span className="text-handy-orange">Prime Build.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              We combine skilled labour, the right tools, and a strong work
              ethic to deliver reliable results on every job in Ireland.
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
                href="mailto:careers@PrimeBuildConstruction.com"
                className="inline-flex justify-center items-center bg-white text-slate-950 font-extrabold text-base px-10 py-4 rounded-full hover:bg-slate-200 transition-all shadow-lg"
              >
                Send your CV to ourcompany@gmail.com
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CONTACT CTA SECTION === */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
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
      </section>
    </main>
  );
}
