'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function LocaleHtmlAttrs() {
  const params = useParams();
  const locale = (params?.locale as string) ?? 'ar';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
