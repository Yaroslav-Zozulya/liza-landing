import Reveal from "../Reveal/Reveal";
import styles from "./Individual.module.css";

const services = [
  { name: "расклад таро", price: "от 3$", symbol: "✦" },
  { name: "сессия МАК (метафорические карты)", price: "от 15$", symbol: "✸" },
  { name: "трансформационная игра Лила", price: "от 15$", symbol: "✺" },
  { name: "онлайн-йога (персонально)", price: "от 11$", symbol: "✿" },
];

export default function Individual() {
  return (
    <section id="individual" className={styles.individual}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>1 : 1 sessions</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              индивидуальная <em>работа</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              жду тебя на своих сессиях онлайн, чтобы вместе раскрыть новые
              инструменты, которые станут твоим внутренним якорем{" "}
              <span aria-hidden>🪷</span>
            </p>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {services.map((s, i) => (
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
            написать в лс для деталей
            <span className={styles.ctaArrow} aria-hidden="true">
              ↩
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
