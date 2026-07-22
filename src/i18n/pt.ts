export const pt = {
  locale: "pt" as const,
  nav: {
    links: [
      { href: "#sobre", label: "Sobre" },
      { href: "#carreira", label: "Carreira" },
      { href: "#qualificacoes", label: "Qualificações" },
      { href: "#cases", label: "Cases" },
      { href: "#skills", label: "Skills" },
      { href: "#contato", label: "Contato" },
    ],
    cta: "Vamos conversar",
  },
  hero: {
    badge: "Portfólio",
    titles: ["Qualidade.", "Valor.", "Produto."],
    description: {
      pre: "Cientista da Computação com foco em Análise de Negócios, Produto e",
      highlight: "Quality Assurance",
      post: ". Conecto estratégia, requisitos e qualidade para entregar produtos que geram valor, da elicitação ao release.",
    },
    cta: "Ver o trabalho",
    contact: "Falar comigo",
  },
  about: {
    tag: "01 — Sobre",
    heading: {
      pre: "Tecnologia com olhar afiado para qualidade",
      em: "e propósito",
    },
    paragraphs: [
      "Formada em Ciência da Computação, atuo na fronteira entre QA, Análise de Negócios e Produto. Traduzo necessidades de negócio em requisitos claros, planos de teste robustos e métricas que conduzem decisões.",
      "Acredito que qualidade não é etapa final — é cultura. Trabalho com squads ágeis para encurtar ciclos, antecipar riscos e entregar produtos em que o usuário pode confiar.",
    ],
    stats: [
      { value: "2+", label: "anos em QA & Produto" },
      { value: "3", label: "idiomas falados" },
      { value: "3", label: "releases de produtos globais" },
    ],
    location: "Baseada em",
  },
  timeline: {
    tag: "02 — Carreira",
    heading: {
      pre: "Uma trajetória entre",
      em: "código, processo e pessoas",
    },
    items: [
      {
        year: "2026 — agora",
        role: "Pós-graduação — Digital Product Management",
        company: "Fiap + PM3",
        body: "Formação em Gestão de Produtos Digitais com foco em Product Discovery, estratégia de produto, priorização, métricas e metodologias ágeis.",
      },
      {
        year: "2025 — 2026",
        role: "Estagiária em Business Analyst e Quality Assurance",
        company: "KIS Solutions",
        body: "Análise de requisitos, documentação e testes de software em produto global de IA.",
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
        body: "Voluntariado em ONG, contribuindo para reduzir em 40% o tempo do processo de atendimento dos assistidos.",
      },
      {
        year: "2022 — 2026",
        role: "Bacharel em Ciência da Computação",
        company: "UFRRJ",
        body: "TCC sobre Design Thinking aplicado à elicitação de requisitos. Estudo de abordagens centradas no usuário.",
      },
    ],
  },
  credentials: {
    tag: "03 — Qualificações",
    heading: {
      pre: "Formação acadêmica e",
      em: "aprendizado contínuo",
    },
    educationLabel: "Formação",
    coursesLabel: "Cursos & Certificações",
    education: [
      {
        title: "Bacharelado em Ciência da Computação",
        org: "Universidade Federal Rural do Rio de Janeiro 2022 — 2026",
        detail: "Ênfase em Engenharia de Software e Testes",
      },
      {
        title: "Pós-graduação — Digital Product Management",
        org: "PM3 + FIAP — 2026",
        detail: "Discovery, Delivery e métricas de produto",
      },
    ],
    courses: [
      { name: "ISTQB CTFL", org: "Foundation Level" },
      { name: "Expresso Oratória", org: "Clube da Fala Oratória" },
      { name: "Cypress automation", org: "Udemy" },
      { name: "API Testing com Postman", org: "Postman Academy" },
      { name: "SQL para Análise de Dados", org: "Alura" },
      { name: "Product Discovery", org: "PM3" },
      { name: "Software Testing BootCamp", org: "Instituto Matera" },
      { name: "Agile Management", org: "Alura" },
    ],
  },
  skills: {
    tag: "05 — Skills",
    heading: {
      pre: "Caixa de ferramentas",
      em: "full-stack",
      post: "de qualidade.",
    },
    groups: [
      {
        span: "md:col-span-2 md:row-span-2",
        title: "Testes & Automação",
        items: ["Cypress", "Selenium", "Zephyr", "Postman", "Cucumber (BDD)", "k6", "Apache JMeter"],
        tone: "wine",
      },
      {
        span: "md:col-span-2",
        title: "Gestão & Processo",
        items: ["Jira", "Confluence", "Notion", "Miro", "Excel"],
        tone: "deep",
      },
      {
        span: "md:col-span-2",
        title: "Desenvolvimento de software",
        items: ["SQL", "PostgreSQL", "Python", "Java", "TypeScript"],
        tone: "deep",
      },
      {
        span: "md:col-span-2",
        title: "Produto & Discovery",
        items: ["Figma", "Personas", "User Story Mapping", "Design Thinking"],
        tone: "gold",
      },
      {
        span: "md:col-span-2",
        title: "Idiomas",
        items: ["Português (nativo)", "Inglês (avançado)", "Espanhol (intermediário)"],
        tone: "wine",
      },
    ],
  },
  contact: {
    tag: "06 — Contato",
    heading: {
      pre: "Vamos construir algo em que",
      em: "se possa confiar",
    },
    description: "Aberta a oportunidades em QA, Análise de Negócios e Produto. Respondo em até 48 horas.",
    fields: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      placeholder: "Conte rapidamente sobre o projeto…",
      send: "Enviar mensagem",
      sending: "Enviando…",
      toast: "Mensagem enviada! Retorno em breve.",
    },
  },
  footer: {
    made: "Feito com cuidado em vinho & marfim.",
  },
};

export type Translations = typeof pt;
