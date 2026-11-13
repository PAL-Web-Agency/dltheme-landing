import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const body = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const heading = Bricolage_Grotesque({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-heading',
});

const code = JetBrains_Mono({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  variable: '--font-code',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  // Đặt NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (mã từ Google Search Console) trong Vercel để xác minh trang
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: '#f7f3ec',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${body.variable} ${heading.variable} ${code.variable}`}>
      <body>{children}</body>
    </html>
  );
}
