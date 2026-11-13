// Danh sách mẫu giao diện. Thêm mẫu mới: thêm 1 object vào đây,
// rồi chạy `npm run shots -- <slug>` để tạo ảnh xem trước.

export const DEMO_BASE = 'https://pal-web-agency.github.io/html-templates';

export type Category = 'du-lich' | 'lam-dep' | 'an-uong' | 'dich-vu' | 'ban-hang' | 'the-thao';

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'du-lich', label: 'Du lịch & khách sạn' },
  { id: 'lam-dep', label: 'Làm đẹp & spa' },
  { id: 'an-uong', label: 'Nhà hàng & cà phê' },
  { id: 'dich-vu', label: 'Dịch vụ' },
  { id: 'ban-hang', label: 'Bán hàng' },
  { id: 'the-thao', label: 'Thể thao' },
];

export type Template = {
  slug: string;
  name: string;
  industry: string;
  category: Category;
  /** Màu chủ đạo của mẫu, dùng làm điểm nhấn nhỏ trên thẻ */
  color: string;
  /** Link demo riêng, nếu mẫu không nằm trên DEMO_BASE */
  demo?: string;
};

export const demoUrl = (t: Pick<Template, 'slug' | 'demo'>) => t.demo ?? `${DEMO_BASE}/${t.slug}/`;

export const templates: Template[] = [
  {
    slug: 'pnp-travel',
    name: 'PNP Travel Việt',
    industry: 'Công ty du lịch, đặt tour',
    category: 'du-lich',
    color: '#1f7a2e',
    demo: 'https://pnptravelviet.com/',
  },
  {
    slug: 'da-lieu-thu-hien',
    name: 'Da liễu Thu Hiền',
    industry: 'Phòng khám da liễu, thẩm mỹ',
    category: 'lam-dep',
    color: '#3aa59a',
    demo: 'https://dalieuthuhien.vn/',
  },
  {
    slug: 'hotel-da-lat',
    name: 'Thông Reo Hotel',
    industry: 'Khách sạn, homestay, resort nghỉ dưỡng',
    category: 'du-lich',
    color: '#1d3a30',
  },
  {
    slug: 'hotel-da-nang',
    name: 'Sóng Biếc Hotel',
    industry: 'Khách sạn biển, đặt phòng trực tuyến',
    category: 'du-lich',
    color: '#e2764f',
  },
  {
    slug: 'tu-van-du-hoc-xkld',
    name: 'DL Global',
    industry: 'Tư vấn du học, xuất khẩu lao động',
    category: 'dich-vu',
    color: '#0a9e8f',
  },
  {
    slug: 'bicycle-sport',
    name: 'DLTheme Bike',
    industry: 'Cửa hàng xe đạp thể thao, xe đạp điện',
    category: 'the-thao',
    color: '#ff5b14',
  },
  {
    slug: 'hair-salon-men',
    name: 'DLTheme Barber',
    industry: 'Tiệm cắt tóc nam, barbershop',
    category: 'lam-dep',
    color: '#c62f3a',
  },
  {
    slug: 'spa',
    name: 'DLTheme Spa',
    industry: 'Spa, massage, chăm sóc da, đặt lịch trị liệu',
    category: 'lam-dep',
    color: '#4a2c22',
  },
  {
    slug: 'solar-energy',
    name: 'Năng lượng xanh',
    industry: 'Điện mặt trời, năng lượng tái tạo',
    category: 'dich-vu',
    color: '#1e8a3c',
  },
  {
    slug: 'house-construction-services',
    name: 'Xây nhà đẹp',
    industry: 'Thiết kế, thi công, sửa chữa nhà',
    category: 'dich-vu',
    color: '#a8732f',
  },
  {
    slug: 'coffee',
    name: 'Mộc Coffee',
    industry: 'Quán cà phê, tiệm bánh',
    category: 'an-uong',
    color: '#3d2416',
  },
  {
    slug: 'com-restaurant',
    name: 'DLRestaurant',
    industry: 'Nhà hàng, ẩm thực Việt',
    category: 'an-uong',
    color: '#6e1a26',
  },
  {
    slug: 'ban-mat-ong',
    name: 'Mật ong Đắk Lắk',
    industry: 'Cửa hàng bán sản phẩm',
    category: 'ban-hang',
    color: '#e8960c',
  },
  {
    slug: 'pet-care-services',
    name: 'DLTheme Pet Care',
    industry: 'Chăm sóc thú cưng, thú y, cửa hàng phụ kiện',
    category: 'dich-vu',
    color: '#1a9e93',
  },
  {
    slug: 'clean-service',
    name: 'Vệ sinh chuyên nghiệp',
    industry: 'Dịch vụ vệ sinh nhà, văn phòng',
    category: 'dich-vu',
    color: '#0e8fb3',
  },
  {
    slug: 'ship',
    name: 'DLTheme Logistics',
    industry: 'Vận chuyển, kho bãi',
    category: 'dich-vu',
    color: '#1b4d3e',
  },
  {
    slug: 'pickleball',
    name: 'DLTheme Pickleball',
    industry: 'Câu lạc bộ thể thao, sân tập, lớp học',
    category: 'the-thao',
    color: '#c99a55',
  },
  {
    slug: 'smart-booking',
    name: 'Smart Booking',
    industry: 'Tiệm nail, salon làm đẹp có đặt lịch',
    category: 'lam-dep',
    color: '#b8994f',
    demo: 'https://dltheme-smart-booking.site.je/',
  },
];
