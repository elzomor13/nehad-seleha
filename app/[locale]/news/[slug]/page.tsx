'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { newsItems } from '@/lib/news';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function NewsDetailPage() {
  const t = useTranslations('news');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const params = useParams();
  const news = newsItems.find((n) => n.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${news.image})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #070F1A 30%, rgba(7,15,26,0.55) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 pb-16 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-bebas tracking-widest text-xs border border-gold/50 bg-gold/10 text-gold px-3 py-1 uppercase">
                {isAr ? news.categoryAr : news.categoryEn}
              </span>
              <span className="font-cairo text-gold text-xs">
                {isAr ? news.dateAr : news.dateEn}
              </span>
            </div>
            <div className="gold-divider mb-4" />
            <h1
              className="font-cairo font-black text-cream leading-tight text-shadow-gold"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', maxWidth: 800 }}
            >
              {isAr ? news.titleAr : news.titleEn}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-cairo text-cream-dim text-base lg:text-lg leading-loose mb-8">
              {isAr ? news.excerptAr : news.excerptEn}
            </p>
            <div className="h-px bg-gold/20 mb-8" />
            <p className="font-cairo text-cream-dim text-base lg:text-lg leading-loose">
              {isAr ? news.bodyAr : news.bodyEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <div className="px-5 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <a
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 font-cairo text-sm text-gold hover:text-gold-light transition-colors"
            style={{ minHeight: 44 }}
          >
            {isAr ? (
              <>
                <ChevronRight size={16} />
                {t('viewAll')}
              </>
            ) : (
              <>
                <ChevronLeft size={16} />
                {t('viewAll')}
              </>
            )}
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
