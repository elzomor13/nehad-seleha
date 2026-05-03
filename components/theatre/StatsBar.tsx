'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const stats = [
  { value: 1500, suffix: '', labelKey: 'seats' as const },
  { value: 120, suffix: 'K', labelKey: 'followers' as const },
  { value: 3700, suffix: '+', labelKey: 'shows' as const },
  { value: 6, suffix: '', labelKey: 'stages' as const },
];

function Counter({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime - delay * 1000;
      if (elapsed < 0) return;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, delay]);

  return (
    <span
      ref={ref}
      className="font-bebas text-gold leading-none"
      style={{ fontSize: 52 }}
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const t = useTranslations('stats');

  return (
    <section className="py-12 bg-navy-800 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-2 lg:flex lg:justify-around gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} delay={i * 0.1} />
              <p className="font-cairo text-cream-dim text-sm mt-2">
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
