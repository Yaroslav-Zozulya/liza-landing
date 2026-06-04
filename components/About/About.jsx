import Reveal from "../Reveal/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <Reveal className={styles.photoWrap}>
          <div className={styles.photo}>
            <div className={styles.photoInner} aria-hidden="true">
              <span className={styles.photoHint}>portrait photo</span>
            </div>
            <div className={styles.frame} aria-hidden="true" />
          </div>
          <div className={styles.signature}>
            <span className={styles.line} aria-hidden="true" />
            <span>est. с любовью</span>
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal>
            <p className={styles.kicker}>about me</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className={styles.title}>
              привет, я <em>Лиза</em>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.body}>
              я объединяю хатха-йогу, работу с мышлением и подсознанием, чтобы
              помогать девушкам находить баланс между крепким телом и спокойным
              умом.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className={styles.body}>
              мой клуб и мои практики — это пространство, где меняя внутреннее
              состояние, ты мягко и естественно меняешь свою внешнюю реальность.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <p className={styles.bodyAccent}>
              если ты чувствуешь отклик — добро пожаловать{" "}
              <span className={styles.heart} aria-hidden>
                ♡
              </span>
            </p>
          </Reveal>

          <Reveal delay={560}>
            <ul className={styles.tags}>
              <li>хатха-йога</li>
              <li>медитации</li>
              <li>таро</li>
              <li>МАК</li>
              <li>самопрограммирование</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
