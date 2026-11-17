'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { templates } from '@/data/templates';
import { site } from '@/lib/site';
import { CheckIcon, MailIcon, ZaloIcon } from './icons';
import { track } from './Analytics';

const CUSTOM = 'theo-yeu-cau';

export const services = [
  'Website giới thiệu công ty / cửa hàng',
  'Website bán hàng',
  'Website đặt lịch / đặt phòng',
  'Landing page quảng cáo',
  'Chưa rõ, cần tư vấn',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

/** Form liên hệ; nhận sẵn mẫu từ link "Chọn mẫu này" (/lien-he?mau=slug) */
export function ContactForm() {
  return (
    <Suspense fallback={<Form initialTpl="" />}>
      <FormFromQuery />
    </Suspense>
  );
}

function FormFromQuery() {
  const slug = useSearchParams().get('mau') ?? '';
  const valid = slug === CUSTOM || templates.some((t) => t.slug === slug);
  return <Form initialTpl={valid ? slug : ''} />;
}

function Form({ initialTpl }: { initialTpl: string }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [tpl, setTpl] = useState(initialTpl);
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [note, setNote] = useState('');

  const tplLabel =
    tpl === CUSTOM ? 'Làm mới theo yêu cầu' : templates.find((t) => t.slug === tpl)?.name ?? 'Chưa chọn';

  const text = [
    `Chào PAL Web Agency, mình cần làm website.`,
    name && `Tên: ${name}`,
    phone && `SĐT: ${phone}`,
    service && `Loại website: ${service}`,
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
      setNote('Đã chép lời nhắn. Mở Zalo rồi dán (giữ tay → Dán) để gửi.');
    } catch {
      setNote('Không chép tự động được — bạn nhắn Zalo trực tiếp nhé.');
    }
    window.open(site.zalo, '_blank', 'noopener');
  }

  async function submit(form: HTMLFormElement) {
    // Chưa cấu hình Google Sheet → mở email
    if (!site.formEndpoint) {
      window.location.href = mailto;
      return;
    }
    // Ô ẩn chống bot: người thật không điền ô này
    if ((form.elements.namedItem('website') as HTMLInputElement | null)?.value) return;

    setStatus('sending');
    setNote('');
    try {
      // Google Apps Script không trả CORS header → gửi kiểu no-cors, không đọc được phản hồi
      await fetch(site.formEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          name,
          phone,
          service,
          template: tplLabel,
          message: msg,
          page: window.location.href,
        }),
      });
      setStatus('sent');
      track('generate_lead', { service, template: tplLabel });
    } catch {
      setStatus('error');
      setNote(`Chưa gửi được — bạn gọi ${site.phoneDisplay} hoặc nhắn Zalo giúp mình nhé.`);
    }
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-sm sm:p-12" role="status">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent-soft text-accent-ink">
          <CheckIcon width={28} height={28} strokeWidth={2.4} />
        </span>
        <p className="mt-5 text-xl font-semibold">Đã nhận thông tin của bạn</p>
        <p className="mx-auto mt-2 max-w-sm text-ink-2">
          PAL sẽ gọi lại cho bạn sớm. Cần gấp thì gọi{' '}
          <a href={`tel:${site.phone}`} className="font-semibold text-accent-ink">
            {site.phoneDisplay}
          </a>{' '}
          nhé.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
    >
      <p className="text-xl font-semibold">Gửi yêu cầu tư vấn</p>
      <p className="mt-1 text-sm text-muted">Điền vài dòng, PAL sẽ liên hệ lại để tư vấn và báo giá.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Tên của bạn
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Nguyễn Văn A" required />
        </label>
        <label className="block text-sm font-medium">
          Số điện thoại / Zalo
          <input
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="09xx xxx xxx"
            pattern="[0-9 +.\-]{9,15}"
            title="Số điện thoại 9–15 chữ số"
            required
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Loại website
          <select className={field} value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Chọn loại website</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Mẫu bạn quan tâm
          <select className={field} value={tpl} onChange={(e) => setTpl(e.target.value)}>
            <option value="">Chưa chọn</option>
            {templates.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} — {t.industry}
              </option>
            ))}
            <option value={CUSTOM}>Làm mới theo yêu cầu</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium">
        Bạn kinh doanh gì, cần website làm gì?
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="VD: Quán cà phê ở Buôn Ma Thuột, cần trang giới thiệu menu và vị trí quán."
        />
      </label>
      {/* Ô bẫy bot — ẩn với người dùng */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {site.formEndpoint ? (status === 'sending' ? 'Đang gửi…' : 'Gửi yêu cầu') : (
            <>
              <MailIcon /> Gửi qua email
            </>
          )}
        </button>
        <button
          type="button"
          onClick={sendZalo}
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-ink transition-colors hover:border-accent hover:text-accent-ink"
        >
          <ZaloIcon className="text-accent" /> Gửi qua Zalo
        </button>
      </div>
      <p className={`mt-3 min-h-5 text-sm ${status === 'error' ? 'text-red-700' : 'text-muted'}`} role="status">
        {note}
      </p>
    </form>
  );
}
