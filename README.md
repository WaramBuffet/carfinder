# Charmante E-Autos im Vergleich

Unabhängige GitHub-Kopie des bestehenden Lovable-Projekts. 15 Fahrzeuge, eine Faktenansicht, gemeinsame Fahrzeugdaten, Filter, Sortierung, gemeinsame Foto-/Detailkarten und Marken-Serviceinformationen. Die öffentliche Lovable-Seite bleibt unverändert; dieses Repository wird nicht mit Lovable synchronisiert.

## Entwicklung

Node.js 22.12 oder neuer und pnpm 10.32.1 verwenden:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm check
```

`pnpm check` prüft TypeScript, ESLint, die Interaktionstests und den statischen Produktionsbuild. Der aktive Build benötigt keinen Server, keine Datenbank, keine Zugangsdaten und keinen Lovable-Dienst. Die ursprünglichen Serverdateien sind im Migrationsarchiv gesichert.

## GitHub Pages (kostenlos)

Das öffentliche Repository ist für GitHub Free geeignet. Veröffentlichung erfolgt bewusst manuell:

1. In [Settings → Pages](https://github.com/WaramBuffet/carfinder/settings/pages) unter **Build and deployment → Source** die Option **GitHub Actions** wählen.
2. In [Actions](https://github.com/WaramBuffet/carfinder/actions/workflows/pages.yml) den Workflow **GitHub Pages veröffentlichen** öffnen und **Run workflow** auf `main` starten.
3. Nach erfolgreichem Lauf lautet die Website-URL `https://warambuffet.github.io/carfinder/`.

Jeder Push führt automatische Prüfungen aus, aber veröffentlicht die Website nicht. Spätere Veröffentlichungen starten ebenfalls über den manuellen Workflow. Die Konfiguration folgt der [GitHub-Pages-Dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Zum lokalen Prüfen des Pages-Unterpfads:

```sh
PAGES_BASE_PATH=/carfinder/ pnpm build
PAGES_BASE_PATH=/carfinder/ pnpm preview
```

Anschließend `http://localhost:4173/carfinder/?ansicht=fakten` öffnen. Fahrzeuglinks verwenden `#car-mini-cooper-e` oder den entsprechenden Slug. Der Vergleich liegt auf einer einzigen Route; auf Pages sind daher keine serverseitigen Weiterleitungsregeln nötig. Bei einem anderen Repositorynamen müssen `PAGES_BASE_PATH` in beiden Workflows und die URLs angepasst werden. Bei einer eigenen Domain kann der Basispfad `/` verwendet werden.

## Übernahme und Datenstand

Quelle: [Lovable-Projekt](https://lovable.dev/projects/20091547-6bbb-4a58-9c89-cde5e9f3f08e), Commit `a1be96fc2b77fb9f6fcd8fcf9e2312599a89aa62`, übernommen am 03.10.2026. Das Archiv `migration/lovable-original.zip` enthält die exportierten ursprünglichen Quelldateien und alle Bilder vor der technischen Umstellung. Einzelheiten und Prüfergebnisse stehen in `migration/README.md`.

Die Fahrzeugdaten wurden am **17.10.2026** anhand von Herstellerseiten, aktuellen Preislisten und Euro NCAP überprüft. Dokumentiert sind 14 bestätigte Listenpreise, aktuelle bundesweite GoLeasy-Portalbeispiele sowie vier ergänzende Herstellerbeispiele und offene Angaben beim Dacia Spring. Die Quellen und Hinweise stehen direkt beim Fahrzeug. Details: [Prüfprotokoll vom 17.10.2026](migration/data-review-2026-10-17.md).

Der ursprüngliche Schnäppchenvergleich stammt laut Nutzer von GoLeasy und LeasingMarkt.de. Die früheren Raten bleiben datiert aufklappbar; die damaligen Inserate wurden nicht erneut bestätigt. Sie bleiben in [der datierten Ausgangsdaten-Datei](migration/commercial-values-2026-10-02.json) nachvollziehbar. Bei den Portalraten wird die jeweils genannte Förderannahme ausdrücklich ausgewiesen; beim ergänzenden Herstellerbeispiel wird keine Förderung abgezogen. Unterschiedliche Laufleistungen werden nicht rechnerisch vereinheitlicht. Serviceadressen und Fahrzeiten bleiben als bisheriger, nicht erneut bestätigter Stand gekennzeichnet. Abmessungen ohne neuen Einzelbeleg stammen ebenfalls aus dem Altbestand. MINI Countryman und Leapmotor B10 bleiben ausgeschlossen.

## Fahrzeugfotos

Die Webseite zeigt seit 03.10.2026 modellbezogene Aufnahmen für jedes der 15 Modelle: 14 frei lizenzierte Wikimedia-Fotos sowie eine für redaktionelle Nutzung freigegebene Hyundai-Herstelleraufnahme des IONIQ 3. Urheber, Quelle und Lizenz sind unmittelbar bei den Bildern verlinkt; abweichende Ausstattungen werden gekennzeichnet. Details und Wiederverwendungsbedingungen: [Bildnachweise](src/assets/vehicles/README.md). Die ursprünglichen Lovable-Illustrationen bleiben im Migrationsarchiv erhalten.

Die frühere Ansicht „Mit Gefühl“ und der Umschalter wurden entfernt. Alte Links mit `?ansicht=gefuehl` zeigen jetzt ebenfalls die Faktenansicht.

## Gemeinsame Fahrzeugkarten

Fotos, technische Daten, Preise, Sicherheit und Service stehen zusammen in einer Fahrzeugkarte. Mobil erscheinen die Karten untereinander, ab Desktop-Breite in zwei Spalten. Filter und Sortierung steuern dieselbe Liste; eine breite Tabelle und separate Fotogalerie entfallen. Fahrzeug-Direktlinks (`#car-…`) und der bisherige Galerieanker `#fotos` bleiben nutzbar.

## Premium Edition · Gravel / Electric

Die zusätzliche Auswahl für sportliche Premium-Elektroautos öffnet sich mit `?ansicht=premium` (auf GitHub Pages: `/carfinder/?ansicht=premium`). Die bisherige Auswahl bleibt unter `?ansicht=fakten` erhalten; beide Instanzen sind miteinander verlinkt.

Die Premium-Auswahl umfasst Taycan Cross und Sport Turismo, die beiden iX3-Generationen, Volvo EX60, den elektrischen Mercedes GLC und BMW i5 Touring. Filter, lokale Merkliste, Kaufpreis-Stichproben nach Erstzulassung 2022–2026 und separate Neuwagen-/Leasingreferenzen teilen dieselben Fahrzeugdaten. Förderinformationen verweisen auf die BAFA-Regeln von 2026. Das Gravel-Motiv ist eine gekennzeichnete KI-Bearbeitung des Nutzerfotos.

Umfang und Grenzen der Marktstichprobe sowie die Herkunft der beschriebenen Videoszenen: [Rechercheprotokoll](docs/premium-research-2026-10-24.md). Die Preiszahlen sind keine repräsentative Vollerhebung. Das Video wird erst nach bewusstem Klick eingebettet.
