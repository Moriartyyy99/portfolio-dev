"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [barDone, setBarDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // ← sessionStorage DIHAPUS, jadi loading selalu muncul
  }, []);

  useEffect(() => {
    if (!barDone) return;
    const t = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, [barDone]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Nexx
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              .dev
            </span>
          </div>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
          <p className="text-xs text-white/40 tracking-widest uppercase">
            Loading portfolio
          </p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              Nexx 
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                .dev
              </span>
            </motion.div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() => setBarDone(true)}
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs text-white/40 tracking-widest uppercase"
            >
              {barDone ? "Welcome" : "Loading portfolio"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}