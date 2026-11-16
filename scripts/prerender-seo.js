import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://graphicxstudio.com';
const distDir = path.join(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found! Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Load services.js natively
let servicesCode = fs.readFileSync(path.join(__dirname, '../src/data/services.js'), 'utf8');
servicesCode = servicesCode.replace(/import\s+(\w+)\s+from\s+["'].*?\.(png|jpg|webp)["'];?/g, 'const $1 = "/logo.png";');
servicesCode = servicesCode.replace(/import\s*\{\s*projects\s*\}\s*from\s*["'].*?["'];?/g, 'const projects = [];');
const servicesBase64 = Buffer.from(servicesCode).toString('base64');
const { default: services } = await import('data:text/javascript;base64,' + servicesBase64);

// Load siteContent.js natively
let siteContentCode = fs.readFileSync(path.join(__dirname, '../src/data/siteContent.js'), 'utf8');
siteContentCode = siteContentCode.replace(/import\s+(\w+)\s+from\s+["'].*?\.(png|jpg|webp)["'];?/g, 'const $1 = "/logo.png";');
const siteContentBase64 = Buffer.from(siteContentCode).toString('base64');
const { contactInfo, aboutContent } = await import('data:text/javascript;base64,' + siteContentBase64);

// Load base SEO config
const baseSeoConfig = {
  '/': {
    title: "GraphicX Studio | Sign Board & Printing Services in Surat",
    description: "GraphicX Studio is Surat's premier signage & branding company. Custom LED sign boards, ACP elevation, 3D letter signs, flex banners & shop branding in Surat, Gujarat.",
    h1: "Premium Sign Board & Branding Agency in Surat",
  },
  '/about': {
    title: "About GraphicX Studio | Signage & Printing Company in Surat",
    description: "Learn about GraphicX Studio, Surat's trusted signage manufacturer. With in-house fabrication in Dindoli, we deliver premium ACP, LED & 3D sign boards.",
    h1: "About GraphicX Studio — Signage & Branding Agency in Surat",
  },
  '/projects': {
    title: "Signage & Branding Projects Portfolio Surat | GraphicX Studio",
    description: "Explore our completed signage and branding projects across Surat: 3D LED letters, ACP elevations, shop fronts, banners, and office branding installations.",
    h1: "Our Signage & Branding Portfolio in Surat",
  },
  '/services': {
    title: "Sign Board & Printing Services in Surat | GraphicX Studio",
    description: "Comprehensive signage, printing & branding services in Surat. LED sign boards, ACP elevation, 3D letters, flex banner printing, shop branding & vehicle wraps.",
    h1: "Sign Board, Printing & Branding Services in Surat",
  },
  '/contact': {
    title: "Contact GraphicX Studio | Sign Board & Printing Services in Surat",
    description: "Get in touch with GraphicX Studio Surat for free site measurements, 3D signboard mockups, and competitive rates. Located in Dindoli, Surat, Gujarat.",
    h1: "Contact GraphicX Studio Surat",
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: contactInfo.name,
  legalName: contactInfo.legalName,
  image: `${BASE_URL}/logo.png`,
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
    { '@type': 'City', name: 'Surat' },
    { '@type': 'State', name: 'Gujarat' },
  ],
  sameAs: [
    contactInfo.instagramUrl,
    contactInfo.whatsappUrl,
    contactInfo.googleMapsUrl,
  ].filter(Boolean),
  description: "GraphicX Studio is Surat's premier signage and branding company. Custom LED sign boards, ACP elevations, acrylic letters, 3D signs, flex banners & shop branding in Surat, Gujarat.",
};

function buildHtml({
  title,
  description,
  canonicalUrl,
  ogImage = `${BASE_URL}/logo.png`,
  schemas = [],
  bodyHtml = '',
}) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace or inject Meta Description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${description}" />\n</head>`);
  }

  // Remove existing canonical, robots, OG, twitter tags to prevent duplicates
  html = html.replace(/<link rel="canonical"[^>]*>/gi, '');
  html = html.replace(/<meta property="og:[^>]*>/gi, '');
  html = html.replace(/<meta name="twitter:[^>]*>/gi, '');
  html = html.replace(/<meta name="robots"[^>]*>/gi, '');
  html = html.replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Build Head tags
  let headTags = `  <link rel="canonical" href="${canonicalUrl}" />\n`;
  headTags += `  <meta name="robots" content="index, follow" />\n`;
  headTags += `  <meta property="og:title" content="${title}" />\n`;
  headTags += `  <meta property="og:description" content="${description}" />\n`;
  headTags += `  <meta property="og:type" content="website" />\n`;
  headTags += `  <meta property="og:url" content="${canonicalUrl}" />\n`;
  headTags += `  <meta property="og:image" content="${ogImage}" />\n`;
  headTags += `  <meta property="og:site_name" content="GraphicX Studio" />\n`;
  headTags += `  <meta property="og:locale" content="en_IN" />\n`;
  headTags += `  <meta name="twitter:card" content="summary_large_image" />\n`;
  headTags += `  <meta name="twitter:title" content="${title}" />\n`;
  headTags += `  <meta name="twitter:description" content="${description}" />\n`;
  headTags += `  <meta name="twitter:image" content="${ogImage}" />\n`;

  // Append JSON-LD schemas
  for (const schema of schemas) {
    headTags += `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>\n`;
  }

  html = html.replace('</head>', `${headTags}</head>`);

  // Inject Body Semantic HTML inside #root
  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  return html;
}

function writePage(subPath, htmlContent) {
  const cleanPath = subPath.replace(/^\/+/, '');
  if (!cleanPath) {
    // Root index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
    return;
  }

  // Write directory index.html
  const targetDir = path.join(distDir, cleanPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent);

  // Also write clean .html file for Vercel edge cleanUrls routing
  fs.writeFileSync(path.join(distDir, `${cleanPath}.html`), htmlContent);
}

console.log('Starting Pre-rendering (SSG) for high Google SEO indexing...\n');

let count = 0;

// ─── 1. CORE PAGES ──────────────────────────────────────────────────────────

// 1.1 Home /
{
  const route = '/';
  const cfg = baseSeoConfig[route];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (aboutContent.faq?.items || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const bodyHtml = `
    <header style="padding: 20px; background: #050505; color: #fff;">
      <nav style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
        <a href="/" style="color: #ff5722; font-weight: bold; font-size: 24px; text-decoration: none;">GraphicX Studio</a>
        <div style="display: flex; gap: 20px;">
          <a href="/services" style="color: #fff; text-decoration: none;">Services</a>
          <a href="/projects" style="color: #fff; text-decoration: none;">Projects</a>
          <a href="/about" style="color: #fff; text-decoration: none;">About</a>
          <a href="/contact" style="color: #fff; text-decoration: none;">Contact</a>
        </div>
      </nav>
    </header>
    <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; color: #eee; font-family: sans-serif;">
      <h1 style="font-size: 42px; color: #fff; margin-bottom: 16px;">${cfg.h1}</h1>
      <p style="font-size: 20px; line-height: 1.6; color: #ccc; margin-bottom: 30px;">${cfg.description}</p>
      
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 28px; color: #ff5722; margin-bottom: 20px;">Our Premium Signage Services in Surat</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          ${services.slice(0, 12).map((s) => `
            <div style="background: #111; padding: 20px; border-radius: 8px; border: 1px solid #222;">
              <h3 style="margin-top: 0; color: #fff;"><a href="/services/${s.slug}" style="color: #fff; text-decoration: none;">${s.title}</a></h3>
              <p style="font-size: 14px; color: #aaa; line-height: 1.5;">${s.shortDesc}</p>
              <a href="/services/${s.slug}" style="color: #ff5722; font-weight: bold; font-size: 14px; text-decoration: none;">Read More &rarr;</a>
            </div>
          `).join('')}
        </div>
        <p style="margin-top: 20px;"><a href="/services" style="color: #ff5722; font-weight: bold;">View All 24+ Signage & Printing Services &rarr;</a></p>
      </section>

      <section style="margin-bottom: 40px; background: #0c0c0c; padding: 30px; border-radius: 8px;">
        <h2 style="font-size: 26px; color: #fff; margin-bottom: 15px;">Why Surat Businesses Choose GraphicX Studio</h2>
        <ul style="line-height: 1.8; color: #ccc;">
          <li><strong>In-House Manufacturing:</strong> Complete fabrication in our Dindoli, Surat facility with laser-cutting & CNC contouring.</li>
          <li><strong>Weather-Proof Materials:</strong> Heavy-duty ACP sheets, Samsung/Osram IP67 LEDs & rainproof Meanwell drivers.</li>
          <li><strong>Direct Pricing:</strong> Zero middleman markups with free on-site laser measurements across Surat.</li>
          <li><strong>Over 4,000+ Projects:</strong> Trusted by retail stores, hospitals, schools, corporate offices, and restaurants across Gujarat.</li>
        </ul>
      </section>

      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 26px; color: #ff5722; margin-bottom: 20px;">Frequently Asked Questions (FAQ)</h2>
        ${(aboutContent.faq?.items || []).map((faq) => `
          <div style="margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 15px;">
            <h3 style="font-size: 18px; color: #fff; margin-bottom: 8px;">${faq.question}</h3>
            <p style="color: #aaa; line-height: 1.6; margin: 0;">${faq.answer}</p>
          </div>
        `).join('')}
      </section>

      <section style="background: #151515; padding: 30px; border-radius: 8px; text-align: center;">
        <h2 style="font-size: 24px; color: #fff; margin-bottom: 10px;">Get Free Measurement & Signboard Quotation in Surat</h2>
        <p style="color: #ccc; margin-bottom: 20px;">Contact GraphicX Studio today for on-site visit anywhere in Surat, Dindoli, Varachha, Vesu, and Adajan.</p>
        <p style="font-size: 18px; color: #ff5722; font-weight: bold;">Call/WhatsApp: ${contactInfo.phoneDisplay} | Email: ${contactInfo.email}</p>
        <p style="color: #888; font-size: 14px;">Address: ${contactInfo.address.full}</p>
      </section>
    </main>
  `;

  const html = buildHtml({
    title: cfg.title,
    description: cfg.description,
    canonicalUrl: BASE_URL,
    schemas: [localBusinessSchema, faqSchema],
    bodyHtml,
  });

  writePage('', html);
  count++;
  console.log(`[SSG] Generated: / (Home)`);
}

// 1.2 About /about
{
  const route = '/about';
  const cfg = baseSeoConfig[route];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` },
    ],
  };

  const bodyHtml = `
    <main style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; color: #eee; font-family: sans-serif;">
      <nav style="margin-bottom: 20px; font-size: 14px; color: #888;">
        <a href="/" style="color: #ff5722;">Home</a> &gt; <span>About Us</span>
      </nav>
      <h1 style="font-size: 38px; color: #fff; margin-bottom: 16px;">${cfg.h1}</h1>
      <p style="font-size: 18px; line-height: 1.6; color: #ccc; margin-bottom: 30px;">${cfg.description}</p>
      
      <div style="background: #111; padding: 30px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #ff5722;">
        <h2 style="color: #fff; margin-top: 0;">Our Manufacturing Workshop in Dindoli, Surat</h2>
        <p style="line-height: 1.7; color: #ccc;">
          GraphicX Studio is a Surat-based signage and branding manufacturing company located in Dindoli. 
          With in-house computerized CNC contouring, laser welding, and automated acrylic shaping, 
          we design and build exterior signboards, ACP elevation facades, 3D acrylic channel letters, 
          and high-resolution print displays.
        </p>
      </div>

      <div style="text-align: center; margin-top: 40px;">
        <a href="/contact" style="background: #ff5722; color: #fff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">Contact Our Surat Workshop &rarr;</a>
      </div>
    </main>
  `;

  const html = buildHtml({
    title: cfg.title,
    description: cfg.description,
    canonicalUrl: `${BASE_URL}/about`,
    schemas: [localBusinessSchema, breadcrumbSchema],
    bodyHtml,
  });

  writePage('about', html);
  count++;
  console.log(`[SSG] Generated: /about`);
}

// 1.3 Projects /projects
{
  const route = '/projects';
  const cfg = baseSeoConfig[route];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects Portfolio', item: `${BASE_URL}/projects` },
    ],
  };

  const bodyHtml = `
    <main style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; color: #eee; font-family: sans-serif;">
      <nav style="margin-bottom: 20px; font-size: 14px; color: #888;">
        <a href="/" style="color: #ff5722;">Home</a> &gt; <span>Projects</span>
      </nav>
      <h1 style="font-size: 38px; color: #fff; margin-bottom: 16px;">${cfg.h1}</h1>
      <p style="font-size: 18px; line-height: 1.6; color: #ccc; margin-bottom: 30px;">${cfg.description}</p>
      
      <div style="background: #111; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
        <h2 style="color: #ff5722; margin-top: 0;">Completed Signage Work Across Surat</h2>
        <p style="line-height: 1.7; color: #ccc;">
          Browse through hundreds of completed client projects in Surat, including custom LED sign boards for jewellery showrooms, 
          ACP facades for corporate buildings in Varachha and Vesu, 3D acrylic letters for medical clinics, and shop branding in Dindoli.
        </p>
      </div>

      <div style="text-align: center; margin-top: 40px;">
        <a href="/contact" style="background: #ff5722; color: #fff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">Request a Quote for Your Project &rarr;</a>
      </div>
    </main>
  `;

  const html = buildHtml({
    title: cfg.title,
    description: cfg.description,
    canonicalUrl: `${BASE_URL}/projects`,
    schemas: [localBusinessSchema, breadcrumbSchema],
    bodyHtml,
  });

  writePage('projects', html);
  count++;
  console.log(`[SSG] Generated: /projects`);
}

// 1.4 Services /services
{
  const route = '/services';
  const cfg = baseSeoConfig[route];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    ],
  };

  const bodyHtml = `
    <main style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; color: #eee; font-family: sans-serif;">
      <nav style="margin-bottom: 20px; font-size: 14px; color: #888;">
        <a href="/" style="color: #ff5722;">Home</a> &gt; <span>Services</span>
      </nav>
      <h1 style="font-size: 38px; color: #fff; margin-bottom: 16px;">${cfg.h1}</h1>
      <p style="font-size: 18px; line-height: 1.6; color: #ccc; margin-bottom: 40px;">${cfg.description}</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        ${services.map((s) => `
          <div style="background: #111; padding: 24px; border-radius: 8px; border: 1px solid #222;">
            <h2 style="margin-top: 0; font-size: 20px; color: #fff;"><a href="/services/${s.slug}" style="color: #fff; text-decoration: none;">${s.title}</a></h2>
            <p style="color: #aaa; font-size: 14px; line-height: 1.6; margin-bottom: 16px;">${s.shortDesc}</p>
            <a href="/services/${s.slug}" style="color: #ff5722; font-weight: bold; font-size: 14px; text-decoration: none;">View Specifications & Pricing &rarr;</a>
          </div>
        `).join('')}
      </div>
    </main>
  `;

  const html = buildHtml({
    title: cfg.title,
    description: cfg.description,
    canonicalUrl: `${BASE_URL}/services`,
    schemas: [localBusinessSchema, breadcrumbSchema],
    bodyHtml,
  });

  writePage('services', html);
  count++;
  console.log(`[SSG] Generated: /services`);
}

// 1.5 Contact /contact
{
  const route = '/contact';
  const cfg = baseSeoConfig[route];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact` },
    ],
  };

  const bodyHtml = `
    <main style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; color: #eee; font-family: sans-serif;">
      <nav style="margin-bottom: 20px; font-size: 14px; color: #888;">
        <a href="/" style="color: #ff5722;">Home</a> &gt; <span>Contact Us</span>
      </nav>
      <h1 style="font-size: 38px; color: #fff; margin-bottom: 16px;">${cfg.h1}</h1>
      <p style="font-size: 18px; line-height: 1.6; color: #ccc; margin-bottom: 40px;">${cfg.description}</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 40px;">
        <div style="background: #111; padding: 30px; border-radius: 8px;">
          <h2 style="color: #ff5722; margin-top: 0; font-size: 22px;">Surat Workshop Address</h2>
          <p style="color: #ccc; line-height: 1.7;">
            <strong>GraphicX Studio</strong><br />
            ${contactInfo.address.full}
          </p>
          <p style="color: #aaa; font-size: 14px;">Serving Surat, Dindoli, Varachha, Vesu, Adajan, Pal, Althan, Udhna, Sachin GIDC.</p>
        </div>

        <div style="background: #111; padding: 30px; border-radius: 8px;">
          <h2 style="color: #ff5722; margin-top: 0; font-size: 22px;">Direct Contact</h2>
          <p style="color: #ccc; line-height: 1.7;">
            <strong>Phone / WhatsApp:</strong> <a href="${contactInfo.whatsappUrl}" style="color: #ff5722;">${contactInfo.phoneDisplay}</a><br />
            <strong>Email:</strong> <a href="mailto:${contactInfo.email}" style="color: #ff5722;">${contactInfo.email}</a><br />
            <strong>Working Hours:</strong> ${contactInfo.openingHoursDisplay}
          </p>
        </div>
      </div>
    </main>
  `;

  const html = buildHtml({
    title: cfg.title,
    description: cfg.description,
    canonicalUrl: `${BASE_URL}/contact`,
    schemas: [localBusinessSchema, breadcrumbSchema],
    bodyHtml,
  });

  writePage('contact', html);
  count++;
  console.log(`[SSG] Generated: /contact`);
}

// ─── 2. DYNAMIC SERVICE PAGES (24) ──────────────────────────────────────────

for (const service of services) {
  const serviceCanonical = `${BASE_URL}/services/${service.slug}`;

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: serviceCanonical },
    ],
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceCanonical}#service`,
    name: service.h1Title || service.title,
    description: service.shortDesc || service.fullDesc,
    serviceType: 'Signage & Branding',
    provider: { '@id': `${BASE_URL}/#localbusiness` },
    areaServed: { '@type': 'City', name: 'Surat' },
    category: service.category || 'Signage',
  };

  // FAQ schema
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  } : null;

  const schemas = [localBusinessSchema, breadcrumbSchema, serviceSchema];
  if (faqSchema) schemas.push(faqSchema);

  // Split description into clean paragraphs
  const descParagraphs = (service.fullDesc || service.shortDesc)
    .split('\n\n')
    .map((p) => `<p style="line-height: 1.8; color: #ccc; margin-bottom: 16px; font-size: 16px;">${p.trim()}</p>`)
    .join('');

  // Features HTML
  const featuresHtml = service.features && service.features.length > 0 ? `
    <section style="margin: 35px 0;">
      <h2 style="font-size: 24px; color: #ff5722; margin-bottom: 16px;">Key Features & Advantages</h2>
      <ul style="line-height: 1.8; color: #ddd; padding-left: 20px;">
        ${service.features.map((f) => `<li style="margin-bottom: 8px;">${f}</li>`).join('')}
      </ul>
    </section>
  ` : '';

  // Specifications HTML
  const specsHtml = service.specifications && service.specifications.length > 0 ? `
    <section style="margin: 35px 0;">
      <h2 style="font-size: 24px; color: #ff5722; margin-bottom: 16px;">Technical Specifications</h2>
      <table style="width: 100%; border-collapse: collapse; background: #111; border-radius: 8px; overflow: hidden;">
        <tbody>
          ${service.specifications.map((spec) => `
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 16px; font-weight: bold; color: #fff; width: 35%;">${spec.label}</td>
              <td style="padding: 12px 16px; color: #aaa;">${spec.value}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </section>
  ` : '';

  // FAQs HTML
  const faqsHtml = service.faqs && service.faqs.length > 0 ? `
    <section style="margin: 40px 0;">
      <h2 style="font-size: 24px; color: #ff5722; margin-bottom: 20px;">Frequently Asked Questions about ${service.title} in Surat</h2>
      ${service.faqs.map((faq) => `
        <div style="background: #111; padding: 20px; border-radius: 8px; margin-bottom: 14px; border: 1px solid #222;">
          <h3 style="margin-top: 0; color: #fff; font-size: 18px; margin-bottom: 8px;">${faq.question || faq.q}</h3>
          <p style="color: #aaa; line-height: 1.6; margin: 0;">${faq.answer || faq.a}</p>
        </div>
      `).join('')}
    </section>
  ` : '';

  // Related services
  const related = (service.relatedSlugs || [])
    .map((rSlug) => services.find((s) => s.slug === rSlug))
    .filter(Boolean);

  const relatedHtml = related.length > 0 ? `
    <section style="margin: 40px 0; border-top: 1px solid #222; padding-top: 30px;">
      <h2 style="font-size: 22px; color: #fff; margin-bottom: 16px;">Related Signage Services in Surat</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        ${related.map((r) => `
          <a href="/services/${r.slug}" style="background: #1a1a1a; color: #ff5722; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-size: 14px; border: 1px solid #333;">${r.title} &rarr;</a>
        `).join('')}
      </div>
    </section>
  ` : '';

  const bodyHtml = `
    <main style="max-width: 1100px; margin: 0 auto; padding: 40px 20px; color: #eee; font-family: sans-serif;">
      <nav style="margin-bottom: 24px; font-size: 14px; color: #888;">
        <a href="/" style="color: #ff5722; text-decoration: none;">Home</a> &gt; 
        <a href="/services" style="color: #ff5722; text-decoration: none;">Services</a> &gt; 
        <span>${service.title}</span>
      </nav>

      <h1 style="font-size: 38px; color: #fff; margin-bottom: 20px; line-height: 1.25;">${service.h1Title || service.title}</h1>
      
      <div style="font-size: 18px; line-height: 1.6; color: #ddd; margin-bottom: 25px; border-left: 3px solid #ff5722; padding-left: 16px;">
        ${service.shortDesc}
      </div>

      <div style="margin: 30px 0;">
        ${descParagraphs}
      </div>

      ${featuresHtml}
      ${specsHtml}
      ${faqsHtml}
      ${relatedHtml}

      <div style="background: #151515; padding: 30px; border-radius: 8px; text-align: center; margin-top: 40px; border: 1px solid #252525;">
        <h2 style="font-size: 24px; color: #fff; margin-bottom: 10px;">Get Free Measurement & Quote for ${service.title} in Surat</h2>
        <p style="color: #ccc; margin-bottom: 20px;">We manufacture and install premium signboards across Surat, Dindoli, Varachha, Vesu, Adajan and Pal.</p>
        <p style="font-size: 18px; color: #ff5722; font-weight: bold; margin-bottom: 8px;">
          Call / WhatsApp: <a href="${contactInfo.whatsappUrl}" style="color: #ff5722;">${contactInfo.phoneDisplay}</a>
        </p>
        <p style="color: #888; font-size: 14px; margin: 0;">In-house Workshop: ${contactInfo.address.full}</p>
      </div>
    </main>
  `;

  const html = buildHtml({
    title: service.seoTitle || `${service.title} | GraphicX Studio Surat`,
    description: service.metaDescription || service.shortDesc,
    canonicalUrl: serviceCanonical,
    schemas,
    bodyHtml,
  });

  writePage(`services/${service.slug}`, html);
  count++;
  console.log(`[SSG] Generated: /services/${service.slug}`);
}

console.log(`\n======================================================`);
console.log(`[SSG] Successfully pre-rendered ${count} pages for Google indexing!`);
console.log(`======================================================\n`);
