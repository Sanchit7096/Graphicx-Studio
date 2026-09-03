import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
   
    if (hash) {
      // We use a slight timeout to ensure the page has rendered before trying to scroll
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
         
          const yOffset = -96; // ~24 units of spacing (e.g., pt-24 is 96px)
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      // If there is no hash, scroll to the top of the page on route change
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
