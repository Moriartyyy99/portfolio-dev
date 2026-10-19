import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function About() {
  // Data Skill diurutkan berdasarkan kategori (Web, Tools, Design, Game, Office)
  const skills = [
    // 1. Web & Programming
    {
      name: "HTML & CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },

    // 2. Development Tools
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    // Laragon & phpMyAdmin diambil dari Simple Icons
    {
      name: "Laragon",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/laragon.svg",
    },
    {
      name: "phpMyAdmin",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/phpmyadmin.svg",
    },

    // 3. Design & Multimedia
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/canva.svg",
    },

    // 4. Game Development
    {
      name: "Roblox Studio",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/roblox.svg",
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-15">
      <Reveal>
        <SectionTitle
          eyebrow="Tentang Saya"
          title="Designer yang juga ngoding."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
          Saya merupakan lulusan D4 Rekayasa Perangkat Lunak dari Politeknik
          Negeri Indramayu yang memiliki minat di bidang Web Development, UI/UX
          Design, Graphic Design, dan Game Development. Saya memiliki pengalaman
          mengembangkan aplikasi web menggunakan Laravel dan React.js, merancang
          antarmuka aplikasi, membuat logo dan poster menggunakan Canva, serta
          mengembangkan game edukasi berbasis Roblox Studio dengan dukungan aset
          3D dari Blender. Saya senang mempelajari teknologi baru, mengembangkan
          kreativitas, dan meningkatkan keterampilan untuk menghasilkan karya
          digital yang menarik, fungsional, dan bermanfaat.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="text-xl font-semibold mt-10 mb-6">Skill & Tools</h3>
      </Reveal>

      {/* Grid untuk Skill dengan Logo */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.05}>
            <div className="flex items-center gap-3 border border-neutral-200 rounded-xl p-3 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="relative w-7 h-7 flex-shrink-0">
  <Image
    src={skill.icon}
    alt={skill.name}
    fill
    // TRICK: Kita filter warnanya secara manual lewat CSS
    style={{
      filter: 
        skill.name === "Laragon" 
          ? "invert(39%) sepia(96%) saturate(2318%) hue-rotate(194deg) brightness(96%) contrast(101%)" // Memaksa jadi warna Biru
          : skill.name === "Canva"
          ? "invert(65%) sepia(83%) saturate(2073%) hue-rotate(151deg) brightness(96%) contrast(101%)" // Memaksa jadi warna Cyan/Biru Muda
          : "none" // Ikon lain biarkan normal
    }}
    className="object-contain"
  />
</div>

              <span className="font-medium text-sm text-neutral-700">
                {skill.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <h3 className="text-xl font-semibold mt-12 mb-4">Pengalaman Kerja</h3>
      </Reveal>

      <ul className="space-y-4">
        {[
          { title: "Pramusaji — Kedai Kita", period: "2024 - 2025" },
          { title: "Web Developer Intern — Cybers Blitz Nusantara", period: "2025" },
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
          href="/CV Fajri Nugroho.pdf"
          download="CV Fajri Nugroho.pdf"
          className="inline-block mt-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 font-medium"
        >
          Download CV (PDF)
        </a>
      </Reveal>
    </div>
  );
}
