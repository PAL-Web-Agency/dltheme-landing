# PAL Web Agency — Website giới thiệu

Website giới thiệu dịch vụ làm website của PAL Web Agency (Ea Drăng, Đắk Lắk). Next.js App Router + Tailwind CSS v4, toàn bộ trang được build tĩnh.

Các trang: `/` (Trang chủ), `/gioi-thieu`, `/mau-giao-dien`, `/lien-he`.

## Chạy ở máy

```bash
npm install
npm run dev        # http://localhost:3000
```

## Sửa nội dung

| Muốn sửa | File |
| --- | --- |
| SĐT, email, Zalo, Facebook, địa chỉ, SEO, menu | `src/lib/site.ts` |
| Màu sắc | `src/app/globals.css` (khối `@theme`) |
| Font chữ | `src/app/layout.tsx` |
| Trang chủ (dịch vụ, lý do chọn, quy trình) | `src/app/page.tsx`, `src/components/Hero.tsx` |
| Giới thiệu, Hỏi đáp | `src/app/gioi-thieu/page.tsx` |
| Liên hệ, bản đồ | `src/app/lien-he/page.tsx`, `src/components/ContactForm.tsx` |
| Danh sách mẫu, nhóm ngành (bộ lọc) | `src/data/templates.ts` |
| Ảnh khi chia sẻ link (1200×630) | `src/app/opengraph-image.png` |

## Form liên hệ → Google Sheet

Form gửi về một Google Apps Script, script ghi thành 1 dòng trong Google Sheet và gửi email báo có khách mới.
Làm theo hướng dẫn ở đầu file `scripts/google-sheet-form.gs`, rồi đặt biến môi trường
`NEXT_PUBLIC_FORM_ENDPOINT` trong Vercel và Redeploy.

Chưa đặt biến này thì form vẫn dùng được: nút "Gửi qua email" mở ứng dụng email, nút "Gửi qua Zalo" chép lời nhắn rồi mở Zalo.

## Thêm mẫu mới

1. Đưa mẫu lên repo `html-templates` (GitHub Pages).
2. Thêm 1 object vào `src/data/templates.ts` (slug = tên thư mục, `category` chọn 1 trong các nhóm ngành ở đầu file).
3. Chụp ảnh xem trước: `npm run shots -- <slug>` (cần Google Chrome).
   Mẫu chưa đẩy lên GitHub Pages: chạy `python -m http.server 8765` trong thư mục html-templates rồi `SRC=http://localhost:8765 npm run shots -- <slug>`.
   Nếu ảnh chụp đúng lúc slider đang chuyển, chạy lại với `WAIT=1200 npm run shots -- <slug>`.
4. Đổi `updated` trong `src/lib/site.ts` thành ngày hôm nay (để sitemap báo Google có nội dung mới).

## Deploy lên Vercel

1. Đẩy thư mục này lên một repo GitHub.
2. Vào vercel.com → Add New → Project → chọn repo → Deploy (không cần cấu hình gì thêm).
3. Khi gắn tên miền riêng: Settings → Environment Variables → thêm `NEXT_PUBLIC_SITE_URL=https://tenmien.vn`, rồi Redeploy.
4. Google Search Console: chọn xác minh bằng thẻ HTML, chép mã `content` vào biến `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, Redeploy, rồi gửi `https://tenmien.vn/sitemap.xml`.
