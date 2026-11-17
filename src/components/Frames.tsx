import Image from 'next/image';

type FrameProps = {
  slug: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  /** 'eager' cho ảnh nằm ngay màn hình đầu (ảnh LCP) */
  loading?: 'eager' | 'lazy';
};

export function BrowserFrame({ slug, alt, className = '', sizes, preload, loading }: FrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_1px_0_rgba(0,0,0,.03),0_22px_44px_-26px_rgba(31,35,40,.45)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink/5 bg-paper px-3 py-2">
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
      </div>
      <Image
        src={`/templates/${slug}.webp`}
        alt={alt}
        width={1200}
        height={750}
        sizes={sizes ?? '(min-width: 1024px) 560px, 100vw'}
        preload={preload}
        loading={loading}
        className="block h-auto w-full"
      />
    </div>
  );
}

export function PhoneFrame({ slug, alt, className = '', sizes, preload, loading }: FrameProps) {
  return (
    <div className={`overflow-hidden rounded-[1.1rem] border-[5px] border-ink bg-ink shadow-[0_20px_40px_-20px_rgba(31,35,40,.6)] ${className}`}>
      <Image
        src={`/templates/${slug}-m.webp`}
        alt={alt}
        width={360}
        height={779}
        sizes={sizes ?? '140px'}
        preload={preload}
        loading={loading}
        className="block aspect-[9/17] h-auto w-full rounded-[0.7rem] object-cover object-top"
      />
    </div>
  );
}
