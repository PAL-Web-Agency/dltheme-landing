import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { templates } from '@/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: site.updated,
      changeFrequency: 'monthly',
      priority: 1,
      // Ảnh xem trước các mẫu → giúp Google Hình ảnh lập chỉ mục
      images: templates.map((t) => `${site.url}/templates/${t.slug}.webp`),
    },
  ];
}
