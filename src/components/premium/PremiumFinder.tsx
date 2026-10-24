import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Flag,
  Gauge,
  Mountain,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import {
  euro,
  marketListings,
  portals,
  premiumCars,
  priceSummary,
  researchDate,
  years,
  type Portal,
  type PremiumCar,
} from "@/data/premium-market";
import {
  bafaRules,
  bafaFaq,
  portalNotes,
  newCarReferences,
  leaseExamples,
} from "@/data/premium-research";
import GravelGuide from "./GravelGuide";
import PhotoCredit from "./PhotoCredit";
import { premiumPhotos } from "@/data/premium-photos";
import gravelPhoto from "@/assets/premium/gravel-friends.png";
import "./premium.css";

function CarDrawing({ car, hero = false }: { car: PremiumCar; hero?: boolean }) {
  const suv = car.body === "SUV";
  return (
    <svg
      className={`pf-car-drawing ${hero ? "pf-car-hero" : ""}`}
      viewBox="0 0 800 310"
      role="img"
      aria-label={`Stilisierte ${suv ? "SUV" : "Sportkombi"}-Illustration, kein Modellfoto`}
    >
      <defs>
        <linearGradient id={`paint-${car.id}-${hero}`} x1="0" y1="0" x2=".2" y2="1">
          <stop stopColor="#f5f7f5" />
          <stop offset=".38" stopColor={car.accent} />
          <stop offset="1" stopColor="#35464c" />
        </linearGradient>
      </defs>
      <ellipse cx="404" cy="264" rx="325" ry="15" fill="#000" opacity=".24" />
      <path
        d={
          suv
            ? "M65 224 L81 167 Q85 152 119 149 L202 137 L274 72 Q289 62 330 62 L503 62 Q535 66 563 91 L637 144 L702 156 Q729 163 739 190 L745 229 L706 243 L96 243Z"
            : "M57 226 L73 192 Q87 175 128 166 L218 147 L305 96 Q320 87 357 86 L508 88 Q532 90 554 108 L607 146 L697 166 Q726 173 738 194 L748 229 L704 244 L89 244Z"
        }
        fill={`url(#paint-${car.id}-${hero})`}
        stroke="#b5c4c7"
        strokeWidth="2"
      />
      <path
        d={
          suv
            ? "M225 137 L285 81 L335 76 L501 76 Q522 79 542 97 L597 140Z"
            : "M246 145 L318 103 L361 99 L502 101 Q520 102 539 119 L570 145Z"
        }
        fill="#122129"
        stroke="#6e858c"
        strokeWidth="2"
      />
      <path
        d={suv ? "M394 78 L393 138 M508 80 L535 139" : "M408 102 L412 145 M504 105 L532 145"}
        stroke="#95a7ac"
        strokeWidth="5"
      />
      <path
        d="M117 183 Q404 160 702 183 M303 157 L299 228 M545 155 L551 223"
        fill="none"
        stroke="#e4eeee"
        opacity=".38"
        strokeWidth="2"
      />
      <path
        d="M87 197 L137 192 L126 204 L82 209 M691 183 L725 191 L730 201 L693 194"
        fill="#edf9f1"
      />
      <path
        d="M333 168 L358 168 M566 169 L587 170"
        stroke="#273b43"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[211, 626].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="233" r="48" fill="#101a1e" />
          <circle cx={cx} cy="233" r="34" fill="#71838a" stroke="#b1bec1" strokeWidth="3" />
          <circle cx={cx} cy="233" r="25" fill="#23333b" />
          {[0, 60, 120].map((angle) => (
            <path
              key={angle}
              d={`M${cx - 29} 233 H${cx + 29}`}
              stroke="#bec9cb"
              strokeWidth="5"
              transform={`rotate(${angle} ${cx} 233)`}
            />
          ))}
          <circle cx={cx} cy="233" r="8" fill="#91a3a7" />
        </g>
      ))}
      <path d="M278 236 H563" stroke="#152b32" strokeWidth="6" />
    </svg>
  );
}

