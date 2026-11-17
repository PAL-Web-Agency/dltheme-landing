'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav, site } from '@/lib/site';
import { Logo } from './Logo';
import { CloseIcon, MenuIcon, PhoneIcon } from './icons';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header data-track-area="header" className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        {/* Thẻ <a> thường (không dùng Link) → bấm logo tải lại trang chủ */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cố ý tải lại trang */}
        <a href="/" aria-label={`${site.name} — về trang chủ`}>
          <Logo />
        </a>

        <nav aria-label="Chính" className="hidden md:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`rounded-lg px-3.5 py-2 transition-colors ${
                    isActive(l.href) ? 'bg-accent-soft text-accent-ink' : 'text-ink-2 hover:text-accent-ink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark sm:inline-flex"
          >
            <PhoneIcon width={16} height={16} />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-dien-thoai"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-dien-thoai" aria-label="Chính" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 font-medium ${
                    isActive(l.href) ? 'bg-accent-soft text-accent-ink' : 'text-ink-2'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
