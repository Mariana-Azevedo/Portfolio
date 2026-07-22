import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";

export function Credentials() {
  const { t } = useLocale();
  const { pre, em } = t.credentials.heading;

  return (
    <section id="qualificacoes" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-wine">{t.credentials.tag}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-wine-deep md:text-5xl text-balance">
            {pre} <em className="italic text-wine">{em}</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-wine">
                <GraduationCap size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">{t.credentials.educationLabel}</span>
              </div>
            </Reveal>
            <ul className="mt-6 space-y-5">
              {t.credentials.education.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.08}>
                  <li className="group rounded-2xl border border-wine/15 bg-card p-6 transition-all hover:-translate-y-1 hover:border-wine/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--wine)_60%,transparent)]">
                    <h3 className="font-display text-xl text-wine-deep">{e.title}</h3>
                    <p className="mt-1 text-sm text-wine/80">{e.org}</p>
                    <p className="mt-3 text-sm text-wine-deep/65">{e.detail}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-wine">
                <Award size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">{t.credentials.coursesLabel}</span>
              </div>
            </Reveal>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {t.credentials.courses.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.04}>
                  <li className="group inline-flex cursor-default items-center gap-2 rounded-full border border-wine/20 bg-ivory px-4 py-2 transition-all hover:border-wine hover:bg-wine hover:text-ivory">
                    <span className="text-sm font-medium text-wine-deep group-hover:text-ivory">{c.name}</span>
                    <span className="text-xs text-wine/60 group-hover:text-ivory/70">· {c.org}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
