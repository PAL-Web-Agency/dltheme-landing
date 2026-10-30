import { site } from '@/lib/site';
import { TemplateGallery } from './TemplateGallery';
import { ContactForm } from './ContactForm';
import { MailIcon, PhoneIcon, PinIcon, ZaloIcon } from './icons';

function SectionHead({ no, kicker, title, children }: { no: string; kicker: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
      <p className="font-mono text-xs tracking-wide text-muted uppercase lg:col-span-3 lg:pt-3">
        <span className="text-accent">{no}</span> — {kicker}
      </p>
      <div className="lg:col-span-9">
        <h2 className="font-display text-4xl leading-[1.08] font-bold tracking-[-0.025em] text-balance sm:text-5xl">{title}</h2>
        {children && <div className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-2">{children}</div>}
      </div>
    </div>
  );
}

export function Templates() {
  return (
    <section id="mau" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHead no="01" kicker="Mẫu giao diện" title="Mẫu nào cũng có bản demo chạy thật.">
        Bấm vào ảnh để mở demo, xem thử trên cả điện thoại. Chữ và hình trong mẫu chỉ để minh hoạ — khi làm
        sẽ thay bằng thông tin, màu sắc và logo của bạn.
      </SectionHead>
      <div className="mt-12">
        <TemplateGallery />
      </div>
      <div className="mt-16 flex flex-col gap-4 rounded-xl border border-dashed border-ink/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-xl font-bold">Không thấy mẫu đúng ngành?</p>
          <p className="mt-1 text-ink-2">
            Mẫu chỉ là điểm bắt đầu: màu sắc, bố cục, số trang đều đổi được. Hoặc mình làm mới theo yêu cầu.
          </p>
        </div>
        <a href="#lien-he" className="shrink-0 font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
          Kể mình nghe ngành của bạn →
        </a>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'Làm website giá bao nhiêu?',
    a: `Tuỳ mẫu, số trang và phần cần chỉnh. Gọi ${site.phoneDisplay} hoặc nhắn Zalo kể nhu cầu, mình báo giá cụ thể trước khi bắt đầu.`,
  },
  {
    q: 'Bao lâu thì có website?',
    a: 'Phụ thuộc số trang và việc gửi nội dung. Khi nhận đủ logo, hình ảnh và thông tin, mình báo ngày bàn giao cụ thể.',
  },
  {
    q: 'Mẫu đang là tiếng Anh, làm tiếng Việt được không?',
    a: 'Được. Chữ trong mẫu chỉ để minh hoạ, toàn bộ sẽ thay bằng thông tin của bạn, viết bằng ngôn ngữ bạn cần.',
  },
  {
    q: 'Đổi màu, logo, bố cục được không?',
    a: 'Được. Màu, font chữ, logo, hình ảnh đổi theo thương hiệu; bớt hoặc thêm mục trên trang cũng được.',
  },
  {
    q: 'Mình không ở Đắk Lắk thì có làm được không?',
    a: 'Được. Mọi việc trao đổi qua điện thoại, Zalo, email; bạn xem bản nháp qua link trên điện thoại.',
  },
  {
    q: 'Tên miền thì sao?',
    a: 'Mình tư vấn chọn tên miền và hỗ trợ gắn vào website. Phí tên miền tuỳ đuôi (.vn, .com) và nhà cung cấp, báo rõ trước khi đăng ký.',
  },
];

export function Faq() {
  return (
    <section id="hoi-dap" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHead no="02" kicker="Hỏi đáp" title="Mấy câu khách hay hỏi." />
      <div className="mt-12 lg:ml-[25%] lg:pl-2">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line py-1 first:border-t">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="font-mono text-xl text-muted transition-transform group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-5 leading-relaxed text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const rows = [
    { icon: <PhoneIcon />, label: 'Điện thoại', value: site.phoneDisplay, href: `tel:${site.phone}`, mono: true },
    { icon: <ZaloIcon />, label: 'Zalo', value: site.phoneDisplay, href: site.zalo, mono: true, external: true },
    { icon: <MailIcon />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: <PinIcon />, label: 'Khu vực', value: `${site.area} — nhận làm cho khách mọi tỉnh` },
  ];

  return (
    <section id="lien-he" className="bg-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-wide text-paper/60 uppercase">
            <span className="text-gold">03</span> — Liên hệ
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] font-bold tracking-[-0.025em] sm:text-5xl">
            Kể mình nghe bạn cần gì.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/75">
            Điền vài dòng bên cạnh rồi gửi qua Zalo hoặc email. Hoặc gọi thẳng — nhanh nhất vẫn là gọi.
          </p>
          <ul className="mt-10 border-t border-paper/15">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center gap-4 border-b border-paper/15 py-4">
                <span className="text-gold">{r.icon}</span>
                <span className="w-24 shrink-0 text-sm text-paper/60">{r.label}</span>
                {r.href ? (
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}
                    className={`min-w-0 break-all hover:text-gold ${r.mono ? 'font-mono text-lg' : ''}`}
                  >
                    {r.value}
                  </a>
                ) : (
                  <span>{r.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-ink lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep pb-24 text-paper/55 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-paper/15 px-4 py-8 text-sm sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 DL Theme · Làm website tại Đắk Lắk</p>
        <p>
          <a href={`tel:${site.phone}`} className="font-mono hover:text-paper">
            {site.phoneDisplay}
          </a>{' '}
          ·{' '}
          <a href={`mailto:${site.email}`} className="hover:text-paper">
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}

/** Thanh gọi / Zalo cố định ở đáy màn hình, chỉ hiện trên điện thoại */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={`tel:${site.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-ink py-3 font-semibold text-paper">
        <PhoneIcon width={17} height={17} /> Gọi ngay
      </a>
      <a href={site.zalo} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-accent py-3 font-semibold text-white">
        <ZaloIcon /> Nhắn Zalo
      </a>
    </div>
  );
}
