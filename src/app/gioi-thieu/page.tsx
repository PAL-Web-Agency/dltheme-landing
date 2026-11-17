import type { Metadata } from 'next';
import Link from 'next/link';
import { BrowserFrame, PhoneFrame } from '@/components/Frames';
import { CheckIcon } from '@/components/icons';
import { btn, CtaBand, PageHero, SectionHead } from '@/components/ui';
import { templates } from '@/data/templates';
import { site } from '@/lib/site';
import { JsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description:
    'PAL Web Agency là đơn vị thiết kế website tại Ea Drăng, Đắk Lắk. Làm website giới thiệu, bán hàng, đặt lịch cho cửa hàng và doanh nghiệp nhỏ, báo giá rõ ràng.',
  alternates: { canonical: '/gioi-thieu' },
  openGraph: { url: '/gioi-thieu' },
};

const values = [
  { title: 'Nói dễ hiểu', text: 'Không dùng thuật ngữ khó. Bạn biết rõ mình nhận được gì, mất bao lâu, chi phí bao nhiêu.' },
  { title: 'Xem trước rồi mới làm', text: 'Mọi mẫu đều có demo chạy thật, bản nháp gửi link để bạn xem trên điện thoại của mình.' },
  { title: 'Vừa đủ cho nhu cầu', text: 'Cửa hàng nhỏ không cần website phức tạp. PAL tư vấn đúng thứ bạn cần, không bán thêm thứ thừa.' },
  { title: 'Ở gần, hỗ trợ lâu dài', text: 'PAL ở Ea Drăng, Đắk Lắk — gặp trực tiếp được. Sau bàn giao vẫn liên hệ được khi bạn cần sửa nội dung.' },
];

const included = [
  'Giao diện chỉnh theo logo, màu sắc thương hiệu',
  'Hiển thị tốt trên điện thoại, máy tính bảng, máy tính',
  'Nút gọi, nhắn Zalo, bản đồ Google Maps',
  'Tối ưu tốc độ tải và SEO cơ bản',
  'Hỗ trợ đăng ký và gắn tên miền riêng',
  'Hướng dẫn sử dụng khi bàn giao',
];

const faqs = [
  {
    q: 'Làm website giá bao nhiêu?',
    a: `Tuỳ loại website, số trang và phần cần chỉnh. Gọi ${site.phoneDisplay} hoặc nhắn Zalo kể nhu cầu, PAL báo giá cụ thể trước khi bắt đầu.`,
  },
  {
    q: 'Bao lâu thì có website?',
    a: 'Phụ thuộc số trang và việc gửi nội dung. Khi nhận đủ logo, hình ảnh và thông tin, PAL báo ngày bàn giao cụ thể.',
  },
  {
    q: 'Mình chưa có logo, hình ảnh thì sao?',
    a: 'Không sao. PAL hỗ trợ soạn nội dung và chọn hình ảnh phù hợp với ngành của bạn để website trông chỉn chu.',
  },
  {
    q: 'Đổi màu, logo, bố cục của mẫu được không?',
    a: 'Được. Màu, font chữ, logo, hình ảnh đổi theo thương hiệu; bớt hoặc thêm mục trên trang cũng được.',
  },
  {
    q: 'Mình không ở Đắk Lắk thì có làm được không?',
    a: 'Được. Mọi việc trao đổi qua điện thoại, Zalo, email; bạn xem bản nháp qua link trên điện thoại.',
  },
  {
    q: 'Tên miền và hosting thì sao?',
    a: 'PAL tư vấn chọn tên miền và hỗ trợ gắn vào website. Phí tên miền tuỳ đuôi (.vn, .com) và nhà cung cấp, báo rõ trước khi đăng ký.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.url}/gioi-thieu#hoi-dap`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero eyebrow="Giới thiệu" title="PAL Web Agency — làm website cho người kinh doanh thật">
        PAL là đơn vị thiết kế website tại Ea Drăng, Đắk Lắk. Khách hàng của PAL là các cửa hàng, quán ăn, spa, khách sạn, công ty dịch vụ —
        những người cần một website gọn gàng, dễ dùng để khách tìm thấy và liên hệ.
      </PageHero>

      {/* Câu chuyện */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHead eyebrow="Về PAL" title="Website tốt không cần phải phức tạp">
              <p>
                Nhiều chủ cửa hàng muốn có website nhưng ngại vì nghĩ tốn kém, khó dùng, phải chờ lâu. PAL ra đời để làm việc đó đơn giản hơn: có
                sẵn {templates.length} mẫu giao diện theo ngành, bạn xem demo, chọn mẫu ưng ý, PAL chỉnh theo thương hiệu và bàn giao.
              </p>
              <p className="mt-4">
                Cần thứ gì riêng hơn — bố cục khác, tính năng đặt lịch, bán hàng — PAL làm mới theo yêu cầu. Mọi chi phí được báo trước, không
                phát sinh bất ngờ.
              </p>
            </SectionHead>
            <Link href="/mau-giao-dien" className={`${btn.primary} mt-8`}>
              Xem các mẫu giao diện
            </Link>
          </div>
          <div className="relative lg:col-span-6" aria-hidden>
            <div className="absolute inset-[6%] rounded-[2rem] bg-accent-soft" />
            <div className="relative mx-auto aspect-[10/8] max-w-[520px]">
              <BrowserFrame slug="hotel-da-nang" alt="" className="absolute top-[4%] left-0 w-[86%]" sizes="(min-width: 1024px) 450px, 86vw" />
              <PhoneFrame slug="spa" alt="" className="absolute right-[2%] bottom-0 w-[26%]" sizes="140px" />
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHead eyebrow="Cách PAL làm việc" title="Bốn điều PAL giữ với mỗi khách hàng" center />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="rounded-2xl bg-paper p-6">
                <span className="text-3xl font-semibold text-accent/70">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Website có gì */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Bạn nhận được gì" title="Website nào PAL làm cũng có">
              Những thứ cơ bản để website hoạt động tốt và giúp khách liên hệ bạn nhanh.
            </SectionHead>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {included.map((x) => (
              <li key={x} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <CheckIcon width={14} height={14} strokeWidth={2.6} />
                </span>
                <span className="text-ink-2">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hỏi đáp */}
      <section id="hoi-dap" className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHead eyebrow="Hỏi đáp" title="Câu hỏi khách hay hỏi" center />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-line bg-white px-5 open:border-accent/50 open:bg-accent-soft/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-xl text-accent-ink transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-line pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
