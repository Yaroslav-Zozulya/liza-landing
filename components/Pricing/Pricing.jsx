import Reveal from "../Reveal/Reveal";
import styles from "./Pricing.module.css";

const plans = [
  {
    id: "month",
    duration: "1 месяц",
    price: "10",
    perks: ["доступ ко всем практикам", "медитации и лекции", "поддержка чата"],
    cta: "попробовать",
    highlighted: false,
    note: "начать мягко",
  },
  {
    id: "quarter",
    duration: "3 месяца",
    price: "25",
    perks: [
      "всё из тарифа на месяц",
      "выгоднее в 1.5 раза",
      "достаточно времени для перемен",
    ],
    cta: "занять место",
    highlighted: true,
    badge: "most loved ♡",
    note: "оптимально для трансформации",
  },
  {
    id: "year",
    duration: "1 год",
    price: "111",
    perks: [
      "всё из клуба весь год",
      "максимальная выгода",
      "глубокая практика",
    ],
    cta: "идти в долгую",
    highlighted: false,
    note: "для тех, кто остаётся",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>тарифы</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              выбери свой <em>ритм</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className={styles.subtitle}>
              три формата участия — на месяц, чтобы прислушаться,
              <br />
              и на дольше, чтобы по-настоящему углубиться
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
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
          <p className={styles.legal}>
            оплата в долларах · доступ открывается сразу после оплаты
          </p>
        </Reveal>
      </div>
    </section>
  );
}
