"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, _hasHydrated } = useLanguageStore();

  // Definimos las rutas estáticas para evitar que los enlaces se rompan al traducir las palabras
  const navPaths = ["/", "/services", "/about"];

  return (
    <footer className="relative overflow-hidden bg-[#0E0E0E] text-[#F5F5F0] pt-32 pb-12 px-6 md:px-12 lg:px-24">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute bottom-[-40px] right-[-20px] select-none">
        <span className="text-[10rem] md:text-[18rem] lg:text-[24rem] font-extralight leading-none tracking-[-0.08em] text-white/[0.03]">
          EBC
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <p className="text-[#A88258] text-[11px] uppercase tracking-[0.35em] mb-6">
              {_hasHydrated
                ? t.footer.slogan
                : "Refining the art of construction"}
            </p>

            <h2 className="text-[3.5rem]  leading-[1] font-extralight tracking-wider text-white">
              Etiquette
            </h2>

            <h2 className="text-[3.5rem]  leading-[1] font-extralight tracking-wider text-[#A88258]">
              Build Corp.
            </h2>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#A88258]/50 to-transparent mb-20" />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-16 lg:gap-12">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <p className="max-w-md text-white/60 text-sm leading-relaxed mb-10">
              {_hasHydrated
                ? t.footer.description
                : "Creating refined residential and commercial spaces through exceptional craftsmanship, thoughtful design, and uncompromising attention to detail."}
            </p>

            <a
              href="sms:+14167049004"
              className="group inline-flex items-center gap-5"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-white">
                {_hasHydrated ? t.footer.cta : "Start a Project"}
              </span>

              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#A88258] text-[#A88258] transition-all duration-500 group-hover:bg-[#A88258] group-hover:text-black">
                →
              </span>
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              {_hasHydrated ? t.footer.navTitle : "Navigation"}
            </span>

            <div className="flex flex-col gap-4">
              {(_hasHydrated
                ? t.footer.navLinks
                : ["Home", "Services", "About"]
              ).map((item, index) => (
                <Link
                  key={index}
                  href={navPaths[index]}
                  className="
                    relative
                    w-fit
                    text-sm
                    text-white/70
                    transition-all
                    duration-300
                    hover:text-white
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-px
                    after:w-0
                    after:bg-[#A88258]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              {_hasHydrated ? t.footer.inquiriesTitle : "Inquiries"}
            </span>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  {_hasHydrated ? t.footer.inquiries.sms : "Direct Text / SMS"}
                </p>

                <a
                  href="sms:+14167049004"
                  className="text-sm text-white/70 hover:text-[#A88258] transition-colors"
                >
                  +1 (416) 704-9004
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  {_hasHydrated ? t.footer.inquiries.email : "Email"}
                </p>

                <a
                  href="mailto:santiago.restrepo9521@gmail.com"
                  className="text-sm text-white/70 hover:text-[#A88258] transition-colors"
                >
                  santiago.restrepo9521@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  {_hasHydrated ? t.footer.inquiries.location : "Location"}
                </p>

                <span className="text-sm text-white/70">
                  Toronto, ON, Canada
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 mb-10 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            © {currentYear} Etiquette Build Corp.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-[#A88258] transition-colors"
            >
              {_hasHydrated ? t.footer.legal.privacy : "Privacy Policy"}
            </Link>

            <Link
              href="/terms"
              className="text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-[#A88258] transition-colors"
            >
              {_hasHydrated ? t.footer.legal.terms : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
