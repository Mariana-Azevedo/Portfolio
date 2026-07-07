import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const items = [
  {
    year: "2026 — agora",
    role: "Pós-graduação — Digital Product Management",
    company: "Fiap + PM3",
    body: "Mapeei jornadas críticas de pacientes, defini critérios de aceite com PO e clínicos, e construí a suíte de regressão automatizada em Cypress.",
  },
  {
    year: "2025 — 2026",
    role: "Estagiária em Business Analysis e Quality Assurance",
    company: "KIS Solutions",
    body: "Atuei em três contas paralelas (varejo, logística, governo). Introduzi BDD com Cucumber e cortei o tempo de regressão de 3 dias para 4 horas.",
  },
  {
    year: "2025",
    role: "Estagiária de desenvolvimento web",
    company: "Aceleradora Ágil",
    body: "Primeira experiência formal em desenvolvimento.",
  },
  {
    year: "2023 — 2024",
    role: "Analista de Requisitos",
    company: "Fraternidade Sem Fronteiras",
    body: "Lidero a estratégia de qualidade e discovery de produto em squads multidisciplinares. Implantei OKRs de qualidade que reduziram incidentes em 68%.",
  },
  {
    year: "2022 — 2026",
    role: "Bacharel em Ciência da Computação",
    company: "UFRRJ",
    body: "TCC sobre Design Thinking aplicado à elicitação de requisitos. Estudo de abordagens centradas no usuário.",
  },
];

export function Timeline() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-gold">02 — Carreira</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
            Uma trajetória entre <em className="italic">código, processo e pessoas</em>.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-ivory/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-4 top-0 w-px bg-gold md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <ol className="space-y-14 md:space-y-20">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <li key={it.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* dot */}
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
                      <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">{it.year}</p>
                      <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">
                        {it.role}
                      </h3>
                      <p className="mt-1 text-sm text-ivory/60">{it.company}</p>
                      <p className="mt-4 text-base leading-relaxed text-ivory/80">{it.body}</p>
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