# Migration am 03.10.2026

Quelle: Lovable-Projekt `20091547-6bbb-4a58-9c89-cde5e9f3f08e`, Commit `a1be96fc2b77fb9f6fcd8fcf9e2312599a89aa62`.

`lovable-original.zip` sichert alle 87 Dateien aus dem Original: 78 Textdateien, acht JPEG-Bilder und ein Favicon. Textdateien wurden am genannten Commit schreibgeschützt über den Lovable-Connector exportiert. Die fünf verwendeten Illustrationen und das Favicon wurden aus der öffentlichen Seite übernommen; die drei zusätzlichen Designreferenzen wurden aus der schreibgeschützten Codeansicht heruntergeladen. Die verwendeten Bilddateien erzeugen dieselben Vite-Dateinamen wie das öffentliche Original. Die ZIP-Datei enthält weder Zugangsdaten noch eine Browseranmeldung. Es gab keine Schreib- oder Veröffentlichungsaktion im Lovable-Projekt.

Die frühere Git-Historie selbst ist über den Connector nicht exportierbar; das Archiv dokumentiert den vollständigen aktuellen Quellstand. Im unabhängigen Repository beginnt eine neue Historie. Keine Lovable-GitHub-Synchronisierung wurde eingerichtet.

## Änderungen

- TanStack-Start-/Nitro-/Lovable-Serverbuild durch statischen Vite/React-Build ersetzt, TanStack Router und gemeinsame Index-Datenbasis erhalten.
- GitHub-Pages-Basispfad für Router, JavaScript, CSS, Bilder und Favicon eingerichtet.
- Originale Server- und Fehlerreportingdateien archiviert; kein aktives Lovable-Fehlerreporting in der Kopie.
- Desktop und Mobil verwenden dieselbe Sortierrichtung; eine fehlende Rate bleibt am Ende.
- Blockierter Sitzungsspeicher verhindert die Ansichtumschaltung nicht mehr.
- Leere Filter lassen sich zurücksetzen, Trefferzahlen werden zugänglich angekündigt, Fehlerseiten sind auf Deutsch.
- Quellenstatus sichtbar gemacht; 5.000 € Förderung als Rechenannahme bezeichnet. Alle Fahrzeugzahlen, Modelle, Sicherheitsnotizen und Serviceadressen sind erhalten. Keine neue Preisrecherche.
- CI für Push/PR und manuell auslösbare Pages-Veröffentlichung eingerichtet.

## Prüfung

- `pnpm typecheck`: erfolgreich.
- `pnpm lint`: keine Fehler; sechs bereits vorhandene Fast-Refresh-Hinweise in den übernommenen UI-Komponenten.
- `pnpm test`: acht Interaktionstests erfolgreich (Pages-Unterpfad, Ansicht/URL, Filter und leere Ergebnisse, Rate/null-Sortierung, mobile Richtung, Galerieauswahl, Sitzungsspeicher, Fehlerroute).
- `PAGES_BASE_PATH=/carfinder/ pnpm build`: erfolgreicher statischer Produktionsbuild.
- Lokaler Produktionsbuild im Browser: Fakten und Gefühl, Originalbilder, Desktopdarstellung, 390×844-Mobildarstellung, MINI-Filter, mobile Sortierrichtung und Direktlink zur MINI-Cooper-Karte geprüft.
- Screenshots: `screenshots/desktop.png` und `screenshots/mobile.png`.

## Inhaltlich offen

Originale Angebotsbelege/Einzelquellen sind im Projekt nicht hinterlegt. Lieferzeiten sind weiterhin vorläufig, Citroën-Service weiterhin offen. Die Übernahme aktualisiert diese Angaben nicht automatisch. Hosting ist vorbereitet; der manuelle Pages-Workflow veröffentlicht erst bei seinem ausdrücklichen Start.
