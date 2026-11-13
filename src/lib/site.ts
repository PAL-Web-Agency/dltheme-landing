export const site = {
  name: 'DL Theme',
  tagline: 'Nhận làm website tại Đắk Lắk',
  /** Tiêu đề trang (thẻ <title>), nên dưới ~60 ký tự để Google không cắt */
  title: 'Làm website Đắk Lắk theo mẫu có sẵn — DL Theme',
  /** Mô tả SEO, nên khoảng 140–160 ký tự */
  description:
    'DL Theme nhận thiết kế website tại Đắk Lắk cho khách sạn, nhà hàng, spa, cửa hàng và công ty dịch vụ. Mẫu giao diện theo ngành có demo thật, chỉnh theo thương hiệu.',
  keywords: [
    'làm website Đắk Lắk',
    'thiết kế website Đắk Lắk',
    'thiết kế website Buôn Ma Thuột',
    'mẫu website theo ngành',
    'thiết kế website khách sạn',
    'thiết kế website nhà hàng',
    'thiết kế website spa',
    'website bán hàng',
  ],
  phone: '0589888579',
  phoneDisplay: '0589 888 579',
  email: 'palwebagency@gmail.com',
  zalo: 'https://zalo.me/0589888579',
  area: 'Đắk Lắk',
  /** Ngày cập nhật nội dung gần nhất (dùng cho sitemap). Đổi khi thêm mẫu mới. */
  updated: '2026-11-13',
  // Vercel tự cấp VERCEL_PROJECT_PRODUCTION_URL. Khi có tên miền riêng,
  // đặt NEXT_PUBLIC_SITE_URL=https://tenmien.vn trong Vercel > Settings > Environment Variables.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  ).replace(/\/$/, ''),
};
