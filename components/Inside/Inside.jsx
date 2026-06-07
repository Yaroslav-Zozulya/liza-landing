"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./Inside.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Inside() {
  const { t } = useT();

  return (
    <section id="inside" className={styles.inside}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.inside.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>{t.inside.title}</h2>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.lead}>
              <span aria-hidden className={styles.handPoint}>
                ☝🏻
              </span>
              {t.inside.lead}
            </p>
          </Reveal>
        </div>

        <div className={styles.pillars}>
          {t.inside.pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 160}
              className={styles.pillarWrap}
            >
              <article className={styles.pillar}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarNumber}>{p.number}</span>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    {p.icon}
                  </span>
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.text}</p>
                <span className={styles.pillarGlow} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
