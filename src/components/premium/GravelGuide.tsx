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
              <h3>Schotter ist nicht gleich Gelände.</h3>
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
              <h3>Der richtige Träger. Für genau dieses Auto.</h3>
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
            Inhaltsprüfung des verlinkten Videos noch offen: Der Abruf war gesperrt. Die Hinweise
            hier sind eine allgemeine Kauf- und Transportcheckliste; sie werden nicht als Aussagen
            aus dem Video ausgegeben. Zeitmarken und geprüfte Videoerkenntnisse folgen nach
            zugänglichem Video oder Transkript.
          </p>
        </div>
      </div>
    </section>
  );
}
