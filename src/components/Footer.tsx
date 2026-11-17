import Link from 'next/link';
import { nav, site } from '@/lib/site';
import { Logo } from './Logo';
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, ZaloIcon } from './icons';

export function Footer() {
  return (
    <footer data-track-area="footer" className="bg-deep pb-24 text-white/65 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cố ý tải lại trang */}
          <a href="/" aria-label={`${site.name} — về trang chủ`} className="inline-block">
            <Logo light />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Thiết kế website giới thiệu, bán hàng và đặt lịch cho cửa hàng, công ty tại Đắk Lắk và khắp các tỉnh.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook PAL Web Agency"
              className="grid size-10 place-items-center rounded-full bg-white/10 text-gold transition-colors hover:bg-white/20"
            >
              <FacebookIcon />
            </a>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener"
              aria-label="Zalo PAL Web Agency"
              className="grid size-10 place-items-center rounded-full bg-white/10 text-gold transition-colors hover:bg-white/20"
            >
              <ZaloIcon />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-white">Trang</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm font-semibold text-white">Liên hệ</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 shrink-0 text-gold" />
              <span>{site.addressDisplay}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 shrink-0 text-gold" />
              <a href={`tel:${site.phone}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs sm:px-6">© 2026 PAL Web Agency · Thiết kế website tại Đắk Lắk</p>
      </div>
    </footer>
  );
}

/** Thanh gọi / Zalo cố định ở đáy màn hình, chỉ hiện trên điện thoại */
export function MobileBar() {
  return (
    <div data-track-area="mobile_bar" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={`tel:${site.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-ink py-3 font-semibold text-white">
        <PhoneIcon width={17} height={17} /> Gọi ngay
      </a>
      <a href={site.zalo} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-accent py-3 font-semibold text-white">
        <ZaloIcon /> Nhắn Zalo
      </a>
    </div>
  );
}
