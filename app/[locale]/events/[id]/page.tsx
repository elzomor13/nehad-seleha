'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { useEvent } from '@/lib/api/hooks/useEvents';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';


export default function EventDetailPage() {
  const t = useTranslations('events');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const params = useParams();
  const { data: event } = useEvent(params.id as string);

  if (event === undefined) return null;
  if (event === null) notFound();

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--color-navy-950) 30%, color-mix(in srgb, var(--color-navy-950) 50%, transparent) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 pb-16 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block border border-gold/50 bg-gold/10 text-gold font-bebas tracking-widest text-xs px-3 py-1 uppercase mb-4">
              {isAr ? event.categoryAr : event.categoryEn}
            </span>
            <div className="gold-divider mb-4" />
            <h1
              className="font-cairo font-black text-cream leading-tight mb-4 text-shadow-gold"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              {isAr ? event.titleAr : event.titleEn}
            </h1>
            <span className="flex items-center gap-2 font-cairo text-gold text-sm">
              <Calendar size={14} />
              {isAr ? event.dateAr : event.dateEn}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-cairo text-cream-dim leading-loose text-base lg:text-lg mb-10">
              {isAr ? event.descriptionAr : event.descriptionEn}
            </p>

            <div className="border border-navy-700 p-6 relative overflow-hidden">
              <div className="absolute -top-2 -end-2 w-10 h-10 border-t-2 border-e-2 border-gold" />
              <div className="absolute -bottom-2 -start-2 w-10 h-10 border-b-2 border-s-2 border-gold" />

              <h3 className="font-cairo font-black text-cream text-lg mb-4">
                {isAr ? 'تفاصيل الفعالية' : 'Event Details'}
              </h3>
              <div className="gold-divider mb-5" />
              <div className="space-y-3">
                <div className="flex justify-between font-cairo text-sm">
                  <span className="text-cream-dim">
                    {isAr ? 'التاريخ' : 'Date'}
                  </span>
                  <span className="text-cream">
                    {isAr ? event.dateAr : event.dateEn}
                  </span>
                </div>
                <div className="flex justify-between font-cairo text-sm">
                  <span className="text-cream-dim">
                    {isAr ? 'النوع' : 'Category'}
                  </span>
                  <span className="text-cream">
                    {isAr ? event.categoryAr : event.categoryEn}
                  </span>
                </div>
                <div className="flex justify-between font-cairo text-sm">
                  <span className="text-cream-dim">
                    {isAr ? 'المكان' : 'Venue'}
                  </span>
                  <span className="text-cream text-end">
                    {isAr ? 'مسرح د. نهاد صليحة' : 'Nehad Seleiha Theatre'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <div className="px-5 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <a
            href={`/${locale}/events`}
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
