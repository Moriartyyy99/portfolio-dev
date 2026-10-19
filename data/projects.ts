export type Category = "UI/UX" | "Graphic Design" | "Game Dev" | "Web Dev";

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
    title: "Aplikasi Jasa Laundry Shoes Reborn",
    category: "UI/UX",
    description:
      "Merancang desain UI/UX aplikasi laundry sepatu dengan memperhatikan kemudahan navigasi, dan tampilan antarmuka yang menarik untuk mendukung proses pemesanan layanan laundry.",
    longDescription:
      "Proyek redesign aplikasi fintech ini bertujuan untuk menyederhanakan alur transaksi yang sebelumnya rumit. Saya melakukan user research, membuat wireframe, dan mengembangkan design system baru. Hasilnya, waktu penyelesaian transaksi berkurang 40% dan tingkat kepuasan pengguna naik signifikan berdasarkan usability testing.",
    image: "/images/project-1.png",
    gallery: [
      "/images/laundry-owner-1.png",
      "/images/laundry-owner-2.png",
      "/images/laundry-owner-3.png",
      "/images/laundry-owner-4.png",
      "/images/laundry-owner-5.png",
      "/images/laundry-owner-6.png",
      "/images/laundry-owner-7.png",
      "/images/laundry-owner-8.png",
    ],
    tech: ["Figma"],
    link: "#",
    year: "2024",
    client: "Shoes Reborn",
    role: "UI/UX Designer",
  },
  {
    id: "2",
    title: "Devan Cell Web App",
    category: "UI/UX",
    description:
      "Merancang desain UI/UX aplikasi berbasis web untuk pembelian pulsa, kuota internet, serta berbagai produk perangkat keras dengan fokus pada kemudahan penggunaan.",
    longDescription:
      "Membangun identitas visual lengkap untuk coffee shop lokal — mulai dari logo, palet warna, tipografi, hingga aplikasi pada kemasan dan materi promosi. Pendekatan yang diambil adalah modern-minimalis dengan sentuhan lokal, mencerminkan karakter brand yang hangat dan bersahabat.",
    image: "/images/project-2.png",
    gallery: [
      "/images/dcell-1.png",
      "/images/dcell-2.png",
      "/images/dcell-3.png",
      "/images/dcell-4.png",
      "/images/dcell-5.png",
      "/images/dcell-6.png",
    ],
    tech: ["Figma"],
    link: "#",
    year: "2024",
    client: "Devan Cell",
    role: "UI/UX Designer",
  },
  {
    id: "3",
    title: "Kedai Kita Logo",
    category: "Graphic Design",
    description: "Perancangan logo Kedai Kita",
    longDescription:
      "Game puzzle mobile dengan 50+ level yang bertingkat kesulitannya. Menggunakan Firebase untuk leaderboard online dan sistem bintang sebagai reward. Difokuskan untuk sesi bermain singkat namun memuaskan.",
    image: "/images/project-6.png",
    gallery: [
      "/images/kk-1.png",
      "/images/kk-2.png",
      "/images/kk-3.png",
      "/images/kk-4.png",
      "/images/kk-5.png",
    ],
    tech: ["Figma"],
    link: "#",
    year: "2024",
    client: "Personal Project",
    role: "Graphic Designer",
  },
  {
    id: "4",
    title: "Sistem Penjualan Aplikasi Premium Lals Store",
    category: "Web Dev",
    description:
      "Mengembangkan aplikasi web toko online menggunakan Laravel dengan fitur pengelolaan produk dan integrasi pembayaran Midtrans dalam mode sandbox, serta merancang antarmuka yang responsif dan menarik.",
    longDescription:
      "Game platformer 2D ini dikembangkan menggunakan Unity dan C#. Fokus utama ada pada feel pergerakan karakter yang responsif, mekanik wall-jump yang memuaskan, serta level design bertingkat yang mengajarkan pemain secara bertahap. Proyek ini juga menjadi eksplorasi saya dalam pixel art dan sound design.",
    image: "/images/project-3.png",
    gallery: [
      "/images/lals-1.png",
      "/images/lals-2.png",
      "/images/lals-3.png",
      "/images/lals-4.png",
      "/images/lals-5.png",
    ],
    tech: ["Laravel", "PHP", "HTML & CSS", "JavaScript", "Midtrans Sandbox"],
    link: "#",
    year: "2025",
    client: "Lals Store",
    role: "Web Developer",
  },
  {
    id: "5",
    title: "Aplikasi Penomoran Surat Digiletter",
    category: "Web Dev",
    description:
      "Mengembangkan aplikasi web pengelolaan surat masuk dan keluar menggunakan React.js, integrasi API, serta fitur ekspor data ke Excel dan PDF.",
    longDescription:
      "Dashboard ini dirancang untuk membantu tim marketing memantau performa campaign secara real-time. Tantangan utamanya adalah menyajikan data kompleks menjadi visual yang mudah dicerna. Saya membuat design system modular sehingga komponen bisa digunakan ulang di berbagai halaman.",
    image: "/images/project-4.png",
    gallery: [
      "/images/digi-1.png",
      "/images/digi-2.png",
      "/images/digi-3.png",
      "/images/digi-4.png",
    ],
    tech: ["HTML & CSS", "React.js", "JavaScript", "Node.js", "REST API"],
    link: "#",
    year: "2025",
    client: "PT. Cybers Blitz Nusantara",
    role: "Web Developer Intern",
  },
  {
    id: "6",
    title: "Pembelajaran Budaya Indramayu Pada Game Roblox",
    category: "Game Dev",
    description:
      "Mengembangkan game edukasi berbasis Roblox untuk memperkenalkan budaya Indramayu melalui lingkungan virtual interaktif serta menganalisis pengalaman pengguna menggunakan metode UEQ.",
    longDescription:
      "Seri poster untuk festival musik indie — 5 poster dengan tema berbeda namun tetap satu bahasa visual. Eksplorasi tipografi eksperimental, warna bold, dan komposisi dinamis yang merepresentasikan energi panggung.",
    image: "/images/project-5.png",
    gallery: [
      "/images/budaya-1.png",
      "/images/budaya-2.png",
      "/images/budaya-3.png",
      "/images/budaya-4.png",
      "/images/budaya-5.png",
      "/images/budaya-6.png",
    ],
    tech: ["Roblox Studio", "Lua", "Blender", "Figma", "UEQ"],
    link: "#",
    year: "2026",
    client: "Skripsi",
    role: "Roblox Developer",
  },
  {
    id: "7",
    title: "Graphic Design Canva",
    category: "Graphic Design",
    description: "Kumpulan design poster kali terakhir yang pernah dibuat.",
    longDescription:
      "Game puzzle mobile dengan 50+ level yang bertingkat kesulitannya. Menggunakan Firebase untuk leaderboard online dan sistem bintang sebagai reward. Difokuskan untuk sesi bermain singkat namun memuaskan.",
    image: "/images/project-canva.png",
    gallery: [
      "/images/canva-1.png",
      "/images/canva-2.png",
      "/images/canva-3.png",
      "/images/canva-4.png",
      "/images/canva-5.png",
      "/images/canva-6.png",
      "/images/canva-7.png",
      "/images/canva-8.png",
    ],
    tech: ["Figma"],
    link: "#",
    year: "2022 - 2026",
    client: "Personal Project",
    role: "Graphic Designer",
  },
];
