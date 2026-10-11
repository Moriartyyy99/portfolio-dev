export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 mt-24 bg-white/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Fajri Nugroho. All rights reserved.</p>
        <div className="flex gap-2 mt-3 md:mt-0">
          <a
            href="https://github.com/Moriartyyy666"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 hover:text-indigo-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/fajrinugroho"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 hover:text-indigo-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nugrohofajri14@gmail.com"
            className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 hover:text-indigo-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}