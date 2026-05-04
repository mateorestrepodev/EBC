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
      href: "/structural",
      label: _hasHydrated ? t.nav[0] : "Structural",
    },
    {
      href: "/exterior",
      label: _hasHydrated ? t.nav[1] : "Exterior",
    },
    {
      href: "/interior",
      label: _hasHydrated ? t.nav[2] : "Interior",
    },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-ebc-cream/90 backdrop-blur-md border-b border-black/8 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">
              {/* ── Logo ── */}
              <Link href="/" className="flex-shrink-0 group">
                <span className="text-[22px] font-bold tracking-tight text-ebc-bronze leading-none">
                  EBC
                  <span className="text-ebc-dark group-hover:text-ebc-bronze transition-colors duration-300">
                    .
                  </span>
                </span>
              </Link>

              {/* ── Nav Desktop ── */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="relative py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-ebc-dark hover:text-ebc-bronze transition-colors duration-300 group"
                    >
                      {label}
                      <span
                        className={`
                          absolute bottom-0 left-0 h-[1.5px] bg-ebc-bronze
                          transition-all duration-300 ease-out
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* ── Acciones Desktop ── */}
              <div className="hidden md:flex items-center gap-5">
                <button
                  onClick={handleLanguageChange}
                  className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-widest text-ebc-dark hover:text-ebc-bronze transition-colors duration-300 select-none"
                  title="Change Language"
                >
                  <Globe className="w-[15px] h-[15px]" />
                  {_hasHydrated ? language : "EN"}
                </button>

                <div className="h-5 w-px bg-gray-300" />

                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-ebc-bronze text-white text-[12px] font-semibold uppercase tracking-widest rounded-sm hover:bg-ebc-dark transition-colors duration-300"
                >
                  {_hasHydrated ? t.hero.cta : "Request a Quote"}
                </Link>
              </div>

              {/* ── Botón Menú Móvil ── */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden flex items-center justify-center w-9 h-9 text-ebc-dark hover:text-ebc-bronze transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* ── Menú Móvil ── */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-ebc-cream border-t border-black/8"
              >
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        px-2 py-3 text-[13px] font-semibold uppercase tracking-[0.12em]
                        border-b border-gray-100 last:border-0
                        transition-colors duration-200
                        ${
                          pathname === href
                            ? "text-ebc-bronze"
                            : "text-ebc-dark hover:text-ebc-bronze"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  ))}

                  {/* Footer móvil */}
                  <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
                    <button
                      onClick={handleLanguageChange}
                      className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-ebc-dark hover:text-ebc-bronze transition-colors duration-300 select-none"
                    >
                      <Globe className="w-4 h-4" />
                      {_hasHydrated ? language : "EN"}
                    </button>

                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center px-5 py-2.5 bg-ebc-bronze text-white text-[12px] font-semibold uppercase tracking-widest rounded-sm hover:bg-ebc-dark transition-colors duration-300"
                    >
                      {_hasHydrated ? t.hero.cta : "Quote"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
