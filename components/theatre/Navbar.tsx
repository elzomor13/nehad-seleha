'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

function TheatreLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" className="shrink-0">
        <line x1="4" y1="2" x2="4" y2="38" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="2" x2="7" y2="38" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="36" y1="2" x2="36" y2="38" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="2" x2="33" y2="38" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M4 14 Q20 6 36 14" stroke="#D4A017" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="36" x2="32" y2="36" stroke="#D4A017" strokeWidth="1.5" />
        <circle cx="20" cy="24" r="4" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.8" />
        <circle cx="20" cy="24" r="1.5" fill="#D4A017" opacity="0.9" />
      </svg>
      <div className="leading-tight">
        <div className="font-cairo font-black text-cream text-sm leading-none">
          مسرح د. نهاد صليحة
        </div>
        <div
          className="font-bebas tracking-widest text-gold uppercase mt-0.5"
          style={{ fontSize: 9 }}
        >
          NEHAD SELEIHA THEATRE
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(href);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { key: 'shows' as const, href: `/${locale}/shows` },
    { key: 'events' as const, href: `/${locale}/events` },
    { key: 'archive' as const, href: `/${locale}/archive` },
    { key: 'news' as const, href: `/${locale}/news` },
    { key: 'about' as const, href: `/${locale}/about` },
    { key: 'contact' as const, href: `/${locale}/contact` },
    { key: 'sponsorship' as const, href: `/${locale}/sponsorship` },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href={`/${locale}`}>
              <TheatreLogo />
            </a>

            {/* Desktop nav */}
            <div
              className={`hidden lg:flex items-center gap-5 ${
                isRtl ? 'flex-row-reverse' : ''
              }`}
            >
              {links.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className={`font-cairo text-sm transition-colors relative group ${
                    isActive(href) ? 'text-gold' : 'text-cream/70 hover:text-gold'
                  }`}
                >
                  {t(key)}
                  <span
                    className={`absolute -bottom-0.5 start-0 h-px bg-gold transition-all duration-300 ${
                      isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
              <a
                href={`/${locale}/shows`}
                className="clip-angled bg-gold text-navy-950 font-cairo font-bold text-sm px-5 py-2 hover:bg-gold-light transition-colors flex items-center ms-2"
                style={{ minHeight: 44 }}
              >
                {t('book')}
              </a>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LangToggle />
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <LangToggle />
              <motion.button
                onClick={() => setMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-cream/80 hover:text-gold transition-colors"
                style={{ minHeight: 44 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu size={22} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-navy-950 flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <TheatreLogo />
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-cream/70 hover:text-gold transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <X size={22} />
              </motion.button>
            </div>

            <div className="flex flex-col justify-center flex-1 px-8 gap-1">
              {links.map(({ key, href }, i) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className={`font-cairo font-black text-2xl transition-colors py-3 border-b border-navy-800 ${
                    isActive(href) ? 'text-gold' : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {t(key)}
                </motion.a>
              ))}
              <motion.a
                href={`/${locale}/shows`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.35 }}
                className="clip-angled bg-gold text-navy-950 font-cairo font-bold text-xl px-6 py-3 text-center mt-6 flex items-center justify-center"
                style={{ minHeight: 44 }}
              >
                {t('book')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
