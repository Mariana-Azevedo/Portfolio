import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { pt, en, type Translations, type Locale } from "@/i18n";

const dict: Record<Locale, Translations> = { pt, en };
const STORAGE_KEY = "portfolio-locale";

function getSavedLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return "pt";
}

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);

  const setLocale = useCallback((l: Locale) => {
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    setLocaleState(l);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: dict[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
