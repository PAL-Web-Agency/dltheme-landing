import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Templates, Faq, Contact, Footer, MobileBar } from '@/components/Sections';
import { site } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: '+84' + site.phone.slice(1),
  email: site.email,
  areaServed: 'VN',
  address: { '@type': 'PostalAddress', addressRegion: site.area, addressCountry: 'VN' },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
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
