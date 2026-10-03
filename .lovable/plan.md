# Zwei Ansichten für den E‑Auto‑Vergleich

## Ziel

Die bestehende Einzelseite erhält oben eine leicht bedienbare Umschaltung zwischen **„Zahlen & Fakten“** und **„Mit Gefühl“**. Beide Ansichten greifen auf exakt dieselben Fahrzeugobjekte zu; Filter, Sortierung, Förderbasis, Ausschlüsse und Unsicherheitskennzeichnungen bleiben identisch.

## Umsetzung

- Eine zentrale Fahrzeugliste enthält künftig neben allen vorhandenen Daten auch Bildreferenz, Bildbeschreibung und eine kurze, ausdrücklich redaktionelle Charakterisierung.
- Der Modus wird über `?ansicht=fakten` beziehungsweise `?ansicht=gefuehl` teilbar gemacht und zusätzlich für die laufende Sitzung gemerkt. Ohne Angabe öffnet die sachliche Ansicht.
- Ein fester, kompakter Seitenkopf bietet den zugänglichen Zwei-Wege-Schalter und zeigt die aktive Ansicht deutlich.
- **Zahlen & Fakten:** heller, nüchterner Kopf; Vergleichsbasis, Filter, Kennzahlen und Tabelle stehen zuerst; Fotoübersicht bleibt kompakt und funktional; keine Sieger-Sprache.
- **Mit Gefühl:** vorhandene warme Editorial-Gestaltung bleibt erhalten; größere Bilder, großzügigere Karten und vorsichtige redaktionelle Texte; sämtliche Zahlen bleiben unverändert.
- Eine gemeinsame Fotoübersicht zeigt jedes Modell eindeutig beschriftet. Mobil wird sie horizontal scrollbar, am Desktop ein Raster. Bilder werden lokal ausgeliefert und lazy geladen.
- Ein Klick auf ein Foto scrollt zur passenden Modellinformation. Auf Mobilgeräten wird die Karte, auf Desktop die Tabellenzeile adressiert; sichtbarer Fokus und kurze Hervorhebung erleichtern die Orientierung.
- Methodik, Datenstand, Überführung, Förderung, Laufzeit, Kilometerleistung und unsichere Werte bleiben in beiden Ansichten klar sichtbar.

## Bildkonzept

Da belastbare Nutzungsrechte externer Herstellerfotos nicht für alle Modelle einheitlich garantiert werden können, verwende ich hochwertige, neutrale Fahrzeugdarstellungen ohne Logos und ohne Behauptung, es seien Originalfotos. Mehrere visuelle Fahrzeugtypen sorgen für eine erkennbare, abwechslungsreiche Übersicht; Alt-Texte beschreiben sie ausdrücklich als redaktionelle Darstellung.

## Technische Details

- Die Umschaltung nutzt TanStack-Router-Suchparameter mit validierten Werten und ersetzt keine Route.
- Gemeinsame Daten und gemeinsame Filter-/Sortierlogik werden nur einmal definiert; die beiden Darstellungen sind getrennte Präsentationskomponenten.
- Keine Datenbank oder Anmeldung nötig; die Seite bleibt eine schnelle, statische, öffentlich teilbare Einzelseite.
- Prüfung mit Desktop- und iPhone-Viewport: Umschaltung, Direktlinks, Sitzungsmerkung, Filter, Sortierung, Bildscrollen, Sprungziele, Fokus, Layout und Browserfehler.
