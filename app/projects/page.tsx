import Link from "next/link";
import { LuMapPin, LuCheck, LuCamera, LuFolderOpen } from "react-icons/lu";
import HandymanDivider from "@/components/ui/HandymanDivider";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Data remains on the server
const projectsData = [
  {
    id: "rathmines-studio",
    title: "Studio from start to finish",
    location: "Rathmines, Ireland",
    description:
      "We delivered a complete, start-to-finish construction of a new small studio, managing every aspect of the project from the ground up. Navigate through the photos to see the completed project.",
    services: [
      "Site & Structural Work: Complete groundwork and site preparation.",
      "Utilities & Systems: Full electrical and plumbing integration.",
      "Custom Carpentry: Design and installation of a seating area and table tailored to the studio's layout, maximizing the available space.",
      "Interior Finishes: Premium floor and shower tiling, alongside immaculate painting throughout the unit.",
      "Final Fit-Out: Seamless installation of appliances, delivering a move-in-ready space.",
    ],
    images: [
      "/assets/projects/studio/studio-1.jpg",
      "/assets/projects/studio/studio-2.jpg",
      "/assets/projects/studio/studio-3.jpg",
      "/assets/projects/studio/studio-4.jpg",
      "/assets/projects/studio/studio-5.jpg",
      "/assets/projects/studio/studio-6.jpg",
      "/assets/projects/studio/studio-8.jpg",
      "/assets/projects/studio/studio-9.jpg",
      "/assets/projects/studio/studio-10.jpg",
      "/assets/projects/studio/studio-11.jpg",
      "/assets/projects/studio/studio-12.jpg",
      "/assets/projects/studio/studio-23.jpg",
      "/assets/projects/studio/studio-24.jpg",
      "/assets/projects/studio/studio-25.jpg",
      "/assets/projects/studio/studio-34.jpg",
      "/assets/projects/studio/studio-41.jpg",
      "/assets/projects/studio/studio-37.jpg",
      "/assets/projects/studio/studio-39.jpg",
      "/assets/projects/studio/studio-38.jpg",
      "/assets/projects/studio/studio-46.jpg",
      "/assets/projects/studio/studio-40.jpg",
      "/assets/projects/studio/studio-42.jpg",
      "/assets/projects/studio/studio-43.jpg",
      "/assets/projects/studio/studio-44.jpg",
      "/assets/projects/studio/studio-47.jpg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative selection:bg-handy-orange selection:text-white overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] py-32 flex flex-col justify-center items-center text-white overflow-hidden px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 -z-0" />

          {/* Wrapped Hero text in ScrollReveal */}
          <ScrollReveal>
            <div className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6 mt-12">
              <div className="flex items-center justify-center gap-2 mb-2 text-handy-orange font-bold tracking-widest text-xs uppercase bg-orange-950/30 px-4 py-2 rounded-full border border-orange-900/50 w-fit mx-auto">
                <LuFolderOpen size={18} />
                <span>Our Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight drop-shadow-2xl">
                Featured <span className="text-handy-orange">Work.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                Explore a selection of our recent transformations. From delicate
                interior restorations to robust exterior weatherproofing, the
                proof is in the details.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* PROJECTS SHOWCASE */}
        <section className="py-12 md:py-24 bg-slate-950">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12 flex flex-col gap-32">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                className={`flex flex-col gap-12 lg:gap-16 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Details Side - Wrapped in ScrollReveal */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <ScrollReveal>
                    <div className="flex items-center gap-2 text-handy-orange font-bold uppercase tracking-wider text-sm mb-4">
                      <LuMapPin size={18} aria-hidden="true" />
                      <span>{project.location}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                      {project.title}
                    </h2>

                    <div className="w-16 h-1 bg-gradient-to-r from-handy-orange to-amber-500 mb-8 rounded-full" />

                    <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
                      {project.description}
                    </p>

                    <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                      <h3 className="font-bold text-slate-300 mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">
                        Services Rendered:
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {project.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className="mt-1 p-1 bg-slate-950 rounded-md border border-slate-800 transition-colors">
                              <LuCheck className="w-4 h-4 text-handy-orange" />
                            </div>
                            <span className="text-slate-400 font-medium leading-relaxed transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Client Component Gallery */}
                <ProjectGallery images={project.images} title={project.title} />
              </div>
            ))}
          </div>
        </section>

        <HandymanDivider />

        {/* BOTTOM CTA */}
        <section className="py-24 px-6 bg-slate-950 border-t border-slate-900">
          <div className="max-w-5xl mx-auto">
            {/* Wrapped CTA box in ScrollReveal */}
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-8 py-16 shadow-2xl sm:px-16 md:py-24 text-center flex flex-col items-center">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-handy-orange opacity-10 blur-[80px]" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600 opacity-10 blur-[80px]" />

                <div className="flex items-center justify-center gap-2 mb-6 text-handy-orange font-bold tracking-widest text-xs uppercase bg-slate-950/80 px-5 py-2.5 rounded-full border border-slate-700 shadow-inner z-10">
                  <LuCamera size={18} aria-hidden="true" />
                  <span>Like what you see?</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
                  Let&apos;s build your ideal space.
                </h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed relative z-10 font-light">
                  Whether you need a complete exterior overhaul or precise
                  interior finishing, our team is ready to bring your project to
                  life.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                  <Link
                    href="/contact"
                    className="bg-handy-orange text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  );
}
