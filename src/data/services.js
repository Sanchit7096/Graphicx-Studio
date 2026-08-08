
import { projects } from "./projects.js";

// Import images from OurService folders
import acrylicLedBoard from "../assets/OurService/AcrylicLedBoard/AcrylicLedBoard06.jfif";
import vinylPrinting from "../assets/OurService/VinylPrintingAndBranding/Vinyl11.jfif";
import threeDLetter from "../assets/OurService/3dLetterSignBoard/AcrylicLedBoard0.jfif";
import corporateBranding from "../assets/OurService/CorporateBranding/img-1.jpeg";
import premiumVisitingCards from "../assets/OurService/PremiumVisitingCards/Business-Card-Design.jpg";
import customStickers from "../assets/OurService/CustomStickers/IN_Custom-Stickers_Category-Page_Mobile.jfif";
import exhibitionStall from "../assets/OurService/ExhibitionStallBranding/Exhibition02.jfif";
import frostedGlass from "../assets/OurService/FrostedGlassFilm/FrostedGlassFilm.png";
import namePlates from "../assets/OurService/NamePlates/guptas-cutout-steel-name-plate-2.jpg";
import neonSign from "../assets/OurService/NeonSignBoard/03_0b44d30a-0049-411c-9e1b-7306ee907446.webp";
import oneWayVision from "../assets/OurService/OneWayVisionFilm/a272bce9-7514-489e-9b31-dff5565ec495.jpg";
import photoFrames from "../assets/OurService/PhotoFrames/PhotoFrame1.jpg";
import receptionSignage from "../assets/OurService/ReceptionSignage/AcrylicLogo5.jfif";
import vehicleBranding from "../assets/OurService/VehicleBranding/8821712c-0a3d-400d-9bdd-a48d36cb02ff.jpg";
import wallBranding from "../assets/OurService/WallBranding/a0cc109b-35b4-47fa-8be6-17f510275e20.jpg";

