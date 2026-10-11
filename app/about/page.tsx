import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Reveal>
        <SectionTitle
          eyebrow="Tentang Saya"
          title="Designer yang juga ngoding."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
          Saya Fajri Nugroho, seorang web developer dengan latar belakang
          desain UI/UX dan graphic design, serta ketertarikan mendalam pada
          game development. Saya suka mengubah ide kompleks menjadi antarmuka
          yang simpel dan menyenangkan.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="text-xl font-semibold mt-10 mb-4">Skill</h3>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          "Figma",
          "Adobe Illustrator",
          "Photoshop",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Unity",
          "C#",
          "TypeScript",
        ].map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <div className="border border-neutral-200 rounded-lg px-3 py-2 text-sm bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              {s}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <h3 className="text-xl font-semibold mt-10 mb-4">Pengalaman</h3>
      </Reveal>

      <ul className="space-y-4">
        {[
          { title: "Freelance UI/UX Designer", period: "2023 — Sekarang" },
          { title: "Graphic Designer — Studio X", period: "2022 — 2023" },
        ].map((exp, i) => (
          <Reveal key={exp.title} delay={0.25 + i * 0.1}>
            <li className="border-l-2 border-indigo-600 pl-4">
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-neutral-500">{exp.period}</p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.4}>
        <a
          href="/cv.pdf"
          download="CV Fajri Nugroho.pdf"
          className="inline-block mt-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 font-medium"
        >
          Download CV (PDF)
        </a>
      </Reveal>
    </div>
  );
}