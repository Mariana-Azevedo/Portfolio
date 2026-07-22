import { createContext, useContext, useState, type ReactNode } from "react";
import { pt, en, type Translations, type Locale } from "@/i18n";

const dict: Record<Locale, Translations> = { pt, en };

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
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
