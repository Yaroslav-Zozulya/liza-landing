import Reveal from "../Reveal/Reveal";
import styles from "./Gallery.module.css";

const slides = [
  { label: "чат клуба", tag: "community", tone: "tone1" },
  { label: "урок йоги", tag: "practice", tone: "tone2" },
  { label: "медитация", tag: "audio", tone: "tone3" },
  { label: "платформа", tag: "interface", tone: "tone1" },
  { label: "письменная практика", tag: "journal", tone: "tone2" },
  { label: "лекция", tag: "mindset", tone: "tone3" },
  { label: "атмосфера", tag: "vibe", tone: "tone1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>inside the club</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              загляни внутрь <span aria-hidden>🪐</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              кусочек нашей эстетики, общения
              <br />и того, как устроен клуб изнутри
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={200} className={styles.scrollerWrap}>
        <div className={styles.scroller}>
          <div className={styles.track}>
            {slides.map((s, i) => (
              <figure
                key={s.label + i}
                className={`${styles.card} ${styles[s.tone]}`}
              >
                <div className={styles.cardInner}>
                  <span className={styles.cardNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.cardPlaceholder} aria-hidden="true">
                    <span className={styles.placeholderText}>
                      vertical screenshot
                    </span>
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  <span className={styles.captionLabel}>{s.label}</span>
                  <span className={styles.captionTag}>· {s.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className={styles.scrollHint} aria-hidden="true">
          ← листай →
        </div>
      </Reveal>
    </section>
  );
}
