import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative border border-neutral-200/80 rounded-2xl overflow-hidden bg-white card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 block h-full flex flex-col"
    >
      {/* Container Gambar - Tanpa aspect-video, biarkan tinggi natural */}
      <div className="relative w-full h-[220px] overflow-hidden bg-neutral-100 border-b border-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          // object-cover agar memenuhi kotak, object-top agar fokus ke atas
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay gradient saat hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Konten Teks */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded">
            {project.category}
          </span>
          <span className="text-xs text-neutral-400">{project.year}</span>
        </div>
        <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-600 transition">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 mb-3 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
