# Premium-Carfinder: erster Aktualisierungsdurchlauf am 03.11.2026

## Prüfstatus

Diese Datei dokumentiert einen **partiellen** Erstdurchlauf; sie ist **keine** vollständig neu erhobene Marktstichprobe und kein Beleg für ein aktualisiertes Deployment. Die bestehende Faktenansicht bleibt unberührt. Ausgangsbasis: `docs/premium-research-2026-10-24.md`, `src/data/premium-market.ts`, `src/data/premium-research.ts`.

### Gesichert anhand Repository und Primärquellen

1. Die Marktstichprobe in `premium-market.ts` ist ausdrücklich auf **24.10.2026** datiert und wurde nicht erneut vollständig erhoben. Ihre Angebotspreise dürfen nicht als aktuelle Preise vom 03.11.2026 bezeichnet werden. Die Jahresauswahl `years` lautet weiterhin 2026–2022. Sie ist eine **Erstzulassungsjahres-Auswahl**, nicht dasselbe wie das von Herstellern verwendete Modelljahr.
2. **Volvo EX60:** Volvo nennt aktuell P6 ab **62.990 € UVP**, P10 AWD ab **67.790 € UVP** und P12 AWD ab **74.290 € UVP** auf der deutschen Spezifikationsseite. Die Volvo-Fahrzeugseite führt **Modelljahr 2027**. Die 2027er Modelljahr-Angabe ist **kein Grund**, Erstzulassungsjahr 2027 schon vor 2027 als beobachteten Gebrauchtwagenjahrgang einzutragen. Volvo listet unter anderem für P6 **2.000 kg** Anhängelast und **100 kg** Dachlast, für P10 AWD **2.400 kg** Anhängelast und **100 kg** Dachlast. Quellen (abgerufen 03.11.2026): https://www.volvocars.com/de/cars/ex60-electric/specifications/ und https://www.volvocars.com/de/cars/ex60-electric/
3. **BMW iX3 Neue Klasse:** BMW weist den iX3 50 xDrive mit einem Einstiegspreis von **70.900 € UVP inkl. MwSt., ohne Überführungskosten**, als bestellbar und seit **März 2026** bei ausgewählten Händlern verfügbar aus. Dies ist nicht mit dem separaten, in `premium-research.ts` hinterlegten **carwow-Abpreis von 56.882 €** gleichzusetzen; beide Zahlen beziehen sich auf unterschiedliche Preisarten und müssen entsprechend bezeichnet werden. Quelle (abgerufen 03.11.2026): https://www.bmw.de/de/neufahrzeuge/x/ix3/bmw-ix3.html
4. **Mercedes-Benz GLC elektrisch:** Mercedes listet bereits **GLC 250 elektrisch, GLC 300 4MATIC elektrisch und GLC 400 4MATIC elektrisch**. Die bisherige Marktstichprobe konzentriert sich auf GLC 400; für die Modellabdeckung ist zu prüfen, ob die anderen elektrischen Varianten aufgenommen werden sollten. Die Quelle nennt u. a. WLTP-Spannen 541–650 km (GLC 250), 523–616 km (GLC 300 4MATIC) und 568–715 km (GLC 400 4MATIC). Quelle (abgerufen 03.11.2026): https://www.mercedes-benz.de/passengercars/models/suv/glc-electric/overview.html

### Nächste notwendige Datenarbeit

- Alle bisherigen Inseratslinks einzeln auf Erreichbarkeit, Kaufpreis, Fahrleistung, EZ und tatsächliche Lieferbarkeit prüfen; nicht mehr aktuelle Angebote entfernen bzw. archivieren, bevor neue Statistik berechnet wird.
- Neu abrufbare Kaufangebote je **Erstzulassungsjahr** erfassen, nachvollziehbar deduplizieren, Stichprobe und Median/Mittelwert/Min/Max separat berechnen. Keine fingierten Angebotszahlen.
- Leasingangebote mit Laufzeit, km/Jahr, tatsächlicher Förderung, Sonderzahlung, Überführung und Datum neu erheben; abweichende Vertragskonditionen nicht als unmittelbar vergleichbar ausgeben.
- Die Mercedes- und Volvo-Varianten und deren technische Gravel-/Radtransport-Eignung in der Oberfläche prüfen; Variante, Modelljahr und EZ-Jahr sauber trennen.
- Förderregeln unmittelbar vor einer konkreten Angebotsberechnung anhand amtlicher Quellen validieren; die vorhandene alte BAFA-Notiz allein ist keine Verifikation für 03.11.2026.
- UI, mobile Darstellung, Filter/Merkliste, Meta-Vorschauen sowie `pnpm check` prüfen, bevor Produktivdaten übernommen werden.

### Änderungen und Nichtänderungen

Dieser Durchlauf dokumentiert verifizierte Hersteller- und Repository-Befunde, **verändert aber bewusst keine Preisstatistik, Angebotszahlen oder Produktivdaten ohne vollständige neue Erhebung**. Kein Merge oder Pages-Deployment wurde vorgenommen. Ein vollständiger Testlauf wurde nicht durchgeführt.
