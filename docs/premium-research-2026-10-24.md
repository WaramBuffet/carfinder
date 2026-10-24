# Premium Edition: Recherche am 24.10.2026

Zugang: `?ansicht=premium`, unabhängig von der vorhandenen kompakten Auswahl (`?ansicht=fakten`). Gemeinsame statische Route, kein Backend. Fahrzeugdaten: `src/data/premium-market.ts`. Sekundäre Preisreferenzen: `src/data/premium-research.ts`.

## Kaufpreise

262 öffentlich sichtbare Inseratskarten aus mobile.de und Kleinanzeigen wurden erfasst (bis 60.000 km). Die Oberfläche filtert standardmäßig auf 40.000 km. Jahre beziehen sich auf **Erstzulassung laut Inserat**, nicht auf ein überprüftes Modell- oder Produktionsjahr. Zahlen sind aktuelle Angebotspreise für die Jahrgänge 2022–2026, keine historischen Preisstände dieser Kalenderjahre.

Auswertung: erste Ergebnislisten pro Modell und Erstzulassungsjahr, Standardsortierung; mobile.de zusätzlich Deutschland, Elektro, beschädigte Fahrzeuge ausblenden. Modell-IDs aus den Modellseiten: Taycan `20100;30`, iX3 `3500;329`, i5 `3500;341`, EX60 `25100;53`, GLC 400 `17200;334`. Diese Stichprobe ist nicht zufällig, vollständig oder repräsentativ. Werbung kann die Reihenfolge beeinflussen.

Nur passende Karosserien/Antriebe wurden übernommen. Erkennbare Fremdmodelle, Unfallangebote, beschädigte Fahrzeuge, Gesuche und Leasingübernahmen wurden ausgeschlossen. Keine Einzelprüfung von Fahrzeugzustand, VIN, Verkäuferangaben, Batteriegesundheit oder Verfügbarkeit. Inseratskarten können Fehler enthalten.

Modell, Generation, Jahr, Kilometerstand und Preis bilden einen konservativen Dublettenschlüssel. Identische Kombinationen werden zusammengefasst; eine vollständige portalübergreifende VIN-Deduplizierung ist damit nicht möglich. Ein Fahrzeug mit abweichendem Preis/Kilometerstand kann doppelt enthalten sein. Mittelwert, Median, Min/Max und `n` werden aus dem jeweils gefilterten Datensatz berechnet. Bei `n < 5` erscheint „kleine Stichprobe“. Unterschiedliche Motorisierungen und Ausstattungen bleiben sichtbar in den belegten Einzeltiteln; die Werte sind kein zustandsbereinigter Modellwert.

Frühe Neue-Klasse-iX3-Zulassungen 2025 sind **Inseratsangaben**, keine Bestätigung eines regulären Modelljahrgangs. EX60 und elektrischer GLC haben Angebote mit EZ 2026 und späteren Lieferterminen (zum Teil 2027). Solche Lieferhinweise sind erfasst und in der Belegliste sichtbar. Null Treffer heißt keine Stichprobe, nicht keine Fahrzeuge am Markt.

Jeder Datensatz enthält Quelle, URL, Variante, EZ-Jahr, Kilometerstand, Preis und Abrufdatum. Zusätzliche Lieferkosten sind nicht immer im Kaufpreis enthalten. Angebotspreise sind keine Verkaufspreise.

## Alle fünf angefragten Quellen

