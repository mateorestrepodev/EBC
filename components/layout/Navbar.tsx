"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Language } from "@/lib/i18n/dictionaries";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, _hasHydrated } = useLanguageStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = () => {
    const nextLang: Record<Language, Language> = {
      en: "es",
      es: "fr",
      fr: "en",
    };
    setLanguage(nextLang[language]);
  };

  const navLinks = [
    {
      href: "/services/structural",
      label: _hasHydrated ? t.nav[0] : "Structural",
    },
    {
      href: "/services/exterior",
      label: _hasHydrated ? t.nav[1] : "Exterior",
    },
    {
      href: "/services/interior",
      label: _hasHydrated ? t.nav[2] : "Interior",
    },
  ];

  return (
    <motion.header
      // Animación de entrada: Cae desde arriba después de que el Preloader desaparece
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
      // Z-40 para que siempre quede por debajo del Preloader
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isScrolled
          ? "bg-[#111111]/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold tracking-widest text-[#FFFFFF] leading-none uppercase">
              EBC
              <span className="text-[#A88258] transition-colors duration-500">
                .
              </span>
            </span>
          </Link>

          {/* ── Nav Desktop ── */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative py-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#FFFFFF] hover:text-[#A88258] transition-colors duration-500 group"
                >
                  {label}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[1.5px] bg-[#A88258]
                      transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Acciones Desktop ── */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={handleLanguageChange}
              className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest text-[#FFFFFF] hover:text-[#A88258] transition-colors duration-500 select-none"
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
              {_hasHydrated ? language : "EN"}
            </button>

            <div className="h-5 w-px bg-white/20" />

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#A88258] text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[0.15em]  hover:bg-[#FFFFFF] hover:text-[#111111] transition-colors duration-500 shadow-md"
            >
              {_hasHydrated ? t.hero.cta : "Request a Quote"}
            </Link>
          </div>

          {/* ── Botón Menú Móvil ── */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#FFFFFF] hover:text-[#A88258] transition-colors duration-500"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-7 h-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Menú Móvil (Full Screen para Lujo) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-[#111111] border-t border-white/10"
          >
            <div className="flex flex-col h-full px-8 py-12">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block text-2xl font-light uppercase tracking-widest
                        transition-colors duration-300
                        ${
                          pathname === href
                            ? "text-[#A88258]"
                            : "text-[#FFFFFF] hover:text-[#A88258]"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer móvil */}
              <div className="mt-auto pb-32 flex flex-col gap-8">
                <button
                  onClick={handleLanguageChange}
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] hover:text-[#A88258] transition-colors duration-300"
                >
                  <Globe className="w-5 h-5" />
                  {_hasHydrated ? language : "EN"}
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#A88258] text-[#FFFFFF] text-[13px] font-bold uppercase tracking-[0.2em] "
                >
                  {_hasHydrated ? t.hero.cta : "Request a Quote"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
