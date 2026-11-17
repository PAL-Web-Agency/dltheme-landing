import Link from 'next/link';
import { templates } from '@/data/templates';
import { site } from '@/lib/site';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ArrowRight, CheckIcon, ZaloIcon } from './icons';
import { btn, Eyebrow } from './ui';

const points = ['Xem demo chạy thật trước khi làm', 'Hiển thị đẹp trên điện thoại', 'Báo giá rõ, không phát sinh'];

export function Hero() {
  return (
    <section data-track-area="hero" className="relative overflow-hidden border-b border-line bg-gradient-to-br from-paper-2/80 via-paper to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-6">
          <Eyebrow>Thiết kế website · Đắk Lắk</Eyebrow>
          <h1 className="mt-4 text-[2.3rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            Website chuyên nghiệp cho <span className="text-accent">cửa hàng</span> và <span className="text-accent">doanh nghiệp</span> của bạn
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
            PAL Web Agency thiết kế website giới thiệu, bán hàng và đặt lịch cho khách sạn, nhà hàng, spa, cửa hàng và công ty dịch vụ. Chọn
            mẫu có sẵn để lên web nhanh, hoặc làm mới theo yêu cầu riêng.
          </p>
          <ul className="mt-6 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-ink-2">
                <span className="grid size-5 place-items-center rounded-full bg-accent-soft text-accent-ink">
                  <CheckIcon width={13} height={13} strokeWidth={2.6} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/mau-giao-dien" className={btn.primary}>
              Xem {templates.length} mẫu giao diện <ArrowRight width={16} height={16} />
            </Link>
            <a href={site.zalo} target="_blank" rel="noopener" className={btn.outline}>
              <ZaloIcon className="text-accent" /> Tư vấn qua Zalo
            </a>
          </div>
        </div>

        {/* Ảnh chụp thật từ các mẫu */}
        <div className="relative lg:col-span-6" aria-hidden>
          <div className="absolute inset-x-[8%] top-[6%] bottom-[2%] rounded-[2rem] bg-accent-soft" />
          <div className="relative mx-auto aspect-[10/8.4] max-w-[560px]">
            <BrowserFrame
              slug="hotel-da-lat"
              alt=""
              className="absolute top-0 right-0 w-[78%] rotate-[1.5deg]"
              sizes="(min-width: 1024px) 440px, 78vw"
            />
            <BrowserFrame
              slug="smart-booking"
              alt=""
              className="absolute bottom-[6%] left-0 w-[80%] -rotate-1"
              sizes="(min-width: 1024px) 450px, 80vw"
              preload
            />
            <PhoneFrame slug="hair-salon-men" alt="" className="absolute right-[2%] bottom-0 w-[24%] rotate-[3deg]" sizes="140px" />
          </div>
        </div>
      </div>
    </section>
  );
}
