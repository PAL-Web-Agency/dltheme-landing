export const site = {
  name: 'PAL Web Agency',
  tagline: 'Thiết kế website tại Đắk Lắk',
  /** Tiêu đề trang chủ (thẻ <title>), nên dưới ~60 ký tự để Google không cắt */
  title: 'PAL Web Agency — Thiết kế website tại Đắk Lắk',
  /** Mô tả SEO, nên khoảng 140–160 ký tự */
  description:
    'PAL Web Agency nhận thiết kế website giới thiệu, bán hàng, đặt lịch cho khách sạn, nhà hàng, spa, cửa hàng tại Đắk Lắk. Có sẵn mẫu theo ngành, xem demo trước khi làm.',
  keywords: [
    'thiết kế website Đắk Lắk',
    'làm website Đắk Lắk',
    'thiết kế website Buôn Ma Thuột',
    'thiết kế website Ea Drăng',
    'PAL Web Agency',
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
  facebook: 'https://www.facebook.com/palwebagency',
  address: {
    street: '217 Trần Quốc Toản',
    locality: 'Ea Drăng',
    region: 'Đắk Lắk',
  },
  addressDisplay: '217 Trần Quốc Toản, Ea Drăng, Đắk Lắk',
  area: 'Đắk Lắk',
  /**
   * Link Google Apps Script (Web app) để lưu form liên hệ vào Google Sheet.
   * Có thể ghi đè bằng biến NEXT_PUBLIC_FORM_ENDPOINT trong Vercel. Để '' trong code → form chỉ gửi qua Zalo / email.
   * Hướng dẫn: scripts/google-sheet-form.gs
   */
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
    'https://script.google.com/macros/s/AKfycbwyPLGfJR6YAIFBMIlrI6_7bkjuWOaYM19se9LLxvFDyA7_4IEUQbP4iPcqfjyQNl2KSQ/exec',
  /** Mã xác minh Google Search Console (thẻ HTML, phần content="...") */
  googleVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '1j4j1pPm8Jj31Auy30Sc1G13PSjZrIZ4vCwt6KLTCiE',
  /** Google Analytics 4 — gắn trực tiếp trong code. Để '' trong code → tắt. KHÔNG thêm thẻ GA4 trong GTM nữa (sẽ đếm trùng) */
  gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-JK642LVJLC',
  /** Google Tag Manager — dùng cho Facebook Pixel, Google Ads… sau này. Để '' trong code → tắt */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  /** Ngày cập nhật nội dung gần nhất (dùng cho sitemap). Đổi khi thêm mẫu mới. */
  updated: '2026-11-17',
  // Vercel tự cấp VERCEL_PROJECT_PRODUCTION_URL. Khi có tên miền riêng,
  // đặt NEXT_PUBLIC_SITE_URL=https://tenmien.vn trong Vercel > Settings > Environment Variables.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  ).replace(/\/$/, ''),
};

export const nav = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/mau-giao-dien', label: 'Mẫu giao diện' },
  { href: '/lien-he', label: 'Liên hệ' },
] as const;
