import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { premiumPhotos } from "@/data/premium-photos";
import {
  marketListings,
  premiumCars,
  priceSummary,
  type MarketListing,
} from "@/data/premium-market";

beforeEach(() => localStorage.clear());
afterEach(cleanup);
async function openPremium() {
  const router = createRouter({
    routeTree,
    basepath: "/carfinder/",
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: ["/carfinder/?ansicht=premium"] }),
  });
  const result = render(<RouterProvider router={router} />);
  await router.load();
  await screen.findByRole("heading", { name: /Mehr Kurven/ });
  return result;
}
describe("Premium instance", () => {
  it("loads a separate URL mode under the Pages base path without invented prices", async () => {
    const { container } = await openPremium();
    expect(container.querySelectorAll(".pf-card")).toHaveLength(7);
    expect(container.querySelectorAll(".pf-card-bottom strong")).toHaveLength(7);
    expect(container.querySelector("#premium-taycan-cross .pf-card-bottom")).toHaveTextContent("€");
    expect(screen.getByRole("table")).toHaveAccessibleName(/Durchschnittliche Kauf-Angebotspreise/);
    expect(marketListings.length).toBeGreaterThan(200);
    expect(screen.getByText(/öffentlich sichtbare Kauf-Inserate erfasst/)).toBeInTheDocument();
    expect(container.querySelectorAll(".pf-source-grid a")).toHaveLength(5);
  });
  it("shows a distinct licensed model photo and visible attribution for every premium vehicle", async () => {
    const { container } = await openPremium();
    expect(container.querySelectorAll(".pf-card-visual img")).toHaveLength(7);
    expect(new Set(premiumCars.map((car) => premiumPhotos[car.id]?.src)).size).toBe(7);
    for (const car of premiumCars) {
      const photo = premiumPhotos[car.id]!;
      const card = container.querySelector(`#premium-${car.id}`)!;
      expect(card.querySelector("img")).toHaveAttribute("alt", photo.alt);
      expect(card.querySelector(`a[href="${photo.source}"]`)).toHaveTextContent(photo.author);
      expect(card.querySelector(`a[href="${photo.licenseUrl}"]`)).toHaveTextContent(photo.license);
      expect(photo.source).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
      expect(["CC BY-SA 4.0", "CC0"]).toContain(photo.license);
    }
    expect(container.querySelector("#premium-taycan-sport")).toHaveTextContent(
      "GTS Sport Turismo von 2022",
    );
    expect(container.querySelector("#premium-ix3-g08")).toHaveTextContent("nicht die Neue Klasse");
  });
  it("filters body styles, saves a vehicle, and resets filters", async () => {
    const { container } = await openPremium();
    fireEvent.change(screen.getByLabelText("Karosserie"), { target: { value: "Turismo" } });
    expect(container.querySelectorAll(".pf-card")).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "Taycan Cross Turismo merken" }));
    expect(JSON.parse(localStorage.getItem("premium-shortlist")!)).toEqual(["taycan-cross"]);
    fireEvent.click(screen.getByRole("button", { name: /Nur gemerkte/ }));
    expect(container.querySelectorAll(".pf-card")).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "Taycan Cross Turismo entfernen" }));
    expect(screen.getByText("Deine nächste Ausfahrt wartet.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Alle Fahrzeuge anzeigen/ }));
    expect(container.querySelectorAll(".pf-card")).toHaveLength(7);
  });
  it("handles malformed saved preferences without crashing", async () => {
    localStorage.setItem("premium-shortlist", '{"bad":true}');
    await openPremium();
    expect(screen.getByRole("button", { name: /Nur gemerkte \(0\)/ })).toBeInTheDocument();
  });
  it("changes kilometre and year filters and distinguishes pre-launch model years", async () => {
    const { container } = await openPremium();
    fireEvent.change(screen.getByLabelText("Max. Kilometer"), { target: { value: "20000" } });
    expect(screen.getByRole("table")).toHaveAccessibleName(/20.000 km/);
    fireEvent.change(screen.getByLabelText("Erstzulassung"), { target: { value: "2022" } });
    expect(container.querySelector(".pf-card-bottom")).toHaveTextContent("EZ 2022");
    const row = screen.getByRole("rowheader", { name: /Volvo EX60/ }).parentElement!;
    expect(row.querySelectorAll(".pf-na")).toHaveLength(4);
    expect(screen.getByRole("heading", { name: /Über Bekannte oder Freunde/ })).toBeInTheDocument();
    expect(
      screen.getByText("3.000–6.000 € für förderfähige neue Elektroautos"),
    ).toBeInTheDocument();
  });
});
describe("Video privacy and observed data", () => {
  it("loads the requested video only after a deliberate click", async () => {
    const { container } = await openPremium();
    expect(container.querySelector("iframe")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Dein Videotipp/ }));
    expect(container.querySelector("iframe")).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/m0793euQNL8?autoplay=1",
    );
  });
  it("records traceable positive purchase prices and keeps lease evidence separate", () => {
    expect(new Set(marketListings.map((row) => row.id)).size).toBe(marketListings.length);
    for (const row of marketListings) {
      expect(row.priceEur).toBeGreaterThan(10000);
      expect(row.mileageKm).toBeGreaterThanOrEqual(0);
      expect(row.mileageKm).toBeLessThanOrEqual(60000);
      expect(row.kind).toBe("purchase");
      expect(row.observedAt).toBe("2026-10-24");
      expect(row.url).toMatch(/^https:\/\/(suchen\.mobile\.de|www\.kleinanzeigen\.de)\//);
      expect(premiumCars.some((car) => car.id === row.carId)).toBe(true);
    }
  });
});
const listing = (patch: Partial<MarketListing> = {}): MarketListing => ({
  id: "1",
  carId: premiumCars[0]!.id,
  portal: "mobile",
  year: 2024,
  mileageKm: 15000,
  priceEur: 60000,
  kind: "purchase",
  url: "https://www.mobile.de/example",
  observedAt: "2026-10-24",
  variant: "4",
  deduplicationKey: "vehicle-a",
  ...patch,
});
describe("Evidence-based purchase aggregation", () => {
  it("deduplicates portal repeats and excludes lease rates, excess mileage and wrong years", () => {
    const result = priceSummary(
      [
        listing(),
        listing({ id: "2", portal: "kleinanzeigen" }),
        listing({ id: "3", priceEur: 80000, deduplicationKey: "vehicle-b" }),
        listing({ id: "4", priceEur: 499, kind: "lease", deduplicationKey: "lease" }),
        listing({ id: "5", priceEur: 30000, mileageKm: 90000, deduplicationKey: "high-km" }),
        listing({ id: "6", year: 2023, deduplicationKey: "wrong-year" }),
      ],
      "taycan-cross",
      2024,
      40000,
    );
    expect(result).toMatchObject({ n: 2, mean: 70000, median: 70000, min: 60000, max: 80000 });
  });
  it("uses the selected source and rejects invalid or untraceable data", () => {
    const rows = [
      listing(),
      listing({ priceEur: -100 }),
      listing({ url: "" }),
      listing({ variant: "" }),
      listing({ priceEur: NaN }),
      listing({ mileageKm: -1 }),
      listing({ portal: "carwow", deduplicationKey: "other", priceEur: 80000 }),
    ];
    expect(priceSummary(rows, "taycan-cross", 2024, 40000, "mobile")).toMatchObject({
      n: 1,
      mean: 60000,
    });
    expect(priceSummary([], "taycan-cross", 2024, 40000)).toMatchObject({
      n: 0,
      mean: null,
      median: null,
      min: null,
      max: null,
    });
  });
});
