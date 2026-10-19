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
      "Merancang desain UI/UX aplikasi layanan laundry sepatu dengan fokus pada kemudahan penggunaan dan kenyamanan pengguna. Proyek ini mencakup perancangan struktur halaman, alur pengguna (user flow), tata letak antarmuka, pemilihan warna, serta elemen visual untuk menciptakan pengalaman pemesanan layanan yang intuitif dan menarik.",
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
      "Merancang desain UI/UX aplikasi berbasis web untuk mendukung transaksi pembelian pulsa, paket data internet, serta berbagai produk perangkat keras. Perancangan berfokus pada penyusunan antarmuka yang informatif, navigasi yang mudah dipahami, dan alur transaksi yang praktis agar pengguna dapat menemukan produk serta melakukan pembelian dengan nyaman.",
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
    description: "Merancang logo Kedai Kita sebagai identitas visual usaha yang merepresentasikan karakter dan konsep bisnis melalui desain yang menarik, sederhana, dan mudah dikenali.",
    longDescription:
      "Membuat desain logo Kedai Kita sebagai bagian dari pengembangan identitas visual usaha. Proyek ini berfokus pada perancangan elemen visual yang sesuai dengan karakter dan konsep bisnis, termasuk pemilihan bentuk, warna, tipografi, serta komposisi logo agar terlihat menarik, mudah dikenali, dan dapat digunakan untuk mendukung kebutuhan branding serta media promosi usaha.",
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
      "Mengembangkan aplikasi web e-commerce menggunakan Laravel 11 dengan fitur katalog produk, pengelolaan keranjang belanja, proses checkout, dan integrasi pembayaran Midtrans dalam mode sandbox. Proyek ini berfokus pada implementasi fungsionalitas aplikasi serta pengembangan antarmuka dengan tampilan bernuansa pink dan ungu untuk memberikan pengalaman berbelanja yang menarik dan mudah digunakan.",
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
      "Berkontribusi dalam pengembangan aplikasi web pengelolaan surat masuk dan surat keluar selama menjalani magang di PT Cybers Blitz Nusantara. Pekerjaan mencakup pengembangan antarmuka menggunakan React.js, integrasi REST API, penyesuaian hak akses berdasarkan peran pengguna, serta implementasi fitur ekspor data ke format Excel dan PDF untuk mendukung pengelolaan administrasi surat secara lebih terstruktur dan efisien.",
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
      "Mengembangkan game edukasi berbasis Roblox yang bertujuan memperkenalkan budaya, tradisi, dan bangunan bersejarah Kabupaten Indramayu melalui lingkungan virtual yang interaktif. Proyek ini meliputi pembuatan lingkungan permainan dan aset 3D menggunakan Roblox Studio serta Blender, dilengkapi berbagai objek budaya yang dapat dieksplorasi oleh pemain. Selain pengembangan game, proyek tugas akhir ini juga mencakup analisis pengalaman pengguna menggunakan metode User Experience Questionnaire (UEQ) untuk mengevaluasi pengalaman pemain dalam menggunakan media pembelajaran tersebut.",
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
    description: "Membuat berbagai desain poster dan logo menggunakan Canva dengan memperhatikan komposisi visual, pemilihan warna, tipografi, serta kreativitas untuk menghasilkan desain yang menarik dan komunikatif.",
    longDescription:
      "Mengerjakan berbagai proyek desain grafis berupa poster dan logo menggunakan Canva untuk menyampaikan informasi serta membangun identitas visual. Proses desain meliputi pemilihan elemen grafis, pengaturan tata letak, kombinasi warna, dan tipografi agar menghasilkan karya yang menarik, mudah dipahami, dan sesuai dengan tujuan desain. Proyek ini juga menjadi sarana untuk mengembangkan kreativitas serta keterampilan dalam komunikasi visual dan desain grafis digital.",
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
