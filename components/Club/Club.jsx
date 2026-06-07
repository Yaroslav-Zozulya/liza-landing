"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./Club.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Club() {
  const { t } = useT();

  return (
    <section id="club" className={styles.club}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.club.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              {t.club.titleLead} <em>{t.club.titleEm}</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.intro}>
          <Reveal delay={120}>
            <p className={styles.introLead}>{t.club.introLead}</p>
          </Reveal>

          <ul className={styles.benefitList}>
            {t.club.benefits.map((b, i) => (
              <Reveal key={b} as="li" delay={200 + i * 80}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{b}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.cards}>
          {t.club.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120} className={styles.cardWrap}>
              <article className={styles.card}>
                <span className={styles.cardNumber}>{card.number}</span>
                <span className={styles.cardIcon} aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
                <span className={styles.cardArrow} aria-hidden="true">
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className={styles.outro}>«{t.club.outro}»</p>
        </Reveal>
      </div>
    </section>
  );
}
