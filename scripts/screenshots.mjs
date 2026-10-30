// Chụp ảnh desktop + mobile của các mẫu đã deploy trên GitHub Pages,
// rồi nén thành WebP vào public/templates/.
// Chạy: npm run shots            (tất cả mẫu)
//       npm run shots -- spa coffee   (chỉ vài mẫu)
// Cần Google Chrome cài sẵn; đổi CHROME_PATH nếu đường dẫn khác.
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { templates, DEMO_BASE } from '../src/data/templates.ts';

const CHROME =
  process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const only = process.argv.slice(2);
const list = only.length ? templates.filter((t) => only.includes(t.slug)) : templates;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });

async function capture(slug, viewport) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(`${DEMO_BASE}/${slug}/`, { waitUntil: 'networkidle0', timeout: 60000 });
  // Cuộn xuống để kích hoạt lazy-load / animation, rồi quay lại đầu trang
  await page.evaluate(async () => {
    for (let y = 0; y < 3000; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, Number(process.env.WAIT ?? 3500)));
  const buf = await page.screenshot();
  await page.close();
  return buf;
}

for (const t of list) {
  const desktop = await capture(t.slug, { width: 1440, height: 900 });
  await sharp(desktop).resize(1200).webp({ quality: 78 }).toFile(`public/templates/${t.slug}.webp`);

  const mobile = await capture(t.slug, {
    width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
  });
  await sharp(mobile).resize(360).webp({ quality: 78 }).toFile(`public/templates/${t.slug}-m.webp`);
  console.log('✓', t.slug);
}

await browser.close();
