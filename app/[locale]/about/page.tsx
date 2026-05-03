'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';

const stageConfigs = [
  { number: '01', nameAr: 'Profile Theater', nameEn: 'Profile Theater' },
  { number: '02', nameAr: 'Round Stage', nameEn: 'Round Stage' },
  { number: '03', nameAr: 'Thrust Stage', nameEn: 'Thrust Stage' },
  { number: '04', nameAr: 'Black Box', nameEn: 'Black Box' },
  { number: '05', nameAr: 'Outdoor Stage', nameEn: 'Outdoor Stage' },
  { number: '06', nameAr: 'Promenade', nameEn: 'Promenade' },
];

const timeline = [
  { year: '1945', key: 'birth' as const },
  { year: '2021', key: 'death' as const },
  { year: '2023', key: 'opening' as const },
];

export const runtime = 'edge';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] } },
};

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-5 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 curtain-lines pointer-events-none opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(7,15,26,0.5), #070F1A)' }}
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
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', maxWidth: 700 }}
            >
              {t('title')}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Theatre history */}
      <section className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65 }}
            >
              <h2 className="font-cairo font-black text-cream text-2xl lg:text-3xl mb-4">
                {t('historyTitle')}
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-cairo text-cream-dim leading-loose text-base lg:text-lg">
                {t('body')}
              </p>
            </motion.div>

            {/* NS card */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-navy-800 border border-navy-700 p-8 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span
                    className="font-bebas text-cream leading-none select-none"
                    style={{ fontSize: 200, opacity: 0.03 }}
                  >
                    NS
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="font-bebas text-gold tracking-wider mb-4" style={{ fontSize: 60 }}>
                    NS
                  </div>
                  <div className="space-y-4">
                    {timeline.map((entry, i) => (
                      <motion.div
                        key={entry.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                        className="flex items-center gap-4"
                      >
                        <span className="font-bebas text-gold text-2xl w-16 shrink-0">
                          {entry.year}
                        </span>
                        <div className="flex-1 h-px bg-gold/20" />
                        <span className="font-cairo text-cream-dim text-sm text-end">
                          {t(entry.key)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div
                    className="mt-8 h-1 w-full rounded-full"
                    style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }}
                  />
                </div>
              </div>
              <div className="absolute -top-2 -end-2 w-12 h-12 border-t-2 border-e-2 border-gold" />
              <div className="absolute -bottom-2 -start-2 w-12 h-12 border-b-2 border-s-2 border-gold" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag mb-4">{t('biographyTitle')}</span>
            <div className="gold-divider mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <p className="font-cairo text-cream-dim leading-loose text-base lg:text-lg">
                {t('biographyBody')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="border border-navy-700 p-6 relative overflow-hidden"
            >
              <div className="absolute -top-2 -end-2 w-10 h-10 border-t-2 border-e-2 border-gold" />
              <div className="absolute -bottom-2 -start-2 w-10 h-10 border-b-2 border-s-2 border-gold" />
              <div className="font-bebas text-gold text-6xl leading-none mb-4">
                نهاد
              </div>
              <div className="space-y-2 font-cairo text-sm">
                <div className="flex justify-between">
                  <span className="text-cream-dim">{t('birth')}</span>
                  <span className="text-cream">١٩٤٥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-dim">{t('death')}</span>
                  <span className="text-cream">٢٠٢١</span>
                </div>
                <div className="h-px bg-gold/20 my-3" />
                <div className="flex justify-between">
                  <span className="text-cream-dim">{t('opening')}</span>
                  <span className="text-cream">٢٠٢٣</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stage configurations */}
      <section className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="mb-12"
          >
            <span className="section-tag mb-4">{t('stagesTitle')}</span>
            <div className="gold-divider mb-5" />
            <h2
              className="font-cairo font-black text-cream"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              {isAr ? '٦ أشكال تقديم' : '6 Stage Configurations'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stageConfigs.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group border border-navy-700 hover:border-gold/50 p-5 text-center transition-colors"
              >
                <div
                  className="font-bebas text-gold leading-none mb-3 group-hover:text-gold-light transition-colors"
                  style={{ fontSize: 40, opacity: 0.6 }}
                >
                  {stage.number}
                </div>
                <p className="font-cairo text-cream-dim text-xs leading-snug group-hover:text-cream transition-colors">
                  {isAr ? stage.nameAr : stage.nameEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
