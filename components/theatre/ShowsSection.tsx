'use client';

import { useTranslations, useLocale } from 'next-intl';
import { shows } from '@/lib/shows';
import ShowCard from './ShowCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShowsSection() {
  const t = useTranslations('shows');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section id="shows" className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-tag mb-3">{t('tag')}</span>
            <div className="gold-divider mb-4" />
            <h2
              className="font-cairo font-black text-cream"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              {t('title')}
            </h2>
          </div>
          <a
            href={`/${locale}/shows`}
            className="hidden sm:flex items-center gap-1.5 font-cairo text-sm text-gold hover:text-gold-light transition-colors"
            style={{ minHeight: 44 }}
          >
            {t('viewAll')}
            {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shows.slice(0, 3).map((show, i) => (
            <ShowCard key={show.id} show={show} index={i} active={i === 0} />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a
            href={`/${locale}/shows`}
            className="inline-flex items-center gap-1.5 font-cairo text-sm text-gold border border-gold/30 px-6 py-2 hover:border-gold transition-colors"
            style={{ minHeight: 44 }}
          >
            {t('viewAll')}
            {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </a>
        </div>
      </div>
    </section>
  );
}
