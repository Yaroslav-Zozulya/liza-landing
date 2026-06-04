import Reveal from "../Reveal/Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <Reveal>
            <p className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              lizavetron · клуб трансформации
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className={styles.title}>
              space of your
              <br />
              <em className={styles.titleAccent}>transformation</em>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className={styles.lead}>
              добро пожаловать в место, где можно наполняться,
              <br />
              возвращаться к себе и менять жизнь
              <br />
              из состояния любви и принятия.
              <br />
              разрушать старое и создавать новое <span aria-hidden>🌋</span>
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className={styles.ctaRow}>
              <a href="#pricing" className={styles.cta}>
                <span>хочу в клуб</span>
                <span className={styles.heart} aria-hidden="true">
                  ♡
                </span>
              </a>
              <a href="#about" className={styles.ghost}>
                познакомиться ↓
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.photoWrap}>
          <div className={styles.photo}>
            <div className={styles.photoInner} aria-hidden="true">
              <span className={styles.photoHint}>your photo here</span>
            </div>
            <div className={styles.photoTag}>
              <span className={styles.tagSparkle} aria-hidden="true">
                ✦
              </span>
              soft &amp; grounded
            </div>
            <div className={styles.photoBadge}>
              <span aria-hidden>🌸</span>
              <div>
                <strong>hatha · breath</strong>
                <span>practice with love</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
