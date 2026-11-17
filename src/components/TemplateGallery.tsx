'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories, templates, demoUrl, type Category, type Template } from '@/data/templates';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ArrowUpRight } from './icons';

/** Danh sách mẫu có bộ lọc theo ngành (trang Mẫu giao diện) */
export function TemplateGallery() {
  const [cat, setCat] = useState<Category | 'all'>('all');
  const list = cat === 'all' ? templates : templates.filter((t) => t.category === cat);

  return (
    <>
      <div role="group" aria-label="Lọc theo ngành" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => {
          const active = cat === c.id;
          const count = c.id === 'all' ? templates.length : templates.filter((t) => t.category === c.id).length;
          if (!count) return null;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => setCat(c.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border py-2 pr-2 pl-4 text-sm font-medium transition-colors ${
                active ? 'border-accent bg-accent text-white' : 'border-line bg-white text-ink-2 hover:border-accent/50'
              }`}
            >
              {c.label}
              <span
                className={`inline-grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11px] leading-none tabular-nums ${
                  active ? 'bg-white/20 text-white' : 'bg-accent-soft text-accent-ink'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <TemplateGrid list={list} />
    </>
  );
}

export function TemplateGrid({ list }: { list: Template[] }) {
  return (
    <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
      {list.map((t, i) => (
        <li key={t.slug}>
          {/* 2 thẻ đầu nằm ngay hàng đầu tiên → tải ngay, không lazy */}
          <TemplateCard t={t} eager={i < 2} />
        </li>
      ))}
    </ul>
  );
}

function TemplateCard({ t, eager }: { t: Template; eager?: boolean }) {
  const demo = demoUrl(t);

  return (
    <article data-template={t.slug} className="group rounded-2xl border border-line bg-white p-4 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(31,35,40,.5)] sm:p-5">
      <a
        href={demo}
        target="_blank"
        rel="noopener"
        className="relative block rounded-xl bg-paper-2/60 p-4 pr-[12%] pb-[9%]"
        aria-label={`Mở demo mẫu ${t.name} trong tab mới`}
      >
        <BrowserFrame
          slug={t.slug}
          alt={`Mẫu website ${t.name} — ${t.industry} — giao diện trên máy tính`}
          sizes="(min-width: 1152px) 460px, (min-width: 768px) 42vw, 86vw"
          loading={eager ? 'eager' : undefined}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
        <PhoneFrame
          slug={t.slug}
          alt={`Mẫu website ${t.name} trên điện thoại`}
          className="absolute right-3 bottom-3 w-[21%] transition-transform duration-300 group-hover:translate-y-1"
          sizes="110px"
          loading={eager ? 'eager' : undefined}
        />
      </a>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
          <p className="mt-1 text-sm text-ink-2">{t.industry}</p>
        </div>
        <span className="mt-2 size-3 shrink-0 rounded-full ring-4 ring-paper" style={{ background: t.color }} aria-hidden />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Xem demo <ArrowUpRight width={15} height={15} />
        </a>
        <Link
          href={`/lien-he?mau=${t.slug}`}
          className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-ink"
        >
          Chọn mẫu này
        </Link>
      </div>
    </article>
  );
}
