import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  Heart,
  Images,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  TableProperties,
  WalletCards,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { vehiclePhotos, type VehiclePhoto } from "@/data/vehicle-photos";

type ViewMode = "fakten" | "gefuehl";

type PageSearch = { ansicht: ViewMode };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): PageSearch => ({
    ansicht: search["ansicht"] === "gefuehl" ? "gefuehl" : "fakten",
  }),
  head: () => ({
    meta: [
      { title: "Preiswerte E-Autos im Vergleich – Zahlen oder mit Gefühl" },
      {
        name: "description",
        content:
          "15 kompakte Elektroautos in zwei Ansichten: sachlich nach Zahlen und Fakten oder als warme, bildstarke Editorial-Auswahl.",
      },
      { property: "og:title", content: "Preiswerte E-Autos im Vergleich" },
      {
        property: "og:description",
        content:
          "Ein transparenter E-Auto-Vergleich mit gemeinsamer Datenbasis – wahlweise nüchtern oder emotional erzählt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Safety = "5 Sterne" | "4 Sterne" | "Kein aktueller Test";
type SortKey = "rate" | "price" | "length" | "trunk" | "delivery";

type Car = {
  slug: string;
  site: string;
  manufacturer: string;
  model: string;
  price: number;
  rate: number | null;
  rateApprox?: boolean;
  transfer: number | null;
  delivery: number;
  length: number;
  trunk: string;
  trunkFolded: string;
  trunkFoldedValue: number;
  safety: Safety;
  safetyNote: string;
  photo: VehiclePhoto;
  character: string;
  electric: {
    variantUnconfirmed?: boolean;
    range: string;
    consumption: string;
    chargingMinutes: number | null;
    chargingAlternative?: string;
    chargingNote?: string;
    variant: string;
    sources: { label: string; url: string }[];
  };
};

type ServiceLocation = {
  name: string;
  address: string;
  driveTime: string;
  verified: boolean;
};

const serviceByManufacturer: Record<string, ServiceLocation> = {
  Renault: {
    name: "Sonnleitner Nürnberg Nord",
    address: "Kilianstraße 181, 90425 Nürnberg",
    driveTime: "ca. 15–20 Min.",
    verified: true,
  },
  Dacia: {
    name: "Sonnleitner Nürnberg Nord",
    address: "Kilianstraße 181, 90425 Nürnberg",
    driveTime: "ca. 15–20 Min.",
    verified: true,
  },
  Kia: {
    name: "Kia Nürnberg / Feser-Graf",
    address: "Tennenloher Straße 10, 90425 Nürnberg",
    driveTime: "ca. 20–25 Min.",
    verified: true,
  },
  Leapmotor: {
    name: "Autohaus Kropf",
    address: "Bessemerstraße 10, 90411 Nürnberg",
    driveTime: "ca. 15–20 Min.",
    verified: true,
  },
  Fiat: {
    name: "Autohaus Kropf",
    address: "Bessemerstraße 10, 90411 Nürnberg",
    driveTime: "ca. 15–20 Min.",
    verified: true,
  },
  MINI: {
    name: "MINI Nürnberg",
    address: "Max-Ottenstein-Str. 1, 90441 Nürnberg",
    driveTime: "ca. 25–30 Min.",
    verified: true,
  },
  Volvo: {
    name: "SVENSCAR Fürth-Poppenreuth",
    address: "Hans-Vogel-Straße 2, 90765 Fürth",
    driveTime: "ca. 20–25 Min.",
    verified: true,
  },
  Hyundai: {
    name: "Hyundai-Scharf",
    address: "Leyher Str. 79, 90431 Nürnberg",
    driveTime: "ca. 25–30 Min.",
    verified: true,
  },
  Citroën: {
    name: "Autorisierter Citroën-Service",
    address: "Standort noch zu verifizieren",
    driveTime: "noch zu verifizieren",
    verified: false,
  },
};

const cars: Car[] = [
  {
    slug: "leapmotor-t03",
    site: "https://www.leapmotor.net/de/t03",
    manufacturer: "Leapmotor",
    model: "T03",
    price: 18900,
    rate: 34.22,
    transfer: 1399,
    delivery: 4,
    length: 3.62,
    trunk: "210 l",
    trunkFolded: "880 l",
    trunkFoldedValue: 880,
    safety: "Kein aktueller Test",
    safetyNote: "Kein Euro NCAP",
    photo: vehiclePhotos["leapmotor-t03"],
    character: "Klein im Format, mit einer heiteren, unkomplizierten Ausstrahlung.",
    electric: {
      range: "265",
      consumption: "16,3",
      chargingMinutes: null,
      chargingAlternative: "36 Min. für 30–80 %",
      variant: "T03 · 37,3 kWh; Herstellerbroschüre für den europäischen Markt.",
      sources: [
        {
          label: "Technische Daten",
          url: "https://lpwebsite-prod-s3cdn.leapmotor-international.com/public/download/t03/en/T03Brochure_EN.pdf",
        },
      ],
    },
  },
  {
    slug: "fiat-grande-panda",
    site: "https://www.fiat.de/modelle/grande-panda-elektrisch",
    manufacturer: "Fiat",
    model: "Grande Panda Electric La Prima",
    price: 30990,
    rate: 86,
    transfer: 1498,
    delivery: 3.5,
    length: 4,
    trunk: "361 l",
    trunkFolded: "1.315 l",
    trunkFoldedValue: 1315,
    safety: "Kein aktueller Test",
    safetyNote: "Kein Euro NCAP",
    photo: vehiclePhotos["fiat-grande-panda"],
    character: "Praktische Proportionen, freundlich und angenehm unangestrengt.",
    electric: {
      range: "bis zu 320",
      consumption: "16,8",
      chargingMinutes: null,
      chargingAlternative: "27 Min. für 20–80 %",
      variant: "La Prima · 44 kWh.",
      sources: [
        {
          label: "Technische Daten",
          url: "https://www.fiat.de/modelle/grande-panda-elektrisch/technical-data",
        },
      ],
    },
  },
  {
    slug: "citroen-e-c3",
    site: "https://www.citroen.de/modelle/e-C3.html",
    manufacturer: "Citroën",
    model: "ë-C3 Plus",
    price: 23750,
    rate: 96.78,
    transfer: 1495,
    delivery: 2,
    length: 4.02,
    trunk: "310 l",
    trunkFolded: "1.200 l",
    trunkFoldedValue: 1200,
    safety: "Kein aktueller Test",
    safetyNote: "Kein Euro NCAP",
    photo: vehiclePhotos["citroen-e-c3"],
    character: "Weiche Formen und eine gelassene Präsenz für den Alltag.",
    electric: {
      variantUnconfirmed: true,
      range: "310–322",
      consumption: "16,7–17,3",
      chargingMinutes: null,
      chargingAlternative: "26 Min. für 20–80 %",
      variant:
        "Standard-Range · 44 kWh. Die Batterie ist im ursprünglichen Angebot nicht benannt; Zuordnung zum Angebot noch bestätigen. Spannen gelten für die Standard-Range-Baureihe.",
      sources: [
        {
          label: "Preisliste · April 2026",
          url: "https://www.citroen.de/content/dam/citroen/germany/b2c/pricelists/04-26/Preisliste-C3-01.04.2026.pdf",
        },
      ],
    },
  },
  {
    slug: "kia-ev2",
    site: "https://www.kia.com/de/modelle/ev2/entdecken/",
    manufacturer: "Kia",
    model: "EV2 Air 42,2 kWh",
    price: 28990,
    rate: 106.44,
    transfer: 1290,
    delivery: 4.5,
    length: 4.06,
    trunk: "362 l",
    trunkFolded: "1.160 l",
    trunkFoldedValue: 1160,
    safety: "Kein aktueller Test",
    safetyNote: "Noch kein Euro NCAP",
    photo: vehiclePhotos["kia-ev2"],
    character: "Klar gezeichnet und mit angenehm selbstbewusster Haltung.",
    electric: {
      range: "308–317",
      consumption: "15,1–15,5",
      chargingMinutes: 29,
      variant: "Air · 42,2 kWh; abhängig von 16- oder 18-Zoll-Rädern.",
      sources: [
        {
          label: "Preisliste",
          url: "https://www.kia.com/content/dam/kwcms/kme/de/de/assets/contents/utility/Preisliste/Kia-Germany-EV2-Preisliste.pdf",
        },
        {
          label: "Laden",
          url: "https://www.kia.com/de/specials/electric-deals/",
        },
      ],
    },
  },
  {
    slug: "renault-twingo",
    site: "https://www.renault.de/elektromodelle/twingo-e-tech-elektrisch.html",
    manufacturer: "Renault",
    model: "Twingo E-Tech Evolution",
    price: 19990,
    rate: 123.69,
    transfer: 1250,
    delivery: 4,
    length: 3.79,
    trunk: "260–360 l",
    trunkFolded: "> 1.000 l",
    trunkFoldedValue: 1001,
    safety: "Kein aktueller Test",
    safetyNote: "Noch kein Euro NCAP",
    photo: vehiclePhotos["renault-twingo"],
    character: "Kompakt, lebendig und wie gemacht für enge Straßen.",
    electric: {
      range: "bis zu 262",
      consumption: "13,1",
      chargingMinutes: 30,
      variant: "Evolution · 27,5 kWh · 50-kW-DC-Lader laut Renault-Presseinformation.",
      sources: [
        {
          label: "Herstellerangaben · Evolution",
          url: "https://presse.renault.de/renault-twingo-evolution-ab-19990-euro/?lang=deu",
        },
      ],
    },
  },
  {
    slug: "volvo-ex30",
    site: "https://www.volvocars.com/de/cars/ex30-electric/",
    manufacturer: "Volvo",
    model: "EX30 Essential P3",
    price: 34990,
    rate: 119,
    rateApprox: true,
    transfer: 1490,
    delivery: 5,
    length: 4.23,
    trunk: "318 l",
    trunkFolded: "623 l",
    trunkFoldedValue: 623,
    safety: "5 Sterne",
    safetyNote: "5★ Euro NCAP",
    photo: vehiclePhotos["volvo-ex30"],
    character: "Reduziert, ruhig und mit einer souveränen Präsenz.",
    electric: {
      range: "bis zu 335",
      consumption: "17,0",
      chargingMinutes: 26,
      chargingNote:
        "Herstellerangabe; Reichweite und Ladezeit auf der Modellseite als vorläufig bezeichnet.",
      variant:
        "P3 Essential · 51 kWh. Verbrauch der Essential-Angebotsvariante; andere Konfigurationen können abweichen.",
      sources: [
        {
          label: "P3 Essential",
          url: "https://www.volvocars.com/de/promotions/details/ex30-leasingangebot-business/",
        },
        {
          label: "Ladebedingungen",
          url: "https://www.volvocars.com/de/cars/ex30-electric/",
        },
      ],
    },
  },
  {
    slug: "hyundai-ioniq-3",
    site: "https://www.hyundai.com/de/de/modelle/ioniq-3.html",
    manufacturer: "Hyundai",
    model: "IONIQ 3 Trend 42,2 kWh",
    price: 31950,
    rate: 131.22,
    rateApprox: true,
    transfer: 1290,
    delivery: 4.5,
    length: 4.16,
    trunk: "441 l",
    trunkFolded: "1.213 l",
    trunkFoldedValue: 1213,
    safety: "Kein aktueller Test",
    safetyNote: "Noch kein Euro NCAP",
    photo: vehiclePhotos["hyundai-ioniq-3"],
    character: "Modern, klar und mit viel optischer Ruhe.",
    electric: {
      range: "341",
      consumption: "14,3",
      chargingMinutes: 29,
      variant:
        "Trend · 42 kWh laut Hersteller (im ursprünglichen Datensatz als 42,2 kWh bezeichnet).",
      sources: [
        {
          label: "Reichweite und Laden",
          url: "https://www.hyundai.com/de/de/modelle/ioniq-3/reichweite-und-laden.html",
        },
      ],
    },
  },
  {
    slug: "mini-cooper-e",
    site: "https://www.mini.de/de_DE/home/range/all-electric-mini-cooper.html",
    manufacturer: "MINI",
    model: "Cooper E",
    price: 27500,
    rate: 141.94,
    transfer: 950,
    delivery: 2,
    length: 3.86,
    trunk: "210 l",
    trunkFolded: "800 l",
    trunkFoldedValue: 800,
    safety: "5 Sterne",
    safetyNote: "5★ Euro NCAP (2025)",
    photo: vehiclePhotos["mini-cooper-e"],
    character: "Charmant, konzentriert und mit spielerischer Eleganz.",
    electric: {
      range: "290–300",
      consumption: "14,3",
      chargingMinutes: 28,
      variant:
        "Cooper E · 36,6 kWh netto. Reichweite abhängig von Ausstattung; Verbrauch ist die WLTP-Pflichtangabe.",
      sources: [
        {
          label: "Reichweite und Laden",
          url: "https://www.mini.de/de_DE/home/range/electric/performance.html",
        },
      ],
    },
  },
  {
    slug: "hyundai-inster",
    site: "https://www.hyundai.com/de/de/modelle/inster.html",
    manufacturer: "Hyundai",
    model: "INSTER 42 kWh Select",
    price: 24650,
    rate: 123.33,
    rateApprox: true,
    transfer: 1254,
    delivery: 7.5,
    length: 3.83,
    trunk: "280 l",
    trunkFolded: "1.059 l",
    trunkFoldedValue: 1059,
    safety: "4 Sterne",
    safetyNote: "4★ Euro NCAP (2025)",
    photo: vehiclePhotos["hyundai-inster"],
    character: "Ein sympathischer Stadtbegleiter mit eigenständiger Haltung.",
    electric: {
      range: "327",
      consumption: "14,3",
      chargingMinutes: 30,
      chargingNote:
        "Für die angegebene Ladezeit setzt Hyundai einen HPC-Ladepunkt mit mindestens 350 kW voraus.",
      variant: "Select · 42 kWh.",
      sources: [
        {
          label: "Herstellerangaben",
          url: "https://www.hyundai.com/de/de/modelle/inster.html",
        },
      ],
    },
  },
  {
    slug: "fiat-500e",
    site: "https://www.fiat.de/modelle/500-elektro",
    manufacturer: "Fiat",
    model: "500e Icon 42 kWh",
    price: 32990,
    rate: 146.78,
    transfer: 1390,
    delivery: 3.5,
    length: 3.63,
    trunk: "185 l",
    trunkFolded: "550 l",
    trunkFoldedValue: 550,
    safety: "4 Sterne",
    safetyNote: "4★ Euro NCAP (2021)",
    photo: vehiclePhotos["fiat-500e"],
    character: "Klassisch verspielt und besonders zuhause im Stadtbild.",
    electric: {
      range: "322–331",
      consumption: "13,6–13,9",
      chargingMinutes: null,
      chargingAlternative: "ca. 35 Min. bis 80 %",
      chargingNote: "Start-Ladestand vom Hersteller nicht angegeben.",
      variant:
        "Icon · 42 kWh · Limousine, passend zum Listenpreis von 32.990 €. Werte laut Preisliste Oktober 2026; nicht Cabrio oder 3+1.",
      sources: [
        {
          label: "Preisliste · Oktober 2026",
          url: "https://www.fiat.de/content/dam/fiat2023/de/pdf/pricelist/Preisliste-Fiat-500.pdf",
        },
      ],
    },
  },
  {
    slug: "mini-aceman-e",
    site: "https://www.mini.de/de_DE/home/range/all-electric-mini-aceman.html",
    manufacturer: "MINI",
    model: "Aceman E",
    price: 30000,
    rate: 180.11,
    transfer: 950,
    delivery: 2,
    length: 4.08,
    trunk: "300 l",
    trunkFolded: "1.005 l",
    trunkFoldedValue: 1005,
    safety: "5 Sterne",
    safetyNote: "5★ Euro NCAP (2025)",
    photo: vehiclePhotos["mini-aceman-e"],
    character: "Urban, grafisch und mit einer kleinen Portion Extravaganz.",
    electric: {
      range: "301–309",
      consumption: "14,6",
      chargingMinutes: 28,
      variant:
        "Aceman E · 38,5 kWh netto. Reichweite abhängig von Ausstattung; Verbrauch ist die WLTP-Pflichtangabe.",
      sources: [
        {
          label: "Technische Daten · September 2026",
          url: "https://www.mini.de/content/dam/MINI/marketDSM_DE/mini_de/brochures/Brochures2026/J05_MINI_Aceman_0926_Ausgabe1_Produktflyer.pdf.asset.1779955654815.pdf",
        },
      ],
    },
  },
  {
    slug: "renault-5",
    site: "https://www.renault.de/elektromodelle/r5-e-tech-elektrisch-my26.html",
    manufacturer: "Renault",
    model: "5 E-Tech Evolution",
    price: 26290,
    rate: 172.78,
    transfer: 1350,
    delivery: 5,
    length: 3.92,
    trunk: "326 l",
    trunkFolded: "1.106 l",
    trunkFoldedValue: 1106,
    safety: "4 Sterne",
    safetyNote: "4★ Euro NCAP (2024)",
    photo: vehiclePhotos["renault-5"],
    character: "Lebensfroh, kompakt und mit einem Hauch Nostalgie.",
    electric: {
      range: "321",
      consumption: "14,2",
      chargingMinutes: null,
      chargingAlternative: "30 Min. für 15–80 %",
      variant:
        "Evolution 120 Urban Range (MY26) · 40 kWh, passend zum Listenpreis von 26.290 €. Werte der Standardkonfiguration.",
      sources: [
        {
          label: "Konfigurator",
          url: "https://www.renault.de/elektromodelle/r5-e-tech-elektrisch-my26/konfigurator.html",
        },
        {
          label: "Laden",
          url: "https://www.renault.de/elektromodelle/r5-e-tech-elektrisch-my26/reichweite-und-aufladen.html",
        },
      ],
    },
  },
  {
    slug: "fiat-600e",
    site: "https://www.fiat.de/modelle/600-elektro",
    manufacturer: "Fiat",
    model: "600e Pop 54 kWh",
    price: 31990,
    rate: 176.78,
    rateApprox: true,
    transfer: 1390,
    delivery: 2,
    length: 4.18,
    trunk: "360 l",
    trunkFolded: "1.231 l",
    trunkFoldedValue: 1231,
    safety: "Kein aktueller Test",
    safetyNote: "Kein Euro-NCAP-Test gefunden",
    photo: vehiclePhotos["fiat-600e"],
    character: "Rund, freundlich und etwas großzügiger gedacht.",
    electric: {
      range: "bis zu 409",
      consumption: "15,2",
      chargingMinutes: null,
      chargingAlternative: "27 Min. für 20–80 %",
      variant:
        "Pop · 54 kWh. Reichweite ist der Maximalwert der 54-kWh-Baureihe; ausstattungsabhängig.",
      sources: [
        {
          label: "Verbrauch · Pop",
          url: "https://www.fiat.de/modelle/600/pop",
        },
        {
          label: "Technische Daten",
          url: "https://www.fiat.de/modelle/600/technische-details",
        },
        {
          label: "Ladefenster",
          url: "https://www.media.stellantis.com/uk-en/fiat/press/fiat-600e-wins-best-electric-compact-suv-award-from-ecocar",
        },
      ],
    },
  },
  {
    slug: "renault-4",
    site: "https://www.renault.de/elektromodelle/r4-e-tech-elektrisch.html",
    manufacturer: "Renault",
    model: "4 E-Tech Evolution",
    price: 29500,
    rate: 188.25,
    transfer: 1350,
    delivery: 6,
    length: 4.14,
    trunk: "420 l",
    trunkFolded: "1.405 l",
    trunkFoldedValue: 1405,
    safety: "4 Sterne",
    safetyNote: "4★ Euro NCAP",
    photo: vehiclePhotos["renault-4"],
    character: "Praktisch und entspannt, mit einer angenehm offenen Wirkung.",
    electric: {
      range: "305",
      consumption: "14,8",
      chargingMinutes: null,
      chargingAlternative: "30 Min. für 15–80 %",
      variant:
        "Evolution 120 Urban Range · 40 kWh, passend zum Listenpreis von 29.500 €. Werte der Standardkonfiguration.",
      sources: [
        {
          label: "Konfigurator",
          url: "https://www.renault.de/elektromodelle/r4-e-tech-elektrisch/konfigurator.html",
        },
        {
          label: "Laden",
          url: "https://www.renault.de/elektromodelle/r4-e-tech-elektrisch/antrieb.html",
        },
      ],
    },
  },
  {
    slug: "dacia-spring",
    site: "https://www.dacia.de/hybrid-und-elektromodelle/spring-stadtauto.html",
    manufacturer: "Dacia",
    model: "Spring electric 70 Expression",
    price: 18700,
    rate: null,
    transfer: null,
    delivery: 4,
    length: 3.7,
    trunk: "308 l",
    trunkFolded: "1.004 l",
    trunkFoldedValue: 1004,
    safety: "Kein aktueller Test",
    safetyNote: "Kein aktueller Test · frühere Variante 1★ (2021)",
    photo: vehiclePhotos["dacia-spring"],
    character: "Unkompliziert, handlich und ganz auf den Alltag konzentriert.",
    electric: {
      range: "221–226",
      consumption: "12,7",
      chargingMinutes: null,
      chargingAlternative: "29 Min. für 20–80 %",
      chargingNote: "Nur mit optionalem 40-kW-CCS-Schnellladeanschluss.",
      variant:
        "Expression electric 70 · Modelljahr 2026. Reichweitenspanne der aktuellen Baureihe; ausstattungsabhängig.",
      sources: [
        {
          label: "Version Expression",
          url: "https://www.dacia.de/hybrid-und-elektromodelle/spring-stadtauto/preise-versionen.html?gradeCode=ENS_MDL2P1SERIELIM2",
        },
        {
          label: "Laden",
          url: "https://www.dacia.de/hybrid-und-elektromodelle/spring-stadtauto.html",
        },
      ],
    },
  },
];

const money = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const monthly = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
const manufacturers = [...new Set(cars.map((car) => car.manufacturer))].sort((a, b) =>
  a.localeCompare(b, "de"),
);

function formatDelivery(value: number) {
  return `${value.toLocaleString("de-DE")} Monate`;
}

function Rate({ car }: { car: Car }) {
  if (car.rate === null)
    return (
      <span className="text-sm font-medium text-muted-foreground">
        Noch kein sauber vergleichbarer Wert
      </span>
    );
  return (
    <>
      <strong className="font-semibold text-foreground">
        {car.rateApprox ? "ca. " : ""}
        {monthly.format(car.rate)}
      </strong>
      <span className="text-xs text-muted-foreground"> / Monat</span>
    </>
  );
}

function ChargingTime({ car }: { car: Car }) {
  const { chargingMinutes, chargingAlternative, chargingNote } = car.electric;
  return (
    <div className="max-w-56">
      <span className="font-semibold">
        {chargingMinutes === null ? "Nicht angegeben" : `ca. ${chargingMinutes} Min.`}
      </span>
      {chargingAlternative && (
        <span className="mt-1 block text-xs text-muted-foreground">{chargingAlternative}</span>
      )}
      {chargingNote && (
        <span className="mt-1 block text-xs text-muted-foreground">{chargingNote}</span>
      )}
    </div>
  );
}

function ElectricSources({ car }: { car: Car }) {
  return (
    <details className="mt-3 max-w-60 text-xs text-muted-foreground">
      <summary className="cursor-pointer font-medium text-primary">
        Variante &amp; Quellen{car.electric.variantUnconfirmed ? " · Batteriezuordnung offen" : ""}
      </summary>
      <p className="mt-2 leading-relaxed">{car.electric.variant}</p>
      <p className="mt-2">Technische Angaben geprüft am 03.10.2026.</p>
      <ul className="mt-2 space-y-2">
        {car.electric.sources.map((source) => (
          <li key={source.url}>
            <a
              className="underline underline-offset-2"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.label}
              <span className="sr-only">
                {" "}
                für {car.manufacturer} {car.model}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function SafetyBadge({ car }: { car: Car }) {
  const tone =
    car.safety === "5 Sterne"
      ? "bg-sage text-sage-foreground"
      : car.safety === "4 Sterne"
        ? "bg-rose-soft text-foreground"
        : "bg-muted text-muted-foreground";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}
    >
      <Star className="h-3 w-3" aria-hidden="true" />
      {car.safetyNote}
    </span>
  );
}

function ServiceDetails({ car, compact = false }: { car: Car; compact?: boolean }) {
  const service = serviceByManufacturer[car.manufacturer];
  if (!service) return null;
  return (
    <div className={compact ? "max-w-56" : "col-span-2"}>
      {!compact && (
        <dt className="text-xs text-muted-foreground">Nächster relevanter Marken-Service</dt>
      )}
      <dd className={`${compact ? "text-xs" : "mt-1 text-sm"} font-semibold leading-relaxed`}>
        {service.name}
      </dd>
      <dd className="text-xs leading-relaxed text-muted-foreground">{service.address}</dd>
      <dd
        className={`mt-1 text-xs ${service.verified ? "text-primary" : "font-semibold text-muted-foreground"}`}
      >
        {service.driveTime}
        {service.verified ? " · typische Fahrzeit bei normalem Verkehr" : ""}
      </dd>
    </div>
  );
}

function SortButton({
  label,
  value,
  active,
  direction,
  onSort,
}: {
  label: string;
  value: SortKey;
  active: boolean;
  direction: "asc" | "desc";
  onSort: (value: SortKey) => void;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => onSort(value)}
      className="h-auto px-0 py-0 font-semibold hover:bg-transparent hover:text-primary"
      aria-label={`${label} sortieren`}
    >
      {label}
      {active ? (
        direction === "asc" ? (
          <ArrowUp />
        ) : (
          <ArrowDown />
        )
      ) : (
        <ChevronDown className="text-muted-foreground" />
      )}
    </Button>
  );
}

function ViewToggle({ mode, setMode }: { mode: ViewMode; setMode: (mode: ViewMode) => void }) {
  return (
    <div
      className="grid w-full grid-cols-2 rounded-md border border-border bg-background p-1 sm:w-auto"
      aria-label="Ansicht wählen"
    >
      <Button
        type="button"
        variant={mode === "fakten" ? "default" : "ghost"}
        onClick={() => setMode("fakten")}
        aria-pressed={mode === "fakten"}
        className="min-w-0 px-3 sm:min-w-44"
      >
        <TableProperties aria-hidden="true" /> <span className="truncate">Zahlen &amp; Fakten</span>
      </Button>
      <Button
        type="button"
        variant={mode === "gefuehl" ? "default" : "ghost"}
        onClick={() => setMode("gefuehl")}
        aria-pressed={mode === "gefuehl"}
        className="min-w-0 px-3 sm:min-w-36"
      >
        <Heart aria-hidden="true" /> <span className="truncate">Mit Gefühl</span>
      </Button>
    </div>
  );
}

function BasisStrip({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-label="Vergleichsbasis"
      className={`border-y border-border ${compact ? "bg-card" : "bg-rose-soft"}`}
    >
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${compact ? "py-5" : "py-7"}`}>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">
          Vergleichsbasis
        </p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
          {[
            [WalletCards, "Privatleasing", "Vertragsart"],
            [CalendarDays, "36 Monate", "Laufzeit"],
            [Ruler, "5.000 km/Jahr", "Fahrleistung"],
            [Sparkles, "5.000 €", "angenommene Förderung"],
            [CarFront, "Separat", "Überführung"],
            [Check, "02.10.2026", "Datenstand"],
          ].map(([Icon, value, label]) => {
            const BasisIcon = Icon as typeof WalletCards;
            return (
              <div key={String(label)} className="min-w-0">
                <BasisIcon className="mb-2 h-4 w-4 text-primary" />
                <p className="font-semibold text-foreground">{String(value)}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{String(label)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Highlights({ emotional }: { emotional: boolean }) {
  return (
    <section
      className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${emotional ? "py-16 lg:py-24" : "py-10 lg:py-12"}`}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{emotional ? "Was sofort auffällt" : "Beschreibende Kennzahlen"}</p>
        <h2 className={emotional ? "section-title" : "mt-2 text-2xl font-bold sm:text-3xl"}>
          {emotional
            ? "Drei gute Gründe, genauer hinzusehen."
            : "Erfasste Eckwerte auf einen Blick"}
        </h2>
      </div>
      <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
        <article className="bg-card p-6 lg:p-8">
          <WalletCards className="h-6 w-6 text-primary" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Niedrigste erfasste Rate
          </p>
          <h3 className={`mt-2 ${emotional ? "font-display text-3xl" : "text-xl font-bold"}`}>
            Leapmotor T03
          </h3>
          <p className="mt-2 text-xl font-semibold text-primary">
            34,22 € <span className="text-sm font-normal text-muted-foreground">/ Monat</span>
          </p>
        </article>
        <article className="bg-sage p-6 lg:p-8">
          <CarFront className="h-6 w-6 text-sage-foreground" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-sage-foreground/70">
            Größtes erfasstes Ladevolumen
          </p>
          <h3 className={`mt-2 ${emotional ? "font-display text-3xl" : "text-xl font-bold"}`}>
            Renault 4 E-Tech
          </h3>
          <p className="mt-2 text-xl font-semibold text-sage-foreground">
            1.405 l <span className="text-sm font-normal">umgeklappt</span>
          </p>
        </article>
        <article className="bg-primary p-6 text-primary-foreground lg:p-8">
          <ShieldCheck className="h-6 w-6" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/70">
            Erfasstes 5-Sterne-Ergebnis
          </p>
          <h3 className={`mt-2 ${emotional ? "font-display text-3xl" : "text-xl font-bold"}`}>
            Drei Modelle
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Volvo EX30, MINI Cooper E und MINI Aceman E
          </p>
        </article>
      </div>
    </section>
  );
}

function PhotoCredit({
  photo,
  hero = false,
  className = "px-4 pb-3 text-[11px] leading-relaxed text-muted-foreground",
}: {
  photo: VehiclePhoto;
  hero?: boolean;
  className?: string;
}) {
  return (
    <p className={className}>
      <span className="block">{photo.note}</span>
      Bild: {photo.author} ·{" "}
      <a
        href={photo.source}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Bildquelle
      </a>{" "}
      ·{" "}
      <a
        href={photo.licenseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {photo.license}
      </a>
      <span className="block">
        {hero
          ? "Titelbild: verkleinert, beschnitten und mit Text überlagert."
          : "Verkleinert; sonst unverändert."}
      </span>
    </p>
  );
}

function PhotoGallery({
  emotional,
  onSelect,
}: {
  emotional: boolean;
  onSelect: (car: Car) => void;
}) {
  return (
    <section
      id="fotos"
      className={
        emotional
          ? "scroll-mt-40 bg-rose-soft/50 py-16 lg:scroll-mt-24 lg:py-24"
          : "scroll-mt-40 border-y border-border bg-card py-10 lg:scroll-mt-24 lg:py-12"
      }
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="eyebrow">Fotoübersicht</p>
            <h2 className={emotional ? "section-title" : "mt-2 text-2xl font-bold sm:text-3xl"}>
              {emotional ? "Welcher Charakter spricht Sie an?" : "Alle 15 Modelle im Überblick"}
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            Originalfotos und eine Herstelleraufnahme der Modelle. Farbe, Ausstattung und Modelljahr
            können vom Vergleichsangebot abweichen. Bildnachweise stehen direkt beim Foto.
          </p>
        </div>
        <div
          className={`gallery-scroll mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:overflow-visible lg:pb-0 ${emotional ? "lg:grid-cols-3" : "lg:grid-cols-5"}`}
        >
          {cars.map((car) => (
            <article
              key={car.slug}
              className={`w-[82vw] shrink-0 snap-start overflow-hidden border border-border sm:w-[22rem] lg:w-auto ${emotional ? "bg-background" : "bg-card"}`}
            >
              <button
                type="button"
                onClick={() => onSelect(car)}
                className="group block h-auto w-full text-left whitespace-normal"
                aria-label={`${car.manufacturer} ${car.model} im Vergleich anzeigen`}
              >
                <img
                  src={car.photo.src}
                  alt={car.photo.alt}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className={`w-full bg-muted/40 object-contain transition-transform duration-500 group-hover:scale-[1.02] ${emotional ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                />
                <span className="block w-full p-4">
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    {car.manufacturer}
                  </span>
                  <span
                    className={`${emotional ? "font-display text-2xl" : "text-sm font-bold"} mt-1 block leading-tight text-foreground`}
                  >
                    {car.model}
                  </span>
                  {emotional && (
                    <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                      {car.character}
                    </span>
                  )}
                </span>
              </button>
              <PhotoCredit photo={car.photo} />
              <a
                href={car.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 pb-4 pt-1 text-xs font-semibold text-primary hover:underline"
              >
                Offizielle Herstellerseite
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterBar({
  manufacturer,
  setManufacturer,
  safety,
  setSafety,
}: {
  manufacturer: string;
  setManufacturer: (value: string) => void;
  safety: string;
  setSafety: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
        Hersteller
        <select
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
          className="mt-2 block h-11 w-full min-w-48 rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-ring"
        >
          <option>Alle</option>
          {manufacturers.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
        Sicherheit
        <select
          value={safety}
          onChange={(event) => setSafety(event.target.value)}
          className="mt-2 block h-11 w-full min-w-56 rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-ring"
        >
          <option>Alle</option>
          <option>5 Sterne</option>
          <option>4 Sterne</option>
          <option>Kein aktueller Test</option>
        </select>
      </label>
    </div>
  );
}

function Comparison({
  visibleCars,
  mobileCars,
  manufacturer,
  setManufacturer,
  safety,
  setSafety,
  sortKey,
  setSortKey,
  direction,
  onSort,
  mobileDirection,
  setMobileDirection,
  selectedSlug,
  emotional,
}: {
  visibleCars: Car[];
  mobileCars: Car[];
  manufacturer: string;
  setManufacturer: (value: string) => void;
  safety: string;
  setSafety: (value: string) => void;
  sortKey: SortKey;
  setSortKey: (value: SortKey) => void;
  direction: "asc" | "desc";
  onSort: (value: SortKey) => void;
  mobileDirection: "asc" | "desc";
  setMobileDirection: (value: "asc" | "desc") => void;
  selectedSlug: string | null;
  emotional: boolean;
}) {
  return (
    <section
      id="vergleich"
      className={`${emotional ? "bg-surface" : "bg-background"} py-14 lg:py-20`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">Alle Modelle</p>
            <h2 className={emotional ? "section-title" : "mt-2 text-3xl font-bold sm:text-4xl"}>
              Vergleichen, was wirklich zählt.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
              {visibleCars.length} von {cars.length} Fahrzeugen
            </p>
          </div>
          <FilterBar
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            safety={safety}
            setSafety={setSafety}
          />
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Reichweite und Durchschnittsverbrauch: WLTP kombiniert. Schnellladen: DC von 10 auf 80 %;
          abweichende Hersteller-Ladefenster stehen ausdrücklich beim Fahrzeug. Technische Daten
          geprüft am 03.10.2026.
        </p>
        <div className="mt-8 md:hidden">
          <div className="grid grid-cols-2 gap-3">
            <label className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Sortierung
              <select
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value as SortKey)}
                className="mt-2 block h-11 w-full rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground"
              >
                <option value="rate">Monatsrate</option>
                <option value="price">Listenpreis</option>
                <option value="length">Länge</option>
                <option value="trunk">Kofferraum umgeklappt</option>
                <option value="delivery">Lieferzeit</option>
              </select>
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Richtung
              <select
                value={mobileDirection}
                onChange={(event) => setMobileDirection(event.target.value as "asc" | "desc")}
                className="mt-2 block h-11 w-full rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground"
              >
                <option value="asc">Aufsteigend</option>
                <option value="desc">Absteigend</option>
              </select>
            </label>
          </div>
          <div className="mt-5 space-y-4">
            {mobileCars.map((car, index) => (
              <CarCard
                key={car.slug}
                car={car}
                index={index}
                selected={selectedSlug === car.slug}
                emotional={emotional}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 hidden overflow-x-auto rounded-md border border-border bg-card md:block">
          <table
            aria-label="Fahrzeugvergleich"
            className="w-full min-w-[1850px] border-collapse text-left text-sm"
          >
            <thead
              className={
                emotional
                  ? "bg-rose-soft text-xs uppercase tracking-[0.08em]"
                  : "bg-muted text-xs uppercase tracking-[0.08em]"
              }
            >
              <tr>
                <th className="px-5 py-4">Modell</th>
                <th scope="col" className="px-4 py-4">
                  <SortButton
                    label="Monatsrate"
                    value="rate"
                    active={sortKey === "rate"}
                    direction={direction}
                    onSort={onSort}
                  />
                </th>
                <th scope="col" className="px-4 py-4">
                  <SortButton
                    label="Listenpreis"
                    value="price"
                    active={sortKey === "price"}
                    direction={direction}
                    onSort={onSort}
                  />
                </th>
                <th scope="col" className="px-4 py-4">
                  WLTP-Reichweite
                </th>
                <th scope="col" className="px-4 py-4">
                  Ø Verbrauch
                  <br />
                  <span className="font-normal">WLTP · kWh/100 km</span>
                </th>
                <th scope="col" className="px-4 py-4">
                  DC-Schnellladen
                  <br />
                  <span className="font-normal">10–80 % · Minuten</span>
                </th>
                <th className="px-4 py-4">Überführung</th>
                <th scope="col" className="px-4 py-4">
                  <SortButton
                    label="Lieferzeit"
                    value="delivery"
                    active={sortKey === "delivery"}
                    direction={direction}
                    onSort={onSort}
                  />
                </th>
                <th scope="col" className="px-4 py-4">
                  <SortButton
                    label="Länge"
                    value="length"
                    active={sortKey === "length"}
                    direction={direction}
                    onSort={onSort}
                  />
                </th>
                <th scope="col" className="px-4 py-4">
                  <SortButton
                    label="Kofferraum"
                    value="trunk"
                    active={sortKey === "trunk"}
                    direction={direction}
                    onSort={onSort}
                  />
                </th>
                <th className="px-4 py-4">Sicherheit</th>
                <th className="px-4 py-4">Service / Fahrzeit</th>
              </tr>
            </thead>
            <tbody>
              {visibleCars.map((car) => (
                <tr
                  id={`car-${car.slug}`}
                  key={car.slug}
                  className={`scroll-mt-24 border-t border-border align-top transition-colors ${selectedSlug === car.slug ? "bg-accent" : "hover:bg-accent/50"}`}
                >
                  <td className="px-5 py-5">
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {car.manufacturer}
                    </span>
                    <strong
                      className={`${emotional ? "font-display text-lg" : "font-bold"} mt-1 block max-w-52 leading-tight`}
                    >
                      {car.model}
                    </strong>
                    <ElectricSources car={car} />
                  </td>
                  <td className="px-4 py-5">
                    <Rate car={car} />
                  </td>
                  <td className="px-4 py-5 font-medium">{money.format(car.price)}</td>
                  <td className="px-4 py-5 whitespace-nowrap font-semibold">
                    {car.electric.range} km
                  </td>
                  <td className="px-4 py-5 whitespace-nowrap font-semibold">
                    {car.electric.consumption}
                  </td>
                  <td className="px-4 py-5">
                    <ChargingTime car={car} />
                  </td>
                  <td className="px-4 py-5">
                    {car.transfer === null ? (
                      <span className="text-muted-foreground">Noch offen</span>
                    ) : (
                      money.format(car.transfer)
                    )}
                  </td>
                  <td className="px-4 py-5">
                    <span className="font-medium">{formatDelivery(car.delivery)}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Vorläufig · unsicher
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    {car.length.toLocaleString("de-DE", { minimumFractionDigits: 2 })} m
                  </td>
                  <td className="px-4 py-5">
                    <span className="font-medium">{car.trunk}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      umgeklappt {car.trunkFolded}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <SafetyBadge car={car} />
                  </td>
                  <td className="px-4 py-5">
                    <ServiceDetails car={car} compact />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visibleCars.length === 0 && (
          <div className="mt-8 rounded-md border border-border bg-card p-10 text-center">
            <CircleHelp className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 font-medium">Für diese Filterkombination gibt es kein Modell.</p>
            <Button
              className="mt-4"
              onClick={() => {
                setManufacturer("Alle");
                setSafety("Alle");
              }}
            >
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function Methodology({ compact }: { compact: boolean }) {
  return (
    <section
      className={`mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 ${compact ? "py-12 lg:py-16" : "py-16 lg:py-24"}`}
    >
      <div>
        <p className="eyebrow">Methodik</p>
        <h2 className={compact ? "mt-2 text-3xl font-bold" : "section-title"}>
          Transparent statt schöngerechnet.
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
          Alle Angaben folgen in beiden Ansichten derselben Datenbasis. Vorläufige oder fehlende
          Werte bleiben sichtbar gekennzeichnet.
        </p>
      </div>
      <div className="divide-y divide-border border-y border-border">
        <article className="py-6">
          <h3 className={compact ? "text-lg font-bold" : "font-display text-2xl"}>
            Reichweite, Verbrauch und Laden
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            WLTP kombiniert ist ein standardisierter Vergleichswert, kein gemessener
            Alltagsverbrauch. Ausstattung, Wetter und Fahrweise verändern Reichweite und Verbrauch.
            Die Quellen nennen die verwendete Batterie und Variante; Spannen bleiben erhalten.
            DC-Ladezeiten gelten unter den Herstellerbedingungen und hängen insbesondere von
            Batterietemperatur und Ladesäule ab. Wenn 10–80 % nicht veröffentlicht ist, zeigen wir
            „Nicht angegeben“ und das tatsächlich genannte Ladefenster. Es erfolgt keine
            rechnerische Umrechnung auf 10–80 %.
          </p>
        </article>
        <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
          <span
            className={`${compact ? "text-2xl font-bold" : "font-display text-3xl"} text-primary`}
          >
            01
          </span>
          <div>
            <h3 className={compact ? "text-lg font-bold" : "font-display text-2xl"}>
              Förderung und Rate
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Privatleasing über 36 Monate und 5.000 Kilometer pro Jahr. Die Rate ist auf 5.000 €
              angenommene Förderung normiert. Überführungs- und Bereitstellungskosten werden separat
              gezeigt. Die Förderung ist eine Rechenannahme, keine Zusage; konkrete Angebote und
              Förderberechtigung sind hier nicht belegt.
            </p>
          </div>
        </article>
        <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
          <span
            className={`${compact ? "text-2xl font-bold" : "font-display text-3xl"} text-primary`}
          >
            02
          </span>
          <div>
            <h3 className={compact ? "text-lg font-bold" : "font-display text-2xl"}>
              Lieferzeit als Median
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Die Lieferzeit soll als Median mehrerer aktueller Anzeigen ermittelt werden. Die
              Startwerte besitzen noch keine dokumentierte Anzeigenbasis und sind deshalb als
              „vorläufig · unsicher“ markiert.
            </p>
          </div>
        </article>
        <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
          <span
            className={`${compact ? "text-2xl font-bold" : "font-display text-3xl"} text-primary`}
          >
            03
          </span>
          <div>
            <h3 className={compact ? "text-lg font-bold" : "font-display text-2xl"}>Sicherheit</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ausgewiesen werden veröffentlichte Euro-NCAP-Ergebnisse samt Testjahr, sofern bekannt.
              „Kein aktueller Test“ ist keine Aussage über die tatsächliche Fahrzeugsicherheit.
            </p>
          </div>
        </article>
        <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
          <span
            className={`${compact ? "text-2xl font-bold" : "font-display text-3xl"} text-primary`}
          >
            04
          </span>
          <div>
            <h3 className={compact ? "text-lg font-bold" : "font-display text-2xl"}>
              Marken-Service und Fahrzeit
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ausgangspunkt ist Untere Seelach, 90562 Heroldsberg. Genannt wird bewusst der
              regelmäßig relevante autorisierte Service- oder Werkstattstandort, nicht ein
              gegebenenfalls näherer einmaliger Verkaufsstandort. Die Fahrzeit ist ein Näherungswert
              bei normalem Verkehr; der Citroën-Standort bleibt bis zur sicheren Bestätigung als
              „noch zu verifizieren“ markiert.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Index() {
  const { ansicht } = Route.useSearch();
  const totalModels = cars.length;
  const totalManufacturers = new Set(cars.map((car) => car.manufacturer)).size;
  const fiveStarModels = cars.filter((car) => car.safety === "5 Sterne").length;
  const navigate = useNavigate({ from: "/" });
  const [manufacturer, setManufacturer] = useState("Alle");
  const [safety, setSafety] = useState("Alle");
  const [sortKey, setSortKey] = useState<SortKey>("rate");
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  const mobileDirection = direction;
  const setMobileDirection = setDirection;
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const emotional = ansicht === "gefuehl";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("ansicht")) {
      let saved: string | null = null;
      try {
        saved = window.sessionStorage.getItem("eauto-ansicht");
      } catch {
        /* Private browsing may block storage. */
      }
      if (saved === "gefuehl") void navigate({ search: { ansicht: "gefuehl" }, replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const match = /^#car-([a-z0-9-]+)$/.exec(window.location.hash);
    if (!match) return;
    const slug = match[1];
    if (!slug || !cars.some((car) => car.slug === slug)) return;
    setSelectedSlug(slug);
    const timer = window.setTimeout(() => {
      const targetId = window.matchMedia("(max-width: 767px)").matches
        ? `mobile-car-${slug}`
        : `car-${slug}`;
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  const setMode = (mode: ViewMode) => {
    try {
      window.sessionStorage.setItem("eauto-ansicht", mode);
    } catch {
      /* URL remains the source of truth. */
    }
    void navigate({ search: { ansicht: mode }, replace: true, hash: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredCars = cars.filter(
    (car) =>
      (manufacturer === "Alle" || car.manufacturer === manufacturer) &&
      (safety === "Alle" || car.safety === safety),
  );
  const sortCars = (list: Car[], dir: "asc" | "desc") => {
    const values: Record<SortKey, (car: Car) => number> = {
      rate: (car) => car.rate ?? Number.POSITIVE_INFINITY,
      price: (car) => car.price,
      length: (car) => car.length,
      trunk: (car) => car.trunkFoldedValue,
      delivery: (car) => car.delivery,
    };
    return [...list].sort((a, b) => {
      if (sortKey === "rate") {
        if (a.rate === null && b.rate === null) return 0;
        if (a.rate === null) return 1;
        if (b.rate === null) return -1;
      }
      return (values[sortKey](a) - values[sortKey](b)) * (dir === "asc" ? 1 : -1);
    });
  };
  const visibleCars = sortCars(filteredCars, direction);
  const mobileCars = visibleCars;

  const onSort = (key: SortKey) => {
    if (sortKey === key) setDirection((current) => (current === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  const onPhotoSelect = (car: Car) => {
    setManufacturer("Alle");
    setSafety("Alle");
    setSelectedSlug(car.slug);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#car-${car.slug}`,
    );
    window.setTimeout(() => {
      const targetId = window.matchMedia("(max-width: 767px)").matches
        ? `mobile-car-${car.slug}`
        : `car-${car.slug}`;
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <main
      className={
        emotional
          ? "mode-emotional overflow-x-clip bg-background"
          : "mode-facts overflow-x-clip bg-background"
      }
    >
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-3 sm:flex sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="min-w-0">
            <p
              className={`truncate font-semibold ${emotional ? "font-display text-xl" : "text-base"}`}
            >
              Preiswerte E-Autos im Vergleich
            </p>
            <p className="text-xs text-muted-foreground">Eine Datenbasis · zwei Perspektiven</p>
          </div>
          <ViewToggle mode={ansicht} setMode={setMode} />
        </div>
      </header>

      {emotional ? (
        <>
          <section className="relative min-h-[78svh] overflow-hidden bg-foreground text-primary-foreground">
            <img
              src={vehiclePhotos["renault-5"].src}
              alt={vehiclePhotos["renault-5"].alt}
              width={1920}
              height={1280}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
            />
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-12 lg:py-9">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-primary-foreground/40 pb-4">
                <p className="min-w-0 truncate text-xs font-bold uppercase tracking-[0.16em]">
                  Elektrisch. Ehrlich. Charmant.
                </p>
                <p className="shrink-0 text-xs">Stand 02.10.2026</p>
              </div>
              <div className="max-w-3xl pb-10 pt-20 sm:pb-14 lg:pb-16">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em]">
                  Ein Vergleich mit Gefühl für das Wesentliche
                </p>
                <h1 className="font-display text-5xl leading-[0.96] sm:text-7xl lg:text-8xl">
                  Preiswerte E-Autos
                  <br />
                  im Vergleich
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
                  Kompakt, elektrisch und mit Persönlichkeit. Zahlen für den Kopf, Bilder und
                  redaktionelle Eindrücke für das Bauchgefühl.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                >
                  <a href="#vergleich">
                    Modelle vergleichen <ArrowDown />
                  </a>
                </Button>
              </div>
            </div>
            <PhotoCredit
              photo={vehiclePhotos["renault-5"]}
              hero
              className="relative mx-auto max-w-7xl px-5 pb-5 text-xs leading-relaxed text-primary-foreground/90 sm:px-8 lg:px-12"
            />
          </section>
          <BasisStrip />
          <Highlights emotional />
          <PhotoGallery emotional onSelect={onPhotoSelect} />
        </>
      ) : (
        <>
          <section className="border-b border-border bg-muted/40">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="eyebrow">Zahlen &amp; Fakten · Stand 02.10.2026</p>
                  <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                    E-Autos klar und nachvollziehbar vergleichen
                  </h1>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {totalModels} Modelle, einheitlich auf 36 Monate, 5.000 km/Jahr und 5.000 €
                    angenommene Förderung bezogen. Fehlende oder vorläufige Angaben werden nicht
                    ergänzt.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 border-l border-border pl-6">
                  <div>
                    <strong className="text-2xl">{totalModels}</strong>
                    <span className="block text-xs text-muted-foreground">Modelle</span>
                  </div>
                  <div>
                    <strong className="text-2xl">{totalManufacturers}</strong>
                    <span className="block text-xs text-muted-foreground">Marken</span>
                  </div>
                  <div>
                    <strong className="text-2xl">{fiveStarModels}</strong>
                    <span className="block text-xs text-muted-foreground">mit 5 Sternen</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <BasisStrip compact />
          <Highlights emotional={false} />
        </>
      )}

      <aside
        className="mx-auto max-w-7xl px-5 pt-6 text-sm leading-relaxed text-muted-foreground sm:px-8 lg:px-12"
        aria-label="Quellenstatus"
      >
        <strong className="text-foreground">Übernommener Datenstand: 02.10.2026.</strong> Preise,
        Leasingraten, Abmessungen, Sicherheitsangaben und Serviceadressen stammen aus dem
        ursprünglichen Projekt und sind nicht unabhängig geprüft. Reichweite, Verbrauch und
        Ladezeiten wurden am 03.10.2026 anhand von Herstellerquellen ergänzt; Variante und Quellen
        sind bei jedem Fahrzeug aufklappbar.
      </aside>
      <Comparison
        visibleCars={visibleCars}
        mobileCars={mobileCars}
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        safety={safety}
        setSafety={setSafety}
        sortKey={sortKey}
        setSortKey={setSortKey}
        direction={direction}
        onSort={onSort}
        mobileDirection={mobileDirection}
        setMobileDirection={setMobileDirection}
        selectedSlug={selectedSlug}
        emotional={emotional}
      />
      {!emotional && <PhotoGallery emotional={false} onSelect={onPhotoSelect} />}
      <Methodology compact={!emotional} />
      <footer className="bg-foreground text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <p className={emotional ? "font-display text-2xl" : "text-lg font-bold"}>
            Preiswerte E-Autos im Vergleich
          </p>
          <p className="mt-4 max-w-4xl text-xs leading-relaxed text-primary-foreground/70">
            Momentaufnahme öffentlich auffindbarer Angebote, Stand 2. Oktober 2026. Preise,
            Förderbedingungen, Verfügbarkeiten und Lieferzeiten können sich jederzeit ändern.
            Angaben ohne Gewähr; maßgeblich sind die Bedingungen des jeweiligen Anbieters.
          </p>
        </div>
      </footer>
    </main>
  );
}

function CarCard({
  car,
  index,
  selected,
  emotional,
}: {
  car: Car;
  index: number;
  selected: boolean;
  emotional: boolean;
}) {
  return (
    <article
      id={`mobile-car-${car.slug}`}
      className={`scroll-mt-32 overflow-hidden rounded-md border bg-card transition-shadow ${selected ? "border-primary ring-2 ring-ring" : "border-border"}`}
    >
      {emotional && (
        <>
          <img
            src={car.photo.src}
            alt={car.photo.alt}
            loading="lazy"
            width={1280}
            height={800}
            className="aspect-[16/10] w-full bg-muted/40 object-contain"
          />
          <PhotoCredit photo={car.photo} />
        </>
      )}
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-5 py-5 ${emotional ? "bg-rose-soft" : "bg-muted"}`}
      >
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
            {car.manufacturer}
          </p>
          <h3
            className={`mt-1 leading-tight ${emotional ? "font-display text-2xl" : "text-xl font-bold"}`}
          >
            {car.model}
          </h3>
        </div>
        <span
          className={`${emotional ? "font-display" : "font-bold"} shrink-0 text-2xl text-border`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-5">
        {emotional && (
          <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">
            {car.character}
          </p>
        )}
        <div className="pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            Normierte Leasingrate
          </p>
          <p className="mt-2 text-xl">
            <Rate car={car} />
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border pt-5 text-sm">
          <div>
            <dt className="text-xs text-muted-foreground">Listenpreis</dt>
            <dd className="mt-1 font-semibold">{money.format(car.price)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Überführung</dt>
            <dd className="mt-1 font-semibold">
              {car.transfer === null ? "Noch offen" : money.format(car.transfer)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Lieferzeit</dt>
            <dd className="mt-1 font-semibold">{formatDelivery(car.delivery)}</dd>
            <dd className="text-xs text-primary">Vorläufig · unsicher</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Länge</dt>
            <dd className="mt-1 font-semibold">
              {car.length.toLocaleString("de-DE", { minimumFractionDigits: 2 })} m
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs text-muted-foreground">Kofferraum</dt>
            <dd className="mt-1 font-semibold">
              {car.trunk} normal · {car.trunkFolded} umgeklappt
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">WLTP-Reichweite</dt>
            <dd className="mt-1 font-semibold">{car.electric.range} km</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Ø Verbrauch · WLTP</dt>
            <dd className="mt-1 font-semibold">{car.electric.consumption} kWh/100 km</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs text-muted-foreground">DC-Schnellladen · 10–80 %</dt>
            <dd className="mt-1">
              <ChargingTime car={car} />
            </dd>
          </div>
          <ServiceDetails car={car} />
        </dl>
        <ElectricSources car={car} />
        <div className="mt-5">
          <SafetyBadge car={car} />
        </div>
      </div>
    </article>
  );
}
