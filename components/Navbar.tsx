"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        <ul className="hidden md:flex gap-2 text-sm font-medium">
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
        </ul>
        <button
          className="md:hidden text-2xl text-neutral-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
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
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}