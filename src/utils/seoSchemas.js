import { contactInfo } from '../data/siteContent';

export const BASE_URL = 'https://graphicxstudio.com';
export const defaultOgImage = `${BASE_URL}/logo.png`;

/**
 * Builds canonical URL without trailing slashes (except root)
 */
export const getCanonicalUrl = (canonicalPath = '') => {
  if (!canonicalPath || canonicalPath === '/') return BASE_URL;
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  return `${BASE_URL}${cleanPath}`.replace(/\/+$/, '');
};

/**
 * Generates the Google LocalBusiness / ProfessionalService schema
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: contactInfo.name,
  legalName: contactInfo.legalName,
  image: defaultOgImage,
  url: BASE_URL,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  priceRange: contactInfo.priceRange || '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address.line1,
    addressLocality: contactInfo.address.city,
    addressRegion: contactInfo.address.state,
    postalCode: contactInfo.address.postalCode,
    addressCountry: contactInfo.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: contactInfo.geo.latitude,
    longitude: contactInfo.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '20:30',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Surat',
    },
    {
      '@type': 'State',
      name: 'Gujarat',
    }
  ],
  sameAs: [
    contactInfo.instagramUrl,
    contactInfo.whatsappUrl,
    contactInfo.googleMapsUrl,
  ].filter(Boolean),
  description: 'GraphicX Studio is Surat\'s premier signage and branding company. Custom LED sign boards, ACP elevations, acrylic letters, 3D signs, flex banners & shop branding in Surat, Gujarat.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Signage & Printing Services in Surat',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LED Sign Board in Surat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ACP Sign Board & Elevation in Surat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acrylic Letter Signage in Surat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Letter Sign Board in Surat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flex Banner Printing in Surat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shop Branding in Surat' } },
    ],
  },
});

/**
 * Generates Service schema for a specific service page
 */
export const getServiceSchema = (service) => {
  if (!service) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${service.slug}#service`,
    name: service.h1Title || service.title,
    description: service.shortDesc || service.fullDesc,
    serviceType: 'Signage & Branding',
    provider: {
      '@id': `${BASE_URL}/#localbusiness`
    },
    areaServed: {
      '@type': 'City',
      name: 'Surat',
    },
    category: service.category || 'Signage',
  };
};

/**
 * Generates FAQPage schema from an array of { question, answer }
 */
export const getFaqSchema = (faqs = []) => {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  };
};

/**
 * Generates BreadcrumbList schema
 */
export const getBreadcrumbSchema = (breadcrumbs = []) => {
  if (!breadcrumbs || !breadcrumbs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.path ? getCanonicalUrl(crumb.path) : BASE_URL,
    })),
  };
};
