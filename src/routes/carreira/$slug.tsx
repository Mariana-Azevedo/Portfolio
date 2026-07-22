import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { getExperience } from "@/data/experiences";
import { LocaleProvider } from "@/context/LocaleContext";
import { useLocale } from "@/context/LocaleContext";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/carreira/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);
    if (!exp) throw notFound();
    return exp;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.role.pt} — ${loaderData.company} · Mariana Azevedo` },
      { name: "description", content: loaderData.summary.pt },
    ],
  }),
  component: ExperiencePage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-display text-4xl text-wine-deep">Experiência não encontrada.</p>
        <Link to="/" className="mt-6 inline-block text-sm text-wine underline">
          Voltar ao portfólio
        </Link>
      </div>
    </div>
  ),
});

function ExperiencePage() {
  const exp = Route.useLoaderData();
  return (
    <LocaleProvider>
      <main className="bg-background text-foreground">
        <Nav />
        <ExperienceDetail exp={exp} />
        <Footer />
      </main>
    </LocaleProvider>
  );
}

function ExperienceDetail({ exp }: { exp: ReturnType<typeof getExperience> & {} }) {
  const { locale } = useLocale();
  const l = (field: { pt: string; en: string }) => field[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-wine-deep pt-40 pb-24 text-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(50% 70% at 80% 0%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%), radial-gradient(40% 60% at 0% 100%, color-mix(in oklab, var(--wine) 80%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5">
          <Reveal>
            <Link
              to="/"
              hash="carreira"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory/50 transition-colors hover:text-gold"
            >
              <ArrowLeft size={14} />
              {locale === "pt" ? "Voltar à carreira" : "Back to career"}
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-gold">
                {l(exp.type)}
              </span>
              <span className="text-xs text-ivory/40">{exp.year}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight md:text-6xl text-balance">
              {l(exp.role)}
            </h1>
            <p className="mt-3 font-display text-2xl text-gold md:text-3xl">{exp.company}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-ivory/60">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                {l(exp.location)}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                {exp.year}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={14} className="text-gold" />
                {l(exp.type)}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics bar */}
      {exp.metrics && exp.metrics.length > 0 && (
        <section className="bg-wine py-10">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 px-5 md:justify-start">
            {exp.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-4xl font-medium text-ivory">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-ivory/60">{l(m.label)}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-16 md:grid-cols-[2fr_1fr] md:gap-20">
            {/* Main content */}
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-wine">
                  {locale === "pt" ? "Sobre a experiência" : "About the experience"}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-wine-deep/80 md:text-xl">
                  <SummaryWithLinks text={l(exp.summary)} links={exp.summaryLinks} />
                </p>
              </Reveal>

              <div className="mt-16 space-y-12">
                {exp.highlights.map((h, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="border-l-2 border-wine/20 pl-6">
                      <h3 className="font-display text-xl text-wine-deep md:text-2xl">
                        {l(h.label)}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {h.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-wine-deep/70 md:text-base">
                            <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-wine" />
                            {l(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {exp.tools && exp.tools.length > 0 && (
                <Reveal delay={0.1}>
                  <div className="rounded-2xl border border-wine/15 bg-sand/30 p-6">
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-wine">
                      {locale === "pt" ? "Ferramentas & Tecnologias" : "Tools & Technologies"}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-wine/20 bg-ivory px-3 py-1.5 text-xs font-medium text-wine-deep"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-wine/15 bg-sand/30 p-6">
                  <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-wine">
                    {locale === "pt" ? "Detalhes" : "Details"}
                  </h4>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-wine-deep/50">{locale === "pt" ? "Empresa" : "Company"}</dt>
                      <dd className="mt-0.5 font-medium text-wine-deep">{exp.company}</dd>
                    </div>
                    <div>
                      <dt className="text-wine-deep/50">{locale === "pt" ? "Período" : "Period"}</dt>
                      <dd className="mt-0.5 font-medium text-wine-deep">{exp.year}</dd>
                    </div>
                    <div>
                      <dt className="text-wine-deep/50">{locale === "pt" ? "Tipo" : "Type"}</dt>
                      <dd className="mt-0.5 font-medium text-wine-deep">{l(exp.type)}</dd>
                    </div>
                    <div>
                      <dt className="text-wine-deep/50">{locale === "pt" ? "Local" : "Location"}</dt>
                      <dd className="mt-0.5 font-medium text-wine-deep">{l(exp.location)}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SummaryWithLinks({
  text,
  links,
}: {
  text: string;
  links?: Record<string, string>;
}): ReactNode {
  if (!links || Object.keys(links).length === 0) return text;

  const entries = Object.entries(links);
  const pattern = new RegExp(`(${entries.map(([k]) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const url = links[part];
        return url ? (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-wine/40 text-wine-deep transition-colors hover:border-wine hover:text-wine"
          >
            {part}
          </a>
        ) : (
          part
        );
      })}
    </>
  );
}
