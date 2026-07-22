import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/i18n";

export function Nav({ minimal = false }: { minimal?: boolean }) {
  const { locale, t, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logo = minimal ? (
    <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-wine-deep">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-wine text-ivory">M</span>
      <span className="hidden sm:inline">Mariana A. Silva</span>
    </Link>
  ) : (
    <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-wine-deep">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-wine text-ivory">M</span>
      <span className="hidden sm:inline">Mariana A. Silva</span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-500 ${
          scrolled
            ? "glass-wine rounded-full px-5 py-2.5 shadow-[0_10px_40px_-20px_color-mix(in_oklab,var(--wine)_40%,transparent)]"
            : ""
        }`}
      >
        {logo}

        {!minimal && (
          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-wine-deep/70 transition-colors hover:text-wine"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle locale={locale} setLocale={setLocale} />
          <a
            href={minimal ? "/#contato" : "#contato"}
            className="rounded-full bg-wine px-4 py-2 text-sm font-medium text-ivory transition-all hover:bg-wine-deep hover:shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--wine)_70%,transparent)]"
          >
            {t.nav.cta}
          </a>
        </div>

        {!minimal && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-wine text-ivory md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>

      {!minimal && open && (
        <div className="mx-5 mt-3 rounded-3xl glass-wine p-5 md:hidden">
          <div className="flex flex-col gap-3">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-base text-wine-deep hover:bg-wine/5"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 border-t border-wine/15 pt-3">
              <LocaleToggle locale={locale} setLocale={setLocale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="flex items-center rounded-full border border-wine/20 bg-ivory/60 p-0.5 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur-sm">
      {(["pt", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`rounded-full px-3 py-1.5 transition-all duration-300 ${
            locale === l
              ? "bg-wine text-ivory shadow-sm"
              : "text-wine-deep/60 hover:text-wine"
          }`}
          aria-pressed={locale === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
