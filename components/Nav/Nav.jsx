"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          <a href="#about">обо мне</a>
          <a href="#club">клуб</a>
          <a href="#gallery">атмосфера</a>
          <a href="#individual">1:1</a>
        </nav>
        <a href="#pricing" className={styles.cta}>
          в клуб ♡
        </a>
      </div>
    </header>
  );
}
