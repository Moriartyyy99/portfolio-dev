import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Reveal>
        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-indigo-600 transition inline-flex items-center gap-1 mb-4"
        >
          ← Kembali ke Projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded">
            {project.category}
          </span>
          <span className="text-xs text-neutral-400">{project.year}</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative w-full rounded-xl overflow-hidden bg-neutral-100 mb-10 card-shadow">
          <Image
            src={project.image}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 py-6 border-y border-neutral-200">
          <div>
            <p className="text-xs text-neutral-500 mb-1">Client</p>
            <p className="font-medium text-sm">{project.client || "—"}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Role</p>
            <p className="font-medium text-sm">{project.role || "—"}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Year</p>
            <p className="font-medium text-sm">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Tools</p>
            <p className="font-medium text-sm">{project.tech.join(", ")}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Tentang Proyek</h2>
          <p className="text-neutral-700 leading-relaxed">
            {project.longDescription}
          </p>
        </section>
      </Reveal>

      {/* Dokumentasi Aplikasi */}
<section className="mb-12">
  <h2 className="text-xl font-semibold mb-6">Dokumentasi Aplikasi</h2>

  <Reveal delay={0.3}>
    {/* Menggunakan CSS Columns agar rapat ke atas (Masonry) */}
    <div className="columns-1 md:columns-2 gap-4 space-y-4">
      {project.gallery.map((img, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden bg-neutral-100 card-shadow break-inside-avoid"
        >
          <Image
            src={img}
            alt={`Dokumentasi ${i + 1}`}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  </Reveal>
</section>

      {project.link && project.link !== "#" && (
        <Reveal delay={0.2}>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            Kunjungi Proyek →
          </a>
        </Reveal>
      )}
    </div>
  );
}