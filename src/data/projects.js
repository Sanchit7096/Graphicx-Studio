import img1 from "../assets/Projects/img1.png";
import img2 from "../assets/Projects/img2.png";
import img3 from "../assets/Projects/img3.png";
import img4 from "../assets/Projects/img4.png";

import featureImg1 from "../assets/Feature/img-1.jpeg";
import featureImg2 from "../assets/Feature/img-2.jpeg";
import featureImg4 from "../assets/Feature/img-4.png";
import featureImg5 from "../assets/Feature/img-5.png";

/** Featured projects shown in the coverflow carousel */
export const projects = [
  {
    id: "01",
    title: "Hotel Signage",
    category: "LED Display & Illumination",
    location: "Indore",
    year: "2024",
    image: img1,
  },
  {
    id: "02",
    title: "Hospital Branding",
    category: "Billboard & Facade",
    location: "Bhopal",
    year: "2023",
    image: img2,
  },
  {
    id: "03",
    title: "Dance Studio",
    category: "Interior & Spatial",
    location: "Indore",
    year: "2024",
    image: img3,
  },
  {
    id: "04",
    title: "Clothing Boutique",
    category: "Vehicle & Retail Branding",
    location: "Ujjain",
    year: "2023",
    image: img4,
  },
];

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
