import { ArrowDown } from "lucide-react";

export default function RecipientsWelcome({ photoSrc }: { photoSrc: string }) {
  return (
    <section className="pf-recipients" aria-labelledby="pf-recipients-title">
      <div className="pf-recipients-copy">
        <span className="pf-eyebrow">PERSÖNLICH FÜR EUCH ZUSAMMENGESTELLT</span>
        <h2 id="pf-recipients-title">
          Für euch.
          <br />
          Und eure nächste <em>gemeinsame Ausfahrt.</em>
        </h2>
        <p>
          Für eure gemeinsamen Wege, die nächste Gravel-Runde und euren vierbeinigen Beifahrer: eine
          Auswahl mit Herz, Verstand und einer Extraportion Porsche-Leidenschaft.
        </p>
        <p className="pf-recipients-dedication">
          Gewidmet dem Patenkind eines Porsche-Enthusiasten und seiner Frau — dieser Carfinder
          gehört euch beiden.
        </p>
        <a className="pf-primary" href="#premium-auswahl">
          Eure Fahrzeugauswahl entdecken <ArrowDown size={17} />
        </a>
      </div>
      <figure className="pf-recipients-photo">
        <img
          src={photoSrc}
          alt="Das Paar, für das dieser Carfinder zusammengestellt wurde, mit seinem Hund"
          width="962"
          height="962"
          fetchPriority="high"
        />
        <figcaption>Für gemeinsame Wege. Zu zweit — und mit vier Pfoten.</figcaption>
      </figure>
    </section>
  );
}
