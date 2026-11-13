import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Templates, Faq, Contact, Footer, MobileBar, faqs } from '@/components/Sections';
import { categories, templates, demoUrl } from '@/data/templates';
import { site } from '@/lib/site';

const id = (frag: string) => `${site.url}/#${frag}`;
const categoryLabel = (c: string) => categories.find((x) => x.id === c)?.label;

// Dữ liệu có cấu trúc (schema.org) — giúp Google hiểu trang: doanh nghiệp, website, danh sách mẫu, hỏi đáp
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': id('business'),
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image.png`,
      telephone: '+84' + site.phone.slice(1),
      email: site.email,
      sameAs: [site.zalo],
      priceRange: '$$',
      knowsLanguage: 'vi',
      address: { '@type': 'PostalAddress', addressRegion: site.area, addressCountry: 'VN' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: site.area },
        { '@type': 'Country', name: 'Việt Nam' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84' + site.phone.slice(1),
        email: site.email,
        contactType: 'customer service',
        availableLanguage: 'vi',
        areaServed: 'VN',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thiết kế website theo mẫu',
          serviceType: 'Thiết kế website',
          provider: { '@id': id('business') },
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': id('website'),
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'vi',
      publisher: { '@id': id('business') },
    },
    {
      '@type': 'WebPage',
      '@id': id('webpage'),
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: 'vi',
      isPartOf: { '@id': id('website') },
      about: { '@id': id('business') },
      dateModified: site.updated,
      mainEntity: { '@id': id('mau') },
    },
    {
      '@type': 'ItemList',
      '@id': id('mau'),
      name: 'Mẫu giao diện website theo ngành',
      numberOfItems: templates.length,
      itemListElement: templates.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: `Mẫu website ${t.name}`,
          description: t.industry,
          genre: categoryLabel(t.category),
          url: demoUrl(t),
          image: `${site.url}/templates/${t.slug}.webp`,
          inLanguage: 'vi',
          creator: { '@id': id('business') },
        },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': id('hoi-dap'),
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a href="#mau" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
        Bỏ qua, tới danh sách mẫu
      </a>
      <Header />
      <main>
        <Hero />
        <Templates />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
