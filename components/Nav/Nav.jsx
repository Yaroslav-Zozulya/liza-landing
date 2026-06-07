"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { LANGS } from "@/lib/translations";
import { useT } from "@/components/LanguageProvider/LanguageProvider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          lizavetron
        </a>
        <nav className={styles.links} aria-label="primary">
          <a href="#about">{t.nav.about}</a>
          <a href="#club">{t.nav.club}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#individual">{t.nav.individual}</a>
        </nav>
        <div className={styles.right}>
          <div
            className={styles.langSwitch}
            role="group"
            aria-label={t.nav.langLabel}
          >
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`${styles.langBtn} ${
                  lang === code ? styles.langActive : ""
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>
          <a href="#pricing" className={styles.cta}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
