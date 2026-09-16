// src/config/seoConfig.js

export const BASE_URL = 'https://graphicxstudio.com';

const baseSeoConfig = {
  "/": {
    title: "GraphicX Studio | Sign Board & Printing Services in Surat",
    description: "GraphicX Studio is Surat's premier signage & branding company. Custom LED sign boards, ACP elevation, 3D letter signs, flex banners & shop branding in Surat, Gujarat.",
    canonicalPath: "/",
    robots: "index, follow",
  },
  "/about": {
    title: "About GraphicX Studio | Signage & Printing Company in Surat",
    description: "Learn about GraphicX Studio, Surat's trusted signage manufacturer. With in-house fabrication in Dindoli, we deliver premium ACP, LED & 3D sign boards.",
    canonicalPath: "/about",
    robots: "index, follow",
  },
  "/projects": {
    title: "Signage & Branding Projects Portfolio Surat | GraphicX Studio",
    description: "Explore our completed signage and branding projects across Surat: 3D LED letters, ACP elevations, shop fronts, banners, and office branding installations.",
    canonicalPath: "/projects",
    robots: "index, follow",
  },
  "/services": {
    title: "Sign Board & Printing Services in Surat | GraphicX Studio",
    description: "Comprehensive signage, printing & branding services in Surat. LED sign boards, ACP elevation, 3D letters, flex banner printing, shop branding & vehicle wraps.",
    canonicalPath: "/services",
    robots: "index, follow",
  },
  "/contact": {
    title: "Contact GraphicX Studio | Sign Board & Printing Services in Surat",
    description: "Get in touch with GraphicX Studio Surat for free site measurements, 3D signboard mockups, and competitive rates. Located in Dindoli, Surat, Gujarat.",
    canonicalPath: "/contact",
    robots: "index, follow",
  },
  // We handle 404 pages using a wildcard or explicit fallback in DocumentHead
};

/**
 * Returns the SEO config for a given static path.
 * For dynamic routes like /services/:slug, we handle them separately.
 */
export const getSeoConfigForPath = (path) => {
  // Normalize path to ignore trailing slashes (except root)
  const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  
  if (baseSeoConfig[normalizedPath]) {
    return baseSeoConfig[normalizedPath];
  }
  
  return null;
};

export default baseSeoConfig;
