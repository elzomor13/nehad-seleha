'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';

type Category = 'all' | 'productions' | 'backstage' | 'outdoor';

const archiveItems = [
  {
    id: 1,
    category: 'productions' as Category,
    label: 'سالب ١',
    labelEn: 'Minus One',
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 2,
    category: 'backstage' as Category,
    label: 'كواليس الاحتياج',
    labelEn: 'The Need Backstage',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 3,
    category: 'outdoor' as Category,
    label: 'المسرح المكشوف',
    labelEn: 'Outdoor Stage',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    category: 'productions' as Category,
    label: 'عنبر ١٠',
    labelEn: 'Ward 10',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 5,
    category: 'backstage' as Category,
    label: 'خشبة المسرح',
    labelEn: 'The Stage',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 6,
    category: 'productions' as Category,
    label: 'إيكوس',
    labelEn: 'Equus',
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 7,
    category: 'outdoor' as Category,
    label: 'ليالي مكشوفة',
    labelEn: 'Open Nights',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 8,
    category: 'backstage' as Category,
    label: 'تحضيرات',
    labelEn: 'Preparations',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    colSpan: 2,
    rowSpan: 1,
  },
];


export default function ArchivePage() {
  const t = useTranslations('archive');
  const [filter, setFilter] = useState<Category>('all');

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t('all') },
    { key: 'productions', label: t('productions') },
    { key: 'backstage', label: t('backstage') },
    { key: 'outdoor', label: t('outdoor') },
  ];

  const filtered =
    filter === 'all' ? archiveItems : archiveItems.filter((i) => i.category === filter);

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

      {/* Filters */}
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

      {/* Grid */}
      <section className="py-8 px-5 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Mobile stacked */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + '-mobile'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 md:hidden"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="relative h-56 overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-gold/15 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="font-cairo text-cream text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Tablet 2-col */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + '-tablet'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:grid lg:hidden grid-cols-2 gap-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="relative h-56 overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-gold/15 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="font-cairo text-cream text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Desktop mosaic */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + '-desktop'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:grid gap-4"
              style={{
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: '200px',
              }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  className="relative overflow-hidden group"
                  style={{
                    gridColumn: `span ${filter === 'all' ? item.colSpan : 1}`,
                    gridRow: `span ${filter === 'all' ? item.rowSpan : 1}`,
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-gold/15 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="font-cairo text-cream text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
