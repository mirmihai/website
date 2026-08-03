"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Update the interface to accept a rendered ReactNode
interface ServiceItem {
  title: string;
  desc: string;
  imageUrl: string;
  iconNode: ReactNode;
  animation: any;
}

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-700 transition-all shadow-xl h-full"
    >
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
        {service.imageUrl ? (
          <Image
            src={service.imageUrl}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt={`Prime Build ${service.title} services in Ireland`}
            className="object-cover object-center transition-transform duration-1000 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 font-light">
            Image Coming Soon
          </div>
        )}
        <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-slate-900 rounded-full border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
            <motion.div variants={service.animation}>
              {/* Simply render the pre-configured icon here */}
              {service.iconNode}
            </motion.div>
          </div>
          <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-slate-400 text-base leading-relaxed font-light flex-grow">
          {service.desc}
        </p>
      </div>
    </motion.article>
  );
}
