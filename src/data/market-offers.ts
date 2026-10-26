/* eslint-disable prettier/prettier */
// Public leasing observations checked on 26.10.2026. Rates are not delivery promises.
// Normalized rates assume exactly EUR 5,000 actually available EV support.
// Transfer / provision costs are always shown separately and are never spread over the monthly rate.
export type MarketOffer = {
  url: string;
  previousRate: number | null;
  rate?: number;
  normalizedRate?: number;
  includedGrant?: number;
  observedAt?: string;
  months?: number;
  kmPerYear?: number;
  transfer?: number;
  delivery?: string;
  deliveryMedianMonths?: number;
  deliverySample?: number;
  deliverySamples?: string[];
  deliveryScope?: string;
  deliveryUncertain?: boolean;
  grantNote?: string;
  variant?: string;
  offerId?: string;
  directUrl?: string;
};
const q = (brand: string, model: string) =>
  `https://www.goleasy.de/leasing/marken/${brand}/${model}?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000`;
export const marketOffers: Record<string, MarketOffer> = {
  "smart-2": {
    url: q("smart", "2"),
    previousRate: null,
    rate: 151.63,
    normalizedRate: 179.41,
    months: 36,
    kmPerYear: 10000,
    transfer: 990,
    delivery: "Bestellfahrzeug; Markteinführung 2027, keine verlässliche Lieferzeit im Inserat",
    deliverySample: 0,
    deliveryUncertain: true,
    grantNote: "GoLeasy rechnet 6.000 € Förderung ein; Vergleichswert für 5.000 €: 151,63 € + 1.000 €/36. Nur Förderannahme, keine garantierte Bewilligung. 10.000 statt 5.000 km/Jahr.",
    variant: "smart #2 Pure · 35,8 kWh · 82 PS; Homologation noch offen",
  },
  "leapmotor-t03": { url:q("leapmotor","t03"), "previousRate":34.22,"rate":118.86,"normalizedRate":63.3,"includedGrant":3000,"months":36,"kmPerYear":5000,"transfer":1390,"delivery":"Median 4,1 Monate","deliveryMedianMonths":4.1,"deliverySample":5,"deliverySamples":["3–5 Monate","18 Wochen","18 Wochen","22 Wochen","02/2027"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; Varianten/Laufzeiten gemischt.","grantNote":"3.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert.","variant":"T03 BEV 37 kWh Design","observedAt":"26.10.2026" },
  "citroen-e-c3": { url:q("citroen","e-c3"), "previousRate":96.78,"delivery":"Median 0 Monate · unsicher","deliveryMedianMonths":0,"deliverySample":1,"deliverySamples":["sofort"],"deliveryScope":"Nur eine ë-C3-Plus-Neuwagen-Privatanzeige; 48 Monate / 5.000 km, 376,48 € und 1.350 € Bereitstellung, Förderung nicht beziffert.","deliveryUncertain":true,"grantNote":"Nur eine ë-C3-Plus-Neuwagen-Privatanzeige; 48 Monate / 5.000 km, 376,48 € und 1.350 € Bereitstellung, Förderung nicht beziffert.","observedAt":"26.10.2026" },
  "kia-ev2": { url:q("kia","ev2"), "previousRate":106.44,"rate":99,"normalizedRate":126.78,"includedGrant":6000,"months":36,"kmPerYear":5000,"transfer":1390,"delivery":"Median 3 Monate","deliveryMedianMonths":3,"deliverySample":5,"deliverySamples":["4–5 Monate","01/2027","10/2026","04/2027","sofort"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; Ausstattung/Laufzeiten gemischt.","grantNote":"6.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert.","variant":"EV2 Air 42,2 kWh","observedAt":"26.10.2026" },
  "renault-twingo": { url:q("renault","twingo-e-tech"), "previousRate":123.69,"rate":111.68,"normalizedRate":139.46,"includedGrant":6000,"months":36,"kmPerYear":10000,"transfer":1290,"delivery":"Median 3 Monate","deliveryMedianMonths":3,"deliverySample":5,"deliverySamples":["3 Monate","16 Wochen","16 Wochen","12/2026","sofort"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; Laufzeiten gemischt.","grantNote":"6.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert. Abweichendes Raster: 36 Monate / 10.000 km/Jahr.","variant":"Twingo E-Tech Evolution","observedAt":"26.10.2026" },
  "volvo-ex30": { url:q("volvo","ex30"), "previousRate":119,"rate":99,"normalizedRate":126.78,"includedGrant":6000,"months":36,"kmPerYear":5000,"transfer":1490,"delivery":"Median 5 Monate","deliveryMedianMonths":5,"deliverySample":5,"deliverySamples":["4–6 Monate","4–6 Monate","12/2026","4–6 Monate","03/2027"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; P3/P5 und Laufzeiten gemischt.","grantNote":"6.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert.","variant":"EX30 P3 electric Essential","observedAt":"26.10.2026" },
  "hyundai-ioniq-3": { url:q("hyundai","ioniq-3"), "previousRate":131.22,"rate":147.3,"normalizedRate":147.3,"includedGrant":5000,"months":36,"kmPerYear":5000,"transfer":995,"delivery":"Median 3 Monate","deliveryMedianMonths":3,"deliverySample":4,"deliverySamples":["4–6 Monate","03/2027","11/2026","11/2026"],"deliveryScope":"Vier Neuwagen-Privatanzeigen; Gewerbe ausgeschlossen.","grantNote":"5.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert.","variant":"IONIQ 3 Trend 42 kWh","observedAt":"26.10.2026" },
  "mini-cooper-e": { url:q("mini","cooper"), "previousRate":141.94,"delivery":"Keine belastbare Neuwagen-Stichprobe","deliverySample":0,"deliverySamples":[],"deliveryScope":"Sichtbare Treffer mischen Benziner und gebrauchte Cooper SE; kein neues Cooper E Privatangebot.","deliveryUncertain":true,"grantNote":"Sichtbare Treffer mischen Benziner und gebrauchte Cooper SE; kein neues Cooper E Privatangebot.","observedAt":"26.10.2026" },
  "fiat-500e": { url:q("fiat","500e"), "previousRate":146.78,"rate":131.74,"normalizedRate":131.74,"includedGrant":5000,"months":48,"kmPerYear":10000,"transfer":1090,"delivery":"Median 3,2 Monate","deliveryMedianMonths":3.2,"deliverySample":5,"deliverySamples":["14 Wochen","2 Wochen","14 Wochen","16 Wochen","13 Wochen"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen (Limousine/Cabrio); 48 Monate / 10.000 km.","grantNote":"5.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert. Abweichendes Raster: 48 Monate / 10.000 km/Jahr.","variant":"500e Limousine 95 PS / kleiner Akku, nicht die technische 42-kWh-Vergleichsvariante","observedAt":"26.10.2026" },
  "mini-aceman-e": { url:q("mini","aceman"), "previousRate":180.11,"delivery":"Keine belastbare Neuwagen-Stichprobe","deliverySample":0,"deliverySamples":[],"deliveryScope":"Sichtbare Aceman-E/SE-Treffer sind Auto-Abos, teils gebraucht; kein vergleichbares Neuwagen-Privatleasing.","deliveryUncertain":true,"grantNote":"Sichtbare Aceman-E/SE-Treffer sind Auto-Abos, teils gebraucht; kein vergleichbares Neuwagen-Privatleasing.","observedAt":"26.10.2026" },
  "renault-5": { url:q("renault","5"), "previousRate":172.78,"rate":169,"normalizedRate":185.67,"includedGrant":6000,"months":60,"kmPerYear":10000,"transfer":1390,"delivery":"Median 3,3 Monate","deliveryMedianMonths":3.3,"deliverySample":4,"deliverySamples":["16 Wochen","2–6 Monate","12/2026","01/2027"],"deliveryScope":"Vier Neuwagen-Privatanzeigen; Gebrauchtwagen ausgeschlossen.","grantNote":"6.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert. Abweichendes Raster: 60 Monate / 10.000 km/Jahr.","variant":"Renault 5 E-Tech Evolution 120","observedAt":"26.10.2026" },
  "fiat-600e": { url:q("fiat","600e"), "previousRate":176.78,"rate":168.82,"normalizedRate":168.82,"includedGrant":5000,"months":48,"kmPerYear":10000,"transfer":1390,"delivery":"Median 2,3 Monate","deliveryMedianMonths":2.3,"deliverySample":5,"deliverySamples":["13 Wochen","2 Wochen","10 Wochen","4 Wochen","16 Wochen"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; meist 48 Monate / 10.000 km.","grantNote":"5.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert. Abweichendes Raster: 48 Monate / 10.000 km/Jahr.","variant":"600e Elektro","observedAt":"26.10.2026" },
  "renault-4": { url:q("renault","4"), "previousRate":188.25,"rate":215.2,"normalizedRate":198.53,"includedGrant":4000,"months":60,"kmPerYear":5000,"transfer":1450,"delivery":"Median 0 Monate","deliveryMedianMonths":0,"deliverySample":5,"deliverySamples":["1 Woche","sofort","sofort","sofort","sofort"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; ausgewähltes günstigstes Angebot nennt eine Woche.","grantNote":"4.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert. Abweichendes Raster: 60 Monate / 5.000 km/Jahr.","variant":"Renault 4 E-Tech Evolution 120","observedAt":"26.10.2026" },
  "dacia-spring": { url:q("dacia","spring"), "previousRate":null,"delivery":"Median 0 Monate · unsicher","deliveryMedianMonths":0,"deliverySample":2,"deliverySamples":["sofort","sofort"],"deliveryScope":"Zwei eindeutig neue Spring Extreme Electric 100; viele andere Treffer sind Gebrauchtwagen.","deliveryUncertain":true,"grantNote":"Zwei eindeutig neue Spring Extreme Electric 100; viele andere Treffer sind Gebrauchtwagen.","observedAt":"26.10.2026" },
  "hyundai-inster": { url:q("hyundai","inster"), "previousRate":123.33,"delivery":"Median 3 Monate · unsicher","deliveryMedianMonths":3,"deliverySample":5,"deliverySamples":["04/2027","04/2027","01/2027","11/2026","11/2026"],"deliveryScope":"Fünf Neuwagen-Gewerbeanzeigen; für Privat unsicher.","deliveryUncertain":true,"grantNote":"Fünf Neuwagen-Gewerbeanzeigen; für Privat unsicher.","observedAt":"26.10.2026" },
  "fiat-grande-panda": { url:q("fiat","grande-panda"), "previousRate":86,"rate":89,"normalizedRate":89,"includedGrant":5000,"months":36,"kmPerYear":5000,"transfer":1390,"delivery":"Median 3 Monate","deliveryMedianMonths":3,"deliverySample":5,"deliverySamples":["13 Wochen","2 Wochen","16 Wochen","11 Wochen","3–4 Monate"],"deliveryScope":"Fünf Neuwagen-Privatanzeigen; Varianten/Laufzeiten gemischt.","grantNote":"5.000 € im Angebot einkalkuliert; auf 5.000 € tatsächlich verfügbare Förderung normiert.","variant":"Grande Panda Electric La Prima 44 kWh","observedAt":"26.10.2026" },
};