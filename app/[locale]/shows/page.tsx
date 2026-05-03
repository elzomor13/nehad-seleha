'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import ShowCard from '@/components/theatre/ShowCard';
import { shows } from '@/lib/shows';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
  },
};

export default function ShowsPage() {
  const t = useTranslations('shows');

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 px-5 lg:px-16 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 curtain-lines pointer-events-none opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(7,15,26,0.6) 0%, #070F1A 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item} className="section-tag mb-4">
              {t('tag')}
            </motion.span>
            <motion.div variants={item} className="gold-divider mb-5" />
            <motion.h1
              variants={item}
              className="font-cairo font-black text-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {t('title')}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Shows grid */}
      <section className="py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {shows.map((show, i) => (
              <ShowCard key={show.id} show={show} index={i} active={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
