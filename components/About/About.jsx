"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./About.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <Reveal className={styles.photoWrap}>
          <div className={styles.photo}>
            <div className={styles.photoInner} aria-hidden="true">
              <span className={styles.photoHint}>{t.about.photoHint}</span>
            </div>
            <div className={styles.frame} aria-hidden="true" />
          </div>
          <div className={styles.signature}>
            <span className={styles.line} aria-hidden="true" />
            <span>{t.about.signature}</span>
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal>
            <p className={styles.kicker}>{t.about.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              {t.about.titleLead} <em>{t.about.titleEm}</em>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.body}>{t.about.body1}</p>
          </Reveal>
          <Reveal delay={340}>
            <p className={styles.body}>{t.about.body2}</p>
          </Reveal>
          <Reveal delay={440}>
            <p className={styles.bodyAccent}>
              {t.about.bodyAccent}{" "}
              <span className={styles.heart} aria-hidden>
                ♡
              </span>
            </p>
          </Reveal>

          <Reveal delay={560}>
            <ul className={styles.tags}>
              {t.about.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
