"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

interface PortfolioItem {
  id: number | string;
  title: string;
  category: string;
  img: string;
}

export default function RecentProjectsGallery({
  portfolio,
}: {
  portfolio: PortfolioItem[];
}) {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      {/* Mobile Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="relative h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
          >
            <Image
              src={item.img}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={`${item.title} project`}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-handy-orange font-bold text-xs tracking-wider uppercase block mb-1">
                {item.category}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Accordion */}
      <div className="hidden md:flex h-[500px] w-full gap-4">
        {portfolio.map((item, index) => {
          const isActive = activeProject === index;
          return (
            <button
              key={item.id}
              onMouseEnter={() => setActiveProject(index)}
              onClick={() => setActiveProject(index)}
              onFocus={() => setActiveProject(index)}
              aria-expanded={isActive}
              className={`relative rounded-3xl overflow-hidden cursor-pointer text-left transition-all duration-500 ease-out border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange ${
                isActive
                  ? "flex-[5] shadow-2xl ring-1 ring-slate-700/50"
                  : "flex-[1] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.img}
                fill
                sizes="40vw"
                alt={`${item.title} project`}
                className="object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full pointer-events-none">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 15,
                  }}
                  transition={{ duration: 0.3 }}
                  className="truncate"
                >
                  <span className="text-handy-orange font-bold text-xs tracking-wider uppercase mb-1.5 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white truncate">
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
