"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga o esperamos a que la página esté lista
    // En un caso real, podrías atarlo a eventos de carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // El preloader durará 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]" // Fondo oscuro, puedes cambiar el color
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }} // Animación de salida (fade out)
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest uppercase">
              EBC<span className="text-[#A88258]">.</span>{" "}
              {/* Color bronce que mencionaste en EBC */}
            </h1>
            <motion.div
              className="mt-4 h-[2px] bg-[#A88258]"
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
