import { useEffect } from 'react';
import { 
  defaultOgImage, 
  getCanonicalUrl, 
  getLocalBusinessSchema, 
  getFaqSchema, 
  getBreadcrumbSchema 
} from '../../utils/seoSchemas';

const defaultSiteTitle = 'GraphicX Studio | Sign Board Maker & LED Signage Manufacturer in Surat';
const defaultDescription = 'GraphicX Studio is Surat\'s premier signage and branding company. Custom LED sign boards, ACP elevations, acrylic letters, 3D signs, flex banners & shop branding in Surat, Gujarat.';

function DocumentHead({
  title = defaultSiteTitle,
  description = defaultDescription,
  canonicalPath = '',
  ogImage = defaultOgImage,
  ogType = 'website',
  robots = 'index, follow',
  schema = null,
  faqs = null,
  breadcrumbs = null,
}) {
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard Meta
    setMeta('description', description);
    setMeta('robots', robots);
    setMeta('theme-color', '#050505');

    // OpenGraph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:site_name', 'GraphicX Studio', 'property');
    setMeta('og:locale', 'en_IN', 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // 3. Dynamic Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;

    // 4. Structured Data (JSON-LD)
    const injectScript = (id, data) => {
      if (!data) return;
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    // Inject LocalBusiness schema on every page
    injectScript('gx-schema-local-business', getLocalBusinessSchema());

    // Inject Custom Schema if passed
    if (schema) {
      injectScript('gx-schema-custom', schema);
    }

    // Inject FAQs schema if passed
    if (faqs && faqs.length > 0) {
      injectScript('gx-schema-faqs', getFaqSchema(faqs));
    } else {
      const existingFaq = document.getElementById('gx-schema-faqs');
      if (existingFaq) existingFaq.remove();
    }

    // Inject Breadcrumbs schema if passed
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectScript('gx-schema-breadcrumbs', getBreadcrumbSchema(breadcrumbs));
    } else {
      const existingCrumb = document.getElementById('gx-schema-breadcrumbs');
      if (existingCrumb) existingCrumb.remove();
    }

    return () => {
      // Clean up custom scripts on unmount if moving between pages
      const customScript = document.getElementById('gx-schema-custom');
      if (customScript) customScript.remove();
    };
  }, [title, description, canonicalUrl, ogImage, ogType, robots, schema, faqs, breadcrumbs]);

  return null;
}

export default DocumentHead;