- **mobile.de:** Einzel-Kaufangebote je EZ-Jahr; direkte Beleglinks in der Oberfläche.
- **Kleinanzeigen:** zusätzliche Kaufangebote; unpassende Suchtreffer ausgesondert. Ein angeblicher EX60 war beispielsweise ein XC60, ein günstiger i5 beschädigt und ein anderer nur eine Leasingübernahme.
- **LeasingMarkt:** Vertragsdetails von iX3, i5 Touring und Taycan Sport Turismo separat erfasst, einschließlich Laufzeit, Fahrleistung und bekannten Einmalkosten. Keine Leasingrate als Kaufpreis verwendet.
- **GoLeasy:** getrennte Leasingbeispiele aus Ergebnislisten. EX60-Beispiel mit 459 €/Monat setzt laut Portal 6.000 € Förderung voraus; auf 60 Monate entspricht das ohne Förderung rechnerisch 100 €/Monat mehr. Kein Ersatz für ein bestätigtes Anbieterangebot.
- **carwow:** Gebrauchtwagen-Landingpages liefern im abgerufenen HTML keine vollständig belegbaren Einzelangebote je Jahr. Deshalb keine erfundenen Jahrgangsmittel. Stattdessen getrennte Neuwagen-Abpreise von Taycan Cross Turismo, Taycan Sport Turismo, iX3, i5 Touring, EX60 und GLC EQ. Taycan-Limousinenpreis nicht als Turismo-Preis übernommen. carwow-Abpreise können sich zwischen Abrufen ändern.

## Förderung

Primärquellen, abgerufen am 24.10.2026:

- [BAFA Fördervoraussetzungen 2026](https://www.bafa.de/DE/Energie/Energieeffizienz/E-Auto_Foerderung_2026/Foerdervoraussetzungen/Foerdervoraussetzungen_node.html)
- [BAFA FAQ](https://www.bafa.de/DE/Energie/Energieeffizienz/E-Auto_Foerderung_2026/Haeufige_Fragen/Haeufige_Fragen_node.html)

Nur zuvor unzugelassene Neufahrzeuge; EZ ab 01.01.2026 in Deutschland; Antragsteller ist Halter für mindestens 36 Monate. Gebrauchte, Tages-/Werkszulassungen und bereits zugelassene Vorführfahrzeuge sind ausgeschlossen. Für reine Elektroautos 3.000–6.000 €, abhängig von zu versteuerndem Haushaltseinkommen und Kindern. Einkommensgrenzen: 80.000 €, mit einem förderrelevanten Kind 85.000 €, mit mindestens zwei 90.000 €. BAFA-Regeln sind im Einzelfall maßgeblich.

Freunde können nach FAQ 5.8 bevollmächtigt werden, einen Antrag einzureichen; dadurch wechseln weder Antragsteller, Halter noch Förderberechtigung. Eine abweichende tatsächliche Nutzungs-/Finanzierungsgestaltung vorab schriftlich mit BAFA klären. Keine persönlichen Einkommensdaten werden von der Website erhoben.

## Foto und Video

Das Gravel-Banner nutzt eine KI-bearbeitete Fassung des vom Nutzer gelieferten Displayfotos, sichtbar gekennzeichnet. Die erste verworfene Bildgenerierung wird nicht verwendet. Modellkarten zeigen eigene stilisierte SVG-Zeichnungen und sind als Illustrationen beschriftet, keine Modellfotos.

[Gewünschtes Video](https://www.youtube.com/watch?v=m0793euQNL8): Einbettung nur nach Klick über youtube-nocookie.com. Der Nutzer hat die gewünschten Motive konkretisiert: ein grüner Taycan bei einer staubigen Offroad-Fahrt und ein Fahrradheckträger am grauen Taycan. Diese Beobachtungen sind mit klarer Nutzerattribution in der Sonderinfo integriert. Der Videoabruf war gesperrt; keine unabhängige Bestätigung, keine erfundenen Zeitmarken, Karosserievarianten, Trägermodelle oder Traglasten. Die anschließenden technischen Prüfhinweise sind allgemeine Kauf-/Transporthinweise. Weitere Angaben sind für diese redaktionelle Ergänzung nicht erforderlich.

## Validierung und Veröffentlichung

`pnpm check`; zusätzlich realer Chromium-Test von Desktop und Mobilansicht, Merkliste, Filter und Pages-Unterpfad. Veröffentlichung mit vorhandenem manuellen Workflow `pages.yml`; ein Push allein veröffentlicht nicht. Nur eine erfolgreiche Deployment-Ausführung und ein anschließender HTTP-/Browsertest belegen die Veröffentlichung.
