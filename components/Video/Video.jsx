"use client";

import Reveal from "../Reveal/Reveal";
import styles from "./Video.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

const YOUTUBE_ID = "";

export default function Video() {
  const { t } = useT();

  return (
    <section id="video" className={styles.video}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.video.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>{t.video.title}</h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>{t.video.subtitle}</p>
          </Reveal>
        </div>

        <Reveal delay={240} className={styles.frameWrap}>
          <div className={styles.frame}>
            {YOUTUBE_ID ? (
              <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className={styles.placeholder} aria-hidden="true">
                <span className={styles.play}>▶</span>
                <span className={styles.placeholderText}>
                  {t.video.placeholder}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
