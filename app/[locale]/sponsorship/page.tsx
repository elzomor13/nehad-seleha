'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { CheckCircle } from 'lucide-react';

export const runtime = 'edge';

interface SponsorForm {
  entityName: string;
  entityType: 'company' | 'individual' | '';
  proposal: string;
  name: string;
  phone: string;
  email: string;
}

const empty: SponsorForm = {
  entityName: '',
  entityType: '',
  proposal: '',
  name: '',
  phone: '',
  email: '',
};

export default function SponsorshipPage() {
  const t = useTranslations('sponsorship');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [form, setForm] = useState<SponsorForm>(empty);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Sponsorship form:', form);
    setSubmitted(true);
    setForm(empty);
  }

  const inputClass =
    'w-full bg-navy-800 border border-navy-700 text-cream font-cairo text-sm px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-cream/30';
  const labelClass = 'font-cairo text-cream-dim text-sm mb-1.5 block';

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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag mb-4">{t('tag')}</span>
            <div className="gold-divider mb-5" />
            <h1
              className="font-cairo font-black text-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', maxWidth: 600 }}
            >
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 px-5 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h2 className="font-cairo font-black text-cream text-xl mb-4">
                {isAr ? 'لماذا الشراكة؟' : 'Why Partner?'}
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-cairo text-cream-dim text-sm leading-loose mb-6">
                {t('body')}
              </p>

              {/* Decorative */}
              <div className="border border-navy-700 p-6 relative overflow-hidden">
                <div className="absolute -top-2 -end-2 w-10 h-10 border-t-2 border-e-2 border-gold" />
                <div className="absolute -bottom-2 -start-2 w-10 h-10 border-b-2 border-s-2 border-gold" />
                <div className="font-bebas text-gold text-6xl leading-none mb-2 opacity-80">NS</div>
                <p className="font-cairo text-cream-dim text-xs leading-relaxed">
                  {isAr
                    ? 'أكاديمية الفنون — وزارة الثقافة المصرية'
                    : 'Academy of Arts — Egyptian Ministry of Culture'}
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <CheckCircle size={52} className="text-gold mb-4" />
                    <h3 className="font-cairo font-black text-cream text-2xl mb-2">
                      {t('success')}
                    </h3>
                    <p className="font-cairo text-cream-dim text-sm">
                      {t('successDetail')}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 clip-angled bg-gold text-navy-950 font-cairo font-bold px-8 py-3 hover:bg-gold-light transition-colors"
                      style={{ minHeight: 44 }}
                    >
                      {isAr ? 'تقديم طلب آخر' : 'Submit Another'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Entity info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>{t('entityName')}</label>
                        <input
                          required
                          className={inputClass}
                          value={form.entityName}
                          onChange={(e) =>
                            setForm({ ...form, entityName: e.target.value })
                          }
                          placeholder={t('entityName')}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{t('entityType')}</label>
                        <select
                          required
                          className={inputClass + ' cursor-pointer'}
                          value={form.entityType}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              entityType: e.target.value as 'company' | 'individual',
                            })
                          }
                        >
                          <option value="" disabled>
                            {t('entityType')}
                          </option>
                          <option value="company">{t('company')}</option>
                          <option value="individual">{t('individual')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Proposal */}
                    <div>
                      <label className={labelClass}>{t('proposal')}</label>
                      <textarea
                        required
                        rows={5}
                        className={inputClass + ' resize-none'}
                        value={form.proposal}
                        onChange={(e) =>
                          setForm({ ...form, proposal: e.target.value })
                        }
                        placeholder={t('proposal')}
                      />
                    </div>

                    {/* Contact info */}
                    <div className="pt-2">
                      <h3 className="font-cairo font-semibold text-cream-dim text-sm mb-4">
                        {t('contactInfo')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                          <label className={labelClass}>
                            {isAr ? 'الاسم' : 'Name'}
                          </label>
                          <input
                            required
                            className={inputClass}
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            placeholder={isAr ? 'الاسم' : 'Name'}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            {isAr ? 'الهاتف' : 'Phone'}
                          </label>
                          <input
                            className={inputClass}
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            placeholder={isAr ? 'الهاتف' : 'Phone'}
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            {isAr ? 'البريد الإلكتروني' : 'Email'}
                          </label>
                          <input
                            type="email"
                            className={inputClass}
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
                            dir="ltr"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-10 py-3 hover:bg-gold-light transition-colors w-full md:w-auto"
                      style={{ minHeight: 48 }}
                    >
                      {t('submit')}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
