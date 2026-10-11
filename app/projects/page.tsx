"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Category } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

const categories: ("Semua" | Category)[] = [
  "Semua",
  "UI/UX",
  "Graphic Design",
  "Game Dev",
];

export default function Projects() {
  const [active, setActive] = useState<"Semua" | Category>("Semua");
  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Portfolio" title="Semua Karya" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                active === c
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-lg shadow-neutral-900/20"
                  : "border-neutral-300 hover:bg-neutral-100 hover:-translate-y-0.5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}