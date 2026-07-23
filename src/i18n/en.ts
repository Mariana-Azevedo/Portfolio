export const en = {
  locale: "en" as const,
  nav: {
    links: [
      { href: "#sobre", label: "About" },
      { href: "#carreira", label: "Career" },
      { href: "#qualificacoes", label: "Credentials" },
      { href: "#skills", label: "Skills" },
      { href: "#contato", label: "Contact" },
    ],
    cta: "Let's talk",
  },
  hero: {
    badge: "Portfolio",
    titles: ["Quality.", "Value.", "Product."],
    description: {
      pre: "Computer Scientist focused on Business Analyst, Product and",
      highlight: "Quality Assurance",
      post: ". I connect strategy, requirements and quality to deliver products that generate value, from elicitation to release.",
    },
    cta: "See my work",
    contact: "Get in touch",
  },
  about: {
    tag: "01 — About",
    heading: {
      pre: "Technology with a sharp eye for quality",
      em: "and purpose",
    },
    paragraphs: [
      "Bachelor's degree in Computer Science with experience in Business Analysis, Quality Assurance, and Product, working in international environments and collaborating with globally distributed teams. I translate business needs into clear requirements, test strategies, and actionable insights that support informed decision-making.",
      "I believe quality is built from problem discovery through solution delivery. I enjoy understanding user needs, anticipating risks, and contributing to the development of digital products that deliver value and inspire trust.",
    ],
    stats: [
      { value: "2+", label: "years in QA & Product" },
      { value: "3", label: "languages spoken" },
      { value: "3", label: "global product releases" },
    ],
    location: "Based in",
    locationValue: "RJ · Brazil",
  },
  timeline: {
    tag: "02 — Career",
    heading: {
      pre: "A journey across",
      em: "code, process and people",
    },
    items: [
      {
        year: "2026 — now",
        role: "Post-graduation — Digital Product Management",
        company: "Fiap + PM3",
        body: "Training in Digital Product Management focused on Product Discovery, product strategy, prioritization, metrics and agile methodologies.",
      },
      {
        year: "2025 — 2026",
        role: "Business Analyst & Quality Assurance Intern",
        company: "KIS Solutions",
        body: "Requirements analysis, documentation and software testing on a global AI product.",
      },
      {
        year: "2025",
        role: "Web Development Intern",
        company: "Aceleradora Ágil",
        body: "First formal experience in software development.",
      },
      {
        year: "2023 — 2024",
        role: "Requirements Analyst",
        company: "Fraternidade Sem Fronteiras",
        body: "Volunteered at an NGO, contributing to a 40% reduction in service processing time.",
      },
      {
        year: "2022 — 2026",
        role: "Bachelor's in Computer Science",
        company: "UFRRJ",
        body: "Thesis on Design Thinking applied to requirements elicitation. Study of user-centered approaches.",
      },
    ],
  },
  credentials: {
    tag: "03 — Credentials",
    heading: {
      pre: "Academic background and",
      em: "continuous learning",
    },
    educationLabel: "Education",
    coursesLabel: "Courses & Certifications",
    education: [
      {
        title: "Bachelor's in Computer Science",
        org: "Federal Rural University of Rio de Janeiro — 2022–2026",
        detail: "Focus on Software Engineering and Testing",
      },
      {
        title: "Post-graduation — Digital Product Management",
        org: "PM3 + FIAP — 2026",
        detail: "Discovery, Delivery and product metrics",
      },
    ],
    courses: [
      { name: "ISTQB CTFL", org: "Foundation Level" },
      { name: "Expresso Oratória", org: "Clube da Fala Oratória" },
      { name: "Cypress Automation", org: "Udemy" },
      { name: "API Testing with Postman", org: "Postman Academy" },
      { name: "SQL for Data Analysis", org: "Alura" },
      { name: "Product Discovery", org: "PM3" },
      { name: "Software Testing BootCamp", org: "Instituto Matera" },
      { name: "Agile Management", org: "Alura" },
    ],
  },
  skills: {
    tag: "04 — Skills",
    heading: {
      pre: "A",
      em: "full-stack",
      post: "quality toolbox.",
    },
    groups: [
      {
        span: "md:col-span-2 md:row-span-2",
        title: "Testing & Automation",
        items: ["Cypress", "Selenium", "Zephyr", "Postman", "Cucumber (BDD)", "k6", "Apache JMeter", "Hoppscotch"],
        tone: "wine",
      },
      {
        span: "md:col-span-2",
        title: "Management & Process",
        items: ["Jira", "Confluence", "Notion", "Miro", "Excel"],
        tone: "deep",
      },
      {
        span: "md:col-span-2",
        title: "Software Development",
        items: ["SQL", "PostgreSQL", "Python", "Java", "TypeScript"],
        tone: "deep",
      },
      {
        span: "md:col-span-2",
        title: "Product & Discovery",
        items: ["Figma", "Personas", "User Story Mapping", "Design Thinking"],
        tone: "gold",
      },
      {
        span: "md:col-span-2",
        title: "Languages",
        items: ["Portuguese (native)", "English (advanced)", "Spanish (intermediate)"],
        tone: "wine",
      },
    ],
  },
  contact: {
    tag: "06 — Contact",
    heading: {
      pre: "Let's build something",
      em: "worth trusting",
    },
    description: "Open to opportunities in QA, Business Analyst and Product. I reply within 48 hours.",
    fields: {
      name: "Name",
      email: "E-mail",
      message: "Message",
      placeholder: "Tell me briefly about the project…",
      send: "Send message",
      sending: "Sending…",
      toast: "Message sent! I'll get back to you soon.",
    },
  },
  footer: {
    made: "Made with care in wine & ivory.",
  },
};
