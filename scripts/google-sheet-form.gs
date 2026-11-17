/**
 * Lưu form liên hệ của website vào Google Sheet (+ gửi email báo có khách mới).
 *
 * Cài đặt (làm 1 lần):
 * 1. Tạo một Google Sheet mới, đặt tên ví dụ "Khách liên hệ website".
 * 2. Trong Sheet: Tiện ích mở rộng → Apps Script. Xoá code mẫu, dán toàn bộ file này vào, bấm Lưu.
 * 3. Bấm Triển khai (Deploy) → Tùy chọn triển khai mới → loại "Ứng dụng web":
 *      - Thực thi với tư cách: Tôi
 *      - Người có quyền truy cập: Bất kỳ ai
 *    → Triển khai → cấp quyền cho tài khoản Google → chép "URL ứng dụng web" (dạng https://script.google.com/macros/s/.../exec).
 *    Sau đó chọn hàm "kiemTra" ở thanh trên → bấm Chạy → cấp quyền (bắt buộc, nếu không form báo PERMISSION_DENIED).
 * 4. Trong Vercel: Settings → Environment Variables → thêm NEXT_PUBLIC_FORM_ENDPOINT = URL vừa chép → Redeploy.
 *
 * Sửa code này sau khi đã triển khai: Triển khai → Quản lý triển khai → sửa (bút chì) → Phiên bản: Mới → Triển khai.
 */

// Email nhận thông báo khi có khách gửi form. Để '' nếu không muốn nhận email.
const NOTIFY_EMAIL = 'palwebagency@gmail.com';

const HEADERS = ['Thời gian', 'Tên', 'Số điện thoại', 'Loại website', 'Mẫu quan tâm', 'Ghi chú', 'Trang gửi'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Chống spam đơn giản: bắt buộc có tên và SĐT, giới hạn độ dài
  const clip = (v, n) => String(v || '').slice(0, n);
  if (!p.name || !p.phone) return json({ ok: false });

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  // Thêm dấu ' trước SĐT để Sheet không xoá số 0 ở đầu
  const row = [
    new Date(),
    clip(p.name, 100),
    "'" + clip(p.phone, 20),
    clip(p.service, 100),
    clip(p.template, 100),
    clip(p.message, 2000),
    clip(p.page, 300),
  ];
  sheet.appendRow(row);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'Khách mới từ website: ' + row[1] + ' — ' + row[2].slice(1),
      body: HEADERS.slice(1).map((h, i) => h + ': ' + String(row[i + 1]).replace(/^'/, '')).join('\n'),
    });
  }
  return json({ ok: true });
}

/**
 * Chạy hàm này 1 lần trong trình soạn Apps Script (chọn "kiemTra" → Chạy) để cấp quyền
 * ghi Sheet + gửi email. Sau khi chạy sẽ có 1 dòng thử trong Sheet và 1 email thử — xoá dòng đó đi.
 */
function kiemTra() {
  doPost({ parameter: { name: 'TEST - xoá dòng này', phone: '0000000000', service: 'Kiểm tra', message: 'Chạy thử từ Apps Script' } });
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
