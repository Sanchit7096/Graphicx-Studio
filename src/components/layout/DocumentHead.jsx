import { Helmet } from 'react-helmet-async';
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

  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = faqs && faqs.length > 0 ? getFaqSchema(faqs) : null;
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? getBreadcrumbSchema(breadcrumbs) : null;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#050505" />

      {/* Dynamic Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="GraphicX Studio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

export default DocumentHead;
