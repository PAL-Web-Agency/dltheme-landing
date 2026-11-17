import type { Metadata } from 'next';
import Link from 'next/link';
import { TemplateGallery } from '@/components/TemplateGallery';
import { CtaBand, PageHero } from '@/components/ui';
import { categories, demoUrl, templates } from '@/data/templates';
import { site } from '@/lib/site';
import { JsonLd, ldId } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Mẫu giao diện website theo ngành',
  description: `${templates.length} mẫu website có demo chạy thật: khách sạn, nhà hàng, cà phê, spa, salon, cửa hàng, công ty dịch vụ. Chọn mẫu, PAL chỉnh theo thương hiệu của bạn.`,
  alternates: { canonical: '/mau-giao-dien' },
  openGraph: { url: '/mau-giao-dien' },
};

const categoryLabel = (c: string) => categories.find((x) => x.id === c)?.label;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${site.url}/mau-giao-dien#mau`,
  name: 'Mẫu giao diện website theo ngành',
  numberOfItems: templates.length,
  itemListElement: templates.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: `Mẫu website ${t.name}`,
      description: t.industry,
      genre: categoryLabel(t.category),
      url: demoUrl(t),
      image: `${site.url}/templates/${t.slug}.webp`,
      inLanguage: 'vi',
      creator: { '@id': ldId('business') },
    },
  })),
};

export default function TemplatesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow="Mẫu giao diện" title="Mẫu website theo ngành, có demo chạy thật">
        Bấm vào ảnh để mở demo, xem thử trên cả điện thoại. Chữ và hình trong mẫu chỉ để minh hoạ — khi làm sẽ thay bằng thông tin, màu
        sắc và logo của bạn.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <TemplateGallery />

        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-dashed border-accent/50 bg-accent-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold">Không thấy mẫu đúng ngành?</p>
            <p className="mt-1 text-ink-2">Mẫu chỉ là điểm bắt đầu: màu sắc, bố cục, số trang đều đổi được. Hoặc PAL làm mới theo yêu cầu.</p>
          </div>
          <Link
            href="/lien-he?mau=theo-yeu-cau"
            className="shrink-0 font-semibold text-accent-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Kể PAL nghe ngành của bạn →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
