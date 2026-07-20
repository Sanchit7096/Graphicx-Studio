import img1 from "../assets/OurService/img-1.jpeg";
import img2 from "../assets/OurService/image.png";
import img3 from "../assets/OurService/img-3.jpeg";
import img5 from "../assets/OurService/img-5.jpeg";
import img6 from "../assets/OurService/Neon-Sign-Board3.jpg";

// NOTE: img4 is intentionally the same file as img1 (known duplicate — replace with a real Corporate Branding photo when available)
const img4 = img1;

const services = [
  {
    slug: "led-sign-board",
    id: "01",
    title: "LED Sign Board",
    shortDesc:
      "Custom illuminated LED signboards designed and installed to make your storefront impossible to ignore.",
    fullDesc:
      "Our LED sign boards are crafted with precision to ensure maximum visibility and durability. We use high-quality LEDs that provide brilliant illumination while being energy-efficient. Perfect for retail stores, restaurants, offices, and any business that wants to stand out.",
    image: img3,
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
    image: img5,
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
    image: img2,
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
    slug: "neon-signages",
    id: "04",
    title: "Neon Signages",
    shortDesc:
      "Custom-designed neon lighting and LED neon signs that turn your storefront into a statement.",
    fullDesc:
      "Neon signs create a vibrant, eye-catching display that draws attention day and night. We offer both traditional glass neon and modern LED neon options, each providing unique aesthetic benefits. Perfect for bars, restaurants, retail stores, and creative spaces.",
    image: img6,
    features: [
      "Vibrant Colors",
      "Custom Designs",
      "LED Options",
      "Low Maintenance",
      "High Visibility",
    ],
    featured: true,
    size: "large",
    sectionTitle: "Custom Neon Signs",
  },
  {
    slug: "3d-letter-signage",
    id: "05",
    title: "3D Letter Signage",
    shortDesc:
      "Bold dimensional acrylic and metal letter signs that command attention on any storefront or building.",
    fullDesc:
      "3D letter signage adds depth and dimension to your brand identity. Available in acrylic, metal, and illuminated options, these letters create a professional, premium appearance. Perfect for corporate offices, retail stores, and building exteriors.",
    image: img1,
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
    image: img4,
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
];

export default services;
