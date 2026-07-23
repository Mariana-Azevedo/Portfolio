import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function Hero() {
  const { t } = useLocale();
  const { pre, highlight, post } = t.hero.description;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 10%, color-mix(in oklab, var(--wine) 22%, transparent), transparent 60%), radial-gradient(50% 60% at 10% 90%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 60%), var(--ivory)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 top-24 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--wine) 35%, transparent)" }}
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-wine/20 bg-ivory/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-wine"
        >
          <Sparkles size={14} /> {t.hero.badge}
        </motion.div>

        <h1 className="mt-7 font-display text-[clamp(2.75rem,8.5vw,7.5rem)] font-medium leading-[0.95] tracking-tight text-wine-deep text-balance">
          <span className="block">Mariana</span>
          <span className="block italic">Azevedo</span>
          <span className="wine-gradient-text block">da Silva</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          {t.hero.titles.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl text-wine md:text-3xl"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-wine-deep/75 md:text-lg"
        >
          {pre} <span className="text-wine">{highlight}</span>{post}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#sobre"
            className="group inline-flex items-center gap-2 rounded-full bg-wine-deep px-6 py-3.5 text-sm font-medium text-ivory transition-all hover:bg-wine hover:shadow-[0_16px_40px_-16px_color-mix(in_oklab,var(--wine)_70%,transparent)]"
          >
            {t.hero.cta}
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-wine/30 px-6 py-3.5 text-sm font-medium text-wine-deep transition-all hover:border-wine hover:bg-wine/5"
          >
            {t.hero.contact}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-wine/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        role
      </motion.div>
    </section>
  );
}
