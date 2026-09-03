
const featureImg1 = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515592/whv9dti1wjtjwsmfgrw9.jpg";
const featureImg2 = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515588/wjcqgfzad6vjfe9ug35v.jpg";
const featureImg4 = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515587/i3u24oxlmce0p5wjr5uf.png";
const featureImg5 = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515591/ld9dq6gazjljzfwjjb1q.png";

// All Works image paths (mapped from Cloudinary)
const allWorksImages = {
  "AcrylicLedBoard/AcrylicLedBoard0.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515601/dx2wdgx4sk2m3z1s5wqj.jpg",
  "AcrylicLedBoard/AcrylicLedBoard02.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/y7ov2noi5icfweheb5wn.jpg",
  "AcrylicLedBoard/AcrylicLedBoard03.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/oad8ynusr7e0fukt8pwx.jpg",
  "AcrylicLedBoard/AcrylicLedBoard04.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/iokzm4xywbomv6culmeb.jpg",
  "AcrylicLedBoard/AcrylicLedBoard05.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/ajnaz8vvn7y82cxqp3gy.jpg",
  "AcrylicLedBoard/AcrylicLedBoard06.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515589/ii6i8djyocwju1smrmd8.jpg",
  "AcrylicLedBoard/AcrylicLedBoard07.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/ru5ter58fch5s18mudiy.jpg",
  "AcrylicLedBoard/AcrylicLedBoard08.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/hgsev6ap4utyap0eystn.jpg",
  "AcrylicLedBoard/AcrylicLedBoard09.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/uq50k0tkvz0ba22dcipd.jpg",
  "AcrylicLedBoard/AcrylicLedBoard1 (2).jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/wdavlngk1ht9rmjqimfx.jpg",
  "AcrylicLedBoard/AcrylicLedBoard10.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/w5vwnzkcg4vjj5qoqvhx.jpg",
  "AcrylicLogo/AcrylicLogo1.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/jwhflw4os7j2igckkybu.jpg",
  "AcrylicLogo/AcrylicLogo2.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/ptvovmfhxeoc7ajvmjiz.jpg",
  "AcrylicLogo/AcrylicLogo3.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/qawsdzffc9vyhzmqfo1q.jpg",
  "AcrylicLogo/AcrylicLogo4.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/k9pyatltgls6ashdpihx.jpg",
  "AcrylicLogo/AcrylicLogo5.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515588/idxufaxcg0warvrpxamc.jpg",
  "AcrylicLogo/AcrylicLogo6.jpeg": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/jledxfzyrcj74jdbp4ak.png",
  "Acylic/Acrylic.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515586/y3kbjkqnbatwm3qo1cxa.jpg",
  "backlitBoard/backlitBoard1.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/j3z1oauysazetds9sdse.jpg",
  "backlitBoard/backlitBoard2.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/snfh9gxxk0m1vjyrjr6u.jpg",
  "backlitBoard/backlitBoard3.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/hgljthyplpzbil4mpc9o.jpg",
  "BANNER/37.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/a6nnnfzeta7bzwdztsay.jpg",
  "BANNER/Banner1.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/mwlurvycknisenpwximq.jpg",
  "BANNER/Banner10.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/bf8mmwjfgh967wuhb9it.jpg",
  "BANNER/Banner11.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/ud9ud9n7slore6amxqlp.jpg",
  "BANNER/Banner12.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/glozoby8gukwsv2dj0gy.jpg",
  "BANNER/Banner13.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/rmnvlujnqw2tyqwcdsio.jpg",
  "BANNER/Banner14.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/ix3ifzhtxazt3xx1wf7k.jpg",
  "BANNER/Banner15.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/bs70xc8knvrmvkzwkark.jpg",
  "BANNER/Banner16.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/vstwg7wc6upqjvdbe6u0.jpg",
  "BANNER/Banner17.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/queadjafpkocprjimlnh.jpg",
  "BANNER/Banner18.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/j1z8ls9b09cnqnjrldby.jpg",
  "BANNER/Banner19.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/bkmtuj0cwtjemqpsbrbm.jpg",
  "BANNER/Banner2.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/luwfiaxrvjihimvhaam8.jpg",
  "BANNER/Banner20.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/p7zmqdbinwaffnpzgcfx.jpg",
  "BANNER/Banner21.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/vv0afrtskichzg3k3y1s.jpg",
  "BANNER/Banner22.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/mjo2xeo7xib5bp4yltn4.jpg",
  "BANNER/Banner23.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/fbtm7jlz3o0yuohh5shl.jpg",
  "BANNER/Banner24.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/h5ewlisaupcnov2yjx6k.jpg",
  "BANNER/Banner25.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/u2mswmqg1oj6o2cske9v.jpg",
  "BANNER/Banner26.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/y7yw36t0kdye4mlxc8as.jpg",
  "BANNER/Banner27.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/snkyxbnvkm8nx5q3ka88.jpg",
  "BANNER/Banner28.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/zcknfbr1nmwgffvpbrmp.jpg",
  "BANNER/Banner29.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/fcevzchwqddulyk7b8vj.jpg",
  "BANNER/Banner3.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/aj9qrxxngqfrqm34d9mj.jpg",
  "BANNER/Banner30.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/o5minsxccxjajhy1jcyq.jpg",
  "BANNER/Banner31.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/awxxqddwcp2q9kmlmctn.jpg",
  "BANNER/Banner32.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/kixhpgmoqfefryln0i7f.jpg",
  "BANNER/Banner33.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/istzk6crteidiuly9wjc.jpg",
  "BANNER/Banner34.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/hijuvdbsg1seq9vdvhos.jpg",
  "BANNER/Banner35.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/mmlujas7u2n0t1cvynob.jpg",
  "BANNER/Banner36.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/ajehxscys0rmzifm2wxi.jpg",
  "BANNER/Banner4.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/ujsq0ynh4zwq79sedz6f.jpg",
  "BANNER/Banner5.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/r5mhycx1tpctuvbuuokx.jpg",
  "BANNER/Banner6.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/nwx3v5cwiykqla2i92uw.jpg",
  "BANNER/Banner7.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/bcjsnv4q9wrypck9qdd6.jpg",
  "BANNER/Banner8.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/tim5uogqlowgqjttk6m6.jpg",
  "BANNER/Banner9.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515582/coohjkvqrltyg4vm8ulv.jpg",
  "Exhibition/Exhibition01.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515581/xujlvecqkdb8yd7z2sne.jpg",
  "Exhibition/Exhibition02.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515591/ksfkmkm20r8lt8hcdplt.jpg",
  "LOLIPOP/04.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/vkshgb0yie6od3attt8z.jpg",
  "LOLIPOP/LOLIPOP01.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/x2d36tda5hpoxmb2edv2.jpg",
  "LOLIPOP/LOLIPOP02.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/zucgaft9xw5bcmjaacan.jpg",
  "LOLIPOP/LOLIPOP03.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/myzkiujz78blzrgkgrld.jpg",
  "StandiBoard/12.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/nomuhheyroafylas2pjh.jpg",
  "StandiBoard/StandiBoard01.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/wzmjqylx4nfdfhtgekir.jpg",
  "StandiBoard/StandiBoard02.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/surquowkm0rcrmvfkoc2.jpg",
  "StandiBoard/StandiBoard03.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/jbgbgvfseeqesefrvzaj.jpg",
  "StandiBoard/StandiBoard04.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/ahlxdhlksjsad1oczmrc.jpg",
  "StandiBoard/StandiBoard05.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/t0fs2r5e8gu3e6ol9nkz.jpg",
  "StandiBoard/StandiBoard06.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/d43cb6csoxpzm5ce3rqc.jpg",
  "StandiBoard/StandiBoard07.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515586/etizmpkpnmywhnwgfglr.jpg",
  "StandiBoard/StandiBoard08.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/tozy12rjanu1utto67ol.jpg",
  "StandiBoard/StandiBoard09.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/imgngwcfzn5frz9dbpgs.jpg",
  "StandiBoard/StandiBoard10.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/dpulbv2iu3mcsatilryr.jpg",
  "StandiBoard/StandiBoard11.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/vonj3afedlfpfuzbm2po.jpg",
  "StandiBoard/StandiBoard13.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/cgswijzwurktnwfvjcj4.jpg",
  "Vinyl/Vinyl01.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/psvorpeqzkasiy6gp7bw.jpg",
  "Vinyl/Vinyl02.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/bff5v5jfdp2m76s9t8cc.jpg",
  "Vinyl/Vinyl03.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/sknawinvdbhgx48wmrjk.jpg",
  "Vinyl/Vinyl04.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/amxusyoedk9kadgn8lbs.jpg",
  "Vinyl/Vinyl05.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/q9thswpqstewnyycplnc.jpg",
  "Vinyl/Vinyl06.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/ktandkd28f1pd8zblcc0.jpg",
  "Vinyl/Vinyl07.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/jvysnepfolraftsfp5kq.jpg",
  "Vinyl/Vinyl08.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/zruyu37kkalungclrzue.jpg",
  "Vinyl/Vinyl09.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515584/dmock4ufqfmvohf6wxd7.jpg",
  "Vinyl/Vinyl10.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/h8navehrnhl3ehe9wpft.jpg",
  "Vinyl/Vinyl11.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515591/ww5hpaz3rv0mw0lmr4x0.jpg",
  "Vinyl/Vinyl12.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/hvethv5xg9gxcbfjlajk.jpg",
  "Vinyl/Vinyl13.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515585/zeajh34tlmvnal1vyxns.jpg",
  "Vinyl/Vinyl14.jfif": "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515583/wjyt8q1fdxlalkpzif83.jpg"
};

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

export const projects = Object.entries(allWorksImages).map(([path, imageUrl], index) => {
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
    image: imageUrl,
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
