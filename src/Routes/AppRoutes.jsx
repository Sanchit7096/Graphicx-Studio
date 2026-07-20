import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Projects from "../Pages/Projects.jsx";
import Services from "../Pages/Services.jsx";
import ServiceDetail from "../Pages/ServiceDetail.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
