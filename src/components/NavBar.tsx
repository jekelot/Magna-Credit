"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      {/* Secondary Nav */}
      <div className="bg-blue-950 border-b border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 flex items-center justify-end gap-6 h-10 text-sm">
          <Link href="/careers" className="text-blue-200 hover:text-white transition-colors">Careers</Link>
          <Link href="/about-us" className="text-blue-200 hover:text-white transition-colors font-medium">About Us</Link>
          <Link href="/faq" className="text-blue-200 hover:text-white transition-colors">FAQ</Link>
          <Link href="/news" className="text-blue-200 hover:text-white transition-colors">News</Link>
          <a href="mailto:info@magnacredit.co.ug" className="text-magna-yellow font-semibold hover:text-white transition-colors">info@magnacredit.co.ug</a>
          <a href="https://wa.me/256755868748" className="text-white flex items-center gap-1 group">
            <span className="text-blue-200 group-hover:text-white transition-colors">WhatsApp</span>{" "}
            <span className="font-semibold text-magna-green group-hover:text-green-400 transition-colors">+256 755 868 748</span>
          </a>
        </div>
      </div>

      {/* Primary Nav */}
      <div className="bg-magna-blue relative z-50">
        <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16 lg:h-[72px]' : 'h-20 lg:h-[88px]'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative bg-white rounded-xl p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.jpeg" alt="Magna Credit Logo" width={48} height={48} className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-lg lg:text-xl tracking-tight">MAGNA CREDIT</span>
              <span className="text-[10px] lg:text-xs text-magna-green font-bold italic tracking-wide">&quot;Making it possible&quot;</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {[
              { name: "Personal Loans", path: "/personal-loans" },
              { name: "Logbook Loans", path: "/logbook-loans" },
              { name: "About Us", path: "/about-us" },
              { name: "Contact Us", path: "/contacts" },
            ].map((link) => (
              <Link key={link.name} href={link.path} className="relative px-4 py-2 text-white font-medium group">
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/personal-loans"
              className="hidden sm:inline-flex bg-magna-yellow hover:bg-yellow-400 text-magna-blue px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-magna-yellow/20 transition-all hover:scale-105"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-magna-blue border-t border-white/10 overflow-hidden absolute w-full shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {[
                { name: "Personal Loans", path: "/personal-loans" },
                { name: "Logbook Loans", path: "/logbook-loans" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contacts" },
                { name: "FAQ", path: "/faq" },
                { name: "Careers", path: "/careers" },
                { name: "News", path: "/news" },
              ].map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setMobileOpen(false)} 
                    className="block px-4 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.hr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="my-4 border-white/10"/>
              
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-col gap-3 px-4">
                <a href="https://wa.me/256755868748" className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-magna-green" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                  <span>WhatsApp: <span className="font-bold">+256 755 868 748</span></span>
                </a>
                <a href="mailto:info@magnacredit.co.ug" className="text-magna-yellow font-semibold">info@magnacredit.co.ug</a>
                <Link 
                  href="/personal-loans" 
                  onClick={() => setMobileOpen(false)} 
                  className="mt-4 bg-magna-yellow hover:bg-yellow-400 text-magna-blue py-3.5 rounded-full font-bold text-center transition-colors shadow-lg shadow-magna-yellow/20 w-full"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
