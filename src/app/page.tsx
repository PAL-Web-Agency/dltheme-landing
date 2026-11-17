import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TemplateGrid } from '@/components/TemplateGallery';
import { BagIcon, BuildingIcon, CalendarIcon, DeviceIcon, RocketIcon, SearchIcon, ShieldIcon, ChatIcon, ArrowRight } from '@/components/icons';
import { btn, CtaBand, SectionHead } from '@/components/ui';
import { templates } from '@/data/templates';
import { site } from '@/lib/site';
import { businessJsonLd, JsonLd } from '@/lib/jsonld';

const services = [
  {
    icon: BuildingIcon,
    title: 'Website giới thiệu',
    text: 'Trang giới thiệu công ty, cửa hàng, dịch vụ: thông tin rõ ràng, bản đồ, nút gọi và nhắn Zalo ngay trên điện thoại.',
  },
  {
    icon: BagIcon,
    title: 'Website bán hàng',
    text: 'Danh mục sản phẩm, giỏ hàng, đặt hàng nhanh. Phù hợp cửa hàng nông sản, đặc sản, thời trang, đồ gia dụng.',
  },
  {
    icon: CalendarIcon,
    title: 'Website đặt lịch, đặt phòng',
    text: 'Khách tự chọn dịch vụ, ngày giờ hoặc phòng trống. Dành cho spa, salon, khách sạn, homestay, sân thể thao.',
  },
  {
    icon: RocketIcon,
    title: 'Landing page quảng cáo',
    text: 'Một trang tập trung cho chiến dịch Facebook, Google Ads: giới thiệu ưu đãi và thu số điện thoại khách quan tâm.',
  },
];

const reasons = [
  { icon: DeviceIcon, title: 'Đẹp trên mọi màn hình', text: 'Phần lớn khách vào web bằng điện thoại — giao diện được làm cho điện thoại trước.' },
  { icon: SearchIcon, title: 'Chuẩn SEO cơ bản', text: 'Tiêu đề, mô tả, sơ đồ trang, tốc độ tải được làm sẵn để Google dễ tìm thấy.' },
  { icon: ShieldIcon, title: 'Bàn giao đầy đủ', text: 'Gắn tên miền, bật HTTPS, hướng dẫn sửa nội dung. Website là của bạn.' },
  { icon: ChatIcon, title: 'Hỗ trợ sau bàn giao', text: 'Cần sửa chữ, thay ảnh, thêm mục — nhắn Zalo cho PAL.' },
];

const steps = [
  { title: 'Trao đổi nhu cầu', text: 'Bạn kể về việc kinh doanh, PAL gợi ý loại website và mẫu phù hợp, báo giá trước.' },
  { title: 'Chọn mẫu, gửi nội dung', text: 'Bạn chọn mẫu, gửi logo, hình ảnh, thông tin. Chưa có thì PAL hỗ trợ soạn.' },
  { title: 'Làm và duyệt bản nháp', text: 'PAL chỉnh theo thương hiệu, gửi link xem thử trên điện thoại để bạn góp ý.' },
  { title: 'Gắn tên miền, bàn giao', text: 'Website lên mạng với tên miền riêng, kèm hướng dẫn sử dụng.' },
];

const featured = ['hotel-da-lat', 'smart-booking', 'coffee', 'spa']
  .map((s) => templates.find((t) => t.slug === s))
  .filter((t) => t !== undefined);

export default function Home() {
  return (
    <>
      <JsonLd data={businessJsonLd} />
      <Hero />

      {/* Dịch vụ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHead eyebrow="Dịch vụ" title="PAL làm những loại website nào?" center>
          Từ trang giới thiệu đơn giản đến website bán hàng, đặt lịch — chọn đúng loại bạn cần, không thừa tính năng.
        </SectionHead>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.title} className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(31,35,40,.5)]">
              <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <s.icon width={24} height={24} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mẫu nổi bật */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead eyebrow="Mẫu giao diện" title="Xem trước website của bạn trông thế nào">
              Mỗi mẫu đều có bản demo chạy thật. Khi làm, chữ, màu sắc, logo và hình ảnh sẽ được thay theo thương hiệu của bạn.
            </SectionHead>
            <Link href="/mau-giao-dien" className={`${btn.outline} shrink-0`}>
              Xem tất cả {templates.length} mẫu <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <TemplateGrid list={featured} />
        </div>
      </section>

      {/* Lý do chọn */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Vì sao chọn PAL" title="Website làm ra để dùng, không chỉ để có">
              Một website tốt giúp khách tìm thấy bạn, tin tưởng bạn và liên hệ nhanh. PAL tập trung vào những điều đó.
            </SectionHead>
            <Link href="/gioi-thieu" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-ink hover:underline">
              Tìm hiểu về PAL <ArrowRight width={16} height={16} />
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-2xl bg-paper-2/70 p-6">
                <r.icon width={26} height={26} className="text-accent-ink" />
                <h3 className="mt-4 font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quy trình */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHead eyebrow="Quy trình" title="4 bước để có website" center>
            Mọi việc trao đổi qua điện thoại, Zalo — bạn ở tỉnh nào cũng làm được.
          </SectionHead>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-line p-6">
                <span className="grid size-10 place-items-center rounded-full bg-accent text-sm font-semibold text-white">{i + 1}</span>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-sm text-muted">
            Có câu hỏi? Gọi{' '}
            <a href={`tel:${site.phone}`} className="font-semibold text-accent-ink">
              {site.phoneDisplay}
            </a>{' '}
            hoặc xem{' '}
            <Link href="/gioi-thieu#hoi-dap" className="font-semibold text-accent-ink underline-offset-4 hover:underline">
              câu hỏi thường gặp
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="border-t border-line pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
