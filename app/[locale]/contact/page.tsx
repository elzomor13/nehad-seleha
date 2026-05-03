'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/theatre/Navbar';
import Footer from '@/components/theatre/Footer';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';


type Tab = 'info' | 'reservation' | 'suggestion' | 'complaint';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ComplaintState {
  name: string;
  phone: string;
  reference: string;
  details: string;
}

const emptyForm: FormState = { name: '', email: '', phone: '', message: '' };
const emptyComplaint: ComplaintState = { name: '', phone: '', reference: '', details: '' };

const reservationRequirements = [
  {
    number: '١',
    numberEn: '1',
    textAr: 'ترقيب النص',
    textEn: 'Script proofreading and annotation',
  },
  {
    number: '٢',
    numberEn: '2',
    textAr: 'تحديد موعد متاح مع إدارة المسرح',
    textEn: 'Scheduling an available date with theatre management',
  },
  {
    number: '٣',
    numberEn: '3',
    textAr: 'تجهيز ملف بالبطاقات الشخصية لكل أعضاء الفريق',
    textEn: 'Preparing a file with national IDs for all team members',
  },
  {
    number: '٤',
    numberEn: '4',
    textAr: 'اختياري — إرسال بوستر العرض للدعاية',
    textEn: 'Optional — submitting the show poster for promotion',
    optional: true,
  },
  {
    number: '٥',
    numberEn: '5',
    textAr: 'دفع مقدم الحجز',
    textEn: 'Paying the reservation deposit',
  },
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const [activeTab, setActiveTab] = useState<Tab>('info');
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [complaint, setComplaint] = useState<ComplaintState>(emptyComplaint);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'info', label: t('info') },
    { key: 'reservation', label: t('reservation') },
    { key: 'suggestion', label: isAr ? 'اقتراح' : 'Suggestion' },
    { key: 'complaint', label: t('complaint') },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Contact form:', { tab: activeTab, ...form });
    setSubmitted(true);
    setForm(emptyForm);
  }

  function handleComplaintSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Complaint:', complaint);
    setComplaintSubmitted(true);
    setComplaint(emptyComplaint);
  }

  const inputClass =
    'w-full bg-navy-800 border border-navy-700 text-cream font-cairo text-sm px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-cream/30';
  const labelClass = 'font-cairo text-cream-dim text-sm mb-1.5 block';

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-5 lg:px-16 relative overflow-hidden">
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
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {t('title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-20 px-5 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar: contact info */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h2 className="font-cairo font-black text-cream text-xl mb-4">
                {t('infoTitle')}
              </h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                  <p className="font-cairo text-cream-dim text-sm leading-relaxed">
                    {t('address')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-cairo text-cream-dim text-sm" dir="ltr">
                      {t('phone1')}
                    </p>
                    <p className="font-cairo text-cream-dim text-sm" dir="ltr">
                      {t('phone2')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <p className="font-cairo text-cream-dim text-sm">
                    {t('emailAddress')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tabs + content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Tab bar */}
              <div className="flex flex-wrap gap-0 mb-8 border-b border-navy-700">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveTab(key);
                      setSubmitted(false);
                    }}
                    className={`font-cairo font-semibold text-sm px-5 py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === key
                        ? 'border-gold text-gold'
                        : 'border-transparent text-cream-dim hover:text-cream'
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">

                {/* ── INFO ── */}
                {activeTab === 'info' && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <CheckCircle size={48} className="text-gold mb-4" />
                        <h3 className="font-cairo font-black text-cream text-xl mb-2">
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
                          {isAr ? 'إرسال رسالة أخرى' : 'Send Another'}
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t('name')}</label>
                            <input
                              required
                              className={inputClass}
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder={t('name')}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t('phone')}</label>
                            <input
                              className={inputClass}
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder={t('phone')}
                              dir="ltr"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>{t('email')}</label>
                          <input
                            type="email"
                            className={inputClass}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder={t('email')}
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>{t('message')}</label>
                          <textarea
                            required
                            rows={5}
                            className={inputClass + ' resize-none'}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={t('message')}
                          />
                        </div>
                        <button
                          type="submit"
                          className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-10 py-3 hover:bg-gold-light transition-colors w-full md:w-auto"
                          style={{ minHeight: 48 }}
                        >
                          {t('submit')}
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* ── RESERVATION ── */}
                {activeTab === 'reservation' && (
                  <motion.div
                    key="reservation"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    {/* Requirements */}
                    <div className="border border-navy-700">
                      <div className="px-5 py-4 border-b border-navy-700 flex items-center gap-3">
                        <div className="gold-divider !w-5" />
                        <h3 className="font-cairo font-black text-cream text-base">
                          {isAr ? 'متطلبات الحجز' : 'Booking Requirements'}
                        </h3>
                      </div>
                      <p className="font-cairo text-cream-dim text-sm px-5 pt-4 pb-2">
                        {isAr
                          ? 'يجب للتقديم على حجز المسرح توفّر الآتي:'
                          : 'The following are required to apply for theatre booking:'}
                      </p>
                      <ul className="px-5 pb-5 space-y-0">
                        {reservationRequirements.map((req, i) => (
                          <motion.li
                            key={req.number}
                            initial={{ opacity: 0, x: isAr ? 12 : -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07, duration: 0.4 }}
                            className={`flex items-baseline gap-3 py-3 ${
                              i < reservationRequirements.length - 1
                                ? 'border-b border-navy-700/60'
                                : ''
                            }`}
                          >
                            <span className="font-bebas text-gold text-lg leading-none shrink-0 w-5 text-center">
                              {isAr ? req.number : req.numberEn}
                            </span>
                            <span className="font-cairo text-cream text-sm leading-relaxed flex-1">
                              {isAr ? req.textAr : req.textEn}
                            </span>
                            {req.optional && (
                              <span className="font-cairo text-gold/50 text-xs shrink-0">
                                {isAr ? 'اختياري' : 'Optional'}
                              </span>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-navy-700" />
                      <span className="font-cairo text-cream-dim text-xs">
                        {isAr ? 'طلب الحجز' : 'Booking Request'}
                      </span>
                      <div className="flex-1 h-px bg-navy-700" />
                    </div>

                    {/* Booking form */}
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center py-10 text-center"
                      >
                        <CheckCircle size={48} className="text-gold mb-4" />
                        <h3 className="font-cairo font-black text-cream text-xl mb-2">
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
                          {isAr ? 'إرسال طلب آخر' : 'Send Another'}
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t('name')}</label>
                            <input
                              required
                              className={inputClass}
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder={t('name')}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t('phone')}</label>
                            <input
                              required
                              className={inputClass}
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder={t('phone')}
                              dir="ltr"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>{t('email')}</label>
                          <input
                            type="email"
                            className={inputClass}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder={t('email')}
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            {isAr ? 'تفاصيل العرض واسم الفرقة' : 'Show Details & Troupe Name'}
                          </label>
                          <textarea
                            required
                            rows={4}
                            className={inputClass + ' resize-none'}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={
                              isAr
                                ? 'اسم العرض، الفرقة، التاريخ المقترح...'
                                : 'Show name, troupe, proposed date...'
                            }
                          />
                        </div>
                        <button
                          type="submit"
                          className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-10 py-3 hover:bg-gold-light transition-colors w-full md:w-auto"
                          style={{ minHeight: 48 }}
                        >
                          {isAr ? 'إرسال طلب الحجز' : 'Submit Booking Request'}
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* ── SUGGESTION ── */}
                {activeTab === 'suggestion' && (
                  <motion.div
                    key="suggestion"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <CheckCircle size={48} className="text-gold mb-4" />
                        <h3 className="font-cairo font-black text-cream text-xl mb-2">
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
                          {isAr ? 'إرسال اقتراح آخر' : 'Send Another'}
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t('name')}</label>
                            <input
                              required
                              className={inputClass}
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder={t('name')}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t('phone')}</label>
                            <input
                              className={inputClass}
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder={t('phone')}
                              dir="ltr"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>{t('email')}</label>
                          <input
                            type="email"
                            className={inputClass}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder={t('email')}
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>{t('message')}</label>
                          <textarea
                            required
                            rows={5}
                            className={inputClass + ' resize-none'}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={
                              isAr ? 'اقتراحك هنا...' : 'Your suggestion here...'
                            }
                          />
                        </div>
                        <button
                          type="submit"
                          className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-10 py-3 hover:bg-gold-light transition-colors w-full md:w-auto"
                          style={{ minHeight: 48 }}
                        >
                          {t('submit')}
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* ── COMPLAINT ── */}
                {activeTab === 'complaint' && (
                  <motion.div
                    key="complaint"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {complaintSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <CheckCircle size={48} className="text-gold mb-4" />
                        <h3 className="font-cairo font-black text-cream text-xl mb-2">
                          {t('success')}
                        </h3>
                        <p className="font-cairo text-cream-dim text-sm">
                          {t('successDetail')}
                        </p>
                        <button
                          onClick={() => setComplaintSubmitted(false)}
                          className="mt-8 clip-angled bg-gold text-navy-950 font-cairo font-bold px-8 py-3 hover:bg-gold-light transition-colors"
                          style={{ minHeight: 44 }}
                        >
                          {isAr ? 'تقديم شكوى أخرى' : 'Submit Another'}
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleComplaintSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t('name')}</label>
                            <input
                              required
                              className={inputClass}
                              value={complaint.name}
                              onChange={(e) => setComplaint({ ...complaint, name: e.target.value })}
                              placeholder={t('name')}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t('phone')}</label>
                            <input
                              className={inputClass}
                              value={complaint.phone}
                              onChange={(e) => setComplaint({ ...complaint, phone: e.target.value })}
                              placeholder={t('phone')}
                              dir="ltr"
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>{t('complaintRef')}</label>
                          <input
                            className={inputClass}
                            value={complaint.reference}
                            onChange={(e) => setComplaint({ ...complaint, reference: e.target.value })}
                            placeholder={t('complaintRef')}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>{t('complaintDetails')}</label>
                          <textarea
                            required
                            rows={5}
                            className={inputClass + ' resize-none'}
                            value={complaint.details}
                            onChange={(e) => setComplaint({ ...complaint, details: e.target.value })}
                            placeholder={t('complaintDetails')}
                          />
                        </div>
                        <button
                          type="submit"
                          className="clip-angled bg-gold text-navy-950 font-cairo font-bold px-10 py-3 hover:bg-gold-light transition-colors w-full md:w-auto"
                          style={{ minHeight: 48 }}
                        >
                          {t('submit')}
                        </button>
                      </form>
                    )}
                  </motion.div>
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
