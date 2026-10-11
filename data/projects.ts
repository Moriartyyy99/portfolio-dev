export type Category = "UI/UX" | "Graphic Design" | "Game Dev";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tech: string[];
  link?: string;
  year: string;
  client?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Aplikasi Fintech Mobile",
    category: "UI/UX",
    description:
      "Redesign aplikasi keuangan dengan fokus pada kemudahan navigasi dan aksesibilitas.",
    longDescription:
      "Proyek redesign aplikasi fintech ini bertujuan untuk menyederhanakan alur transaksi yang sebelumnya rumit. Saya melakukan user research, membuat wireframe, dan mengembangkan design system baru. Hasilnya, waktu penyelesaian transaksi berkurang 40% dan tingkat kepuasan pengguna naik signifikan berdasarkan usability testing.",
    image: "/images/project-1.png",
    gallery: [
      "/images/project-1.png",
      "/images/project-1.png",
      "/images/project-1.png",
    ],
    tech: ["Figma", "User Research", "Prototyping"],
    link: "#",
    year: "2025",
    client: "PT Fintech Nusantara",
    role: "UI/UX Designer",
  },
  {
    id: "2",
    title: "Brand Identity Coffee Shop",
    category: "Graphic Design",
    description:
      "Logo, packaging, dan materi promosi untuk coffee shop lokal.",
    longDescription:
      "Membangun identitas visual lengkap untuk coffee shop lokal — mulai dari logo, palet warna, tipografi, hingga aplikasi pada kemasan dan materi promosi. Pendekatan yang diambil adalah modern-minimalis dengan sentuhan lokal, mencerminkan karakter brand yang hangat dan bersahabat.",
    image: "/images/project-2.png",
    gallery: [
      "/images/project-2.png",
      "/images/project-2.png",
      "/images/project-2.png",
    ],
    tech: ["Illustrator", "Photoshop", "Branding"],
    link: "#",
    year: "2024",
    client: "Kopi Senja",
    role: "Graphic Designer",
  },
  {
    id: "3",
    title: "2D Platformer Game",
    category: "Game Dev",
    description:
      "Game platformer 2D dengan mekanik wall-jump dan level design bertingkat.",
    longDescription:
      "Game platformer 2D ini dikembangkan menggunakan Unity dan C#. Fokus utama ada pada feel pergerakan karakter yang responsif, mekanik wall-jump yang memuaskan, serta level design bertingkat yang mengajarkan pemain secara bertahap. Proyek ini juga menjadi eksplorasi saya dalam pixel art dan sound design.",
    image: "/images/project-3.png",
    gallery: [
      "/images/project-3.png",
      "/images/project-3.png",
      "/images/project-3.png",
    ],
    tech: ["Unity", "C#", "Aseprite"],
    link: "#",
    year: "2024",
    client: "Personal Project",
    role: "Game Developer",
  },
  {
    id: "4",
    title: "Dashboard Analytics",
    category: "UI/UX",
    description: "Dashboard data visualization untuk tim marketing.",
    longDescription:
      "Dashboard ini dirancang untuk membantu tim marketing memantau performa campaign secara real-time. Tantangan utamanya adalah menyajikan data kompleks menjadi visual yang mudah dicerna. Saya membuat design system modular sehingga komponen bisa digunakan ulang di berbagai halaman.",
    image: "/images/project-4.png",
    gallery: [
      "/images/project-4.png",
      "/images/project-4.png",
      "/images/project-4.png",
    ],
    tech: ["Figma", "Design System"],
    link: "#",
    year: "2025",
    client: "Startup XYZ",
    role: "Product Designer",
  },
  {
    id: "5",
    title: "Poster Series Event Musik",
    category: "Graphic Design",
    description: "Seri poster untuk festival musik indie lokal.",
    longDescription:
      "Seri poster untuk festival musik indie — 5 poster dengan tema berbeda namun tetap satu bahasa visual. Eksplorasi tipografi eksperimental, warna bold, dan komposisi dinamis yang merepresentasikan energi panggung.",
    image: "/images/project-5.png",
    gallery: [
      "/images/project-5.png",
      "/images/project-5.png",
      "/images/project-5.png",
    ],
    tech: ["Photoshop", "Typography"],
    link: "#",
    year: "2024",
    client: "Indie Fest",
    role: "Graphic Designer",
  },
  {
    id: "6",
    title: "Puzzle Game Mobile",
    category: "Game Dev",
    description: "Game puzzle santai dengan 50+ level dan sistem bintang.",
    longDescription:
      "Game puzzle mobile dengan 50+ level yang bertingkat kesulitannya. Menggunakan Firebase untuk leaderboard online dan sistem bintang sebagai reward. Difokuskan untuk sesi bermain singkat namun memuaskan.",
    image: "/images/project-6.png",
    gallery: [
      "/images/project-6.png",
      "/images/project-6.png",
      "/images/project-6.png",
    ],
    tech: ["Unity", "C#", "Firebase"],
    link: "#",
    year: "2023",
    client: "Personal Project",
    role: "Game Developer",
  },
];