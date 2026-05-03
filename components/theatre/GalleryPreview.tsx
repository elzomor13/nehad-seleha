'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const items = [
  {
    id: 1,
    label: 'سالب ١',
    colSpan: 2,
    rowSpan: 1,
    image:
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    label: 'الاحتياج',
    colSpan: 1,
    rowSpan: 2,
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    label: 'خشبة المسرح',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    label: 'عنبر ١٠',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    label: 'كواليس',
    colSpan: 2,
    rowSpan: 1,
    image:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function Tile({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="relative overflow-hidden group h-full"
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
  );
}

export default function GalleryPreview() {
  const t = useTranslations('gallery');
  const locale = useLocale();

  return (
    <section id="gallery" className="py-16 lg:py-24 px-5 lg:px-16 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag mb-3">{t('tag')}</span>
          <div className="gold-divider mx-auto mb-4" />
          <h2
            className="font-cairo font-black text-cream"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {items.slice(0, 4).map((item, i) => (
            <div key={item.id} className="h-48">
              <Tile item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={item.id} className="h-52">
              <Tile item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop mosaic */}
        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 220px)',
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
            >
              <Tile item={item} index={i} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`/${locale}/archive`}
            className="border border-gold text-gold font-cairo font-semibold px-8 py-3 hover:bg-gold hover:text-navy-950 transition-colors inline-block"
            style={{ minHeight: 44 }}
          >
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
