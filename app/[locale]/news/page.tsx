'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { newsItems } from '@/lib/news';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const runtime = 'edge';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] } },
};

export default function NewsPage() {
  const t = useTranslations('news');
  const locale = useLocale();
  const isAr = locale === 'ar';

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

      {/* News list */}
      <section className="py-8 lg:py-12 px-5 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {newsItems.map((news) => (
              <motion.article key={news.slug} variants={item}>
                <a
                  href={`/${locale}/news/${news.slug}`}
                  className="block group border border-navy-700 hover:border-gold/50 transition-colors overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${news.image})` }}
                    />
                    <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-gold/10 transition-colors duration-300" />
                    <span className="absolute top-4 start-4 font-bebas tracking-widest text-xs border border-gold/50 bg-gold/10 text-gold px-3 py-1 uppercase">
                      {isAr ? news.categoryAr : news.categoryEn}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-navy-900">
                    <p className="font-cairo text-gold text-xs mb-2">
                      {isAr ? news.dateAr : news.dateEn}
                    </p>
                    <h2 className="font-cairo font-black text-cream text-lg leading-snug mb-3 group-hover:text-gold transition-colors">
                      {isAr ? news.titleAr : news.titleEn}
                    </h2>
                    <p className="font-cairo text-cream-dim text-sm leading-relaxed line-clamp-3 mb-4">
                      {isAr ? news.excerptAr : news.excerptEn}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-cairo text-sm text-gold group-hover:text-gold-light transition-colors">
                      {t('readMore')}
                      {isAr ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
