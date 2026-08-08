import img1 from "../assets/Projects/img1.png";
import img2 from "../assets/Projects/img2.png";
import img3 from "../assets/Projects/img3.png";
import img4 from "../assets/Projects/img4.png";

import featureImg1 from "../assets/Feature/img-1.jpeg";
import featureImg2 from "../assets/Feature/img-2.jpeg";
import featureImg4 from "../assets/Feature/img-4.png";
import featureImg5 from "../assets/Feature/img-5.png";

// Dynamically import all images from the All Works directory
const allWorksImages = import.meta.glob("../assets/All Works/**/*.{png,jpg,jpeg,jfif,webp,svg}", { eager: true });

// Folder to Service Slugs Mapping (supports single string or array of slugs)
const folderToServiceSlugs = {
  "AcrylicLedBoard": ["led-sign-board", "acrylic-signboard", "3d-letter-signage", "glow-sign-boards", "3d-sign-boards", "neon-sign-boards", "name-plates", "reception-signage"],
  "AcrylicLogo": ["acrylic-signboard", "3d-letter-signage", "corporate-branding"],
  "Acylic": ["acrylic-signboard", "3d-letter-signage", "3d-sign-boards"],
  "BANNER": ["vinyl-printing-and-branding", "shop-branding", "wall-branding"],
  "Exhibition": ["exhibition-stall-branding"],
  "LOLIPOP": ["led-sign-board", "glow-sign-boards"],
  "StandiBoard": ["led-sign-board", "shop-branding", "acp-signage"],
  "Vinyl": ["vinyl-printing-and-branding", "shop-branding", "office-branding", "wall-branding", "vehicle-branding", "one-way-vision-film", "frosted-glass-film", "custom-stickers", "corporate-branding"],
  "backlitBoard": ["led-sign-board", "acp-signage", "glow-sign-boards"],
};

export const projects = Object.entries(allWorksImages).map(([path, module], index) => {
  // Extract category and filename from the path
  const parts = path.split("/");
  const categoryFolder = parts[parts.length - 2]; // e.g. "Acylic"
  const filename = parts[parts.length - 1];

  // Clean up the filename to use as a title
  const rawTitle = filename.split(".")[0];
  const title = rawTitle
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Clean up the category name for better display
  const category = categoryFolder
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters (for CamelCase)
    .trim()
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

  // Map folder to service slugs
  const serviceSlugs = folderToServiceSlugs[categoryFolder] || [];
  const primarySlug = Array.isArray(serviceSlugs) ? serviceSlugs[0] : serviceSlugs;

  return {
    id: `pw-${index + 1}`,
    title: title,
    category: category,
    categoryFolder: categoryFolder,
    serviceSlug: primarySlug,
    serviceSlugs: Array.isArray(serviceSlugs) ? serviceSlugs : [serviceSlugs],
    location: "Surat",
    year: "2024",
    image: module.default,
  };
});

// Helper function to get projects by service slug
export const getProjectsByServiceSlug = (serviceSlug) => {
  const matched = projects.filter(p => {
    if (p.serviceSlugs && Array.isArray(p.serviceSlugs)) {
      return p.serviceSlugs.includes(serviceSlug);
    }
    return p.serviceSlug === serviceSlug;
  });
  
  // If exact matching projects exist, return them
  if (matched.length > 0) return matched;

  // Fallback: Return a sample of general projects so every service displays work samples
  return projects.slice(0, 12);
};

// Helper function to get project by ID
export const getProjectById = (projectId) => {
  return projects.find(p => p.id === projectId);
};

/** Before / after comparison projects shown on the Feature section */
export const featureProjects = [
  {
    id: 1,
    title: "Corporate Branding",
    beforeImage: featureImg1,
    afterImage: featureImg2,
    desc: "Modern acrylic logo installation that creates a clean, professional, and memorable workspace identity..",
  },
  {
    id: 2,
    title: "Ak fitness",
    beforeImage: featureImg5,
    afterImage: featureImg4,
    desc: "Transforming a fitness space with custom LED channel letters that command attention both day and night.",
  },
];
