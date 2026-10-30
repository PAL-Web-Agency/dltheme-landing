import Image from 'next/image';

type FrameProps = {
  slug: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function BrowserFrame({ slug, alt, className = '', sizes, preload }: FrameProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-ink/15 bg-card shadow-[0_1px_0_rgba(0,0,0,.04),0_18px_40px_-24px_rgba(45,28,15,.45)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-paper-2/70 px-3 py-2">
        <span className="size-2 rounded-full bg-ink/20" />
        <span className="size-2 rounded-full bg-ink/20" />
        <span className="size-2 rounded-full bg-ink/20" />
        <span className="ml-2 truncate font-mono text-[10px] text-muted">…/html-templates/{slug}</span>
      </div>
      <Image
        src={`/templates/${slug}.webp`}
        alt={alt}
        width={1200}
        height={750}
        sizes={sizes ?? '(min-width: 1024px) 560px, 100vw'}
        preload={preload}
        className="block h-auto w-full"
      />
    </div>
  );
}

export function PhoneFrame({ slug, alt, className = '', sizes, preload }: FrameProps) {
  return (
    <div className={`overflow-hidden rounded-[1.1rem] border-[5px] border-ink bg-ink shadow-[0_20px_40px_-20px_rgba(45,28,15,.6)] ${className}`}>
      <Image
        src={`/templates/${slug}-m.webp`}
        alt={alt}
        width={360}
        height={779}
        sizes={sizes ?? '140px'}
        preload={preload}
        className="block aspect-[9/17] h-auto w-full rounded-[0.7rem] object-cover object-top"
      />
    </div>
  );
}
