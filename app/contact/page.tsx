import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Kontak" title="Mari bekerja sama." />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-neutral-600 mb-8">
          Punya proyek, tawaran kerja, atau sekadar ingin ngobrol? Kirim pesan
          lewat form di bawah atau hubungi langsung via email.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <form
          action="https://formspree.io/f/xxxxxxx"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              name="name"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 bg-white transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 bg-white transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 bg-white transition"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            Kirim Pesan
          </button>
        </form>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-12 pt-8 border-t border-neutral-200 text-sm text-neutral-600">
          <p>📧 fajri@email.com</p>
          <p className="mt-2">📍 Indonesia</p>
        </div>
      </Reveal>
    </div>
  );
}