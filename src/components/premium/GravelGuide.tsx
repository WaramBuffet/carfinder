import { useState } from "react";
import { ArrowUpRight, Bike, Mountain, Play } from "lucide-react";
export default function GravelGuide() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="pf-section pf-guide" id="premium-gravel-guide">
      <div className="pf-section-heading">
        <div>
          <span className="pf-eyebrow">GRAVEL / ABSEITS DES ALLTAGS</span>
          <h2>Die Ausfahrt beginnt vor dem Trail.</h2>
          <p>Dein Videotipp als Ausgangspunkt für Offroad-Fahrten und Fahrradtransport.</p>
        </div>
      </div>
      <div className="pf-guide-grid">
        <div className="pf-video">
          {playing ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/m0793euQNL8?autoplay=1"
              title="Videotipp: Offroad-Fahren und Fahrradträger"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button onClick={() => setPlaying(true)} className="pf-video-start">
              <span>
                <Play size={28} />
              </span>
              <strong>Dein Videotipp</strong>
              <small>Offroad & Fahrradträger</small>
              <em>YouTube erst nach Klick laden</em>
            </button>
          )}
          <a
            href="https://www.youtube.com/watch?v=m0793euQNL8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video auf YouTube öffnen <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="pf-guide-copy">
          <article>
            <Mountain size={23} />
            <div>
              <h3>Grüner Taycan. Schotter. Staub.</h3>
              <p>
                Deine Beobachtung aus dem verlinkten Video: Ein grüner Taycan fährt abseits
                befestigter Straßen durch Staub. Genau dieses Gravel-Gefühl ist die Inspiration für
                unsere Ausfahrt-Sonderinfo.
              </p>
              <p>
                Vor einer Offroad-Ausfahrt Bodenfreiheit, Reifen, Unterbodenschutz und die
                Herstellerfreigaben des konkreten Fahrzeugs prüfen. Ein Fahrmodus ersetzt weder
                Geländefreigängigkeit noch eine Zufahrtsgenehmigung. Mit beladenem Träger besonders
                auf Böschungen und Bodenwellen achten.
              </p>
            </div>
          </article>
          <article>
            <Bike size={23} />
            <div>
              <h3>Grauer Taycan. Fahrräder am Heck.</h3>
              <p>
                Als zweite Szene beschreibst du einen grauen Taycan mit Fahrradheckträger — die
                passende Idee für die Anreise zur nächsten Gravel-Runde. Welches Trägersystem
                montiert ist und welche Last es tragen darf, lässt sich daraus allein nicht
                ableiten.
              </p>
              <p>
                Vor Kauf Befestigungssystem, modellabhängige Trägerfreigabe und zulässige Gesamtlast
                bestätigen. Bei einem Kupplungsträger zählen Trägereigengewicht und Fahrräder
                gemeinsam zur Stützlast. Ein spezieller Heckträger ist nicht automatisch eine
                Anhängerkupplung.
              </p>
              <p>
                Beim Cross Turismo die genaue Werksvorbereitung und passende Porsche-Trägerlösung am
                Fahrzeug prüfen. Für schwere E-Bikes zusätzlich Einzellast je Schiene, Radstand und
                Reifenbreite beachten; Akkus nach Herstelleranleitung transportieren.
              </p>
            </div>
          </article>
          <p className="pf-video-review">
            Video-Motive nach deiner Beschreibung: grüner Taycan bei einer staubigen Offroad-Fahrt
            und Fahrradheckträger am grauen Taycan. Der Videoabruf war hier gesperrt; die Szenen
            wurden nicht unabhängig geprüft. Karosserievariante, Trägermodell, Traglast und
            Zeitmarken sind damit nicht belegt. Die ergänzenden Prüfhinweise sind allgemeine Kauf-
            und Transporthinweise.
          </p>
        </div>
      </div>
    </section>
  );
}
