'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { site } from '@/lib/site';

type DataLayerWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

/** Gửi một sự kiện tới GA4 (trực tiếp) và GTM (qua dataLayer, cho Pixel/Ads sau này) */
export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as DataLayerWindow;
  if (site.gaId) w.gtag?.('event', event, params);
  if (site.gtmId) (w.dataLayer ??= []).push({ event, ...params });
}

/**
 * Google Analytics 4 + Google Tag Manager, và tự ghi nhận các lượt bấm quan trọng.
 * Sự kiện:
 *   click_call, click_zalo, click_facebook, click_email — bấm liên hệ (kèm `location`: header/footer/…)
 *   view_demo      — mở demo mẫu (kèm `template`)
 *   select_template — bấm "Chọn mẫu này" (kèm `template`)
 *   generate_lead  — gửi form liên hệ thành công (gửi từ ContactForm)
 */
export function Analytics() {
  useEffect(() => {
    if (!site.gaId && !site.gtmId) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      const location = a.closest('[data-track-area]')?.getAttribute('data-track-area') ?? 'page';
      const template = a.closest('[data-template]')?.getAttribute('data-template') ?? undefined;

      if (href.startsWith('tel:')) track('click_call', { location });
      else if (href.includes('zalo.me')) track('click_zalo', { location });
      else if (href.includes('facebook.com') || href.includes('m.me/')) track('click_facebook', { location });
      else if (href.startsWith('mailto:')) track('click_email', { location });
      else if (href.includes('/lien-he?mau=')) track('select_template', { template: href.split('mau=')[1] });
      else if (template && a.target === '_blank') track('view_demo', { template });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return (
    <>
      {site.gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}');`}
          </Script>
        </>
      )}
      {site.gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
        </Script>
      )}
    </>
  );
}
