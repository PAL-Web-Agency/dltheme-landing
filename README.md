# DL Theme — Landing page

Trang giới thiệu dịch vụ làm website của DL Theme (Đắk Lắk). Next.js App Router + Tailwind CSS v4, toàn bộ trang được build tĩnh.

## Chạy ở máy

```bash
npm install
npm run dev        # http://localhost:3000
```

## Sửa nội dung

| Muốn sửa | File |
| --- | --- |
| SĐT, email, Zalo, mô tả SEO | `src/lib/site.ts` |
| Danh sách mẫu (tên, ngành, số trang, ghi chú) | `src/data/templates.ts` |
| Các bước làm, "Website nào cũng có", Hỏi đáp | `src/components/Sections.tsx` |
| Tiêu đề lớn đầu trang | `src/components/Hero.tsx` |
| Ảnh khi chia sẻ link (1200×630) | `src/app/opengraph-image.png` |

## Thêm mẫu mới

1. Đưa mẫu lên repo `html-templates` (GitHub Pages).
2. Thêm 1 object vào `src/data/templates.ts` (slug = tên thư mục).
3. Chụp ảnh xem trước: `npm run shots -- <slug>` (cần Google Chrome).
   Nếu ảnh chụp đúng lúc slider đang chuyển, chạy lại với `WAIT=1200 npm run shots -- <slug>`.

## Deploy lên Vercel

1. Đẩy thư mục này lên một repo GitHub.
2. Vào vercel.com → Add New → Project → chọn repo → Deploy (không cần cấu hình gì thêm).
3. Khi gắn tên miền riêng: Settings → Environment Variables → thêm `NEXT_PUBLIC_SITE_URL=https://tenmien.vn`, rồi Redeploy.
