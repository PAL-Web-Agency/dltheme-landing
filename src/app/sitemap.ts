import type { MetadataRoute } from 'next';
import { site, nav } from '@/lib/site';
import { templates } from '@/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: n.href === '/' ? site.url : `${site.url}${n.href}`,
    lastModified: site.updated,
    changeFrequency: 'monthly',
    priority: n.href === '/' ? 1 : 0.8,
    // Ảnh xem trước các mẫu → giúp Google Hình ảnh lập chỉ mục
    ...(n.href === '/mau-giao-dien' ? { images: templates.map((t) => `${site.url}/templates/${t.slug}.webp`) } : {}),
  }));
}
