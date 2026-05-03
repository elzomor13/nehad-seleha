import type { Metadata, Viewport } from 'next';
import './globals.css';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'مسرح د. نهاد صليحة | Nehad Seleiha Theatre',
  description: 'مسرح د. نهاد صليحة — أكاديمية الفنون، وزارة الثقافة المصرية',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let locale = 'ar';
  try {
    locale = await getLocale();
  } catch {
    // fallback to default locale
  }

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-950 text-cream font-cairo antialiased">
        {children}
      </body>
    </html>
  );
}
