'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    'shows',
    'events',
    'archive',
    'news',
    'about',
    'contact',
    'sponsorship',
  ] as const;

  const navHrefs: Record<typeof navLinks[number], string> = {
    shows: `/${locale}/shows`,
    events: `/${locale}/events`,
    archive: `/${locale}/archive`,
    news: `/${locale}/news`,
    about: `/${locale}/about`,
    contact: `/${locale}/contact`,
    sponsorship: `/${locale}/sponsorship`,
  };

  const socials: { icon: React.ElementType; label: string; href: string }[] = [
    { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/Nihad.Saliha.Theater' },
  ];

  return (
    <footer className="bg-navy-900 border-t border-gold/20">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, #D4A017, transparent)',
          opacity: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand + contact */}
          <div>
            <div className="font-cairo font-black text-cream text-lg mb-1">
              مسرح د. نهاد صليحة
            </div>
            <div className="font-bebas tracking-widest text-gold text-xs mb-1">
              NEHAD SELEIHA THEATRE
            </div>
            <div className="gold-divider mb-4" />
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-cream-dim text-sm">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="font-cairo">{t('address')}</span>
              </div>
              <div className="flex items-center gap-3 text-cream-dim text-sm">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:01288876645" className="font-cairo hover:text-gold transition-colors" dir="ltr">
                  01288876645
                </a>
              </div>
              <div className="flex items-center gap-3 text-cream-dim text-sm">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:01148238026" className="font-cairo hover:text-gold transition-colors" dir="ltr">
                  01148238026
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="section-tag mb-4">{t('quickLinks')}</span>
            <div className="gold-divider mb-5" />
            <ul className="space-y-3">
              {navLinks.map((key) => (
                <li key={key}>
                  <a
                    href={navHrefs[key]}
                    className="font-cairo text-cream-dim hover:text-gold transition-colors text-sm inline-flex items-center gap-2"
                    style={{ minHeight: 36 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                    {tNav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <span className="section-tag mb-4">{t('follow')}</span>
            <div className="gold-divider mb-5" />
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center border border-navy-700 text-cream-dim hover:border-gold hover:text-gold transition-colors"
                  style={{ width: 44, height: 44 }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-navy-800 py-5 px-5 lg:px-16">
        <div className="max-w-7xl mx-auto font-cairo text-xs text-center" style={{ color: 'rgba(245,240,232,0.4)' }}>
          {t('rights')}
        </div>
      </div>
    </footer>
  );
}
