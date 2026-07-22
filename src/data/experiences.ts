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
    items: { pt: string; en: string; link?: string }[];
  }[];
  metrics?: { value: string | { pt: string; en: string }; label: { pt: string; en: string } }[];
  tools?: string[];
  summaryLinks?: Record<string, string>;
  tabs?: {
    label: { pt: string; en: string };
    highlights: {
      label: { pt: string; en: string };
      items: { pt: string; en: string; link?: string }[];
    }[];
  }[];
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
    location: {
      pt: "Bellingham, Washington, Estados Unidos · Remoto",
      en: "Bellingham, Washington, Estados Unidos · Remote",
    },
    type: { pt: "Estágio", en: "Internship" },
    summary: {
      pt: "Atuei como estagiária de BA e QA em um produto global de inteligência artificial, trabalhando diretamente com requisitos, documentação técnica e garantia de qualidade de software. Fui responsável por levantar e documentar requisitos funcionais e não funcionais, criar e executar casos de teste, e colaborar com times de desenvolvimento distribuídos internacionalmente.",
      en: "Worked as a BA and QA intern on a global artificial intelligence product, directly handling requirements, technical documentation and software quality assurance. Responsible for eliciting and documenting functional and non-functional requirements, creating and executing test cases, and collaborating with internationally distributed development teams.",
    },
    highlights: [],
    tabs: [
      {
        label: { pt: "BA — Business Analysis", en: "BA — Business Analysis" },
        highlights: [
          {
            label: { pt: "Business Analysis", en: "Business Analysis" },
            items: [
              {
                pt: "Levantamento e análise de requisitos com stakeholders internacionais em inglês",
                en: "Conducted requirements elicitation and analysis with international stakeholders in English.",
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
              {
                pt: "Condução de cerimônias ágeis como planning, daily e review",
                en: "Facilitated agile ceremonies including planning, daily stand-ups and reviews",
              },
              {
                pt: "Suporte ao lançamento de produtos para clientes multinacionais",
                en: "Supported product releases for multinational clients",
              },
            ],
          },
          {
            label: {
              pt: "Requisitos & Documentação",
              en: "Requirements & Documentation",
            },
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
        ],
      },
      {
        label: { pt: "QA — Quality Assurance", en: "QA — Quality Assurance" },
        highlights: [
          {
            label: { pt: "Quality Assurance", en: "Quality Assurance" },
            items: [
              {
                pt: "Elaboração e execução de casos de teste manuais, incluindo smoke tests, testes de confirmação e testes de regressão",
                en: "Designed and executed manual test cases, including smoke tests and regression testing",
              },
              {
                pt: "Desenvolvimento de testes automatizados em Python com validação baseada na abordagem LLM-as-a-Judge para chatbot de IA com respostas não determinísticas",
                en: "Developed automated tests in Python using an LLM-as-a-Judge validation approach for an AI chatbot with non-deterministic responses",
              },
              {
                pt: "Testes de API e validação de respostas com Postman, cobrindo endpoints REST e cenários de integração",
                en: "API testing and response validation with Postman, covering REST endpoints and integration scenarios",
              },
              {
                pt: "Testes de performance com Apache JMeter para avaliação de carga e comportamento do sistema sob estresse",
                en: "Performance testing with Apache JMeter to evaluate load capacity and system behavior under stress",
              },
              {
                pt: "Validação e troubleshooting de dados no backend com SQL, garantindo integridade entre os sistemas",
                en: "Backend data validation and troubleshooting using SQL, ensuring data integrity across systems",
              },
              {
                pt: "Automação da documentação, execução de testes e gerenciamento do projeto por meio de assistentes de IA (Kiro e Cursor via MCP)",
                en: "Automated documentation, test execution and project management workflows using AI assistants (Kiro and Cursor via MCP)",
              },
              {
                pt: "Gestão e rastreamento de defeitos via Jira e Zephyr ao longo do ciclo de testes",
                en: "Defect tracking and test management via Jira and Zephyr throughout the testing lifecycle",
              },
            ],
          },
        ],
      },
    ],
    metrics: [
      {
        value: "Global",
        label: { pt: "equipe internacional", en: "international team" },
      },
      {
        value: { pt: "Inglês", en: "English" },
        label: { pt: "ambiente de trabalho", en: "working environment" },
      },
      {
        value: "2",
        label: { pt: "releases globais", en: "global releases" },
      },
    ],
    tools: [
      "Jira",
      "Zephyr",
      "Postman",
      "SQL",
      "Postgresql",
      "Docker",
      "MCP",
      "Git/Github",
      "Kiro",
      "LangFuse",
      "Jmeter",
      "Microsoft 365",
      "Hoppscotch",
    ],
  },
  {
    slug: "aceleradora-agil",
    year: "2025",
    role: {
      pt: "Estagiária de desenvolvimento web",
      en: "Web Development Intern",
    },
    company: "Aceleradora Ágil",
    location: {
      pt: "Rio Grande do Sul, Brasil · Remoto",
      en: "Rio Grande do Sul, Brazil",
    },
    type: { pt: "Estágio", en: "Internship" },
    summary: {
      pt: "Minha primeira experiência profissional em desenvolvimento de software, atuando no projeto E-acelera, uma plataforma de educação tecnológica. Trabalhei no desenvolvimento de aplicações web utilizando TypeScript e Node.js, participando do ciclo de desenvolvimento em um ambiente ágil e colaborativo, onde consolidei os fundamentos de desenvolvimento de software e trabalho em equipe.",
      en: "My first professional experience in software development, working on the **E-acelera** project, an educational technology platform. I contributed to the development of web applications using **TypeScript** and **Node.js**, participating in the software development lifecycle within an agile and collaborative environment, where I strengthened my foundation in software engineering and teamwork.",
    },
    highlights: [
      {
        label: { pt: "Desenvolvimento Front-end", en: "Front-end Development" },
        items: [
          {
            pt: "Desenvolvimento de interfaces escaláveis seguindo boas práticas de desenvolvimento",
            en: "Development of scalable interfaces following software development best practices",
          },
          {
            pt: "Implementação de componentes responsivos e acessíveis",
            en: "Implementation of responsive and accessible components",
          },
          {
            pt: "Integração com APIs REST e consumo de dados dinâmicos",
            en: "REST API integration and dynamic data consumption",
          },
          {
            pt: "Participação em sprints com planejamento, daily e revisão de código",
            en: "Sprint participation with planning, daily standups and code review",
          },
          {
            pt: "Uso de Git e GitHub para versionamento e colaboração",
            en: "Git and GitHub usage for versioning and collaboration",
          },
          {
            pt: "Experiência inicial com metodologias ágeis e entrega iterativa",
            en: "Initial experience with agile methodologies and iterative delivery",
          },
        ],
      },
    ],
    tools: ["TypeScript", "Node.js", "Git", "React", "GitHub"],
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
    location: {
      pt: "Rio de Janeiro, Brasil · Voluntário",
      en: "Rio de Janeiro, Brazil · Volunteer",
    },
    type: { pt: "Voluntariado", en: "Volunteer" },
    summary: {
      pt: "Atuação voluntária em uma ONG de assistência social, aplicando técnicas de análise de requisitos para otimizar o processo de atendimento aos assistidos. O projeto resultou em uma redução de 40% no tempo de atendimento, impactando diretamente a capacidade da organização de servir mais pessoas com os mesmos recursos.",
      en: "Volunteer work at a social assistance NGO, applying requirements analysis techniques to optimize the care process for beneficiaries. The project resulted in a 40% reduction in service time, directly impacting the organization's capacity to serve more people with the same resources.",
    },
    highlights: [
      {
        label: { pt: "Mapeamento de Processos", en: "Process Mapping" },
        items: [
          {
            pt: "Levantamento do processo AS-IS de atendimento com entrevistas e observação",
            en: "AS-IS service process mapping through interviews and observation",
          },
          {
            pt: "Identificação de gargalos e oportunidades de melhoria no fluxo de atendimento",
            en: "Identification of bottlenecks and improvement opportunities in the service flow",
          },
          {
            pt: "Proposta e documentação do processo TO-BE com stakeholders da ONG",
            en: "Proposal and documentation of the TO-BE process with NGO stakeholders",
          },
        ],
      },
      {
        label: { pt: "Análise & Documentação", en: "Analysis & Documentation" },
        items: [
          {
            pt: "Elicitação de requisitos com coordenadores, voluntários e assistidos",
            en: "Requirements elicitation with coordinators, volunteers and beneficiaries",
          },
          {
            pt: "Documentação de regras de negócio e fluxos críticos do processo",
            en: "Documentation of business rules and critical process flows",
          },
          {
            pt: "Criação de guias de processo para padronização do atendimento",
            en: "Creation of process guides for service standardization",
          },
        ],
      },
      {
        label: { pt: "Gestão de Demandas", en: "Demand Management" },
        items: [
          {
            pt: "Tradução das necessidades de negócio em requisitos para a equipe técnica",
            en: "Translated business needs into technical requirements for the development team",
          },
          {
            pt: "Criação, refinamento e acompanhamento de tickets de desenvolvimento",
            en: "Created, refined, and tracked development tickets",
          },
          {
            pt: "Gestão e priorização do backlog em alinhamento com stakeholders e equipe técnica",
            en: "Managed and prioritized the backlog in alignment with stakeholders and the technical team",
          },
        ],
      },
      {
        label: { pt: "Impacto Social", en: "Social Impact" },
        items: [
          {
            pt: "Redução de 40% no tempo médio de atendimento por assistido",
            en: "40% reduction in average service time per beneficiary",
          },
          {
            pt: "Aumento da capacidade de atendimento sem aumento de recursos",
            en: "Increased service capacity without additional resources",
          },
          {
            pt: "Capacitação de voluntários no novo processo documentado",
            en: "Training of volunteers in the new documented process",
          },
        ],
      },
    ],
    metrics: [
      {
        value: "↓40%",
        label: { pt: "tempo de atendimento", en: "service time" },
      },
      {
        value: "1 ano",
        label: { pt: "de impacto social", en: "of social impact" },
      },
    ],
    tools: ["Trello", "Notion", "TypeScript", "React", "Git", "GitHub"],
  },
  {
    slug: "ufrrj",
    year: "2022 — 2026",
    role: {
      pt: "Bacharel em Ciência da Computação",
      en: "Bachelor's in Computer Science",
    },
    company: "UFRRJ",
    location: {
      pt: "Nova Iguaçu, Rio de Janeiro, Brasil",
      en: "Nova Iguaçu, Rio de Janeiro, Brazil",
    },
    type: { pt: "Graduação", en: "Bachelor's Degree" },
    summary: {
      pt: "Formação em Ciência da Computação com especialização em Engenharia de Sistemas e Informação e Sistemas Inteligentes. Base sólida em programação, banco de dados, engenharia de software e inteligência artificial, aplicada à análise de requisitos, melhoria de processos e desenvolvimento de soluções tecnológicas.",
      en: "Bachelor's degree in Computer Science with a specialization in Systems and Information Engineering and Intelligent Systems. Strong foundation in programming, databases, software engineering, and artificial intelligence, applied to requirements analysis, process improvement, and technology solution development.",
    },
    highlights: [
      {
        label: {
          pt: "TCC — Design Thinking & Requisitos",
          en: "Thesis — Design Thinking & Requirements",
        },
        items: [
          {
            pt: "Pesquisa sobre Design Thinking aplicado à elicitação de requisitos",
            en: "Research on Design Thinking applied to requirements elicitation",
          },
          {
            pt: "Comparação entre Storyboard, Jornada do Usuário, Storytelling e Blueprint de Serviço",
            en: "Comparison of Storyboard, User Journey, Storytelling and Service Blueprint techniques",
          },
          {
            pt: "Modelagem de processos reais e análise de requisitos funcionais e não funcionais",
            en: "Real process modelling and analysis of functional and non-functional requirements",
          },
          {
            pt: "Avaliação do impacto de abordagens centradas no usuário na descoberta de requisitos",
            en: "Evaluation of the impact of user-centered approaches on requirements discovery",
          },
          {
            pt: "Identificação das contribuições de cada técnica para a compreensão das necessidades do usuário",
            en: "Identification of each technique's contributions to understanding user needs",
          },
          {
            pt: "Quer entender mais sobre o TCC? Confira o artigo no LinkedIn",
            en: "Want to learn more about the thesis? Read the article on LinkedIn",
            link: "https://www.linkedin.com/posts/mariana-azevedo-7175b7246_design-thinking-na-elicita%C3%A7%C3%A3o-de-requisitos-ugcPost-7485408271034388480-hdhl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz1CkMBB8vL6hJZjHi1V0rn6OMeOKKkLxA",
          },
        ],
      },
    ],
    tools: ["Python", "Java", "SQL", "TypeSript", "C"],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
