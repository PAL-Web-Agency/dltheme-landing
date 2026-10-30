'use client';

import { useEffect, useState } from 'react';
import { templates } from '@/data/templates';
import { site } from '@/lib/site';
import { PICK_EVENT } from './TemplateGallery';
import { MailIcon, ZaloIcon } from './icons';

const CUSTOM = 'theo-yeu-cau';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tpl, setTpl] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');

  // Nhận mẫu khi khách bấm "Chọn mẫu này" ở danh sách
  useEffect(() => {
    const onPick = (e: Event) => setTpl((e as CustomEvent<string>).detail);
    window.addEventListener(PICK_EVENT, onPick);
    return () => window.removeEventListener(PICK_EVENT, onPick);
  }, []);

  const tplLabel =
    tpl === CUSTOM ? 'Làm mới theo yêu cầu' : templates.find((t) => t.slug === tpl)?.name ?? 'Chưa chọn';

  const text = [
    `Chào DL Theme, mình cần làm website.`,
    name && `Tên: ${name}`,
    phone && `SĐT: ${phone}`,
    `Mẫu quan tâm: ${tplLabel}`,
    msg && `Ghi chú: ${msg}`,
  ]
    .filter(Boolean)
    .join('\n');

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Làm website — ${name || 'khách mới'}`,
  )}&body=${encodeURIComponent(text)}`;

  async function sendZalo() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Đã chép lời nhắn. Mở Zalo rồi dán (giữ tay → Dán) để gửi.');
    } catch {
      setStatus('Không chép tự động được — bạn nhắn Zalo trực tiếp nhé.');
    }
    window.open(site.zalo, '_blank', 'noopener');
  }

  const field =
    'mt-1.5 w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink';

  return (
    <form
      className="rounded-xl border border-line bg-card p-5 sm:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Tên của bạn
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Nguyễn Văn A" />
        </label>
        <label className="block text-sm font-medium">
          Số điện thoại
          <input
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="09xx xxx xxx"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium">
        Mẫu bạn quan tâm
        <select className={field} value={tpl} onChange={(e) => setTpl(e.target.value)}>
          <option value="">Chưa chọn</option>
          {templates.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name} — {t.industry}
            </option>
          ))}
          <option value={CUSTOM}>Không có mẫu hợp — làm mới theo yêu cầu</option>
        </select>
      </label>
      <label className="mt-4 block text-sm font-medium">
        Bạn kinh doanh gì, cần website làm gì?
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="VD: Quán cà phê ở Buôn Ma Thuột, cần trang giới thiệu menu và vị trí quán."
        />
      </label>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={sendZalo}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          <ZaloIcon /> Gửi qua Zalo
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <MailIcon /> Gửi qua email
        </button>
      </div>
      <p className="mt-3 min-h-5 text-sm text-muted" role="status">
        {status}
      </p>
    </form>
  );
}
