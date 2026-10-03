import photo0 from "../assets/vehicles/leapmotor-t03.jpg";
import photo1 from "../assets/vehicles/fiat-grande-panda.jpg";
import photo2 from "../assets/vehicles/citroen-e-c3.jpg";
import photo3 from "../assets/vehicles/kia-ev2.jpg";
import photo4 from "../assets/vehicles/renault-twingo.jpg";
import photo5 from "../assets/vehicles/volvo-ex30.jpg";
import photo6 from "../assets/vehicles/mini-cooper-e.jpg";
import photo7 from "../assets/vehicles/hyundai-inster.jpg";
import photo8 from "../assets/vehicles/fiat-500e.jpg";
import photo9 from "../assets/vehicles/mini-aceman-e.jpg";
import photo10 from "../assets/vehicles/renault-5.jpg";
import photo11 from "../assets/vehicles/fiat-600e.jpg";
import photo12 from "../assets/vehicles/renault-4.jpg";
import photo13 from "../assets/vehicles/dacia-spring.jpg";
import photo14 from "../assets/vehicles/hyundai-ioniq-3.jpg";

export type VehiclePhoto = {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  note: string;
};

export const vehiclePhotos = {
  "leapmotor-t03": {
    src: photo0,
    alt: "Hellblauer Leapmotor T03 in seitlicher Heckansicht",
    author: "Trop86",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    source: "https://commons.wikimedia.org/wiki/File:Leapmotor_T03_152318.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "fiat-grande-panda": {
    src: photo1,
    alt: "Gelber Fiat Grande Panda Electric in Frontansicht",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Fiat_Grande_Panda_E_DSC_8525.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "citroen-e-c3": {
    src: photo2,
    alt: "Blauer Citroën ë-C3 von schräg oben",
    author: "Charles from Port Chester, New York",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Citro%C3%ABn_%C3%AB-C3_(2025)_(54519385950).jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "kia-ev2": {
    src: photo3,
    alt: "Hellblauer Kia EV2 auf der Poznań Motor Show 2026",
    author: "Peżot",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Kia_EV2_front_Pozna%C5%84_Motor_Show_2026.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "renault-twingo": {
    src: photo4,
    alt: "Grüner Renault Twingo E-Tech der neuen Generation in Heckansicht",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Renault_Twingo_E-Tech_IMG_6592.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "volvo-ex30": {
    src: photo5,
    alt: "Hellblauer Volvo EX30 in seitlicher Frontansicht",
    author: "JustAnotherCarDesigner",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    source: "https://commons.wikimedia.org/wiki/File:Volvo_EX30_001.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "mini-cooper-e": {
    src: photo6,
    alt: "Dunkler MINI Cooper E der Baureihe J01 in Frontansicht",
    author: "Tokumeigakarinoaoshima",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:BMW_MINI_COOPER_3door_E_(J01)_front.jpg",
    note: "Foto zeigt die japanische Marktausführung.",
  },
  "hyundai-inster": {
    src: photo7,
    alt: "Hyundai INSTER auf einer Ausstellung in Frontansicht",
    author: "LudegoEV",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Hyundai_Inster.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "fiat-500e": {
    src: photo8,
    alt: "Blauer Fiat 500e Icon der Baureihe 332 in Frontansicht",
    author: "Tokumeigakarinoaoshima",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:FIAT_500e_ICON_(ZAA-FA1)_front.jpg",
    note: "Foto zeigt die japanische Marktausführung.",
  },
  "mini-aceman-e": {
    src: photo9,
    alt: "Roter MINI Aceman S auf einer Ausstellung",
    author: "JustAnotherCarDesigner",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    source: "https://commons.wikimedia.org/wiki/File:Mini_Aceman_S_001.jpg",
    note: "Foto zeigt Aceman S; verglichen wird Aceman E.",
  },
  "renault-5": {
    src: photo10,
    alt: "Grüner Renault 5 E-Tech Electric in Frontansicht",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Renault_5_E-Tech_Electric_IMG_3571.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "fiat-600e": {
    src: photo11,
    alt: "Weißer Fiat 600e in Frontansicht",
    author: "Alexander-93",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Fiat_600e.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "renault-4": {
    src: photo12,
    alt: "Karminroter Renault 4 E-Tech Electric in Frontansicht",
    author: "Rundvald",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Renault-4-E-Tech-electric-2025-rouge-carmin-01-byRundvald.jpg",
    note: "Modellfoto; Ausstattung und Modelljahr können abweichen.",
  },
  "dacia-spring": {
    src: photo13,
    alt: "Weißer Dacia Spring mit der Karosserie ab 2024 in Frontansicht",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:2024_Dacia_Spring_DSC_7937.jpg",
    note: "Foto zeigt das Modell ab 2024; Vergleich: Modelljahr 2026.",
  },
  "hyundai-ioniq-3": {
    src: photo14,
    alt: "Roter Hyundai IONIQ 3 N Line – Herstelleraufnahme",
    author: "© Hyundai Motor Company",
    license: "Redaktionelle Nutzung",
    licenseUrl: "https://www.hyundai.news/eu/terms-of-use.html",
    source:
      "https://www.hyundai.news/eu/articles/press-releases/ioniq-3-unveil-milan-design-week-2026/images.html",
    note: "Foto zeigt N Line; verglichen wird Trend. Nur redaktionelle Nutzung.",
  },
} satisfies Record<string, VehiclePhoto>;
