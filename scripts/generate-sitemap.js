import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Because type="module" in package.json, we must resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since services.js contains import statements for assets, we can't easily import it directly 
// in Node without some mocking. A simpler way is to parse the services slug from the file 
// text directly to avoid module import issues.

const servicesFilePath = path.join(__dirname, '../src/data/services.js');
const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');

// Use regex to extract all slugs: slug: "some-slug",
const slugRegex = /slug:\s*["']([^"']+)["']/g;
let match;
const dynamicSlugs = [];

while ((match = slugRegex.exec(servicesFileContent)) !== null) {
  dynamicSlugs.push(match[1]);
}

const staticRoutes = [
  '',
  '/projects',
  '/services',
  '/about',
  '/contact'
];

const baseUrl = 'https://graphicxstudio.com';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
for (const route of staticRoutes) {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
  sitemap += `    <changefreq>weekly</changefreq>\n`;
  sitemap += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
  sitemap += `  </url>\n`;
}

// Add dynamic service routes
for (const slug of dynamicSlugs) {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}/services/${slug}</loc>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.9</priority>\n`;
  sitemap += `  </url>\n`;
}

sitemap += `</urlset>\n`;

const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('Sitemap and robots.txt generated successfully!');
