import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, ZaloIcon } from '@/components/icons';
import { PageHero } from '@/components/ui';
import { site } from '@/lib/site';
import { businessJsonLd, JsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: `Liên hệ PAL Web Agency để được tư vấn làm website: gọi ${site.phoneDisplay}, nhắn Zalo hoặc đến ${site.addressDisplay}.`,
  alternates: { canonical: '/lien-he' },
  openGraph: { url: '/lien-he' },
};

const mapQuery = encodeURIComponent(site.addressDisplay);

export default function ContactPage() {
  const rows = [
    { icon: PhoneIcon, label: 'Điện thoại', value: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: ZaloIcon, label: 'Zalo', value: site.phoneDisplay, href: site.zalo, external: true },
    { icon: FacebookIcon, label: 'Facebook', value: 'fb.com/palwebagency', href: site.facebook, external: true },
    { icon: MailIcon, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    {
      icon: PinIcon,
      label: 'Địa chỉ',
      value: site.addressDisplay,
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
      external: true,
    },
  ];

  return (
    <>
      <JsonLd data={businessJsonLd} />
      <PageHero eyebrow="Liên hệ" title="Kể PAL nghe bạn cần website gì">
        Điền form bên dưới, gọi điện hoặc nhắn Zalo — PAL tư vấn và báo giá cụ thể. Nhận làm cho khách ở Đắk Lắk và các tỉnh.
      </PageHero>

      <section data-track-area="contact" className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Thông tin liên hệ</h2>
          <ul className="mt-6 space-y-3">
            {rows.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-accent/60"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                    <r.icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{r.label}</span>
                    <span className="block font-medium break-words">{r.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <iframe
            title={`Bản đồ: ${site.addressDisplay}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="block h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
