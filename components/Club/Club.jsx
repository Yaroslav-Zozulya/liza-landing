import Reveal from "../Reveal/Reveal";
import styles from "./Club.module.css";

const benefits = [
  "успокаивают нервную систему и снижают уровень стресса",
  "повышают гормоны счастья, делая тебя спокойнее и увереннее",
  "через дыхание и движение мягко убирают накопленные напряжения",
  "возвращают глубокий контакт с собственным телом",
];

const cards = [
  {
    icon: "🌿",
    title: "хатха-йога",
    text: "осознанные движения и дыхание",
    number: "01",
  },
  {
    icon: "✍︎",
    title: "письменные практики",
    text: "работа с мыслями и фокусом",
    number: "02",
  },
  {
    icon: "✺",
    title: "аудио-медитации",
    text: "настройка на день, расслабление, заземление, работа с чакрами, манифестация",
    number: "03",
  },
  {
    icon: "✦",
    title: "лекции про самопрограммирование",
    text: "состояние, энергия, манифестация",
    number: "04",
  },
];

export default function Club() {
  return (
    <section id="club" className={styles.club}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <p className={styles.kicker}>main product · клуб</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              пространство твоего <em>состояния</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.intro}>
          <Reveal delay={120}>
            <p className={styles.introLead}>
              клуб по подписке — это регулярные практики, которые:
            </p>
          </Reveal>

          <ul className={styles.benefitList}>
            {benefits.map((b, i) => (
              <Reveal key={b} as="li" delay={200 + i * 100}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{b}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
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
          <p className={styles.outro}>
            после практик жизнь становится более осознанной, наполненной
            и изобильной! вот такая небольшая часть приятностей ждет тебя
            внутри <span aria-hidden>🙃</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
