"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./Individual.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Individual() {
  const { t } = useT();

  return (
    <section id="individual" className={styles.individual}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.individual.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              {t.individual.titleLead} <em>{t.individual.titleEm}</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              {t.individual.subtitle} <span aria-hidden>🪷</span>
            </p>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {t.individual.services.map((s, i) => (
            <Reveal key={s.name} as="li" delay={i * 100} className={styles.itemWrap}>
              <div className={styles.item}>
                <span className={styles.symbol} aria-hidden="true">
                  {s.symbol}
                </span>
                <span className={styles.name}>{s.name}</span>
                <span className={styles.dots} aria-hidden="true" />
                <span className={styles.price}>{s.price}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={500} className={styles.ctaWrap}>
          <a
            href="https://t.me/lizavetron"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {t.individual.cta}
            <span className={styles.ctaArrow} aria-hidden="true">
              ↩
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
