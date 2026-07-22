export interface Experience {
  slug: string;
  year: string;
  role: { pt: string; en: string };
  company: string;
  location: { pt: string; en: string };
  type: { pt: string; en: string };
  summary: { pt: string; en: string };
  highlights: {
    label: { pt: string; en: string };
    items: { pt: string; en: string }[];
  }[];
  metrics?: { value: string; label: { pt: string; en: string } }[];
  tools?: string[];
  summaryLinks?: Record<string, string>;
}

export const experiences: Experience[] = [
  {
    slug: "kis-solutions",
    year: "2025 — 2026",
    role: {
      pt: "Estagiária em Business Analyst e Quality Assurance",
      en: "Business Analyst & Quality Assurance Intern",
    },
    company: "KIS Solutions",
    location: { pt: "Bellingham, Washington, Estados Unidos · Remoto", en: "Bellingham, Washington, Estados Unidos · Remote" },
    type: { pt: "Estágio", en: "Internship" },
    summary: {
      pt: "Atuei como estagiária de BA e QA em um produto global de inteligência artificial, trabalhando diretamente com requisitos, documentação técnica e garantia de qualidade de software. Fui responsável por levantar e documentar requisitos funcionais e não funcionais, criar e executar casos de teste, e colaborar com times de desenvolvimento distribuídos internacionalmente.",
      en: "Worked as a BA and QA intern on a global artificial intelligence product, directly handling requirements, technical documentation and software quality assurance. Responsible for eliciting and documenting functional and non-functional requirements, creating and executing test cases, and collaborating with internationally distributed development teams.",
    },
    highlights: [
      {
        label: { pt: "Business Analysis", en: "Business Analysis" },
        items: [
          {
            pt: "Levantamento e análise de requisitos com stakeholders nacionais e internacionais",
            en: "Requirements elicitation and analysis with national and international stakeholders",
          },
          {
            pt: "Mapeamento de feedbacks dos usuários para identificação de oportunidades de melhoria",
            en: "User feedback analysis to identify improvement opportunities",
          },
          {
            pt: "Atuação como ponte entre áreas de negócio e desenvolvimento, garantindo alinhamento das regras de negócio",
            en: "Bridging business and development teams to ensure business rule alignment",
          },
          {
            pt: "Gestão e priorização de backlog alinhada às necessidades dos stakeholders",
            en: "Backlog management and prioritization based on stakeholder needs",
          },
        ],
      },
      {
        label: { pt: "Requisitos & Documentação", en: "Requirements & Documentation" },
        items: [
          {
            pt: "Elaboração e manutenção de BRDs e especificações funcionais",
            en: "Creation and maintenance of BRDs and functional specifications",
          },
          {
            pt: "Definição de histórias de usuário, critérios de aceite e fluxos de negócio",
            en: "Definition of user stories, acceptance criteria and business workflows",
          },
          {
            pt: "Auditoria de qualidade em documentação corporativa e requisitos",
            en: "Quality audits of corporate documentation and requirements",
          },
          {
            pt: "Padronização da documentação organizacional utilizando SharePoint",
            en: "Standardization of organizational documentation using SharePoint",
          },
        ],
      },
      {
        label: { pt: "Quality Assurance", en: "Quality Assurance" },
        items: [
          { pt: "Planejamento e execução de testes funcionais, de regressão e de integração", en: "Planning and execution of functional, regression and integration tests" },
          { pt: "Criação de planos de teste e gestão de defeitos via Jira", en: "Test plan creation and defect management via Jira" },
          { pt: "Testes exploratórios em produto de IA com múltiplos fluxos de usuário", en: "Exploratory testing on AI product with multiple user flows" },
        ],
      },
      {
        label: { pt: "Melhoria de Processos", en: "Process Improvement" },
        items: [
          {
            pt: "Mapeamento e reestruturação do processo de onboarding de projetos",
            en: "Mapped and redesigned the project onboarding process",
          },
          {
            pt: "Condução de entrevistas, workshops e sessões de brainstorming",
            en: "Facilitated interviews, workshops and brainstorming sessions",
          },
          {
            pt: "Criação de um modelo estruturado de onboarding adotado como padrão da empresa",
            en: "Created a structured onboarding model adopted as the company's standard",
          },
          {
            pt: "Redução do tempo de adaptação de novos colaboradores",
            en: "Reduced the onboarding time for new team members",
          },
        ],
      },
      {
        label: { pt: "Colaboração & Processo", en: "Collaboration & Process" },
        items: [
          {
            pt: "Condução de cerimônias ágeis como planning, daily e review",
            en: "Facilitated agile ceremonies including planning, daily stand-ups and reviews",
          },
          {
            pt: "Comunicação diária com equipes de desenvolvimento e produto em inglês",
            en: "Daily communication with development and product teams in English",
          },
          {
            pt: "Alinhamento contínuo entre stakeholders e equipes técnicas durante as entregas",
            en: "Continuous alignment between stakeholders and technical teams throughout deliveries",
          },
          {
            pt: "Suporte ao lançamento de produtos para clientes multinacionais",
            en: "Supported product releases for multinational clients",
          },
        ],
      },
    ],
    metrics: [
      { value: "100+", label: { pt: "casos de teste criados", en: "test cases created" } },
      { value: "3", label: { pt: "idiomas de trabalho", en: "working languages" } },
    ],
    tools: ["Jira", "Zephyr", "Postman", "SQL", "Postgresql", "Docker", "MCP", "Git/Github", "Kiro", "LangFuse", "Jmeter", "Microsoft 365"],
  },
  {
    slug: "aceleradora-agil",
    year: "2025",
    role: {
      pt: "Estagiária de desenvolvimento web",
      en: "Web Development Intern",
    },
    company: "Aceleradora Ágil",
    location: { pt: "Rio Grande do Sul, Brasil · Remoto", en: "Rio Grande do Sul, Brazil" },
    type: { pt: "Estágio", en: "Internship" },
    summary: {
      pt: "Minha primeira experiência profissional em desenvolvimento de software, atuando no projeto E-acelera, uma plataforma de educação tecnológica. Trabalhei no desenvolvimento de aplicações web utilizando TypeScript e Node.js, participando do ciclo de desenvolvimento em um ambiente ágil e colaborativo, onde consolidei os fundamentos de desenvolvimento de software e trabalho em equipe.",
      en: "My first professional experience in software development, working on the **E-acelera** project, an educational technology platform. I contributed to the development of web applications using **TypeScript** and **Node.js**, participating in the software development lifecycle within an agile and collaborative environment, where I strengthened my foundation in software engineering and teamwork.",
    },
    highlights: [
      {
        label: { pt: "Desenvolvimento Front-end", en: "Front-end Development" },
        items: [
          { pt: "Desenvolvimento de interfaces web com HTML, CSS e JavaScript", en: "Web interface development with HTML, CSS and JavaScript" },
          { pt: "Implementação de componentes responsivos e acessíveis", en: "Implementation of responsive and accessible components" },
          { pt: "Integração com APIs REST e consumo de dados dinâmicos", en: "REST API integration and dynamic data consumption" },
        ],
      },
      {
        label: { pt: "Processo & Aprendizado", en: "Process & Learning" },
        items: [
          { pt: "Participação em sprints com planejamento, daily e revisão de código", en: "Sprint participation with planning, daily standups and code review" },
          { pt: "Uso de Git e GitHub para versionamento e colaboração", en: "Git and GitHub usage for versioning and collaboration" },
          { pt: "Experiência inicial com metodologias ágeis e entrega iterativa", en: "Initial experience with agile methodologies and iterative delivery" },
        ],
      },
    ],
    tools: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    summaryLinks: { "E-acelera": "https://aceleradora-agil.com.br/" },
  },
  {
    slug: "fraternidade-sem-fronteiras",
    year: "2023 — 2024",
    role: {
      pt: "Analista de Requisitos",
      en: "Requirements Analyst",
    },
    company: "Fraternidade Sem Fronteiras",
    location: { pt: "Rio de Janeiro, Brasil · Voluntário", en: "Rio de Janeiro, Brazil · Volunteer" },
    type: { pt: "Voluntariado", en: "Volunteer" },
    summary: {
      pt: "Atuação voluntária em uma ONG de assistência social, aplicando técnicas de análise de requisitos para otimizar o processo de atendimento aos assistidos. O projeto resultou em uma redução de 40% no tempo de atendimento, impactando diretamente a capacidade da organização de servir mais pessoas com os mesmos recursos.",
      en: "Volunteer work at a social assistance NGO, applying requirements analysis techniques to optimize the care process for beneficiaries. The project resulted in a 40% reduction in service time, directly impacting the organization's capacity to serve more people with the same resources.",
    },
    highlights: [
      {
        label: { pt: "Mapeamento de Processos", en: "Process Mapping" },
        items: [
          { pt: "Levantamento do processo AS-IS de atendimento com entrevistas e observação", en: "AS-IS service process mapping through interviews and observation" },
          { pt: "Identificação de gargalos e oportunidades de melhoria no fluxo de atendimento", en: "Identification of bottlenecks and improvement opportunities in the service flow" },
          { pt: "Proposta e documentação do processo TO-BE com stakeholders da ONG", en: "Proposal and documentation of the TO-BE process with NGO stakeholders" },
        ],
      },
      {
        label: { pt: "Análise & Documentação", en: "Analysis & Documentation" },
        items: [
          { pt: "Elicitação de requisitos com coordenadores, voluntários e assistidos", en: "Requirements elicitation with coordinators, volunteers and beneficiaries" },
          { pt: "Documentação de regras de negócio e fluxos críticos do processo", en: "Documentation of business rules and critical process flows" },
          { pt: "Criação de guias de processo para padronização do atendimento", en: "Creation of process guides for service standardization" },
        ],
      },
      {
        label: { pt: "Impacto Social", en: "Social Impact" },
        items: [
          { pt: "Redução de 40% no tempo médio de atendimento por assistido", en: "40% reduction in average service time per beneficiary" },
          { pt: "Aumento da capacidade de atendimento sem aumento de recursos", en: "Increased service capacity without additional resources" },
          { pt: "Capacitação de voluntários no novo processo documentado", en: "Training of volunteers in the new documented process" },
        ],
      },
    ],
    metrics: [
      { value: "↓40%", label: { pt: "tempo de atendimento", en: "service time" } },
      { value: "1 ano", label: { pt: "de impacto social", en: "of social impact" } },
    ],
    tools: ["Miro", "Notion", "Excel", "BPMN"],
  },
  {
    slug: "ufrrj",
    year: "2022 — 2026",
    role: {
      pt: "Bacharel em Ciência da Computação",
      en: "Bachelor's in Computer Science",
    },
    company: "UFRRJ",
    location: { pt: "Seropédica, Rio de Janeiro, Brasil", en: "Seropédica, Rio de Janeiro, Brazil" },
    type: { pt: "Graduação", en: "Bachelor's Degree" },
    summary: {
      pt: "Formação em Ciência da Computação com ênfase em Engenharia de Software, Testes e Análise de Sistemas. Durante a graduação, desenvolvi base técnica sólida em programação, banco de dados, algoritmos e arquitetura de software, ao mesmo tempo em que me especializei na interseção entre tecnologia e negócio através de projetos práticos e do TCC.",
      en: "Computer Science degree with emphasis on Software Engineering, Testing and Systems Analysis. During the course, I built a solid technical foundation in programming, databases, algorithms and software architecture, while specializing in the intersection of technology and business through practical projects and thesis work.",
    },
    highlights: [
      {
        label: { pt: "TCC — Design Thinking & Requisitos", en: "Thesis — Design Thinking & Requirements" },
        items: [
          { pt: "Pesquisa aplicada sobre o uso de Design Thinking na elicitação de requisitos de software", en: "Applied research on the use of Design Thinking in software requirements elicitation" },
          { pt: "Estudo de abordagens centradas no usuário para levantamento de necessidades", en: "Study of user-centered approaches for needs assessment" },
          { pt: "Validação da metodologia em um projeto real com usuários e stakeholders", en: "Validation of the methodology in a real project with users and stakeholders" },
        ],
      },
      {
        label: { pt: "Disciplinas de Destaque", en: "Key Subjects" },
        items: [
          { pt: "Engenharia de Software, Testes de Software e Qualidade", en: "Software Engineering, Software Testing and Quality" },
          { pt: "Análise e Projeto de Sistemas, Banco de Dados", en: "Systems Analysis and Design, Databases" },
          { pt: "Algoritmos, Estruturas de Dados e Paradigmas de Programação", en: "Algorithms, Data Structures and Programming Paradigms" },
        ],
      },
      {
        label: { pt: "Projetos & Atividades", en: "Projects & Activities" },
        items: [
          { pt: "Desenvolvimento de projetos interdisciplinares com aplicação real", en: "Development of interdisciplinary projects with real-world application" },
          { pt: "Participação em iniciativas de extensão e projetos acadêmicos", en: "Participation in extension initiatives and academic projects" },
          { pt: "Formação bilíngue com leitura técnica extensiva em inglês", en: "Bilingual education with extensive technical reading in English" },
        ],
      },
    ],
    tools: ["Python", "Java", "SQL", "PostgreSQL", "C"],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
