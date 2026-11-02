/* eslint-disable prettier/prettier */
// Public leasing observations checked on 02.11.2026. Rates are not delivery promises.
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
  "leapmotor-t03": { url:q("leapmotor","t03"), "previousRate":34.22,"rate":118.86,"normalizedRate":63.3,"includedGrant":3000,"months":36,"kmPerYear":5000,"transfer":1390,"observedAt":"02.11.2026","delivery":"Median 2,1 Monate","deliverySample":8,"deliverySamples":["sofort","sofort","04/2027","sofort","sofort","5–8 Monate","18 Wochen","18 Wochen"],"deliveryScope":"Acht neue Privatangebote mit gemischten Laufzeiten; das ausgewählte 118,86-€-Angebot selbst nennt 5–8 Monate.","deliveryUncertain":false,"grantNote":"3.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert.","deliveryMedianMonths":2.1,"variant":"T03 Design 37 kWh" },
  "citroen-e-c3": { url:q("citroen","e-c3"), "previousRate":96.78,"observedAt":"02.11.2026","delivery":"Keine belastbare aktuelle Lieferstichprobe","deliverySample":0,"deliverySamples":[],"deliveryScope":"Keine eindeutige neue Plus-Privatanzeige; MAX, TONIC, YOU und VAN sind nicht Plus.","deliveryUncertain":true,"grantNote":"Keine bestätigte normierbare Privatleasingrate." },
  "kia-ev2": { url:q("kia","ev2"), "previousRate":106.44,"rate":99,"normalizedRate":126.78,"includedGrant":6000,"months":36,"kmPerYear":5000,"transfer":1390,"observedAt":"02.11.2026","delivery":"Median 2 Monate","deliverySample":5,"deliverySamples":["4–5 Monate","01/2027","11/2026","sofort","04/2027"],"deliveryScope":"Fünf neue Privatangebote; Air/Earth, gemischte Laufzeiten.","deliveryUncertain":false,"grantNote":"6.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert.","deliveryMedianMonths":2,"variant":"EV2 Air 42,2 kWh" },
  "renault-twingo": { url:q("renault","twingo-e-tech"), "previousRate":123.69,"rate":111.68,"normalizedRate":139.46,"includedGrant":6000,"months":36,"kmPerYear":10000,"transfer":1290,"observedAt":"02.11.2026","delivery":"Median 3 Monate","deliverySample":5,"deliverySamples":["3 Monate","16 Wochen","16 Wochen","12/2026","sofort"],"deliveryScope":"Fünf neue Privatangebote; Gebrauchte ausgeschlossen.","deliveryUncertain":false,"grantNote":"6.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Abweichendes Raster: 36 Monate / 10.000 km/Jahr.","deliveryMedianMonths":3,"variant":"Twingo Evolution" },
  "volvo-ex30": { url:q("volvo","ex30"), "previousRate":119,"rate":99,"normalizedRate":126.78,"includedGrant":6000,"months":36,"kmPerYear":5000,"transfer":1490,"observedAt":"02.11.2026","delivery":"Median 5 Monate","deliverySample":5,"deliverySamples":["4–6 Monate","4–6 Monate","4–6 Monate","8 Wochen","12/2026"],"deliveryScope":"Fünf neue Privatangebote; P3/P5 und Laufzeiten gemischt.","deliveryUncertain":false,"grantNote":"6.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert.","deliveryMedianMonths":5,"variant":"EX30 P3 Essential" },
  "hyundai-ioniq-3": { url:q("hyundai","ioniq-3"), "previousRate":131.22,"rate":139,"normalizedRate":111.22,"includedGrant":4000,"months":36,"kmPerYear":5000,"transfer":1400,"observedAt":"02.11.2026","delivery":"Median 5 Monate · unsicher","deliverySample":1,"deliverySamples":["4–6 Monate"],"deliveryScope":"Nur eine neue Privat-Anzeige mit konkreter Lieferzeit; andere sichtbare Lieferangaben Gewerbe. Unsicher.","deliveryUncertain":true,"grantNote":"4.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert.","deliveryMedianMonths":5,"variant":"IONIQ 3 Trend 42 kWh (carwow)" },
  "mini-cooper-e": { url:q("mini","cooper"), "previousRate":141.94,"observedAt":"02.11.2026","delivery":"Keine belastbare aktuelle Lieferstichprobe","deliverySample":0,"deliverySamples":[],"deliveryScope":"Sichtbare Sammelseite überwiegend Benziner und Auto-Abos, kein belastbares Cooper-E-Privatleasing.","deliveryUncertain":true,"grantNote":"Keine bestätigte normierbare Privatleasingrate." },
  "fiat-500e": { url:q("fiat","500e"), "previousRate":146.78,"rate":131.74,"normalizedRate":131.74,"includedGrant":5000,"months":48,"kmPerYear":10000,"transfer":1090,"observedAt":"02.11.2026","delivery":"Median 3 Monate","deliverySample":5,"deliverySamples":["14 Wochen","2 Wochen","16 Wochen","13 Wochen","4 Wochen"],"deliveryScope":"Fünf neue Privatangebote; 95-PS-Version mit kleinerem Akku als technische 42-kWh-Karte.","deliveryUncertain":false,"grantNote":"5.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Abweichendes Raster: 48 Monate / 10.000 km/Jahr.","deliveryMedianMonths":3,"variant":"500e Limousine 95 PS" },
  "mini-aceman-e": { url:q("mini","aceman"), "previousRate":180.11,"observedAt":"02.11.2026","delivery":"Keine belastbare aktuelle Lieferstichprobe","deliverySample":0,"deliverySamples":[],"deliveryScope":"Sichtbares 342,38-€-Leasingangebot ist gebraucht (12.180 km); andere E/SE-Treffer Auto-Abos/Gebrauchte.","deliveryUncertain":true,"grantNote":"Keine bestätigte normierbare Privatleasingrate." },
  "renault-5": { url:q("renault","5"), "previousRate":172.78,"rate":169,"normalizedRate":185.67,"includedGrant":6000,"months":60,"kmPerYear":10000,"transfer":1390,"observedAt":"02.11.2026","delivery":"Median 3,3 Monate","deliverySample":4,"deliverySamples":["16 Wochen","02/2027","2–6 Monate","02/2027"],"deliveryScope":"Vier neue Privatangebote; Gebrauchte/Gewerbe ausgeschlossen.","deliveryUncertain":false,"grantNote":"6.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Abweichendes Raster: 60 Monate / 10.000 km/Jahr.","deliveryMedianMonths":3.3,"variant":"5 E-Tech Evolution 120" },
  "fiat-600e": { url:q("fiat","600e"), "previousRate":176.78,"rate":168.82,"normalizedRate":168.82,"includedGrant":5000,"months":48,"kmPerYear":10000,"transfer":1390,"observedAt":"02.11.2026","delivery":"Median 2,3 Monate","deliverySample":5,"deliverySamples":["13 Wochen","2 Wochen","10 Wochen","4 Wochen","16 Wochen"],"deliveryScope":"Fünf neue Privatangebote; 48 Monate / 10.000 km.","deliveryUncertain":false,"grantNote":"5.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Abweichendes Raster: 48 Monate / 10.000 km/Jahr.","deliveryMedianMonths":2.3,"variant":"600e Elektro" },
  "renault-4": { url:q("renault","4"), "previousRate":188.25,"rate":215.2,"normalizedRate":198.53,"includedGrant":4000,"months":60,"kmPerYear":5000,"transfer":1450,"observedAt":"02.11.2026","delivery":"Median 0 Monate","deliverySample":5,"deliverySamples":["1 Woche","02/2027","sofort","sofort","sofort"],"deliveryScope":"Fünf neue Privatangebote; Gebrauchte und Gewerbe ausgeschlossen.","deliveryUncertain":false,"grantNote":"4.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Abweichendes Raster: 60 Monate / 5.000 km/Jahr.","deliveryMedianMonths":0,"variant":"4 E-Tech Evolution 120" },
  "dacia-spring": { url:q("dacia","spring"), "previousRate":null,"observedAt":"02.11.2026","delivery":"Median 0 Monate · unsicher","deliverySample":1,"deliverySamples":["sofort"],"deliveryScope":"Nur eine klar nicht als gebraucht markierte neue Spring-Extreme-100-Privatanzeige; viele andere Gebrauchte.","deliveryUncertain":true,"grantNote":"Keine bestätigte normierbare Privatleasingrate.","deliveryMedianMonths":0,"variant":"Spring Extreme 100 (nur Lieferstichprobe)" },
  "hyundai-inster": { url:q("hyundai","inster"), "previousRate":123.33,"rate":140.53,"normalizedRate":112.75,"includedGrant":4000,"months":36,"kmPerYear":5000,"observedAt":"02.11.2026","delivery":"Median 5 Monate · unsicher","deliverySample":5,"deliverySamples":["04/2027","04/2027","04/2027","01/2027","12/2026"],"deliveryScope":"Fünf Neuwagen-Gewerbeanzeigen; kein belastbarer Privat-Liefermedian, deshalb unsicher.","deliveryUncertain":true,"grantNote":"4.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert. Bereitstellung im Privatinserat nicht beziffert.","deliveryMedianMonths":5,"variant":"INSTER Select 42 kWh" },
  "fiat-grande-panda": { url:q("fiat","grande-panda"), "previousRate":86,"rate":89,"normalizedRate":89,"includedGrant":5000,"months":36,"kmPerYear":5000,"transfer":1390,"observedAt":"02.11.2026","delivery":"Median 3,7 Monate","deliverySample":5,"deliverySamples":["13 Wochen","2 Wochen","16 Wochen","16 Wochen","3–6 Monate"],"deliveryScope":"Fünf neue Privatangebote; Laufzeiten und Ausstattung gemischt.","deliveryUncertain":false,"grantNote":"5.000 € im Inserat eingerechnet; auf 5.000 € Förderung normiert.","deliveryMedianMonths":3.7,"variant":"Grande Panda La Prima 44 kWh" },
};