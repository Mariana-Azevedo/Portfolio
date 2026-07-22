import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";
import { experiences } from "@/data/experiences";

const SLUGGED_YEARS = new Set(experiences.map((e) => e.slug));

function slugFor(year: string, company: string): string | null {
  const match = experiences.find((e) => e.company === company && e.year === year);
  return match?.slug ?? null;
}

export function Timeline() {
  const { t, locale } = useLocale();
  const { pre, em } = t.timeline.heading;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="carreira" className="relative bg-wine-deep py-28 text-ivory md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(40% 60% at 80% 10%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 70%), radial-gradient(35% 50% at 0% 90%, color-mix(in oklab, var(--wine) 70%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.timeline.tag}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
            {pre} <em className="italic">{em}</em>.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 md:mt-24">
          <div className="absolute left-4 top-0 h-full w-px bg-ivory/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-4 top-0 w-px bg-gold md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <ol className="space-y-14 md:space-y-20">
            {t.timeline.items.map((it, i) => {
              const left = i % 2 === 0;
              const slug = slugFor(
                locale === "pt" ? it.year : it.year,
                experiences.find(
                  (e) =>
                    (locale === "pt" ? e.role.pt : e.role.en) === it.role
                )?.company ?? ""
              );

              const exp = experiences.find(
                (e) => (locale === "pt" ? e.role.pt : e.role.en) === it.role
              );

              return (
                <li key={it.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="block h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-wine-deep" />
                  </motion.span>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <Reveal delay={i * 0.05}>
                      {exp ? (
                        <Link
                          to="/carreira/$slug"
                          params={{ slug: exp.slug }}
                          className="group/card block rounded-2xl border border-ivory/10 bg-ivory/5 p-5 transition-all duration-500 hover:border-gold/40 hover:bg-ivory/10 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--gold)_40%,transparent)] -mx-5"
                        >
                          {/* glow blob */}
                          <div
                            aria-hidden
                            className={`pointer-events-none absolute -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100 ${left ? "right-0" : "left-0"}`}
                            style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
                          />
                          <div className={`flex items-start justify-between gap-3 ${left ? "md:flex-row-reverse" : ""}`}>
                            <div>
                              <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">{it.year}</p>
                              <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{it.role}</h3>
                              <p className="mt-1 text-sm text-ivory/60">{it.company}</p>
                              <p className="mt-4 text-base leading-relaxed text-ivory/80">{it.body}</p>
                            </div>
                            <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ivory/20 text-ivory/50 transition-all duration-300 group-hover/card:border-gold group-hover/card:bg-gold group-hover/card:text-wine-deep group-hover/card:rotate-45">
                              <ArrowUpRight size={15} />
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div className="px-5">
                          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">{it.year}</p>
                          <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{it.role}</h3>
                          <p className="mt-1 text-sm text-ivory/60">{it.company}</p>
                          <p className="mt-4 text-base leading-relaxed text-ivory/80">{it.body}</p>
                        </div>
                      )}
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
