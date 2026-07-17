import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Brand Logos
import acBanner from "../assets/BrandLogo/ACBANNER.png";
import aksharClasses from "../assets/BrandLogo/AKSHARCLASSES.png";
import arnavSolar from "../assets/BrandLogo/arnavsolar.png";
import backupBrochureFinal from "../assets/BrandLogo/Backup_of_BROUCHER FINAL.png";

import balaji from "../assets/BrandLogo/BALAJI.png";
import banner from "../assets/BrandLogo/BANNER.png";
import bowling from "../assets/BrandLogo/bowling.png";
import chatpataOpening from "../assets/BrandLogo/CHATPATAOPENING.png";

import coopan from "../assets/BrandLogo/COOPAN.png";
import deepDarsan from "../assets/BrandLogo/DEEPDARSAN.jpg";
import dkComputer from "../assets/BrandLogo/DkComputer.png";
import fabritoBillBook from "../assets/BrandLogo/FABRITOBILLBOOK.png";

import finnRoot from "../assets/BrandLogo/FINRROOT.png";
import futureKids from "../assets/BrandLogo/FUTUREKIDS.png";
import g9 from "../assets/BrandLogo/G9.png";
import g9Logo from "../assets/BrandLogo/G9Logo.png";

import gateBanner from "../assets/BrandLogo/GATE BANNER.png";
import guruKripaMobileVisiting from "../assets/BrandLogo/GURUKRIPAMOBILEVISITING.png";
import jupisolDataPamplate from "../assets/BrandLogo/JUPISOLTATAPAMPLATE.png";

import kidsTime from "../assets/BrandLogo/KIDS TIME.png";
import kigsGym from "../assets/BrandLogo/KigsGym.png";
import kings from "../assets/BrandLogo/KINGS.png";
import leelabaa from "../assets/BrandLogo/LEELABAA.png";

import lettleStar from "../assets/BrandLogo/LETTLE STAR.png";
import logo1 from "../assets/BrandLogo/LOGO 1.png";
import logo2 from "../assets/BrandLogo/LOGO 2.png";
import logo3 from "../assets/BrandLogo/LOGO3.png";

import logo4 from "../assets/BrandLogo/LOGO 4.png";
import logo5 from "../assets/BrandLogo/LOGO 5.png";
import logo6 from "../assets/BrandLogo/LOGO 6.png";
import logo from "../assets/BrandLogo/LOGO.png";

import logo04 from "../assets/BrandLogo/LOGO4.png";
import logo8 from "../assets/BrandLogo/LOGO8.png";
import mahabali from "../assets/BrandLogo/Mahabali.png";
import mainBoard from "../assets/BrandLogo/MAINBOARD.png";

import mang from "../assets/BrandLogo/MANG.png";
import mobileSansar from "../assets/BrandLogo/MOBILESANSAR.png";
import myChhota from "../assets/BrandLogo/MY CHHOTA.png";
import rajPurohitSolar from "../assets/BrandLogo/RAJPUROHITSOLAR.png";

import sand from "../assets/BrandLogo/SAND.png";
import shubhamMobileLogo from "../assets/BrandLogo/SHUBHAMMOBILELOGO.png";
import sideAcrylicAkFitness from "../assets/BrandLogo/SIDEACRYLICAKFITNESS.png";
import socialBudies from "../assets/BrandLogo/SociaLBudies.png";

import spicyOfPunjab from "../assets/BrandLogo/SPICYOFPANJAB.png";
import studyPoint from "../assets/BrandLogo/STUDYPOINT.png";
import tvs from "../assets/BrandLogo/TVS.png";
import vedant from "../assets/BrandLogo/VEDANT.jpg";

import veriYog from "../assets/BrandLogo/VERIYOG.png";
import visitingCard from "../assets/BrandLogo/VISITINGCARD.png";

const LOGOS = [
  { src: acBanner, alt: "AC Banner" },
  { src: aksharClasses, alt: "Akshar Classes" },
  { src: arnavSolar, alt: "Arnav Solar" },
  { src: backupBrochureFinal, alt: "Backup Brochure Final" },
  { src: balaji, alt: "Balaji" },
  { src: banner, alt: "Banner" },
  { src: bowling, alt: "Bowling" },
  { src: chatpataOpening, alt: "Chatpata Opening" },
  { src: coopan, alt: "Coopan" },
  { src: deepDarsan, alt: "Deep Darsan" },
  { src: dkComputer, alt: "DK Computer" },
  { src: fabritoBillBook, alt: "Fabrito Bill Book" },
  { src: finnRoot, alt: "Finn Root" },
  { src: futureKids, alt: "Future Kids" },
  { src: g9, alt: "G9" },
  { src: g9Logo, alt: "G9 Logo" },
  { src: gateBanner, alt: "Gate Banner" },
  { src: guruKripaMobileVisiting, alt: "Guru Kripa Mobile Visiting" },
  { src: jupisolDataPamplate, alt: "Jupisol Data Pamplate" },
  { src: kidsTime, alt: "Kids Time" },
  { src: kigsGym, alt: "Kigs Gym" },
  { src: kings, alt: "Kings" },
  { src: leelabaa, alt: "Leelabaa" },
  { src: lettleStar, alt: "Lettle Star" },
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
  { src: logo, alt: "Logo" },
  { src: logo04, alt: "Logo 4 Alternate" },
  { src: logo8, alt: "Logo 8" },
  { src: mahabali, alt: "Mahabali" },
  { src: mainBoard, alt: "Main Board" },
  { src: mang, alt: "Mang" },
  { src: mobileSansar, alt: "Mobile Sansar" },
  { src: myChhota, alt: "My Chhota" },
  { src: rajPurohitSolar, alt: "Raj Purohit Solar" },
  { src: sand, alt: "Sand" },
  { src: shubhamMobileLogo, alt: "Shubham Mobile Logo" },
  { src: sideAcrylicAkFitness, alt: "Side Acrylic AK Fitness" },
  { src: socialBudies, alt: "Social Budies" },
  { src: spicyOfPunjab, alt: "Spicy Of Punjab" },
  { src: studyPoint, alt: "Study Point" },
  { src: tvs, alt: "TVS" },
  { src: vedant, alt: "Vedant" },
  { src: veriYog, alt: "Veri Yog" },
  { src: visitingCard, alt: "Visiting Card" },
];

const BrandShowcase = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth;
      const distance = totalWidth / 2;

      tweenRef.current = gsap.to(marqueeRef.current, {
        x: -distance,
        duration: 50,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <section
      ref={containerRef}
      className="w-full bg-black py-10 md:py-12 lg:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-10 text-center">
          <h3 className="text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">
            Trusted By Innovative Brands
          </h3>
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-max items-center"
        >
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-6 flex items-center justify-center"
            >
              <div className="bg-white p-4 md:p-5 rounded-2xl flex items-center justify-center h-20 md:h-28 w-40 md:w-48 transition-transform duration-500 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;