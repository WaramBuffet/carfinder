import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const cases = [
  {
    path: "index.html",
    title: "Preiswerte E-Autos im Vergleich – Zahlen & Fakten",
    url: "https://warambuffet.github.io/carfinder/?ansicht=fakten",
    image: "/share/fakten.jpg",
  },
  {
    path: "public/fakten/index.html",
    title: "Preiswerte E-Autos im Vergleich – Zahlen & Fakten",
    url: "https://warambuffet.github.io/carfinder/fakten/",
    image: "/share/fakten.jpg",
  },
  {
    path: "public/premium/index.html",
    title: "GRAVEL / ELECTRIC – Euer Premium-Carfinder",
    url: "https://warambuffet.github.io/carfinder/premium/",
    image: "/share/premium-recipients.png",
  },
];

describe("Statische Vorschau für Messenger", () => {
  it.each(cases)("liefert korrekte Open-Graph-Daten in $path", ({ path, title, url, image }) => {
    const html = readFileSync(resolve(process.cwd(), path), "utf8");
    expect(html).toContain(`property="og:title" content="${title.replaceAll("&", "&amp;")}"`);
    expect(html).toContain(`property="og:url" content="${url}"`);
    expect(html).toContain(image);
    expect(html).toContain('name="twitter:image"');
  });

  it.each(["fakten", "premium"])("leitet die Vorschauseite %s browserseitig weiter", (mode) => {
    const html = readFileSync(resolve(process.cwd(), `public/${mode}/index.html`), "utf8");
    expect(html).toContain(`new URL("../?ansicht=${mode}", current)`);
    expect(html).toContain("destination.searchParams.append(key, value)");
    expect(html).toContain("destination.hash = current.hash");
  });
});