const services = [
  {
    slug: "led-sign-board",
    id: "01",
    title: "LED Acrylic Sign Board",
    shortDesc:
      "Custom illuminated LED signboards designed and installed to make your storefront impossible to ignore.",
    fullDesc:
      "Our LED sign boards are crafted with precision to ensure maximum visibility and durability. We use high-quality LEDs that provide brilliant illumination while being energy-efficient. Perfect for retail stores, restaurants, offices, and any business that wants to stand out.",
    image: acrylicLedBoard,
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
    slug: "vinyl-printing-and-branding",
    id: "02",
    title: "Vinyl Printing & Branding",
    shortDesc:
      "Premium vinyl printing and branding solutions for vehicles, walls, and promotional materials.",
    fullDesc:
      "Our vinyl printing services offer high-quality, durable graphics for vehicles, walls, windows, and promotional materials. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: vinylPrinting,
    features: [
      "High Quality Print",
      "Weather Resistant",
      "Custom Designs",
      "Durable Material",
      "Professional Finish",
    ],
    featured: false,
    size: "medium",
    sectionTitle: "Vinyl Printing & Branding Services",
  },
  {
    slug: "3d-letter-signage",
    id: "03",
    title: "3D Letter Sign Board",
    shortDesc:
      "Bold dimensional acrylic and metal letter signs that command attention on any storefront or building.",
    fullDesc:
      "3D letter signage adds depth and dimension to your brand identity. Available in acrylic, metal, and illuminated options, these letters create a professional, premium appearance. Perfect for corporate offices, retail stores, and building exteriors.",
    image: threeDLetter,
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
    id: "04",
    title: "Corporate Branding",
    shortDesc:
      "End-to-end brand identity systems — logo design, signage, print, and digital branding for growing businesses.",
    fullDesc:
      "Our corporate branding services provide comprehensive brand identity solutions. From logo design to complete signage systems, we ensure your brand communicates consistently across all touchpoints. Perfect for businesses looking to establish or refresh their brand identity.",
    image: corporateBranding,
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
    id: "05",
    title: "Premium Visiting Cards",
    shortDesc: "Elegantly crafted visiting cards for a polished first impression and professional brand appeal.",
    fullDesc: "Our premium visiting cards are designed to deliver a strong and memorable first impression. We offer rich finishes, crisp printing, and custom layouts that reflect your brand identity. Perfect for business networking, corporate profiles, and personal branding.",
    image: premiumVisitingCards,
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
    id: "06",
    title: "Glow Sign Board",
    shortDesc: "Premium glow sign boards solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our glow sign boards services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: acrylicLedBoard,
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
    slug: "neon-sign-boards",
    id: "07",
    title: "Neon Sign Board",
    shortDesc: "Premium neon sign boards solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our neon sign boards services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: neonSign,
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
    slug: "one-way-vision-film",
    id: "08",
    title: "One-Way Vision Film",
    shortDesc: "Premium one way vision film solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our one way vision film services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: oneWayVision,
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
    id: "09",
    title: "Frosted Glass Film",
    shortDesc: "Premium frosted glass film solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our frosted glass film services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: frostedGlass,
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
    slug: "vehicle-branding",
    id: "10",
    title: "Vehicle Branding",
    shortDesc: "Premium vehicle branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our vehicle branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: vehicleBranding,
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
    id: "11",
    title: "Photo Frames",
    shortDesc: "Premium photo frames solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our photo frames services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: photoFrames,
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
    id: "12",
    title: "Name Plates",
    shortDesc: "Premium name plates solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our name plates services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: namePlates,
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
    id: "13",
    title: "Reception Signage",
    shortDesc: "Premium reception signage solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our reception signage services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: receptionSignage,
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
    id: "14",
    title: "Wall Branding",
    shortDesc: "Premium wall branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our wall branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: wallBranding,
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
    id: "15",
    title: "Custom Stickers",
    shortDesc: "Premium custom stickers solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our custom stickers services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: customStickers,
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
    id: "16",
    title: "Exhibition Stall Branding",
    shortDesc: "Premium exhibition stall branding solutions designed to elevate your brand visibility and aesthetics.",
    fullDesc: "Our exhibition stall branding services offer top-notch quality and durability. Perfect for businesses looking to make a strong visual impact with custom-tailored designs.",
    image: exhibitionStall,
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

// Service Categories
export const serviceCategories = {
  SIGNAGE: {
    id: "signage",
    title: "SIGNAGE",
    description: "Illuminated and dimensional signage that makes your brand visible day and night",
    services: ["led-sign-board", "3d-letter-signage", "glow-sign-boards", "neon-sign-boards", "reception-signage", "name-plates"]
  },
  BRANDING: {
    id: "branding",
    title: "VINYL PRINTING",
    description: "Complete brand identity systems from vinyl to vehicle and exhibition branding",
    services: ["vinyl-printing-and-branding", "corporate-branding", "wall-branding", "vehicle-branding", "exhibition-stall-branding", "custom-stickers"]
  },
  FILMS: {
    id: "films",
    title: "FILMS & GLASS",
    description: "Premium glass films for privacy, branding, and architectural enhancement",
    services: ["one-way-vision-film", "frosted-glass-film"]
  },
  PRINT: {
    id: "print",
    title: "PRINT & CUSTOM",
    description: "Premium printing solutions for business cards, photo frames, and custom materials",
    services: ["premium-visiting-card", "photo-frames"]
  }
};

// Helper to get services by category
export const getServicesByCategory = (categoryId) => {
  const category = Object.values(serviceCategories).find(cat => cat.id === categoryId);
  if (!category) return [];
  return services.filter(service => category.services.includes(service.slug));
};

// Populate projectIds for each service based on serviceSlug
services.forEach(service => {
  service.projectIds = projects.filter(p => p.serviceSlug === service.slug).map(p => p.id);
});

export default services;
