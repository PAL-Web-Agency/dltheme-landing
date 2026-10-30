// Danh sách mẫu giao diện. Thêm mẫu mới: thêm 1 object vào đây,
// rồi chạy `npm run shots -- <slug>` để tạo ảnh xem trước.

export const DEMO_BASE = 'https://pal-web-agency.github.io/html-templates';

export type Category = 'an-uong' | 'dich-vu' | 'ban-hang' | 'suc-khoe';

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'dich-vu', label: 'Dịch vụ' },
  { id: 'an-uong', label: 'Ăn uống' },
  { id: 'ban-hang', label: 'Bán hàng' },
  { id: 'suc-khoe', label: 'Sức khoẻ & thể thao' },
];

export type Template = {
  slug: string;
  name: string;
  industry: string;
  category: Category;
  /** Ngôn ngữ nội dung mẫu đang dùng (sẽ đổi theo khách) */
  lang: 'Tiếng Việt' | 'Tiếng Anh';
  pages: string[];
  /** Màu chủ đạo của mẫu, dùng làm điểm nhấn nhỏ trên thẻ */
  color: string;
  note: string;
};

export const templates: Template[] = [
  {
    slug: 'spa',
    name: 'Zaipur Spa',
    industry: 'Spa, massage, chăm sóc da',
    category: 'suc-khoe',
    lang: 'Tiếng Anh',
    pages: ['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Chi tiết dịch vụ', 'Đội ngũ', 'Chi tiết nhân viên', 'Blog', 'Chi tiết bài viết', 'Liên hệ', 'Trang 404'],
    color: '#1f4442',
    note: 'Bộ trang đầy đủ nhất: có trang đội ngũ, đặt lịch và blog.',
  },
  {
    slug: 'solar-energy',
    name: 'Năng lượng xanh',
    industry: 'Điện mặt trời, năng lượng tái tạo',
    category: 'dich-vu',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Dự án', 'Tin tức', 'Chi tiết tin', 'Liên hệ'],
    color: '#1e8a3c',
    note: 'Có trang dự án để khoe công trình đã làm.',
  },
  {
    slug: 'house-construction-services',
    name: 'Xây nhà đẹp',
    industry: 'Thiết kế, thi công, sửa chữa nhà',
    category: 'dich-vu',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Dự án', 'Blog', 'Chi tiết bài viết', 'Liên hệ'],
    color: '#a8732f',
    note: 'Hợp với công ty xây dựng, nội thất, kiến trúc.',
  },
  {
    slug: 'coffee',
    name: 'Mộc Coffee',
    industry: 'Quán cà phê, tiệm bánh',
    category: 'an-uong',
    lang: 'Tiếng Anh',
    pages: ['Trang chủ', 'Giới thiệu', 'Thực đơn', 'Cửa hàng', 'Chi tiết sản phẩm', 'Liên hệ', 'Chính sách'],
    color: '#3d2416',
    note: 'Phong cách tối giản, chữ lớn, có trang bán cà phê hạt.',
  },
  {
    slug: 'com-restaurant',
    name: 'CỐM Restaurant',
    industry: 'Nhà hàng',
    category: 'an-uong',
    lang: 'Tiếng Anh',
    pages: ['Trang chủ', 'Thực đơn', 'Câu chuyện', 'Sự kiện', 'Liên hệ', 'Thông tin pháp lý'],
    color: '#c94a5a',
    note: 'Nhiều ảnh không gian, có nút đặt bàn.',
  },
  {
    slug: 'ban-mat-ong',
    name: 'Mật ong Đắk Lắk',
    industry: 'Cửa hàng bán sản phẩm',
    category: 'ban-hang',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ', 'Giới thiệu', 'Danh sách sản phẩm', 'Chi tiết sản phẩm', 'Tin tức', 'Chi tiết tin'],
    color: '#e8960c',
    note: 'Có danh mục, trang sản phẩm, nút gọi và Zalo nổi.',
  },
  {
    slug: 'pet-care-services',
    name: 'Pet Care',
    industry: 'Chăm sóc thú cưng, thú y',
    category: 'dich-vu',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ', 'Giới thiệu', 'Dịch vụ'],
    color: '#1a9e93',
    note: 'Gọn, thân thiện, nút gọi và Zalo luôn hiện.',
  },
  {
    slug: 'clean-service',
    name: 'Vệ sinh chuyên nghiệp',
    industry: 'Dịch vụ vệ sinh nhà, văn phòng',
    category: 'dich-vu',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ (một trang)'],
    color: '#0e8fb3',
    note: 'Một trang duy nhất, đủ thông tin để khách gọi ngay.',
  },
  {
    slug: 'ship',
    name: 'Logistics',
    industry: 'Vận chuyển, kho bãi',
    category: 'dich-vu',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ (một trang)'],
    color: '#c8662a',
    note: 'Một trang, có quy trình đặt hàng và bảng phí dịch vụ.',
  },
  {
    slug: 'pickleball',
    name: 'CLB Pickleball',
    industry: 'Câu lạc bộ thể thao, phòng tập',
    category: 'suc-khoe',
    lang: 'Tiếng Việt',
    pages: ['Trang chủ (một trang)'],
    color: '#c99a55',
    note: 'Bố cục dạng lưới ảnh, hợp CLB, phòng gym, lớp học.',
  },
];
