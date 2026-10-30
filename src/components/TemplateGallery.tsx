'use client';

import { useState } from 'react';
import { categories, templates, DEMO_BASE, type Category, type Template } from '@/data/templates';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ArrowUpRight } from './icons';

export const PICK_EVENT = 'dl:pick-template';

export function TemplateGallery() {
  const [cat, setCat] = useState<Category | 'all'>('all');
  const list = cat === 'all' ? templates : templates.filter((t) => t.category === cat);

  return (
    <>
      <div role="group" aria-label="Lọc theo ngành" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => {
          const active = cat === c.id;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => setCat(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                active ? 'border-ink bg-ink text-paper' : 'border-line bg-card text-ink-2 hover:border-ink/40'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((t) => (
          <li key={t.slug}>
            <TemplateCard t={t} />
          </li>
        ))}
      </ul>
    </>
  );
}

function TemplateCard({ t }: { t: Template }) {
  const demo = `${DEMO_BASE}/${t.slug}/`;

  function pick() {
    window.dispatchEvent(new CustomEvent(PICK_EVENT, { detail: t.slug }));
  }

  return (
    <article className="group">
      <a href={demo} target="_blank" rel="noopener" className="relative block pr-[9%] pb-[7%]" aria-label={`Mở demo mẫu ${t.name} trong tab mới`}>
        <BrowserFrame
          slug={t.slug}
          alt={`Trang chủ mẫu ${t.name} trên máy tính`}
          sizes="(min-width: 1152px) 500px, (min-width: 768px) 45vw, 92vw"
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
        <PhoneFrame
          slug={t.slug}
          alt={`Mẫu ${t.name} trên điện thoại`}
          className="absolute right-0 bottom-0 w-[22%] transition-transform duration-300 group-hover:translate-y-1"
          sizes="120px"
        />
      </a>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {t.name}
        </h3>
        <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
          <span className="size-2.5 rounded-full" style={{ background: t.color }} aria-hidden />
          {t.lang}
        </span>
      </div>
      <p className="mt-1 text-ink-2">{t.industry}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink-2">{t.pages.length} trang:</span> {t.pages.join(' · ')}
      </p>
      <p className="mt-2 text-sm text-muted">{t.note}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/25 px-4 py-2 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          Xem demo <ArrowUpRight width={15} height={15} />
        </a>
        <a
          href="#lien-he"
          onClick={pick}
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          Chọn mẫu này
        </a>
      </div>
    </article>
  );
}
