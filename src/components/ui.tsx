import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowRight, PhoneIcon, ZaloIcon } from './icons';

export const btn = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark',
  outline:
    'inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition-colors hover:border-accent hover:text-accent-ink',
};

/** Nhãn nhỏ phía trên tiêu đề mục */
export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase ${className}`}>{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 leading-relaxed text-ink-2">{children}</div>}
    </div>
  );
}

/** Đầu trang con: tiêu đề + mô tả trên nền kem */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-gradient-to-br from-paper-2/70 via-paper to-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{children}</div>}
      </div>
    </section>
  );
}

/** Dải kêu gọi liên hệ ở cuối trang */
export function CtaBand() {
  return (
    <section data-track-area="cta" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 size-64 rounded-full bg-white/5" aria-hidden />
        <div className="relative max-w-xl">
          <h2 className="text-2xl leading-snug font-semibold sm:text-3xl">Bạn đang cần một website cho cửa hàng, công ty?</h2>
          <p className="mt-3 text-white/85">
            Kể PAL nghe bạn kinh doanh gì — mình gợi ý mẫu phù hợp và báo giá rõ ràng trước khi bắt tay vào làm.
          </p>
        </div>
        <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-accent-ink transition-colors hover:bg-paper-2"
          >
            Nhận tư vấn <ArrowRight width={16} height={16} />
          </Link>
          <a
            href={site.zalo}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ZaloIcon /> Nhắn Zalo
          </a>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:hidden"
          >
            <PhoneIcon width={16} height={16} /> Gọi ngay
          </a>
        </div>
      </div>
    </section>
  );
}
