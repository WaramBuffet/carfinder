# Routes

Der statische Vergleich nutzt TanStack Router mit dateibasierter Routinggenerierung.
`index.tsx` ist die einzige Inhaltsroute; `__root.tsx` rendert Provider, Metadaten und `<Outlet />`.
Die zwei Ansichten sind Suchparameter derselben Route: `?ansicht=fakten` und `?ansicht=gefuehl`.
Fahrzeug-Sprungziele verwenden `#car-SLUG`; die gemeinsame Fahrzeugdatenbasis liegt in `index.tsx`.

`routeTree.gen.ts` wird beim Vite-Build automatisch erzeugt und darf nicht von Hand geändert werden.
Der Router berücksichtigt `import.meta.env.BASE_URL`, damit dieselbe Route auch unter `/carfinder/` funktioniert.
Für neue Unterseiten wäre auf GitHub Pages zunächst eine Strategie für Direktaufrufe nötig.
