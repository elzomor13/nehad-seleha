import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { notFound } from 'next/navigation';
import QueryProvider from '@/components/providers/QueryProvider';

const locales = ['ar', 'en'] as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as 'ar' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
