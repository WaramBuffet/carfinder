import photo0 from "@/assets/premium/photos/taycan-cross.jpg";
import photo1 from "@/assets/premium/photos/taycan-sport.jpg";
import photo2 from "@/assets/premium/photos/ix3-g08.jpg";
import photo3 from "@/assets/premium/photos/ix3-neue-klasse.jpg";
import photo4 from "@/assets/premium/photos/ex60.jpg";
import photo5 from "@/assets/premium/photos/i5-touring.jpg";
import photo6 from "@/assets/premium/photos/glc-electric.jpg";

export interface PremiumPhoto {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  note: string;
}

// License and subject checked against Wikimedia metadata and the downloaded image.
export const premiumPhotos: Record<string, PremiumPhoto> = {
  "taycan-cross": {
    src: photo0,
    alt: "Grauer Porsche Taycan Cross Turismo nach dem Facelift, schräg von vorn",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:2024_Porsche_Taycan_Cross_Turismo_DSC_7028.jpg",
    note: "Foto zeigt das Facelift ab 2024. Ausstattung und Modelljahr können abweichen.",
  },
  "taycan-sport": {
    src: photo1,
    alt: "Porsche Taycan GTS Sport Turismo in heller Lackierung, schräg von hinten",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Porsche_Taycan_Sport_Turismo_GTS_1X7A0416.jpg",
    note: "Foto zeigt den GTS Sport Turismo von 2022. Motorisierung, Ausstattung und Modelljahr können abweichen.",
  },
  "ix3-g08": {
    src: photo2,
    alt: "Schwarzer BMW iX3 der Generation G08 nach dem Facelift, schräg von vorn",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:BMW_iX3_G08_FL_DSC_9318.jpg",
    note: "Foto zeigt den G08 nach dem Facelift, nicht die Neue Klasse. Ausstattung kann abweichen.",
  },
  "ix3-neue-klasse": {
    src: photo3,
    alt: "Grauer BMW iX3 der Neuen Klasse NA5 mit seitlicher Modellbeschriftung, schräg von vorn",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:BMW_iX3_NA5_IMG_5333.jpg",
    note: "Foto zeigt die Neue Klasse NA5 mit Modellbeschriftung. Ausstattung und Modelljahr können abweichen.",
  },
  ex60: {
    src: photo4,
    alt: "Silberner Volvo EX60 vor einem Autohaus, schräg von vorn",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Volvo_EX60_IMG_8339.jpg",
    note: "Modellfoto des EX60. Ausstattung und Modelljahr können abweichen.",
  },
  "i5-touring": {
    src: photo5,
    alt: "Dunkler BMW i5 eDrive40 Touring G61 auf einer Straße, schräg von hinten",
    author: "Charles from Port Chester, New York",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    source:
      "https://commons.wikimedia.org/wiki/File:BMW_i5_eDrive40_Touring_(G61,_2024)_(54721709594).jpg",
    note: "Foto zeigt den i5 eDrive40 Touring (G61). Motorisierung, Ausstattung und Modelljahr können abweichen.",
  },
  "glc-electric": {
    src: photo6,
    alt: "Silberner vollelektrischer Mercedes-Benz GLC mit EQ-Technologie, schräg von vorn",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_GLC_with_EQ_Technology_IMG_7650.jpg",
    note: "Foto zeigt den neuen vollelektrischen GLC mit EQ-Technologie, keinen Verbrenner oder Plug-in-Hybrid.",
  },
};
