"use client";
import { useState, useEffect } from "react";

export default function TypewriterText() {
  // Daftar teks yang mau ditampilkan
  const words = ["Web Developer", "UI/UX Designer", "Game Developer"];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      // Atur kecepatan ngetik dan hapus
      setTypingSpeed(isDeleting ? 50 : 100);

      // Jika sudah selesai ngetik 1 kata penuh
      if (!isDeleting && text === fullText) {
        // Jeda 1.5 detik sebelum mulai menghapus
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
      // Jika sudah selesai menghapus
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    // w-full memastikan kotak mengambil seluruh ruang yang tersedia
    <span className="relative inline-flex items-center text-gradient w-full">
      
      {/* 1. GHOST TEXT: Teks tak terlihat sebagai penahan lebar (kunci anti-goyang) */}
      <span className="invisible font-bold">
        Roblox Developer
      </span>

      {/* 2. TEKS ASLI & KURSOR: Di-overlay tepat di atas ghost text */}
      <span className="absolute inset-0 flex items-center font-bold">
        {text}
        {/* Kursor: Karena ada di dalam absolute, dia tidak akan menggeser layout luar */}
        <span className="ml-1 w-[3px] h-[1em] bg-indigo-600 animate-pulse" />
      </span>
      
    </span>
  );
}