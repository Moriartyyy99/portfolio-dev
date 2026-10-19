import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Tersedia untuk proyek freelance
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Fajri Nugroho.
                <br />
                <span>
                  <TypewriterText />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-neutral-600 max-w-2xl mb-8 leading-relaxed">
                Lulusan Rekayasa Perangkat Lunak yang memiliki minat di bidang web development, UI/UX design, desain grafis, dan game development. Saya senang mengeksplorasi teknologi serta menciptakan karya digital yang kreatif, fungsional, dan menarik.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 font-medium"
                >
                  Lihat Proyek
                </Link>
                <a
                  href="/CV Fajri Nugroho.pdf"
                  className="bg-white border border-neutral-200 px-6 py-3 rounded-lg hover:bg-neutral-50 hover:shadow-md transition-all duration-300 font-medium"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* FOTO PROFIL */}
          <Reveal
            delay={0.4}
            className="relative w-56 h-56 md:w-72 md:h-72 mx-auto md:mx-0"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-pink-500/20 blur-3xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 opacity-20" />
            <Image
              src="/images/profile.jpg"
              alt="Fajri Nugroho"
              fill
              priority
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover rounded-full border-4 border-white shadow-2xl relative"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <Reveal>
          <SectionTitle eyebrow="Portfolio" title="Proyek Terpilih" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {featured.map((p, i) => (
    <Reveal key={p.id} delay={i * 0.1}>
      <ProjectCard project={p} />
    </Reveal>
  ))}
</div>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/projects"
              className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              Lihat semua proyek →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
