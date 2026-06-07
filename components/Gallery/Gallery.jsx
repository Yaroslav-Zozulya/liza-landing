"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Reveal from "../Reveal/Reveal";
import styles from "./Gallery.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

const TONES = ["tone1", "tone2", "tone3"];
const SLOTS = 7;

export default function Gallery() {
  const { t } = useT();

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>{t.gallery.kicker}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              {t.gallery.title} <span aria-hidden>🪐</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              {t.gallery.subtitle.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={200} className={styles.sliderWrap}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides
          loop
          grabCursor
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 0.6 }}
          navigation={{
            prevEl: `.${styles.navPrev}`,
            nextEl: `.${styles.navNext}`,
          }}
          pagination={{ clickable: true, el: `.${styles.pagination}` }}
          breakpoints={{
            0: { spaceBetween: 16 },
            720: { spaceBetween: 24 },
            1100: { spaceBetween: 28 },
          }}
          className={styles.swiper}
        >
          {Array.from({ length: SLOTS }).map((_, i) => (
            <SwiperSlide
              key={i}
              className={`${styles.slide} ${styles[TONES[i % TONES.length]]}`}
            >
              <figure className={styles.card}>
                <span className={styles.cardNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.cardPlaceholder} aria-hidden="true">
                  <span className={styles.placeholderText}>
                    {t.gallery.placeholder}
                  </span>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.navPrev}`}
          aria-label="prev"
        >
          ←
        </button>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navNext}`}
          aria-label="next"
        >
          →
        </button>

        <div className={styles.pagination} aria-hidden="true" />
      </Reveal>
    </section>
  );
}
