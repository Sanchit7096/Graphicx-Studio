import { useEffect } from 'react';

const siteTitle = 'GraphicX Studio | Signage & Branding Agency in Surat';
const siteDescription = 'GraphicX Studio is a signage and branding agency in Surat, Gujarat, creating premium signboards, branding, and visual identity for local businesses.';
const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://graphicxstudio.com';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'GraphicX Studio',
  image: `${siteUrl}/Icon.svg`,
  url: siteUrl,
  telephone: '+91-87078-62783',
  email: 'graphicxstudio18@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, Dream Shoppers, Nr. Police Station',
    addressLocality: 'Dindoli',
    addressRegion: 'Gujarat',
    postalCode: '394210',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Surat' },
    { '@type': 'Place', name: 'Dindoli' },
  ],
  description: siteDescription,
  priceRange: '$$-$$$',
  sameAs: ['https://wa.me/918707862783'],
  keywords: ['signage agency Surat', 'branding agency Surat', 'LED signboards Surat', 'shop branding Gujarat'],
};

function DocumentHead() {
  useEffect(() => {
    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    document.title = siteTitle;
    setMeta('description', siteDescription);
    setMeta('robots', 'index, follow');
    setMeta('theme-color', '#050505');
    setMeta('og:title', siteTitle, 'property');
    setMeta('og:description', siteDescription, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', siteUrl, 'property');
    setMeta('og:image', `${siteUrl}/Icon.svg`, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', siteTitle);
    setMeta('twitter:description', siteDescription);
    setMeta('twitter:image', `${siteUrl}/Icon.svg`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl;

    let scriptTag = document.getElementById('graphicx-local-business');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'graphicx-local-business';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, []);

  return null;
}

export default DocumentHead;
