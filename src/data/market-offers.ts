// Live GoLeasy observations checked on 17.10.2026; provenance and limits in migration/data-review-2026-10-17.md.
export type MarketOffer = {
  url: string;
  previousRate: number | null;
  rate?: number;
  transfer?: number;
  delivery?: string;
  grantNote?: string;
  variant?: string;
  offerId?: string;
  directUrl?: string;
};
export const marketOffers: Record<string, MarketOffer> = {
  "leapmotor-t03": {
    url: "https://www.goleasy.de/leasing/marken/leapmotor/t03?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 34.22,
    rate: 118.86,
    transfer: 1390,
    delivery: "3–5 Monate",
    grantNote: "3.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "T03 BEV 37kWh Design",
    offerId: "f7a1666f-cd88-4a65-9084-ebd8efd8ea87",
  },
  "fiat-grande-panda": {
    url: "https://www.goleasy.de/leasing/marken/fiat/grande-panda?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 86,
    rate: 89,
    transfer: 1390,
    delivery: "5 Monate laut Anbieter; Portal nennt 3–4 Monate",
    grantNote: "5.000 € Sonderzahlung; Förderung separat beantragen.",
    variant: "Grande Panda Elektro 44 kWh La Prima",
    offerId: "e071e921-2aac-4fd8-9a43-8bbc15e87bf5",
    directUrl: "https://angebote.carwow.de/deals/a5cbb69ad2b14d0e3b765271b6ec2bb3",
  },
  "citroen-e-c3": {
    url: "https://www.goleasy.de/leasing/marken/citroen/e-c3?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 96.78,
    rate: 432.07,
    transfer: 1350,
    delivery: "Sofort laut Inserat",
    grantNote:
      "Förderung laut Portal wahrscheinlich möglich; Höhe und Sonderzahlung nicht bestätigt.",
    variant: "ë-C3 Elektromotor 113 Standard-Range Plus",
    offerId: "bcf9affa-ae89-4ecc-b72e-ef181ebe9127",
  },
  "kia-ev2": {
    url: "https://www.goleasy.de/leasing/marken/kia/ev2?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 106.44,
    rate: 99,
    transfer: 1390,
    delivery: "4–5 Monate",
    grantNote: "6.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "EV2 42,2 kWh Air",
    offerId: "215dbb9d-fa73-4f62-a670-0d3de966f1dc",
  },
  "renault-twingo": {
    url: "https://www.goleasy.de/leasing/marken/renault/twingo-e-tech?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 123.69,
    rate: 195.53,
    transfer: 1300,
    delivery: "120 Tage",
    grantNote: "3.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "Twingo E-Tech Evolution 80 Urban Range",
    offerId: "e0519db4-b3b3-4855-b750-56d0e52ce763",
  },
  "volvo-ex30": {
    url: "https://www.goleasy.de/leasing/marken/volvo/ex30?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 119,
    rate: 99,
    transfer: 1490,
    delivery: "4–6 Monate",
    grantNote: "6.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "EX30 P3 electric Essential",
    offerId: "ddc84a06-c7a3-4164-bd9b-3383d3a19a08",
  },
  "hyundai-ioniq-3": {
    url: "https://www.goleasy.de/leasing/marken/hyundai/ioniq-3?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 131.22,
    rate: 147.3,
    transfer: 995,
    delivery: "4–6 Monate",
    grantNote: "5.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "IONIQ 3 42kWh 108kW Frontantrieb Trend",
    offerId: "f3d72739-e94d-48c7-9a04-0e42497ae33f",
  },
  "mini-cooper-e": {
    url: "https://www.goleasy.de/leasing/marken/mini/cooper?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 141.94,
  },
  "hyundai-inster": {
    url: "https://www.goleasy.de/leasing/marken/hyundai/inster?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 123.33,
    rate: 272.41,
    transfer: 1172.27,
    delivery: "22 Wochen",
    grantNote:
      "Förderung laut Portal vermutlich einberechnet; Betrag und Sonderzahlung nicht bestätigt.",
    variant: "INSTER EV 42kWh SELECT Navi ACC",
    offerId: "8e23c38a-62b7-4e6a-95a8-2a87db79300e",
  },
  "fiat-500e": {
    url: "https://www.goleasy.de/leasing/marken/fiat/500e?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 146.78,
    rate: 139,
    transfer: 1390,
    delivery: "3–4 Monate",
    grantNote: "6.000 € Förderung als Sonderzahlung laut Portal einkalkuliert.",
    variant: "500e Limousine 42 kWh Icon",
    offerId: "75942a26-2c40-45f1-95b5-2c630d2ed3bf",
  },
  "mini-aceman-e": {
    url: "https://www.goleasy.de/leasing/marken/mini/aceman?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 180.11,
  },
  "renault-5": {
    url: "https://www.goleasy.de/leasing/marken/renault/5?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 172.78,
    rate: 283.91,
    transfer: 1300,
    delivery: "60 Tage",
    grantNote: "3.000 € Förderung laut Portal einberechnet; Sonderzahlung im Einzelangebot prüfen.",
    variant: "5 Evolution 120 Urban Range",
    offerId: "28df392e-f173-4de9-a458-d65585d1d2e9",
  },
  "fiat-600e": {
    url: "https://www.goleasy.de/leasing/marken/fiat/600e?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 176.78,
    rate: 139,
    transfer: 1390,
    delivery: "Bestellfahrzeug; kein Termin genannt",
    grantNote: "6.000 € Förderung als Sonderzahlung laut Portal einkalkuliert.",
    variant: "600e Elektro 54 kWh Pop",
    offerId: "c95bfd4a-470a-4c8c-a001-ff8be5c2df9c",
  },
  "renault-4": {
    url: "https://www.goleasy.de/leasing/marken/renault/4?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: 188.25,
  },
  "dacia-spring": {
    url: "https://www.goleasy.de/leasing/marken/dacia/spring?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000",
    previousRate: null,
  },
};
