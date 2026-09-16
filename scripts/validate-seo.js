import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'http://localhost:4173'; // Vite preview default port

const servicesFilePath = path.join(__dirname, '../src/data/services.js');
const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');

const slugRegex = /slug:\s*["']([^"']+)["']/g;
let match;
const dynamicSlugs = [];

while ((match = slugRegex.exec(servicesFileContent)) !== null) {
  dynamicSlugs.push(match[1]);
}

const allRoutes = [
  '/',
  '/projects',
  '/services',
  '/about',
  '/contact',
  ...dynamicSlugs.map(slug => `/services/${slug}`)
];

let stats = {
  discovered: allRoutes.length,
  fixed: 0,
  canonicalIssues: 0,
  titleIssues: 0,
  descriptionIssues: 0,
  robotsIssues: 0,
  failed: 0,
};

async function runValidation() {
  console.log(`Starting SEO validation for ${allRoutes.length} routes...\n`);
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  for (const route of allRoutes) {
    const url = `${baseUrl}${route}`;
    console.log(`Validating: ${route || '/'}`);
    
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle0' });
      
      const status = response.status();
      if (status !== 200) {
        console.log(`  ❌ FAIL: HTTP Status is ${status}`);
        stats.failed++;
        continue;
      }
      
      const seoData = await page.evaluate(() => {
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content;
        const canonical = document.querySelector('link[rel="canonical"]')?.href;
        const robots = document.querySelector('meta[name="robots"]')?.content;
        const h1 = document.querySelector('h1')?.innerText;
        const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
        const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
        
        return { title, description, canonical, robots, h1, ogTitle, ogUrl };
      });
      
      let pass = true;
      
      // Title
      if (!seoData.title || seoData.title.includes('undefined')) {
        console.log(`  ❌ FAIL: Invalid Title (${seoData.title})`);
        stats.titleIssues++;
        pass = false;
      } else {
        stats.fixed++; // Treat as fixed if it exists and looks valid
      }
      
      // Description
      if (!seoData.description || seoData.description.length < 10) {
        console.log(`  ❌ FAIL: Missing or too short Meta Description`);
        stats.descriptionIssues++;
        pass = false;
      } else {
        stats.fixed++;
      }
      
      // Canonical
      const expectedCanonicalPath = route === '/' ? '' : route;
      const expectedCanonical = `https://graphicxstudio.com${expectedCanonicalPath}`;
      if (seoData.canonical !== expectedCanonical) {
        console.log(`  ❌ FAIL: Canonical URL mismatch. Expected: ${expectedCanonical}, Got: ${seoData.canonical}`);
        stats.canonicalIssues++;
        pass = false;
      } else {
        stats.fixed++;
      }
      
      // Robots
      if (seoData.robots !== 'index, follow') {
        console.log(`  ⚠️ WARNING: Robots meta is '${seoData.robots}'`);
        stats.robotsIssues++;
      } else {
        stats.fixed++;
      }
      
      if (pass) {
        console.log(`  ✅ PASS`);
      }
      
    } catch (e) {
      console.log(`  ❌ FAIL: Error loading page: ${e.message}`);
      stats.failed++;
    }
    
    console.log('---');
  }
  
  await browser.close();
  
  console.log('\n==================================================');
  console.log('FINAL VALIDATION REPORT');
  console.log('==================================================');
  console.log(`Routes Discovered:          ${stats.discovered}`);
  console.log(`Total Checks Passed/Fixed:  ${stats.fixed}`);
  console.log(`Title Issues Found:         ${stats.titleIssues}`);
  console.log(`Description Issues Found:   ${stats.descriptionIssues}`);
  console.log(`Canonical Issues Found:     ${stats.canonicalIssues}`);
  console.log(`Robots Issues Found:        ${stats.robotsIssues}`);
  console.log(`Failed Page Loads:          ${stats.failed}`);
  console.log('==================================================');
}

runValidation().catch(console.error);
