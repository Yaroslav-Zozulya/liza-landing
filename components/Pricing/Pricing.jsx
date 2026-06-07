"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./Pricing.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Pricing() {
  const { t } = useT();

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.pricing.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              {t.pricing.titleLead} <em>{t.pricing.titleEm}</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              {t.pricing.subtitle.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {t.pricing.plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 140}
              className={`${styles.cardWrap} ${
                plan.highlighted ? styles.cardWrapHighlight : ""
              }`}
            >
              <article
                className={`${styles.card} ${
                  plan.highlighted ? styles.cardHighlight : ""
                }`}
              >
                {plan.badge && (
                  <span className={styles.badge}>{plan.badge}</span>
                )}

                <header className={styles.cardHeader}>
                  <span className={styles.duration}>{plan.duration}</span>
                  <div className={styles.priceRow}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{plan.price}</span>
                  </div>
                  <span className={styles.note}>{plan.note}</span>
                </header>

                <div className={styles.divider} />

                <ul className={styles.perks}>
                  {plan.perks.map((perk) => (
                    <li key={perk}>
                      <span className={styles.check} aria-hidden="true">
                        ✦
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.cta} ${
                    plan.highlighted ? styles.ctaFilled : styles.ctaOutline
                  }`}
                  type="button"
                >
                  {plan.cta}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className={styles.legal}>{t.pricing.legal}</p>
        </Reveal>
      </div>
    </section>
  );
}
