"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LANGS, translations } from "@/lib/translations";

const DEFAULT_LANG = "ru";

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: translations[DEFAULT_LANG],
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    let initial = DEFAULT_LANG;
    try {
      const stored = window.localStorage.getItem("lang");
      if (stored && LANGS.includes(stored)) {
        initial = stored;
      } else {
        const nav = (window.navigator.language || "").slice(0, 2).toLowerCase();
        if (LANGS.includes(nav)) initial = nav;
      }
    } catch {}
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem("lang", next);
    } catch {}
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
