import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-wine/15 bg-ivory py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-wine-deep/60 md:flex-row">
        <p className="font-display">Mariana Azevedo da Silva</p>
        <p>© {new Date().getFullYear()} — {t.footer.made}</p>
      </div>
    </footer>
  );
}
