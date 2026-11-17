import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { site } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer, MobileBar } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import './globals.css';

// Be Vietnam Pro: đủ dấu tiếng Việt (Poppins không có ư, ạ, ệ…)
const font = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-main',
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
  // Mã xác minh Google Search Console (sửa trong src/lib/site.ts hoặc biến NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)
  ...(site.googleVerification ? { verification: { google: site.googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // data-scroll-behavior: cuộn mượt chỉ trong cùng trang (#hoi-dap), chuyển trang thì lên đầu ngay
    <html lang="vi" className={font.variable} data-scroll-behavior="smooth">
      <body>
        {site.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
        >
          Bỏ qua, tới nội dung chính
        </a>
        <Header />
        <main id="noi-dung">{children}</main>
        <Footer />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
