export const bafaRules =
  "https://www.bafa.de/DE/Energie/Energieeffizienz/E-Auto_Foerderung_2026/Foerdervoraussetzungen/Foerdervoraussetzungen_node.html";
export const bafaFaq =
  "https://www.bafa.de/DE/Energie/Energieeffizienz/E-Auto_Foerderung_2026/Haeufige_Fragen/Haeufige_Fragen_node.html";
export const portalNotes: Record<string, string> = {
  mobile: "Kauf-Inserate nach EZ-Jahr erfasst",
  kleinanzeigen: "Kauf-Inserate · Fremdtreffer ausgeschlossen",
  leasingmarkt: "Vertragsbeispiele separat ausgewiesen",
  carwow: "Neuwagen-Abpreise · keine Jahrgangsmittel",
  goleasy: "Leasingbeispiele · keine Kaufpreise",
};
export const newCarReferences = [
  {
    model: "Taycan Cross Turismo",
    price: 104089,
    url: "https://www.carwow.de/porsche/taycan-cross-turismo",
    note: "Neuwagen-Abpreis für Cross Turismo; keine Limousine.",
  },
  {
    model: "Taycan Sport Turismo",
    price: 94459,
    url: "https://www.carwow.de/porsche/taycan-sport-turismo",
    note: "Neuwagen-Abpreis für Sport Turismo; Förderung individuell prüfen.",
  },
  {
    model: "BMW iX3 Neue Klasse",
    price: 56882,
    url: "https://www.carwow.de/bmw/ix3",
    note: "Neuwagen-Abpreis; Gebraucht-Abpreis der Seite vermischt Generationen.",
  },
  {
    model: "BMW i5 Touring",
    price: 53628,
    url: "https://www.carwow.de/bmw/i5-touring",
    note: "Neuwagen-Abpreis; konkrete Ausstattung und Nebenkosten bestätigen.",
  },
  {
    model: "Volvo EX60",
    price: 57881,
    url: "https://www.carwow.de/volvo/ex60",
    note: "Bestellfahrzeug; Lieferdatum separat bestätigen.",
  },
  {
    model: "Mercedes-Benz GLC EQ",
    price: 72471,
    url: "https://www.carwow.de/mercedes/glc-eq",
    note: "GLC 400 4MATIC elektrisch; Neuwagen-Abpreis.",
  },
];
export const leaseExamples = [
  {
    model: "BMW iX3 G08 Inspiring",
    portal: "LeasingMarkt",
    rate: 489,
    months: 36,
    kmYear: 10000,
    upfront: "0 € Anzahlung; Überführung und Zulassung nicht angegeben",
    mileage: "20.069 km · EZ 05/2024",
    url: "https://www.leasingmarkt.de/leasing/pkw/bmw-ix3/13296092?adVariant=37754371",
    note: "Privat & Gewerbe · keine Förderung für den Gebrauchten.",
  },
  {
    model: "BMW i5 eDrive40 Touring",
    portal: "LeasingMarkt",
    rate: 729,
    months: 48,
    kmYear: 5000,
    upfront: "0 € Anzahlung; Überführung enthalten; Zulassung offen",
    mileage: "28.987 km · EZ 10/2025",
    url: "https://www.leasingmarkt.de/leasing/pkw/bmw-i5/13300583?adVariant=37850703",
    note: "Privat & Gewerbe · Wartung / Garantie laut Angebot; prüfen.",
  },
  {
    model: "Taycan 4S Sport Turismo Black Edition",
    portal: "LeasingMarkt",
    rate: 1599,
    months: 36,
    kmYear: 10000,
    upfront: "0 € Anzahlung + 1.950 € Überführung + 200 € Zulassung",
    mileage: "15 km · Neuwagen laut Angebot",
    url: "https://www.leasingmarkt.de/leasing/pkw/porsche-taycan/13070867?adVariant=35469398",
    note: "Rate ohne individuelle Förderung; Förderbedingungen persönlich prüfen.",
  },
  {
    model: "Taycan 4S Sport Turismo",
    portal: "GoLeasy",
    rate: 1220,
    months: 48,
    kmYear: 10000,
    upfront: "Einmalzahlungen in der Ergebnisansicht nicht vollständig belegt",
    mileage: "26.500 km · gebraucht",
    url: "https://www.goleasy.de/leasing/marken/porsche/taycan",
    note: "Privat & Gewerbe · Ergebnislisten-Beispiel, kein Jahrgangsmittel.",
  },
  {
    model: "Volvo EX60 P6 Plus",
    portal: "GoLeasy",
    rate: 459,
    months: 60,
    kmYear: 5000,
    upfront: "1.500 € Bereitstellung; 6.000 € Förderannahme eingerechnet",
    mileage: "Bestellfahrzeug · Lieferung laut Portal 7–9 Monate",
    url: "https://www.goleasy.de/leasing/marken/volvo/ex60",
    note: "Nur privat · ohne Förderberechtigung rechnerisch 559 €/Monat vor Bereitstellung; Anbieter bestätigen lassen.",
  },
];
