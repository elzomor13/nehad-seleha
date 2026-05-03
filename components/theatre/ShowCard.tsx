'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import type { Show } from '@/lib/shows';

interface ShowCardProps {
  show: Show;
  index: number;
  active?: boolean;
}

export default function ShowCard({ show, index, active }: ShowCardProps) {
  const t = useTranslations('shows');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden cursor-pointer transition-shadow duration-300 ${
        active
          ? 'border border-gold shadow-[0_0_30px_rgba(212,160,23,0.2)]'
          : 'border border-navy-700 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]'
      }`}
      style={{ minHeight: 320 }}
    >
      {/* Background */}
      {show.image ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${show.image})` }}
        />
      ) : null}

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${show.palette.from} 40%, ${show.palette.to}99 100%)`,
        }}
      />

      {/* Ghost number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-bebas text-cream leading-none select-none"
          style={{ fontSize: 130, opacity: 0.04 }}
        >
          {show.ghostNumber}
        </span>
      </div>

      {/* Content */}
      <div
        className="relative z-10 p-5 lg:p-7 flex flex-col"
        style={{ minHeight: 320 }}
      >
        <div className="mb-auto">
          <span className="inline-block border border-gold/50 bg-gold/10 text-gold font-bebas tracking-widest text-xs px-3 py-1 uppercase">
            {t('type')}
          </span>
        </div>

        <div className="mt-16">
          <h3 className="font-cairo font-black text-cream text-xl lg:text-2xl leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
            {isAr ? show.titleAr : show.titleEn}
          </h3>
          <p className="font-cairo text-cream-dim text-sm mb-1">
            {t('direction')}{' '}
            <span className="text-cream">
              {isAr ? show.directorAr : show.directorEn}
            </span>
          </p>
          <p className="font-cairo text-gold text-sm">
            {isAr ? show.dateAr : show.dateEn}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
