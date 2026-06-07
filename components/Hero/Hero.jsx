"use client";

import { Fragment } from "react";
import Reveal from "../Reveal/Reveal";
import styles from "./Hero.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Hero() {
  const { t } = useT();

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <Reveal delay={120} className={styles.photoWrap}>
          <div className={styles.photo}>
            <div className={styles.photoInner} aria-hidden="true">
              <span className={styles.photoHint}>{t.hero.photoHint}</span>
            </div>
            <div className={styles.photoTag}>
              <span className={styles.tagSparkle} aria-hidden="true">
                ✦
              </span>
              {t.hero.photoTag}
            </div>
            <div className={styles.photoBadge}>
              <span aria-hidden>🌸</span>
              <div>
                <strong>{t.hero.badgeStrong}</strong>
                <span>{t.hero.badgeWeak}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal>
            <p className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              {t.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className={styles.title}>
              {t.hero.titleLine1}
              <br />
              <em className={styles.titleAccent}>{t.hero.titleAccent}</em>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className={styles.lead}>
              {t.hero.lead.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < t.hero.lead.length - 1 && <br />}
                </Fragment>
              ))}{" "}
              <span aria-hidden>🌀</span>
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className={styles.ctaRow}>
              <a href="#pricing" className={styles.cta}>
                <span>{t.hero.ctaPrimary}</span>
                <span className={styles.heart} aria-hidden="true">
                  ♡
                </span>
              </a>
              <a href="#about" className={styles.ghost}>
                {t.hero.ctaGhost}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
