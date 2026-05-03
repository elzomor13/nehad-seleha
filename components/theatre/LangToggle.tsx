'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === 'ar' ? 'en' : 'ar';
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  };

  return (
    <motion.button
      onClick={switchLocale}
      className="flex items-center justify-center rounded-full border border-gold/40 text-gold font-bebas tracking-widest text-sm hover:border-gold hover:bg-gold/10 transition-colors px-3"
      style={{ minHeight: 44 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Switch language"
    >
      {locale === 'ar' ? 'EN' : 'AR'}
    </motion.button>
  );
}
