"use client";

import styles from "./Footer.module.css";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>lizavetron</span>
            <span className={styles.tagline}>{t.footer.tagline}</span>
          </div>

          <nav className={styles.nav} aria-label="footer navigation">
            <a href="#about">{t.footer.navAbout}</a>
            <a href="#club">{t.footer.navClub}</a>
            <a href="#pricing">{t.footer.navPricing}</a>
            <a href="#individual">{t.footer.navIndividual}</a>
          </nav>

          <div className={styles.socials}>
            <a
              href="https://instagram.com/lizavetron"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://t.me/lizavetron"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className={styles.socialLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 4.5 2.5 11.5l6 2.2 2.2 6.3 3-4.3 5.5 4.3 2.3-15.5z" />
                <path d="m8.5 13.7 8.5-6.2-6.5 7.2" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.signature}>
            {t.footer.signature} <em>lizavetron</em>
            <span className={styles.heart} aria-hidden>
              ♡
            </span>
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} · {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
