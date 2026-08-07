
const allWorksImages = import.meta.glob("../assets/All Works/**/*.{png,jpg,jpeg,jfif,webp,svg}", { eager: true });

// Get all image URLs from the All Works folder
const workImages = Object.values(allWorksImages).map(module => module.default);

// Helper function to get an image by index (with wrap-around)
const getImage = (index) => workImages[index % workImages.length];

const services = [
  {
    slug: "led-sign-board",
    id: "01",
    title: "LED Sign Board",
    shortDesc:
      "Custom illuminated LED signboards designed and installed to make your storefront impossible to ignore.",
    fullDesc:
      "Our LED sign boards are crafted with precision to ensure maximum visibility and durability. We use high-quality LEDs that provide brilliant illumination while being energy-efficient. Perfect for retail stores, restaurants, offices, and any business that wants to stand out.",
    image: getImage(56),
    features: [
      "Energy Efficient",
      "Weather Resistant",
      "Custom Designs",
      "Long-lasting",
      "Bright Illumination",
    ],
    featured: true,
    size: "large",
    sectionTitle: "LED Sign Board Manufacturer in Surat",
  },
  {
    slug: "acrylic-signboard",
    id: "02",
    title: "Acrylic Signboard",
    shortDesc:
      "Crystal-clear acrylic signage with a premium finish that elevates any storefront or office space.",
    fullDesc:
      "Acrylic signboards offer a sleek, modern look with exceptional clarity. Our acrylic signs are laser-cut for precision and available in various thicknesses and finishes. Ideal for indoor and outdoor use, providing a professional appearance that lasts.",
    image: getImage(51),
    features: [
      "Crystal Clear",
      "UV Resistant",
      "Custom Shapes",
      "Easy Maintenance",
      "Premium Finish",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Acrylic Signboard Design",
  },
  {
    slug: "acp-signage",
    id: "03",
    title: "ACP Signage",
    shortDesc:
      "Durable ACP (aluminum composite panel) signboards built for a sharp, professional, long-lasting look.",
    fullDesc:
      "ACP (Aluminum Composite Panel) signage combines durability with aesthetic appeal. These signboards are weather-resistant, fire-retardant, and maintain their appearance for years. Perfect for building facades, shop fronts, and corporate signage.",
    image: getImage(50),
    features: [
      "Weather Proof",
      "Fire Retardant",
      "Lightweight",
      "Cost Effective",
      "Modern Look",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "ACP Signage Solutions",
  },

  {
    slug: "3d-letter-signage",
    id: "05",
    title: "3D Letter Signage",
    shortDesc:
      "Bold dimensional acrylic and metal letter signs that command attention on any storefront or building.",
    fullDesc:
      "3D letter signage adds depth and dimension to your brand identity. Available in acrylic, metal, and illuminated options, these letters create a professional, premium appearance. Perfect for corporate offices, retail stores, and building exteriors.",
    image: getImage(43),
    features: [
      "Dimensional Look",
      "Multiple Materials",
      "Illuminated Options",
      "Premium Quality",
      "Custom Fonts",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "3D Letter Signage",
  },
  {
    slug: "corporate-branding",
    id: "06",
    title: "Corporate Branding",
    shortDesc:
      "End-to-end brand identity systems — logo design, signage, print, and digital branding for growing businesses.",
    fullDesc:
      "Our corporate branding services provide comprehensive brand identity solutions. From logo design to complete signage systems, we ensure your brand communicates consistently across all touchpoints. Perfect for businesses looking to establish or refresh their brand identity.",
    image: getImage(4),
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Signage Systems",
      "Print Materials",
      "Digital Assets",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Corporate Branding & Identity Design",
  },
  {
    slug: "premium-visiting-card",
    id: "25",
    title: "Premium Visiting Card",
    shortDesc: "Elegantly crafted visiting cards for a polished first impression and professional brand appeal.",
    fullDesc: "Our premium visiting cards are designed to deliver a strong and memorable first impression. We offer rich finishes, crisp printing, and custom layouts that reflect your brand identity. Perfect for business networking, corporate profiles, and personal branding.",
    image: "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Premium Paper Stock",
      "Custom Finishes",
      "High-Resolution Print",
      "Modern Layouts",
      "Fast Turnaround",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Premium Visiting Card Services",
  },
  {
    slug: "glow-sign-boards",
    id: "07",
    title: "Glow Sign Boards",
    shortDesc: "Premium glow sign boards solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our glow sign boards services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(5),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Glow Sign Boards Services",
  },
  {
    slug: "3d-sign-boards",
    id: "08",
    title: "3D Sign Boards",
    shortDesc: "Premium 3d sign boards solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our 3d sign boards services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(6),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "3D Sign Boards Services",
  },
  {
    slug: "neon-sign-boards",
    id: "09",
    title: "Neon Sign Boards",
    shortDesc: "Premium neon sign boards solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our neon sign boards services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(7),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Neon Sign Boards Services",
  },
  {
    slug: "vinyl-printing-and-branding",
    id: "10",
    title: "Vinyl Printing & Branding",
    shortDesc: "Premium vinyl printing & branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our vinyl printing & branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(8),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "wide",
    sectionTitle: "Vinyl Printing & Branding Services",
  },
  {
    slug: "one-way-vision-film",
    id: "11",
    title: "One Way Vision Film",
    shortDesc: "Premium one way vision film solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our one way vision film services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(9),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "One Way Vision Film Services",
  },
  {
    slug: "frosted-glass-film",
    id: "12",
    title: "Frosted Glass Film",
    shortDesc: "Premium frosted glass film solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our frosted glass film services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(10),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "large",
    sectionTitle: "Frosted Glass Film Services",
  },
  {
    slug: "shop-branding",
    id: "13",
    title: "Shop Branding",
    shortDesc: "Premium shop branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our shop branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(11),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Shop Branding Services",
  },
  {
    slug: "office-branding",
    id: "14",
    title: "Office Branding",
    shortDesc: "Premium office branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our office branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(12),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Office Branding Services",
  },
  {
    slug: "vehicle-branding",
    id: "15",
    title: "Vehicle Branding",
    shortDesc: "Premium vehicle branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our vehicle branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(13),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Vehicle Branding Services",
  },

  {
    slug: "photo-frames",
    id: "18",
    title: "Photo Frames",
    shortDesc: "Premium photo frames solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our photo frames services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(14),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "wide",
    sectionTitle: "Photo Frames Services",
  },

  {
    slug: "name-plates",
    id: "20",
    title: "Name Plates",
    shortDesc: "Premium name plates solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our name plates services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(15),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "large",
    sectionTitle: "Name Plates Services",
  },
  {
    slug: "reception-signage",
    id: "21",
    title: "Reception Signage",
    shortDesc: "Premium reception signage solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our reception signage services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(16),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Reception Signage Services",
  },
  {
    slug: "wall-branding",
    id: "22",
    title: "Wall Branding",
    shortDesc: "Premium wall branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our wall branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(17),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Wall Branding Services",
  },

  {
    slug: "custom-stickers",
    id: "24",
    title: "Custom Stickers",
    shortDesc: "Premium custom stickers solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our custom stickers services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(18),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Custom Stickers Services",
  },
  {
    slug: "exhibition-stall-branding",
    id: "26",
    title: "Exhibition Stall Branding",
    shortDesc: "Premium exhibition stall branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our exhibition stall branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: getImage(19),
    features: [
      "Custom Design",
      "High Quality",
      "Durable Material",
      "Professional Finish",
      "Cost Effective"
    ],
    featured: false,
    size: "wide",
    sectionTitle: "Exhibition Stall Branding Services",
  },
];

// Post-process: Import projects and populate projectIds
import { projects } from "./projects.js";

// Populate projectIds for each service based on serviceSlug
services.forEach(service => {
  service.projectIds = projects.filter(p => p.serviceSlug === service.slug).map(p => p.id);
});

export default services;
