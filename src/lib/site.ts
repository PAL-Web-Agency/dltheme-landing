export const site = {
  name: 'DL Theme',
  tagline: 'Nhận làm website tại Đắk Lắk',
  description:
    'DL Theme nhận làm website cho cửa hàng, quán ăn, spa, công ty dịch vụ tại Đắk Lắk và các tỉnh. Có sẵn mẫu giao diện theo ngành, chỉnh theo thương hiệu của bạn.',
  phone: '0589888579',
  phoneDisplay: '0589 888 579',
  email: 'ppalwebagency@gmail.com',
  zalo: 'https://zalo.me/0589888579',
  area: 'Đắk Lắk',
  // Vercel tự cấp VERCEL_PROJECT_PRODUCTION_URL. Khi có tên miền riêng,
  // đặt NEXT_PUBLIC_SITE_URL=https://tenmien.vn trong Vercel > Settings > Environment Variables.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
};
