"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // El preloader dura 2 segundos antes de empezar a desaparecer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          // Z-[999] garantiza que cubra absolutamente todo, incluido el Navbar
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#111111]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-[#FFFFFF] tracking-widest uppercase">
              EBC<span className="text-[#A88258]">.</span>
            </h1>
            <motion.div
              className="mt-4 h-[1.5px] bg-[#A88258]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