export default function PremiumFinder() {
  const [year, setYear] = useState(2026);
  const [maxKm, setMaxKm] = useState(40000);
  const [portal, setPortal] = useState<Portal | "all">("all");
  const [body, setBody] = useState("all");
  const [saved, setSaved] = useState<string[]>(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem("premium-shortlist") || "[]");
      return Array.isArray(value)
        ? value.filter(
            (id): id is string =>
              typeof id === "string" && premiumCars.some((car) => car.id === id),
          )
        : [];
    } catch {
      return [];
    }
  });
  const [onlySaved, setOnlySaved] = useState(false);
  const [sort, setSort] = useState("editorial");
  useEffect(() => {
    const previous = document.title;
    document.title = "GRAVEL / ELECTRIC — Premium Carfinder";
    return () => {
      document.title = previous;
    };
  }, []);
  const toggle = (id: string) => {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
    setSaved(next);
    try {
      localStorage.setItem("premium-shortlist", JSON.stringify(next));
    } catch {
      /* The shortlist remains usable without persistent storage. */
    }
  };
  const cars = premiumCars
    .filter(
      (car) => (body === "all" || car.body === body) && (!onlySaved || saved.includes(car.id)),
    )
    .sort((a, b) => (sort === "brand" ? a.brand.localeCompare(b.brand) : 0));
  const heroCar = premiumCars[0]!;
  const evidence = premiumCars.flatMap(
    (car) => priceSummary(marketListings, car.id, year, maxKm, portal).rows,
  );
  const clearFilters = () => {
    setBody("all");
    setOnlySaved(false);
    setSort("editorial");
    setYear(2026);
    setMaxKm(40000);
    setPortal("all");
  };
  return (
    <div className="pf-page">
      <header className="pf-header">
        <a className="pf-wordmark" href="?ansicht=premium" aria-label="Gravel Electric Startseite">
          <span className="pf-logo">
            <Zap size={19} />
          </span>{" "}
          GRAVEL<span className="pf-slash">/</span>ELECTRIC
        </a>
        <nav aria-label="Premium-Navigation">
          <a href="#premium-auswahl">Die Auswahl</a>
          <a href="#premium-markt">Marktpreise</a>
          <a href="#premium-foerderung">Förderung</a>
        </nav>
        <a
          className="pf-header-save"
          href="#premium-auswahl"
          onClick={() => {
            setBody("all");
            setOnlySaved(true);
          }}
        >
          <Flag size={15} /> Merkliste <span>{saved.length}</span>
        </a>
      </header>
      <main>
        <section className="pf-hero">
          <div className="pf-hero-top">
            <span className="pf-kicker">
              <span /> DIE PREMIUM EDITION · 2026
            </span>
            <span className="pf-issue">KURATIERT FÜR DIE NÄCHSTE AUSFAHRT</span>
          </div>
          <div className="pf-hero-grid">
            <div className="pf-hero-copy">
              <h1>
                Mehr Kurven.
                <br />
                Weniger <em>Kompromisse.</em>
              </h1>
              <p>
                Elektrisch. Sportlich. Mit Charakter. Entdecke deine nächste Premium-Begleitung —
                jung gebraucht oder als förderfähiger Neuwagen, wenn die Voraussetzungen passen.
              </p>
              <a className="pf-primary" href="#premium-auswahl">
                Die Auswahl entdecken <ArrowDown size={17} />
              </a>
              <div className="pf-hero-tags">
                <span>
                  <Check size={13} /> Wenig Kilometer
                </span>
                <span>
                  <Check size={13} /> Viel Persönlichkeit
                </span>
              </div>
            </div>
            <div
              className={`pf-hero-visual ${premiumPhotos[heroCar.id] ? "pf-hero-has-photo" : ""}`}
            >
              {premiumPhotos[heroCar.id] ? (
                <img
                  className="pf-hero-photo"
                  src={premiumPhotos[heroCar.id]!.src}
                  alt={premiumPhotos[heroCar.id]!.alt}
                  width="1280"
                  height="634"
                  fetchPriority="high"
                />
              ) : (
                <>
                  <span className="pf-orbit pf-orbit-one" />
                  <span className="pf-orbit pf-orbit-two" />
                  <span className="pf-visual-text">
                    BEYOND
                    <br />
                    THE ORDINARY.
                  </span>
                  <CarDrawing car={heroCar} hero />
                </>
              )}
              <div className="pf-visual-caption">
                <span>01 / UNSER GRAVEL-FAVORIT</span>
                <strong>Porsche Taycan Cross Turismo</strong>
                {premiumPhotos[heroCar.id] ? (
                  <PhotoCredit photo={premiumPhotos[heroCar.id]!} />
                ) : (
                  <small>Stilisierte Illustration · kein Modellfoto</small>
                )}
              </div>
              <span className="pf-visual-mark">↗</span>
            </div>
          </div>
          <div className="pf-hero-bottom">
            <span>
              <Gauge size={18} />
              <strong>Bis 40.000 km</strong> als Startfilter
            </span>
            <span>
              <Zap size={18} />
              <strong>100 % elektrisch</strong> kein Plug-in-Hybrid
            </span>
            <span>
              <Mountain size={18} />
              <strong>5 Modellfamilien</strong> 7 gezielte Varianten
            </span>
            <span className="pf-bottom-date">RECHERCHESTAND {researchDate}</span>
          </div>
        </section>

        <section className="pf-section" id="premium-auswahl">
          <div className="pf-section-heading">
            <div>
              <span className="pf-eyebrow">01 / DIE SHORTLIST</span>
              <h2>Für den Weg. Und das Gefühl.</h2>
              <p>Sportkombis und Premium-SUVs. Bewusst ausgewählt, sauber voneinander getrennt.</p>
            </div>
            <span className="pf-count">{cars.length.toString().padStart(2, "0")} FAHRZEUGE</span>
          </div>
          <div className="pf-filters">
            <div className="pf-filter-title">
              <SlidersHorizontal size={17} /> Deine Auswahl
            </div>
            <label>
              Karosserie
              <select
                aria-label="Karosserie"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              >
                <option value="all">Alle Karosserien</option>
                <option value="Turismo">Turismo</option>
                <option value="Touring">Touring</option>
                <option value="SUV">SUV</option>
              </select>
            </label>
            <label>
              Sortierung
              <select
                aria-label="Sortierung"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="editorial">Unsere Reihenfolge</option>
                <option value="brand">Marke A–Z</option>
              </select>
            </label>
            <button
              className={`pf-filter-saved ${onlySaved ? "is-active" : ""}`}
              aria-pressed={onlySaved}
              onClick={() => setOnlySaved(!onlySaved)}
            >
              <Flag size={15} /> Nur gemerkte ({saved.length})
            </button>
            <button className="pf-text-button" onClick={clearFilters}>
              Zurücksetzen
            </button>
          </div>
          <div className="pf-cards">
            {cars.map((car) => (
              <article key={car.id} className="pf-card" id={`premium-${car.id}`}>
                <div className={`pf-card-visual ${premiumPhotos[car.id] ? "pf-has-photo" : ""}`}>
                  <span className="pf-car-type">
                    {car.body === "SUV" ? "ELECTRIC SUV" : "ELECTRIC SPORT WAGON"}
                  </span>
                  <button
                    aria-label={`${car.model} ${saved.includes(car.id) ? "entfernen" : "merken"}`}
                    aria-pressed={saved.includes(car.id)}
                    className={`pf-save ${saved.includes(car.id) ? "is-active" : ""}`}
                    onClick={() => toggle(car.id)}
                  >
                    <Flag size={17} fill={saved.includes(car.id) ? "currentColor" : "none"} />
                  </button>
                  {premiumPhotos[car.id] ? (
                    <img
                      className="pf-model-photo"
                      src={premiumPhotos[car.id]!.src}
                      alt={premiumPhotos[car.id]!.alt}
                      loading="lazy"
                      width="1200"
                      height="800"
                    />
                  ) : (
                    <CarDrawing car={car} />
                  )}
                  {car.gravel && (
                    <span className="pf-gravel-tag">
                      <Mountain size={12} /> GRAVEL PICK
                    </span>
                  )}
                  {!premiumPhotos[car.id] && <small>Stilisierte Illustration</small>}
                </div>
                <div className="pf-card-content">
                  {premiumPhotos[car.id] && <PhotoCredit photo={premiumPhotos[car.id]!} />}
                  <span className="pf-card-brand">{car.brand}</span>
                  <h3>{car.model}</h3>
                  <p className="pf-character">{car.character}</p>
                  <p className="pf-description">{car.description}</p>
                  <div className="pf-generation">
                    <span>GENERATION</span>
                    {car.generation}
                  </div>
                  <div className="pf-card-bottom">
                    <div>
                      <span>Ø Kaufangebot · EZ {year}</span>
                      <strong>
                        {(() => {
                          const s = priceSummary(marketListings, car.id, year, maxKm, portal);
                          return s.mean === null ? "Noch nicht belegt" : euro(s.mean);
                        })()}
                      </strong>
                    </div>
                    <a
                      href={car.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${car.model} beim Hersteller ansehen`}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  </div>
                  <details className="pf-car-detail">
                    <summary>
                      Worauf du achten solltest <ChevronRight size={14} />
                    </summary>
                    <p>{car.watch}</p>
                    <a href={car.url} target="_blank" rel="noopener noreferrer">
                      Offizielle Herstellerseite <ExternalLink size={12} />
                    </a>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {cars.length === 0 && (
            <div className="pf-empty">
              <Flag size={28} />
              <h3>Deine nächste Ausfahrt wartet.</h3>
              <p>
                {onlySaved
                  ? "Merke dir Fahrzeuge über das Fähnchen in der jeweiligen Karte."
                  : "Für diese Auswahl gibt es keine Fahrzeuge."}
              </p>
              <button className="pf-primary" onClick={clearFilters}>
                Alle Fahrzeuge anzeigen <ArrowRight size={16} />
              </button>
            </div>
          )}
        </section>

        <section className="pf-gravel-banner" id="premium-gravel">
          <figure className="pf-gravel-art">
            <img
              src={gravelPhoto}
              alt="Taycan-Display mit GRAVEL-Modus und Taycan-Schriftzug, KI-bearbeitete Fassung des bereitgestellten Nutzerfotos"
              loading="lazy"
              width="1448"
              height="1086"
            />
            <figcaption>Nutzerfoto · mit KI bearbeitet</figcaption>
          </figure>
          <div className="pf-gravel-copy">
            <span className="pf-eyebrow">SONDEREDITION / MIT EINEM AUGENZWINKERN</span>
            <h2>
              Das offizielle Fahrzeug
              <br />
              für echte <em>Gravel-Friends.</em>
            </h2>
            <p>
              Wenn im Display schon „GRAVEL“ steht, ist die nächste gemeinsame Ausfahrt eigentlich
              beschlossen. Der Taycan Cross Turismo bekommt hier seinen ganz eigenen Platz.
            </p>
            <p className="pf-gravel-note">
              Eine private Hommage an die Gravel-Friends — keine offizielle Partnerschaft mit
              Porsche. Bild: KI-bearbeitete Fassung des bereitgestellten Fotos; kein technischer
              Ausstattungsnachweis.
            </p>
            <a href="#premium-taycan-cross">
              Zum Gravel-Favoriten <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <GravelGuide />

        <section className="pf-section pf-market" id="premium-markt">
          <div className="pf-section-heading">
            <div>
              <span className="pf-eyebrow">02 / PREIS STATT BAUCHGEFÜHL</span>
              <h2>Was kostet dein nächstes Kapitel?</h2>
              <p>
                Angebotspreise nach Erstzulassungsjahr. Kauf und Leasing werden getrennt betrachtet.
              </p>
            </div>
            <span className="pf-live-label">
              <span /> ANGEBOTE ERFASST · 24.10.2026
            </span>
          </div>
          <div className="pf-research-notice">
            <ShieldCheck size={22} />
            <div>
              <strong>Transparenz vor Scheingenauigkeit.</strong>
              <p>
                {marketListings.length} öffentlich sichtbare Kauf-Inserate erfasst. Die Werte sind
                Mittelwerte einer Stichprobe aus mobile.de und Kleinanzeigen, kein vollständiger
                Marktdurchschnitt. LeasingMarkt und GoLeasy liefern separate Leasingbeispiele;
                carwow separate Neuwagen-Abpreise. Kleine Stichproben und unterschiedliche
                Motorisierungen besonders beachten.
              </p>
            </div>
          </div>
          <div className="pf-market-controls">
            <label>
              Erstzulassung
              <select
                aria-label="Erstzulassung"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              >
                {years.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </label>
            <label>
              Max. Kilometer
              <select
                aria-label="Max. Kilometer"
                value={maxKm}
                onChange={(e) => setMaxKm(Number(e.target.value))}
              >
                <option value={10000}>10.000 km</option>
                <option value={20000}>20.000 km</option>
                <option value={40000}>40.000 km</option>
                <option value={60000}>60.000 km</option>
              </select>
            </label>
            <label>
              Preisquelle
              <select
                aria-label="Preisquelle"
                value={portal}
                onChange={(e) => setPortal(e.target.value as Portal | "all")}
              >
                <option value="all">Alle fünf Portale</option>
                {portals.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <span>Kaufangebote in EUR · brutto · ohne Förderabzug</span>
          </div>
          <div
            className="pf-table-scroll"
            role="region"
            aria-label="Preisvergleich 2022 bis 2026"
            tabIndex={0}
          >
            <table className="pf-price-table">
              <caption>
                Durchschnittliche Kauf-Angebotspreise · maximal {maxKm.toLocaleString("de-DE")} km ·{" "}
                {portal === "all" ? "alle Portale" : portals.find((p) => p.id === portal)?.name}
              </caption>
              <thead>
                <tr>
                  <th scope="col">MODELL / GENERATION</th>
                  {years.map((y) => (
                    <th className={year === y ? "pf-selected-year" : ""} scope="col" key={y}>
                      {y}
                      <small>ERSTZULASSUNG</small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {premiumCars.map((car) => (
                  <tr key={car.id}>
                    <th scope="row">
                      <strong>
                        {car.brand} {car.model}
                      </strong>
                      <small>
                        {car.id === "ix3-g08"
                          ? "G08"
                          : car.id === "ix3-neue-klasse"
                            ? "Neue Klasse"
                            : car.body}
                      </small>
                    </th>
                    {years.map((y) => {
                      const stats = priceSummary(marketListings, car.id, y, maxKm, portal);
                      const unavailable = y < car.firstYear;
                      return (
                        <td key={y} className={year === y ? "pf-selected-year" : ""}>
                          {unavailable ? (
                            <>
                              <span className="pf-na">Nicht verfügbar</span>
                              <small>vor Modellstart*</small>
                            </>
                          ) : stats.mean === null ? (
                            <>
                              <span className="pf-pending">Keine Stichprobe</span>
                              <small>n = 0 erfasst</small>
                            </>
                          ) : (
                            <>
                              <strong>{euro(stats.mean)}</strong>
                              <small>
                                n = {stats.n} · Median {euro(stats.median!)}
                              </small>
                              <small>
                                {euro(stats.min!)}–{euro(stats.max!)}
                                {stats.n < 5 ? " · kleine Stichprobe" : ""}
                              </small>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pf-table-footnote">
            * Kein entsprechender Modelljahrgang in dieser Auswahl. Erstzulassung ist nicht
            automatisch Bau- oder Modelljahr. Frühe iX3-Neue-Klasse-EZ 2025 sind Angaben aus
            Inseraten und individuell zu prüfen. Einige EX60- und GLC-Angebote sind erst 2027
            lieferbar. Die Preismittel sind ein Motorisierungs- und Ausstattungsgemisch, keine
            zustandsbereinigte Bewertung.
          </p>
          <div className="pf-source-grid">
            {portals.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer">
                <span>
                  {p.name}
                  <ArrowUpRight size={15} />
                </span>
                <small>{p.kind}</small>
                <b>{portalNotes[p.id]}</b>
              </a>
            ))}
          </div>
          <details className="pf-method">
            <summary>
              So entsteht ein belastbarer Durchschnitt <ChevronRight size={17} />
            </summary>
            <div>
              <p>
                Je Modell, Generation, Erstzulassungsjahr und Kilometergrenze werden belegte
                Kaufangebote mit Bruttopreis, Variante, Kilometerstand, Quelle und Abrufdatum
                erfasst. Als mögliche Dubletten gelten identische Modell-, EZ-, Kilometer- und
                Preisangaben; solche Treffer werden konservativ zusammengefasst. Eine vollständige
                VIN-Prüfung ist nicht möglich. Der Mittelwert wird aus den verbleibenden
                Angebotspreisen berechnet; Median, Anzahl und Preisspanne zeigen die Aussagekraft.
                Kleine Stichproben sind kein Marktmittel.
              </p>
              <p>
                Leasingraten sind keine Kaufpreise. Sie benötigen eine eigene Auswertung nach
                Laufzeit, Jahreskilometern, Sonderzahlung und Überführung. Förderungen werden nicht
                vorab vom Preis abgezogen. Fahrzeugzustand, Unfallhistorie, Batteriezustand und
                Ausstattung können Preisunterschiede erklären.
              </p>
              <p>
                Erhoben wurden öffentlich sichtbare Ergebnislisten am 24.10.2026: erste Ergebnisse
                je Modell und EZ-Jahr mit Portal-Standardsortierung, maximal 60.000 km, Deutschland,
                Elektro. Die Auswahl ist nicht zufällig und nicht vollständig. Karten und Tabelle
                filtern standardmäßig auf 40.000 km. Ausgeschlossen wurden erkennbare Fremdmodelle,
                Verbrenner, Gesuche, beschädigte Fahrzeuge und Leasingübernahmen. Unter fünf
                Angeboten ist die Aussagekraft besonders gering. Preise sind verlangte Bruttopreise,
                keine erzielten Verkaufspreise; zusätzliche Lieferkosten können anfallen.
              </p>
            </div>
          </details>
          <details className="pf-method pf-evidence">
            <summary>
              Inserate für EZ {year} ansehen · {evidence.length} Fahrzeuge{" "}
              <ChevronRight size={17} />
            </summary>
            <div className="pf-evidence-list">
              {evidence.map((row) => (
                <a key={row.id} href={row.url} target="_blank" rel="noopener noreferrer">
                  <strong>
                    {row.variant} <ArrowUpRight size={13} />
                  </strong>
                  <span>
                    {euro(row.priceEur)} · {row.mileageKm.toLocaleString("de-DE")} km · EZ{" "}
                    {row.year} · {portals.find((p) => p.id === row.portal)?.name}
                  </span>
                  <small>
                    {row.condition} · {row.availability} · abgerufen {researchDate}
                  </small>
                </a>
              ))}
              {evidence.length === 0 && (
                <p>
                  Keine passenden Einzel-Kaufangebote in dieser Stichprobe. Bei LeasingMarkt, carwow
                  und GoLeasy bitte die getrennten Referenzen unten beachten.
                </p>
              )}
            </div>
          </details>
          <div className="pf-reference-heading">
            <h3>Neuwagen als Alternative</h3>
            <p>
              carwow-Abpreise am {researchDate}. Keine Mittelwerte und keine Zuordnung zu einem
              EZ-Jahr; Förderung nicht von uns abgezogen. Der Taycan-Limousinen-Abpreis ist bewusst
              ausgeschlossen.
            </p>
          </div>
          <div className="pf-new-references">
            {newCarReferences.map((item) => (
              <a key={item.model} href={item.url} target="_blank" rel="noopener noreferrer">
                <span>CARWOW / NEUWAGEN</span>
                <h4>{item.model}</h4>
                <strong>
                  ab {euro(item.price)} <ArrowUpRight size={16} />
                </strong>
                <p>{item.note}</p>
              </a>
            ))}
          </div>
          <div className="pf-reference-heading">
            <h3>Leasing separat betrachten</h3>
            <p>
              Einzelbeispiele, keine gemittelten Kaufpreise. Laufzeiten, Kilometer und
              Einmalzahlungen unterscheiden sich; Konditionen vor Abschluss bestätigen.
            </p>
          </div>
          <div className="pf-lease-examples">
            {leaseExamples.map((item) => (
              <article key={item.model + item.portal}>
                <div>
                  <span>{item.portal}</span>
                  <h4>{item.model}</h4>
                  <p>{item.mileage}</p>
                </div>
                <div>
                  <strong>
                    {euro(item.rate)}
                    <small> / Monat brutto</small>
                  </strong>
                  <p>
                    {item.months} Monate · {item.kmYear.toLocaleString("de-DE")} km/Jahr
                  </p>
                </div>
                <div>
                  <p>{item.upfront}</p>
                  <small>{item.note}</small>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.model} bei ${item.portal} ansehen`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="pf-funding" id="premium-foerderung">
          <div>
            <span className="pf-eyebrow">03 / GUT ZU WISSEN</span>
            <h2>
              Förderung.
              <br />
              Mit klarem Blick.
            </h2>
            <p>Ein guter Deal muss auch nach dem Kauf einer bleiben.</p>
            <ShieldCheck size={48} strokeWidth={1} />
          </div>
          <div className="pf-funding-content">
            <h3>Über Bekannte oder Freunde fördern lassen?</h3>
            <p>
              <strong>
                Bei der Antragstellung helfen: ja. Förderberechtigung ausleihen: nein.
              </strong>{" "}
              Nach BAFA-FAQ 5.8 kann eine andere Person bevollmächtigt werden. Antragsteller,
              Fahrzeughalter und Empfänger der Auszahlung bleiben die förderberechtigte Person. Eine
              Vollmacht überträgt keine Förderung.
            </p>
            <p>
              Ein förderberechtigter Freund kann für sein eigenes förderfähiges Fahrzeug einen
              Antrag stellen. Ob du dieses Fahrzeug dauerhaft nutzen darfst und welche
              Vertragsgestaltung zulässig ist, sollte die BAFA vorab schriftlich bestätigen. Eine
              reine Strohmann-Anmeldung oder unzutreffende Angaben sind kein zulässiger Ersatz für
              eigene Förderberechtigung.
            </p>
            <div className="pf-funding-status">
              <span>BAFA 2026 / GEPRÜFT AM {researchDate}</span>
              <strong>3.000–6.000 € für förderfähige neue Elektroautos</strong>
              <p>
                Nur zuvor unzugelassene Neuwagen der Klasse M1, erstmals ab 01.01.2026 in
                Deutschland zugelassen. Gebrauchte, Tageszulassungen, Werkszulassungen und bereits
                zugelassene Vorführwagen sind ausgeschlossen. Mindestens 36 Monate Zulassung auf den
                Antragsteller.
              </p>
              <p>
                Zu versteuerndes Haushaltsjahreseinkommen maximal 80.000 €; bei einem
                förderrelevanten Kind 85.000 €, bei zwei oder mehr Kindern 90.000 €. Basis 3.000 €,
                plus 500 € je Kind (maximal zwei), plus 1.000 € bei Einkommen unter 60.000 € und
                weitere 1.000 € unter 45.000 €. Maßgeblich sind die zwei aktuellsten Steuerbescheide
                gemäß BAFA.
              </p>
              <p>
                Alle Preise bleiben ohne persönlichen Förderabzug. Eine mögliche Förderung hängt von
                deiner Situation und dem konkreten Fahrzeug ab, nicht allein vom Modellnamen.
              </p>
            </div>
            <div className="pf-official-links">
              <a href={bafaRules} target="_blank" rel="noopener noreferrer">
                BAFA Fördervoraussetzungen <ArrowUpRight size={14} />
              </a>
              <a href={bafaFaq} target="_blank" rel="noopener noreferrer">
                BAFA FAQ · Vollmacht & Halter <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
        <section className="pf-section pf-checklist">
          <span className="pf-eyebrow">04 / VOR DER PROBEFAHRT</span>
          <h2>Premium ist auch, genau hinzusehen.</h2>
          <div>
            {[
              {
                title: "Batterie & Historie",
                text: "Unabhängigen SoH-Nachweis, Restgarantie, Rückrufe und lückenlose Wartung prüfen.",
              },
              {
                title: "Echter Gesamtpreis",
                text: "Bruttopreis, Nebenkosten, Reifen, Versicherung und Ladebedarf gemeinsam betrachten.",
              },
              {
                title: "Dein Alltag",
                text: "Fahrradtransport, Anhängelast, Ladeplanung und Kofferraum persönlich ausprobieren.",
              },
            ].map((item, i) => (
              <article key={item.title}>
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="pf-footer">
        <a className="pf-wordmark" href="?ansicht=premium">
          GRAVEL<span className="pf-slash">/</span>ELECTRIC
        </a>
        <p>
          Eine private, unabhängige Fahrzeugauswahl.
          <br />
          Keine Kauf- oder Förderberatung. Keine Verbindung zu den Herstellern oder Portalen.
        </p>
        <a href="?ansicht=fakten">
          Zur kompakten E-Auto-Auswahl <ArrowUpRight size={14} />
        </a>
        <small>PREMIUM EDITION / {researchDate}</small>
      </footer>
    </div>
  );
}
