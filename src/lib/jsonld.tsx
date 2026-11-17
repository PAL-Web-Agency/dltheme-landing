// Dữ liệu có cấu trúc (schema.org) — giúp Google hiểu trang
import { site } from './site';

export const ldId = (frag: string) => `${site.url}/#${frag}`;
const tel = '+84' + site.phone.slice(1);

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': ldId('business'),
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image.png`,
      telephone: tel,
      email: site.email,
      sameAs: [site.facebook, site.zalo],
      priceRange: '$$',
      knowsLanguage: 'vi',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: 'VN',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: site.area },
        { '@type': 'Country', name: 'Việt Nam' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: tel,
        email: site.email,
        contactType: 'customer service',
        availableLanguage: 'vi',
        areaServed: 'VN',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thiết kế website',
          serviceType: 'Thiết kế website',
          provider: { '@id': ldId('business') },
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': ldId('website'),
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'vi',
      publisher: { '@id': ldId('business') },
    },
  ],
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
