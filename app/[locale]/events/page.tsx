'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { events } from '@/lib/events';
import type { EventCategory } from '@/lib/events';

export const runtime = 'edge';

type FilterKey = 'all' | EventCategory;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] } },
};

export default function EventsPage() {
  const t = useTranslations('events');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [filter, setFilter] = useState<FilterKey>('all');

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t('all') },
    { key: 'summer', label: t('summer') },
    { key: 'outdoor', label: t('outdoor') },
    { key: 'workshop', label: t('workshops') },
  ];

  const filtered = filter === 'all'
    ? events
    : events.filter((e) => e.category === filter);

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-5 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 curtain-lines pointer-events-none opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(7,15,26,0.5), #070F1A)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag mb-4">{t('tag')}</span>
            <div className="gold-divider mb-5" />
            <h1
              className="font-cairo font-black text-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-5 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`font-bebas tracking-widest text-sm px-5 py-2 border transition-colors ${
                  filter === key
                    ? 'bg-gold text-navy-950 border-gold'
                    : 'border-navy-700 text-cream-dim hover:border-gold hover:text-gold'
                }`}
                style={{ minHeight: 44 }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events grid */}
      <section className="py-8 lg:py-12 px-5 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-cairo text-cream-dim text-center py-16"
              >
                {t('noEvents')}
              </motion.p>
            ) : (
              <motion.div
                key={filter}
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((event) => (
                  <motion.div key={event.id} variants={item}>
                    <a
                      href={`/${locale}/events/${event.id}`}
                      className="block group border border-navy-700 hover:border-gold/50 transition-colors overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${event.image})` }}
                        />
                        <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-gold/10 transition-colors duration-300" />
                        <span className="absolute top-4 start-4 font-bebas tracking-widest text-xs border border-gold/50 bg-gold/10 text-gold px-3 py-1 uppercase">
                          {isAr ? event.categoryAr : event.categoryEn}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 bg-navy-900">
                        <p className="font-cairo text-gold text-xs mb-2">
                          {isAr ? event.dateAr : event.dateEn}
                        </p>
                        <h3 className="font-cairo font-black text-cream text-lg leading-snug mb-2 group-hover:text-gold transition-colors">
                          {isAr ? event.titleAr : event.titleEn}
                        </h3>
                        <p className="font-cairo text-cream-dim text-sm leading-relaxed line-clamp-2">
                          {isAr ? event.descriptionAr : event.descriptionEn}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
