import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { routeTree } from "@/routeTree.gen";

async function renderAt(path = "/?ansicht=fakten", basepath = "/") {
  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  const result = render(<RouterProvider router={router} />);
  await router.load();
  await waitFor(() => expect(result.container.firstChild).not.toBeNull());
  return { ...result, router };
}
beforeEach(() => {
  window.sessionStorage.clear();
  window.history.replaceState(null, "", "/");
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Fahrzeugvergleich", () => {
  it("öffnet Fakten und zeigt alle 15 Fahrzeuge auch unter dem Pages-Unterpfad", async () => {
    const { container } = await renderAt("/carfinder/?ansicht=fakten", "/carfinder/");
    expect(
      await screen.findByRole("heading", { name: "E-Autos klar und nachvollziehbar vergleichen" }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll("tbody tr")).toHaveLength(15);
    expect(screen.getAllByRole("link", { name: "Offizielle Herstellerseite" })).toHaveLength(15);
  });
  it("zeigt technische Daten in Tabelle und Mobilkarten ohne Ladefenster gleichzusetzen", async () => {
    const { container, router } = await renderAt();
    await screen.findByLabelText("Hersteller");
    for (const selector of ["#car-hyundai-inster", "#mobile-car-hyundai-inster"]) {
      const vehicle = container.querySelector(selector)!;
      expect(vehicle).toHaveTextContent("327 km");
      expect(vehicle).toHaveTextContent("14,3");
      expect(vehicle).toHaveTextContent("ca. 30 Min.");
    }
    for (const selector of ["#car-leapmotor-t03", "#mobile-car-leapmotor-t03"]) {
      const vehicle = container.querySelector(selector)!;
      expect(vehicle).toHaveTextContent("Nicht angegeben");
      expect(vehicle).toHaveTextContent("36 Min. für 30–80 %");
    }
    expect(container.querySelector("#car-dacia-spring")).toHaveTextContent("optionalem 40-kW");
    expect(container.querySelector("#car-citroen-e-c3")).toHaveTextContent(
      "Batteriezuordnung offen",
    );
    expect(container.querySelectorAll("tbody tr details")).toHaveLength(15);
    fireEvent.click(screen.getByRole("button", { name: "Mit Gefühl" }));
    await waitFor(() => expect(router.state.location.search).toMatchObject({ ansicht: "gefuehl" }));
    expect(container.querySelector("#car-hyundai-inster")).toHaveTextContent("327 km");
  });
  it("schaltet die Ansicht über die URL und behält aktive Filter", async () => {
    const { router, container } = await renderAt();
    await screen.findByRole("heading", { name: "E-Autos klar und nachvollziehbar vergleichen" });
    fireEvent.change(screen.getByLabelText("Hersteller"), { target: { value: "MINI" } });
    expect(container.querySelectorAll("tbody tr")).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "Mit Gefühl" }));
    await waitFor(() => expect(router.state.location.search).toMatchObject({ ansicht: "gefuehl" }));
    expect(screen.getByRole("button", { name: "Mit Gefühl" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(window.sessionStorage.getItem("eauto-ansicht")).toBe("gefuehl");
    expect(container.querySelectorAll("tbody tr")).toHaveLength(2);
  });
  it("kombiniert Hersteller und Sicherheit und kann leere Filter zurücksetzen", async () => {
    const { container } = await renderAt();
    await screen.findByLabelText("Hersteller");
    fireEvent.change(screen.getByLabelText("Hersteller"), { target: { value: "MINI" } });
    fireEvent.change(screen.getByLabelText("Sicherheit"), { target: { value: "4 Sterne" } });
    expect(container.querySelectorAll("tbody tr")).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Filter zurücksetzen" }));
    expect(container.querySelectorAll("tbody tr")).toHaveLength(15);
  });
  it("sortiert absteigend mit fehlender Rate am Ende und synchronisiert Mobil", async () => {
    const { container } = await renderAt();
    fireEvent.click(await screen.findByRole("button", { name: "Monatsrate sortieren" }));
    const rows = container.querySelectorAll("tbody tr");
    expect(rows[0]).toHaveAttribute("id", "car-renault-4");
    expect(rows[14]).toHaveAttribute("id", "car-dacia-spring");
    expect(screen.getByLabelText("Richtung")).toHaveValue("desc");
    fireEvent.change(screen.getByLabelText("Richtung"), { target: { value: "asc" } });
    expect(container.querySelector("tbody tr")).toHaveAttribute("id", "car-leapmotor-t03");
  });
  it("öffnet einen emotionalen Direktlink und normalisiert ungültige Ansichten", async () => {
    const first = await renderAt("/?ansicht=gefuehl");
    expect(await screen.findByRole("button", { name: "Mit Gefühl" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    first.unmount();
    await renderAt("/?ansicht=unbekannt");
    expect(await screen.findByRole("button", { name: "Zahlen & Fakten" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
  it("springt aus der Galerie zum Fahrzeug und hebt es hervor", async () => {
    const { container } = await renderAt();
    fireEvent.click(
      await screen.findByRole("button", { name: "MINI Cooper E im Vergleich anzeigen" }),
    );
    expect(window.location.hash).toBe("#car-mini-cooper-e");
    expect(container.querySelector("#car-mini-cooper-e")).toHaveClass("bg-accent");
  });
  it("stellt die Seite auch bei blockiertem Sitzungsspeicher bereit", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("Blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Blocked");
    });
    const { router } = await renderAt();
    fireEvent.click(await screen.findByRole("button", { name: "Mit Gefühl" }));
    await waitFor(() => expect(router.state.location.search).toMatchObject({ ansicht: "gefuehl" }));
  });
  it("rendert eine deutsche Fehlerseite für unbekannte Routen", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    await renderAt("/unbekannt");
    expect(
      await screen.findByRole("heading", { name: "Seite nicht gefunden" }),
    ).toBeInTheDocument();
  });
});
