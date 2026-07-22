import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";

export function About() {
  const { t } = useLocale();
  const { pre, em } = t.about.heading;

  return (
    <section id="sobre" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.3fr] md:items-center md:gap-20">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-wine/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-wine/15 bg-sand shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--wine-deep)_45%,transparent)]">
              <img
                src={portrait}
                alt="Retrato editorial de Mariana Azevedo da Silva"
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-wine-deep px-5 py-3 font-display text-ivory shadow-xl md:block">
              <span className="text-xs uppercase tracking-widest text-ivory/60">{t.about.location}</span>
              <div className="text-lg">RJ · Brasil</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-wine">{t.about.tag}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-wine-deep md:text-5xl text-balance">
              {pre} <em className="italic text-wine">{em}</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-wine-deep/75 md:text-lg">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-3 gap-x-6 gap-y-7 border-t border-wine/15 pt-8">
              {t.about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-wine md:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-sm text-wine-deep/65">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
