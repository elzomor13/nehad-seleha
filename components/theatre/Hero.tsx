'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { shows } from '@/lib/shows';

export default function Hero() {
  const t = useTranslations('hero');
  const tShows = useTranslations('shows');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % shows.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const show = shows[current];

  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      {/* Background crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={show.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: show.image ? `url(${show.image})` : undefined,
              background: show.image
                ? undefined
                : `linear-gradient(135deg, ${show.palette.from}, ${show.palette.to})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, var(--color-navy-950) 35%, color-mix(in srgb, var(--color-navy-950) 65%, transparent) 70%, color-mix(in srgb, var(--color-navy-950) 30%, transparent) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, color-mix(in srgb, var(--color-navy-950) 80%, transparent) 0%, transparent 60%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Curtain lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none curtain-lines" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 start-0 end-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to top, var(--color-navy-950), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 w-full py-32">
          <div style={{ maxWidth: 900 }}>
            {/* Live dot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse-slow" />
              <span className="section-tag">{t('live')}</span>
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${show.id}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55 }}
                className="font-cairo font-black text-cream leading-tight mb-4 text-shadow-gold"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
              >
                {isAr ? show.titleAr : show.titleEn}
              </motion.h1>
            </AnimatePresence>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="gold-divider mb-6 origin-start"
            />

            {/* Meta */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${show.id}`}
                initial={{ opacity: 0, x: isAr ? 16 : -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <span className="font-cairo text-cream-dim text-sm lg:text-base">
                  {tShows('direction')}{' '}
                  <span className="text-cream font-semibold">
                    {isAr ? show.directorAr : show.directorEn}
                  </span>
                </span>
                <span className="w-px h-4 bg-gold/40 hidden sm:block" />
                <span className="font-cairo text-gold text-sm lg:text-base">
                  {isAr ? show.dateAr : show.dateEn}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-8 py-3 hover:bg-gold-light transition-colors w-full sm:w-auto text-sm lg:text-base"
                style={{ minHeight: 48 }}
              >
                {t('book')}
              </button>
              <button
                className="border border-cream/30 text-cream font-cairo px-8 py-3 hover:border-gold hover:text-gold transition-colors w-full sm:w-auto text-sm lg:text-base"
                style={{ minHeight: 48 }}
              >
                {t('schedule')}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Side counter — desktop only */}
        <div className="hidden lg:flex absolute end-16 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={show.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-bebas text-cream leading-none"
              style={{ fontSize: 64 }}
            >
              {String(current + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <div className="w-px h-8 bg-gold/40" />
          <span className="font-bebas text-cream/30" style={{ fontSize: 28 }}>
            {String(shows.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-10 lg:bottom-14 inset-x-0 flex justify-center lg:justify-start lg:ps-16 gap-2 z-10">
        {shows.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Show ${i + 1}`}
            className="flex items-center justify-center"
            style={{ minHeight: 44, minWidth: 20 }}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-gold'
                  : 'bg-cream/30 hover:bg-cream/60'
              }`}
              style={{ width: i === current ? 24 : 8, height: 8 }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
