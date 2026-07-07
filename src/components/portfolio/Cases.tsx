import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const cases = [
  {
    tag: "QA · Fintech",
    title: "Suíte de regressão para core bancário",
    body: "Migração de testes manuais para Cypress + API contract tests. Pipeline CI executa 1.2k cenários em 11 minutos.",
    metric: "↓ 72%",
    metricLabel: "tempo de regressão",
  },
  {
    tag: "Business Analyst · Healthtech",
    title: "Reengenharia do prontuário eletrônico",
    body: "Mapa de processos AS-IS / TO-BE, BPMN, e refinamento com clínicos. Critérios de aceite reduziram retrabalho em sprint.",
    metric: "↑ 38%",
    metricLabel: "throughput do time",
  },
  {
    tag: "Produto · SaaS",
    title: "Discovery de onboarding self-service",
    body: "Entrevistas, JTBD e testes de usabilidade. Lançamento iterativo com feature flags reduziu o tempo até o primeiro valor.",
    metric: "↓ 41%",
    metricLabel: "time-to-value",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative bg-sand/40 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-wine">04 — Cases</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight text-wine-deep md:text-5xl text-balance">
            Projetos onde o impacto está nos <em className="italic text-wine">números</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-wine/15 bg-ivory p-7 transition-all duration-500 hover:-translate-y-2 hover:border-wine/40 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--wine)_55%,transparent)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "color-mix(in oklab, var(--wine) 50%, transparent)" }}
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-wine">{c.tag}</span>
                <h3 className="mt-4 font-display text-2xl leading-snug text-wine-deep">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-wine-deep/70">{c.body}</p>
                <div className="mt-8 flex items-end justify-between border-t border-wine/15 pt-5">
                  <div>
                    <div className="font-display text-4xl text-wine">{c.metric}</div>
                    <div className="mt-1 text-xs text-wine-deep/60">{c.metricLabel}</div>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-wine-deep text-ivory transition-all group-hover:bg-wine group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}