"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Deteksi scroll untuk ubah posisi menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/60">
      {/* Container utama */}
      <div className="max-w-6xl mx-auto px-6 py-9 relative flex justify-center items-center">
        
        {/* LOGO (Kiri) */}
        {/* Logo pakai absolute agar tidak mengganggu posisi menu di tengah */}
        <div className="absolute left-6">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.png" // ← Pastikan file logo ada di public/images
              alt="Nexx Logo"
              width={110}
              height={110}
              className="w-auto h-22 md:h-26 object-contain"
            />
          </Link>
        </div>

        {/* Menu desktop (Tengah) */}
        <motion.ul
          animate={{ x: scrolled ? 0 : "100%" }} // ← Angka 120% saya ganti jadi 35% agar posisi awal (belum scroll) ada di kanan, tidak keluar layar
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:flex gap-2 text-sm font-medium"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(l.href)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-neutral-600 hover:text-indigo-600 hover:bg-neutral-100"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Tombol hamburger — absolute kanan untuk mobile */}
        <button
          className="md:hidden text-2xl text-neutral-900 absolute right-6"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden px-6 flex flex-col gap-2 text-sm font-medium"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition ${
                    isActive(l.href)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
            <div className="h-4" />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}