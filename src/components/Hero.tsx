import { site } from '@/lib/site';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ArrowDown, ZaloIcon } from './icons';

const facts = [
  { value: 'Xem trước', label: 'mẫu nào cũng có bản demo chạy thật' },
  { value: 'Gọn trên điện thoại', label: 'hiển thị tốt cả trên di động lẫn máy tính' },
  { value: 'Đúng thương hiệu', label: 'đổi màu, logo, hình ảnh theo cửa hàng của bạn' },
  { value: 'Làm qua Zalo', label: 'khách ở tỉnh nào cũng làm được' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 pb-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-20">
        <div className="lg:col-span-6 lg:pt-6">
          <p className="font-mono text-xs tracking-wide text-muted uppercase">Làm website · Đắk Lắk</p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-6xl">
            Chọn một mẫu website <span className="whitespace-nowrap">ưng ý,</span> phần còn lại <span className="scribble">để mình lo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-ink-2">
            DL Theme nhận làm website cho cửa hàng, quán ăn, spa, công ty dịch vụ. Bạn gửi logo, hình ảnh và
            thông tin — mình sửa mẫu theo thương hiệu của bạn, gắn tên miền rồi bàn giao.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#mau"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Xem các mẫu <ArrowDown width={16} height={16} />
            </a>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <ZaloIcon /> Nhắn Zalo
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Hoặc gọi thẳng{' '}
            <a href={`tel:${site.phone}`} className="font-mono text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        {/* Ảnh chụp thật từ các mẫu */}
        <div className="relative lg:col-span-6" aria-hidden>
          <div className="relative mx-auto aspect-[10/8.4] max-w-[560px]">
            <BrowserFrame
              slug="pickleball"
              alt=""
              className="absolute top-0 right-0 w-[78%] rotate-[1.5deg]"
              sizes="(min-width: 1024px) 440px, 78vw"
            />
            <BrowserFrame
              slug="clean-service"
              alt=""
              className="absolute bottom-[6%] left-0 w-[80%] -rotate-1"
              sizes="(min-width: 1024px) 450px, 80vw"
              preload
            />
            <PhoneFrame slug="ban-mat-ong" alt="" className="absolute right-[2%] bottom-0 w-[24%] rotate-[3deg]" sizes="140px" />
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-muted lg:text-right">
            ↑ ảnh chụp từ mẫu đang chạy, không phải ảnh minh hoạ
          </p>
        </div>
      </div>

      <div className="border-y border-line">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {facts.map((f, i) => (
            <li
              key={f.label}
              className={`py-6 pr-4 ${i % 2 === 1 ? 'border-l border-line pl-4 sm:pl-6' : ''} ${
                i >= 2 ? 'border-t border-line lg:border-t-0' : ''
              } ${i === 2 ? 'lg:border-l lg:pl-6' : ''}`}
            >
              <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">{f.value}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{f.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
