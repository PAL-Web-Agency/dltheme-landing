import { site } from '@/lib/site';
import { Logo } from './Logo';
import { PhoneIcon } from './icons';

const links = [
  { href: '#mau', label: 'Mẫu giao diện' },
  { href: '#hoi-dap', label: 'Hỏi đáp' },
  { href: '#lien-he', label: 'Liên hệ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="" aria-label="DL Theme — về đầu trang">
          <Logo />
        </a>
        <nav aria-label="Chính" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.94rem] text-ink-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          <PhoneIcon width={16} height={16} />
          <span className="font-mono tracking-tight">{site.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
