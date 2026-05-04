'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { useShow } from '@/lib/api/hooks/useShows';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';


export default function ShowDetailPage() {
  const t = useTranslations('shows');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const params = useParams();
  const { data: show } = useShow(params.id as string);

  if (show === undefined) return null;
  if (show === null) notFound();

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {show.image && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${show.image})` }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${show.palette.from}, ${show.palette.to})`,
            opacity: show.image ? 0.75 : 1,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--color-navy-950) 30%, color-mix(in srgb, var(--color-navy-950) 30%, transparent) 100%)',
          }}
        />
        {/* Ghost number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-bebas text-cream leading-none select-none"
            style={{ fontSize: 280, opacity: 0.04 }}
          >
            {show.ghostNumber}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 pb-16 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block border border-gold/50 bg-gold/10 text-gold font-bebas tracking-widest text-xs px-3 py-1 uppercase mb-4">
              {t('type')}
            </span>
            <div className="gold-divider mb-4" />
            <h1
              className="font-cairo font-black text-cream leading-tight mb-6 text-shadow-gold"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              {isAr ? show.titleAr : show.titleEn}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="font-cairo text-cream-dim">
                {t('direction')}{' '}
                <span className="text-cream font-semibold">
                  {isAr ? show.directorAr : show.directorEn}
                </span>
              </span>
              <span className="flex items-center gap-2 font-cairo text-gold">
                <Calendar size={14} />
                {isAr ? show.dateAr : show.dateEn}
              </span>
              <span className="flex items-center gap-2 font-cairo text-cream-dim">
                <Clock size={14} />
                {show.time}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Synopsis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-cairo font-black text-cream text-2xl mb-4">
                {isAr ? 'نبذة عن العرض' : 'About the Show'}
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-cairo text-cream-dim leading-loose text-base lg:text-lg">
                {isAr
                  ? show.synopsisAr || show.titleAr
                  : show.synopsisEn || show.titleEn}
              </p>
            </motion.div>

            {/* Booking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="bg-navy-900 border border-navy-700 p-6 relative overflow-hidden">
                <div className="absolute -top-2 -end-2 w-10 h-10 border-t-2 border-e-2 border-gold" />
                <div className="absolute -bottom-2 -start-2 w-10 h-10 border-b-2 border-s-2 border-gold" />

                <h3 className="font-cairo font-black text-cream text-lg mb-4">
                  {isAr ? 'تفاصيل الحجز' : 'Booking Details'}
                </h3>
                <div className="gold-divider mb-5" />

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-cairo text-sm">
                    <span className="text-cream-dim">
                      {isAr ? 'التاريخ' : 'Date'}
                    </span>
                    <span className="text-cream">
                      {isAr ? show.dateAr : show.dateEn}
                    </span>
                  </div>
                  <div className="flex justify-between font-cairo text-sm">
                    <span className="text-cream-dim">
                      {isAr ? 'التوقيت' : 'Time'}
                    </span>
                    <span className="text-cream">{show.time}</span>
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

                <button
                  className="clip-angled bg-gold text-navy-950 font-cairo font-bold w-full py-3 hover:bg-gold-light transition-colors"
                  style={{ minHeight: 48 }}
                >
                  {t('book')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="px-5 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <a
            href={`/${locale}/shows`}
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
