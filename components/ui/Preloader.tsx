"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoTextEBC } from "@/components/ui/LogoTextEBC";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Le damos 3.2 segundos para que el efecto "Blueprint to Gold" luzca completo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#111111]"
          initial={{ y: 0 }}
          exit={{
            y: "-100%", // Se desliza hacia arriba como un telón
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            {/* CONTENEDOR DEL LOGO CON EFECTOS */}
            <div className="relative overflow-hidden py-4 px-8 flex items-center justify-center">
              {/* MAGIA AQUÍ: Usamos el logo con la propiedad animated activada */}
              <LogoTextEBC
                animated={true}
                className="w-48 md:w-64 h-auto drop-shadow-[0_0_15px_rgba(168,130,88,0.2)]"
              />

              {/* Haz de luz (Shimmer) que pasa JUSTO cuando el logo termina de rellenarse de oro */}
              <motion.div
                className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-[#FFFFFF]/80 to-transparent skew-x-[-35deg] pointer-events-none"
                initial={{ x: "-200%" }}
                animate={{ x: "350%" }}
                transition={{
                  delay: 1.8, // Espera a que el dibujo termine (1.8s)
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Línea de carga animada */}
            <motion.div
              className="mt-6 h-[1.5px] bg-[#A88258]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.4,
                duration: 2.5, // Tarda casi todo el preloader en cargar
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
