'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const timeline = [
  { year: '1945', key: 'birth' as const },
  { year: '2021', key: 'death' as const },
  { year: '2023', key: 'opening' as const },
];

export default function AboutPreview() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section id="about" className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1"
          >
            <span className="section-tag mb-3">{t('tag')}</span>
            <div className="gold-divider mb-5" />
            <h2
              className="font-cairo font-black text-cream mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              {t('title')}
            </h2>
            <p className="font-cairo text-cream-dim text-base lg:text-lg leading-relaxed mb-8">
              {t('body')}
            </p>
            <a
              href={`/${locale}/about`}
              className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-8 py-3 hover:bg-gold-light transition-colors inline-block"
              style={{ minHeight: 44 }}
            >
              {t('readMore')}
            </a>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative bg-navy-800 border border-navy-700 p-8 overflow-hidden">
              {/* Ghost NS */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className="font-bebas text-cream leading-none select-none"
                  style={{ fontSize: 180, opacity: 0.03 }}
                >
                  NS
                </span>
              </div>

              <div className="relative z-10">
                <div
                  className="font-bebas text-gold tracking-wider mb-2"
                  style={{ fontSize: 64 }}
                >
                  NS
                </div>
                <p
                  className="font-cairo text-cream-dim text-sm leading-relaxed mb-8"
                  style={{ maxWidth: 300 }}
                >
                  {t('body').substring(0, 130)}...
                </p>

                <div className="space-y-4">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                      className="flex items-center gap-4"
                    >
                      <span className="font-bebas text-gold text-2xl w-16 shrink-0">
                        {item.year}
                      </span>
                      <div className="flex-1 h-px bg-gold/20" />
                      <span className="font-cairo text-cream-dim text-sm text-end">
                        {t(item.key)}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="mt-8 h-1 w-full rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #D4A017, transparent)',
                  }}
                />
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -end-2 w-12 h-12 border-t-2 border-e-2 border-gold" />
            <div className="absolute -bottom-2 -start-2 w-12 h-12 border-b-2 border-s-2 border-gold" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
