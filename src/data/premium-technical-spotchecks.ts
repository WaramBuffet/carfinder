/**
 * Isolated, source-backed technical spot checks from 03.11.2026.
 * Not a complete model-year/trim census and NOT a fresh premium market sample.
 * Historic marketListings/researchDate remain unchanged until full reharvesting.
 */
export type TechnicalSpotCheck = {
  variant: string;
  checkedAt: string;
  facts: string[];
  caveat: string;
  sourceLabel: string;
  sourceUrl: string;
};
export const technicalSpotChecks: Partial<Record<string, TechnicalSpotCheck>> = {
  "taycan-cross": {
    variant: "Taycan 4 Cross Turismo · aktuelle Modellgeneration",
    checkedAt: "03.11.2026",
    facts: [
      "4.974 mm lang · hinten 446–1.212 l · Frunk 81 l",
      "Dachlast mit Porsche-Dachtransportsystem 75 kg · Zuladung im belegten Fahrzeug 605 kg",
      "Bodenfreiheit mit Luftfederung ca. 146 mm (Normalniveau), bis 176 mm (Sondergeländeniveau)",
      "Porsche bestätigt ausdrücklich einen Gravel-Modus für leichtes Gelände.",
    ],
    caveat:
      "Die genannten Lasten und Niveaus gelten für die verlinkte Variante/Ausstattung; keine generelle Geländezulassung. Fahrradheckträger und tatsächliche Nutzlast der eigenen Konfiguration separat prüfen.",
    sourceLabel: "Porsche Taycan 4 Cross Turismo · Hersteller-Fahrzeugdaten",
    sourceUrl:
      "https://finder.porsche.com/de/de-DE/details/porsche-taycan-4-cross-turismo-neu-327W4W",
  },
  "taycan-sport": {
    variant: "Taycan Sport Turismo · aktuelle Modellgeneration",
    checkedAt: "03.11.2026",
    facts: [
      "4.963 mm lang · hinten 446–1.212 l · Dachlast mit Porsche-Dachtransportsystem 75 kg",
      "Bodenfreiheit bei Luftfederung: 127 mm Normalniveau, bis 147 mm Geländeniveau",
      "Rückbank umgeklappt: 1.212 l; die Variante ist kein Cross Turismo.",
    ],
    caveat:
      "Kein Cross-Turismo-spezifischer Gravel-Modus belegt. Keine Anhängelast oder Fahrradsystem-Zulassung allein aus der Karosserie ableiten.",
    sourceLabel: "Porsche Taycan Sport Turismo · Hersteller-Fahrzeugdaten",
    sourceUrl:
      "https://finder.porsche.com/de/de-DE/details/porsche-taycan-sport-turismo-neu-908M8W",
  },
  "ix3-g08": {
    variant: "BMW iX3 G08 Inspiring · ältere Generation (Referenzjahr 2021)",
    checkedAt: "03.11.2026",
    facts: [
      "4.734 mm lang · Kofferraum 510–1.560 l · Bodenfreiheit 179 mm",
      "Dachlast 100 kg · gebremste Anhängelast 750 kg · Stützlast 75 kg",
      "Fahrzeugzuladung laut geprüfter Referenz 465 kg.",
    ],
    caveat:
      "ADAC referenziert die Inspiring-Version 01/2021–08/2021, nicht die neue BMW iX3 NA5 und nicht sämtliche G08-Modelljahre. Anhängerkupplung, Zulassungsdaten und Fahrradtransport fahrzeugindividuell prüfen.",
    sourceLabel: "ADAC · BMW iX3 G08 technische Daten",
    sourceUrl:
      "https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/bmw/ix3/g08/313831/",
  },
  "ix3-neue-klasse": {
    variant: "BMW iX3 40 · Neue Klasse NA5 (nicht G08)",
    checkedAt: "03.11.2026",
    facts: [
      "235 kW · Batterieinhalt laut BMW 82,6 kWh · WLTP 534–637 km",
      "AC 11 kW, optional 22 kW · DC bis 300 kW · 10–80 % ab 21 Minuten",
      "4.782 mm lang · Kofferraum 520–1.750 l + Frunk 58 l · Zuladung 540 kg",
      "Dachlast 75 kg · gebremste Anhängelast 2.000 kg · Stützlast 80 kg",
    ],
    caveat:
      "Daten für iX3 40, nicht pauschal für iX3 50 xDrive (andere Batterie-/DC-Werte). Eine hohe Anhängelast sagt nichts über Schottertauglichkeit, Böschungswinkel oder Fahrradheckträgerfreigabe aus.",
    sourceLabel: "BMW · technische Daten iX3 Neue Klasse",
    sourceUrl: "https://www.bmw.de/de/neufahrzeuge/x/ix3/bmw-ix3-technische-daten.html",
  },
  ex60: {
    variant: "Volvo EX60 P6 RWD / P10 AWD (getrennte Varianten)",
    checkedAt: "03.11.2026",
    facts: [
      "P6: ab 62.990 € UVP · 275 kW · 83 kWh nominal · bis 611 km WLTP · RWD",
      "P10: ab 67.790 € UVP · 375 kW · 95 kWh nominal · bis 660 km WLTP · AWD",
      "P6/P10: Dachlast jeweils 100 kg; gebremste Anhängelast 2.000 kg (P6) bzw. 2.400 kg (P10)",
      "Hersteller nennt für beide Varianten 10–80 % DC unter optimalen Bedingungen ab 16 Minuten.",
    ],
    caveat:
      "P12 AWD ist eine weitere Variante mit anderen Werten. Nominale Batterieenergie ist nicht gleich netto nutzbar. Die SUV-Karosserie beweist keine Gravel-Eignung.",
    sourceLabel: "Volvo · technische Daten EX60",
    sourceUrl: "https://www.volvocars.com/de/cars/ex60-electric/specifications/",
  },
  "glc-electric": {
    variant: "Mercedes-Benz GLC 400 4MATIC elektrisch (nicht GLC PHEV)",
    checkedAt: "03.11.2026",
    facts: [
      "360 kW · 94 kWh netto · WLTP je Ausstattung bis 715 km · Allrad",
      "11 kW AC, 22 kW optional · bis 330 kW DC, 10–80 % ca. 22 Minuten",
      "4.845 mm lang · Kofferraum 570–1.740 l + Frunk 128 l",
      "Dachlast 75 kg · gebremste Anhängelast bis 2.400 kg; Fahrzeugzuladung 505 kg.",
    ],
    caveat:
      "GLC 250 (Heckantrieb) und GLC 300 4MATIC sind weitere elektrische Varianten mit 85-kWh-Akku und anderer Leistung; Verbrenner/PHEV-Leasingangebote ausschließen. Verfügbarkeit und tatsächliche Kupplungsausführung beim Fahrzeug prüfen.",
    sourceLabel: "Mercedes-Benz · GLC elektrisch Modellvergleich",
    sourceUrl: "https://www.mercedes-benz.de/passengercars/models/suv/glc-electric/overview.html",
  },
  "i5-touring": {
    variant: "BMW i5 Touring G61 · eDrive40 / xDrive40 getrennt",
    checkedAt: "03.11.2026",
    facts: [
      "eDrive40: 250 kW · RWD · 81,2 kWh Batterieinhalt · WLTP 494–602 km",
      "xDrive40: 290 kW · AWD · 81,2 kWh Batterieinhalt · WLTP 468–561 km",
      "Beide: 5.060 mm lang · Kofferraum 570–1.700 l · Dachlast 100 kg",
      "Gebremste Anhängelast: 1.500 kg (eDrive40) bzw. 2.000 kg (xDrive40), Stützlast jeweils 80 kg.",
    ],
    caveat:
      "Batteriewert nach Hersteller, nicht ohne Zusatzbeleg als Netto- oder Bruttoenergie deklarieren. Anhängerlast nur mit entsprechend ausgestatteter Variante; keine besondere Gravel-Freigabe belegt.",
    sourceLabel: "BMW · i5 Touring G61 technische Daten",
    sourceUrl: "https://www.bmw.de/de/neufahrzeuge/bmw-i/i5/bmw-i5-touring-technische-daten.html",
  },
};
