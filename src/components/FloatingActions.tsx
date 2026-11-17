'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { PhoneIcon } from './icons';

/** Nút Zalo + gọi nổi bên trái, nút lên đầu trang bên phải (hiện khi đã cuộn xuống) */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const round =
    'relative grid size-12 place-items-center rounded-full text-white shadow-[0_10px_24px_-8px_rgba(31,35,40,.55)] transition-transform hover:scale-110 sm:size-14';

  return (
    <>
      <div data-track-area="floating" className="fixed bottom-5 left-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:left-6">
        <a href={site.zalo} target="_blank" rel="noopener" aria-label="Nhắn Zalo cho PAL Web Agency" className={`${round} bg-[#0068ff]`}>
          {/* Bong bóng trắng, chữ Zalo xanh (không dùng logo chính thức) */}
          <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.6 1.4 4.9 3.6 6.5L5 21l3.6-1.8c1.1.3 2.2.5 3.4.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3Z" fill="#fff" />
            <text x="12" y="13.6" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0068ff" fontFamily="Arial, sans-serif">
              Zalo
            </text>
          </svg>
        </a>
        <a href={`tel:${site.phone}`} aria-label={`Gọi ${site.phoneDisplay}`} className={`${round} bg-accent`}>
          {/* Vòng sóng nhấp nháy quanh nút gọi */}
          <span className="absolute inset-0 rounded-full bg-accent opacity-60 motion-safe:animate-ping" aria-hidden />
          <PhoneIcon width={24} height={24} strokeWidth={2.2} className="relative" />
        </a>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Lên đầu trang"
        tabIndex={showTop ? 0 : -1}
        className={`fixed right-4 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_10px_24px_-10px_rgba(31,35,40,.45)] transition-all hover:border-accent hover:text-accent-ink sm:right-6 sm:bottom-6 sm:size-12 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
