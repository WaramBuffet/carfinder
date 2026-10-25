// Public leasing observations checked on 25.10.2026. Rates are not delivery promises.
// Normalized rates assume exactly EUR 5,000 actually available EV support.
// Transfer / provision costs are always shown separately and are never spread over the monthly rate.
export type MarketOffer = {
  url: string;
  previousRate: number | null;
  rate?: number;
  normalizedRate?: number;
  months?: number;
  kmPerYear?: number;
  transfer?: number;
  delivery?: string;
  deliveryMedianMonths?: number;
  deliverySample?: number;
  deliveryUncertain?: boolean;
  grantNote?: string;
  variant?: string;
  offerId?: string;
  directUrl?: string;
};
const q = (brand: string, model: string) =>
  `https://www.goleasy.de/leasing/marken/${brand}/${model}?sort=preis-aufsteigend&vertragstyp=privat&min_laufzeit=36&max_laufzeit=36&min_fahrleistung=5000&max_fahrleistung=5000`;
export const marketOffers: Record<string, MarketOffer> = {
  "leapmotor-t03": { url:q("leapmotor","t03"), previousRate:34.22, rate:118.86, normalizedRate:63.30, months:36, kmPerYear:5000, transfer:1390, delivery:"Median 4,1 Monate", deliveryMedianMonths:4.1, deliverySample:5, grantNote:"3.000 € Förderung im beobachteten Angebot; auf 5.000 € normiert.", variant:"T03 BEV 37 kWh Design" },
  "citroen-e-c3": { url:q("citroen","e-c3"), previousRate:96.78, delivery:"Keine belastbare Stichprobe", deliverySample:0, deliveryUncertain:true, grantNote:"Kein ausreichend verifiziertes aktuelles Neuwagen-Privatangebot für eine seriöse Förder-Normierung." },
  "kia-ev2": { url:q("kia","ev2"), previousRate:106.44, rate:99, normalizedRate:126.78, months:36, kmPerYear:5000, transfer:1390, delivery:"Median 3,0 Monate", deliveryMedianMonths:3, deliverySample:5, grantNote:"6.000 € Förderung im Angebot; auf 5.000 € normiert.", variant:"EV2 Air 42,2 kWh" },
  "renault-twingo": { url:q("renault","twingo-e-tech"), previousRate:123.69, rate:111.68, normalizedRate:139.46, months:36, kmPerYear:10000, transfer:1290, delivery:"Median 3,7 Monate", deliveryMedianMonths:3.7, deliverySample:3, grantNote:"Aktuell bestes belastbares Angebot weicht bei der Fahrleistung vom Zielraster ab.", variant:"Twingo E-Tech" },
  "volvo-ex30": { url:q("volvo","ex30"), previousRate:119, rate:99, normalizedRate:126.78, months:36, kmPerYear:5000, transfer:1490, delivery:"Median 5,0 Monate", deliveryMedianMonths:5, deliverySample:3, grantNote:"6.000 € Förderung im Angebot; auf 5.000 € normiert.", variant:"EX30 P3 electric Essential" },
  "hyundai-ioniq-3": { url:q("hyundai","ioniq-3"), previousRate:131.22, rate:143.50, normalizedRate:171.28, months:36, kmPerYear:10000, transfer:1220, delivery:"Median 4,0 Monate", deliveryMedianMonths:4, deliverySample:5, grantNote:"Aktuell bestes belastbares Angebot weicht bei der Fahrleistung vom Zielraster ab.", variant:"IONIQ 3 Trend" },
  "mini-cooper-e": { url:q("mini","cooper"), previousRate:141.94, delivery:"Keine belastbare Stichprobe", deliverySample:0, deliveryUncertain:true, grantNote:"Kein ausreichend verifiziertes passendes Neuwagenangebot." },
  "fiat-500e": { url:q("fiat","500e"), previousRate:146.78, rate:131.74, normalizedRate:131.74, months:48, kmPerYear:10000, transfer:1090, delivery:"Median 1,8 Monate · unsicher", deliveryMedianMonths:1.8, deliverySample:2, deliveryUncertain:true, grantNote:"Nur zwei belastbare Lieferangaben; Vertragsraster weicht ab.", variant:"500e" },
  "mini-aceman-e": { url:q("mini","aceman"), previousRate:180.11, delivery:"Keine belastbare Stichprobe", deliverySample:0, deliveryUncertain:true, grantNote:"Kein ausreichend verifiziertes passendes Neuwagenangebot." },
  "renault-5": { url:q("renault","5"), previousRate:172.78, rate:169, normalizedRate:185.67, months:60, kmPerYear:10000, transfer:1390, delivery:"Median 4,0 Monate", deliveryMedianMonths:4, deliverySample:3, grantNote:"Aktuell bestes belastbares Angebot weicht bei Laufzeit und Fahrleistung vom Zielraster ab.", variant:"5 E-Tech" },
  "fiat-600e": { url:q("fiat","600e"), previousRate:176.78, rate:168.82, normalizedRate:168.82, months:48, kmPerYear:10000, transfer:1390, delivery:"0,5 Monate · unsicher", deliveryMedianMonths:0.5, deliverySample:1, deliveryUncertain:true, grantNote:"Nur eine belastbare Lieferangabe; Vertragsraster weicht ab.", variant:"600e" },
  "renault-4": { url:q("renault","4"), previousRate:188.25, rate:215.20, normalizedRate:198.53, months:60, kmPerYear:5000, transfer:1450, delivery:"sofort · Median aus 3 Angaben", deliveryMedianMonths:0, deliverySample:3, grantNote:"Aktuell bestes belastbares Angebot weicht bei der Laufzeit vom Zielraster ab.", variant:"4 E-Tech" },
  "dacia-spring": { url:q("dacia","spring"), previousRate:null, delivery:"sofort · nur 2 Angaben · unsicher", deliveryMedianMonths:0, deliverySample:2, deliveryUncertain:true, grantNote:"Keine belastbare aktuelle Neuwagenrate im Zielraster." },
  "hyundai-inster": { url:q("hyundai","inster"), previousRate:123.33, delivery:"Median 6,0 Monate", deliveryMedianMonths:6, deliverySample:3, grantNote:"Kein bestätigtes passendes Privatangebot; Lieferstichprobe überwiegend Gewerbeangebote." },
  "fiat-grande-panda": { url:q("fiat","grande-panda"), previousRate:86, rate:89, normalizedRate:89, months:36, kmPerYear:5000, transfer:1390, delivery:"Median 3,0 Monate", deliveryMedianMonths:3, deliverySample:5, grantNote:"5.000 € Sonderzahlung/Förderannahme; Überführung separat.", variant:"Grande Panda Electric La Prima" },
};