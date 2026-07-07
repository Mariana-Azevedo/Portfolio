import { Reveal } from "./Reveal";

const groups = [
  {
    span: "md:col-span-2 md:row-span-2",
    title: "Testes & Automação",
    items: ["Cypress", "Selenium", "Playwright", "Postman / Newman", "Cucumber (BDD)", "k6", "Appium"],
    tone: "wine",
  },
  {
    span: "md:col-span-2",
    title: "Gestão & Processo",
    items: ["Jira", "Confluence", "Azure DevOps", "Notion", "Miro"],
    tone: "deep",
  },
  {
    span: "md:col-span-2",
    title: "Análise de Dados",
    items: ["SQL", "PostgreSQL", "Excel avançado", "Metabase", "Google Analytics"],
    tone: "deep",
  },
  {
    span: "md:col-span-2",
    title: "Produto & Discovery",
    items: ["Figma", "JTBD", "OKR", "BPMN", "User Story Mapping", "Design Thinking"],
    tone: "gold",
  },
  {
    span: "md:col-span-2",
    title: "Idiomas",
    items: ["Português (nativo)", "Inglês (avançado)", "Espanhol (intermediário)"],
    tone: "wine",
  },
];

function toneStyles(tone: string) {
  if (tone === "deep") return "bg-wine-deep text-ivory border-wine-deep";
  if (tone === "gold") return "bg-ivory text-wine-deep border-wine/15";
  return "bg-wine text-ivory border-wine";
}

function chipStyles(tone: string) {
  if (tone === "deep") return "border-ivory/20 text-ivory/85 hover:border-gold hover:text-gold";
  if (tone === "gold") return "border-wine/20 text-wine-deep hover:border-wine hover:bg-wine hover:text-ivory";
  return "border-ivory/25 text-ivory/90 hover:border-ivory hover:bg-ivory hover:text-wine";
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-wine">05 — Skills</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-wine-deep md:text-5xl text-balance">
            Caixa de ferramentas <em className="italic text-wine">full-stack</em> de qualidade.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-5 md:grid-cols-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className={g.span}>
              <div
                className={`group flex h-full flex-col rounded-3xl border p-7 transition-transform duration-500 hover:-translate-y-1 ${toneStyles(g.tone)}`}
              >
                <h3 className="font-display text-xl md:text-2xl">{g.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${chipStyles(g.tone)}`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}