import {
  Bot,
  Braces,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ServiceSection = {
  title: string;
  description?: string;
  items: { title: string; description?: string }[];
  layout?: "cards" | "list" | "steps";
};

export type Service = {
  slug: string;
  path: string;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  group: "Build" | "Strengthen";
  cardDescription: string;
  tags: string[];
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  sections: ServiceSection[];
  ctaLabel: string;
  ctaInterest: string;
};

export const services: Service[] = [
  {
    slug: "software-development",
    path: "/services/software-development",
    name: "Software Development",
    navLabel: "Software Development",
    icon: Code2,
    group: "Build",
    cardDescription:
      "Secure, scalable products built around business goals, from discovery through production support.",
    tags: ["Product discovery", "Architecture", "Engineering", "DevOps"],
    h1: "Software engineered for change.",
    intro:
      "We design and build secure, scalable, high-performance software around your business goals. Our teams combine modern engineering practices with practical domain understanding to turn complex needs into dependable digital products.",
    metaTitle: "Software Development Services | Altair Technologies Inc.",
    metaDescription:
      "Custom software development from discovery to production: secure architecture, modern engineering, QA, DevOps, and ongoing optimization for scaling businesses.",
    sections: [
      {
        title: "Core capabilities",
        items: [
          {
            title: "Artificial Intelligence",
            description: "Prediction, automation, and decision support built into real workflows.",
          },
          {
            title: "Cybersecurity",
            description: "Security engineered into design, delivery, and operations.",
          },
          {
            title: "Data Science & Engineering",
            description: "Pipelines, platforms, and analytics that make data usable.",
          },
          {
            title: "Full-Stack Development",
            description: "Web and mobile products with resilient backend systems.",
          },
        ],
        layout: "cards",
      },
      {
        title: "How we deliver",
        items: [
          { title: "Product Discovery" },
          { title: "Architecture" },
          { title: "Experience Design" },
          { title: "Engineering" },
          { title: "Quality Assurance" },
          { title: "DevOps & Release" },
          { title: "Ongoing Optimization" },
        ],
        layout: "steps",
      },
      {
        title: "Engagement models",
        items: [
          {
            title: "End-to-end product team",
            description: "A complete team accountable for outcome, quality, and release.",
          },
          {
            title: "Dedicated engineering pod",
            description: "An embedded pod working inside your delivery process.",
          },
          {
            title: "Modernization project",
            description: "A scoped programme to replace or re-platform legacy systems.",
          },
          {
            title: "Specialist capability",
            description: "Focused expertise added where your team needs depth.",
          },
        ],
        layout: "cards",
      },
    ],
    ctaLabel: "Plan your software project",
    ctaInterest: "software-development",
  },
  {
    slug: "artificial-intelligence",
    path: "/services/artificial-intelligence",
    name: "Artificial Intelligence",
    navLabel: "Artificial Intelligence",
    icon: Bot,
    group: "Build",
    cardDescription:
      "Pragmatic AI for prediction, automation, search, vision, and decision support — with governance built in.",
    tags: ["Predictive analytics", "NLP", "Computer vision", "MLOps"],
    h1: "AI systems built for real business impact.",
    intro:
      "We design, build, and deploy pragmatic AI systems for prediction, automation, search, vision, and decision support. Every solution is shaped around real workflows, measurable value, security, and long-term maintainability.",
    metaTitle: "Artificial Intelligence Services | Altair Technologies Inc.",
    metaDescription:
      "Applied AI engineering: predictive analytics, computer vision, NLP and LLM applications, AI agents, MLOps, and responsible AI governance for production workloads.",
    sections: [
      {
        title: "Capabilities",
        items: [
          {
            title: "Predictive Analytics",
            description: "Forecasting, risk modeling, decision support, and feedback loops.",
          },
          {
            title: "Computer Vision",
            description: "Image recognition, inspection, OCR, and edge-ready deployment.",
          },
          {
            title: "Natural Language Processing",
            description:
              "Search, document intelligence, assistants, and LLM applications with guardrails.",
          },
          {
            title: "Security & Governance",
            description:
              "Access control, data masking, auditability, compliance, and responsible AI controls.",
          },
          {
            title: "AI Agents",
            description:
              "Task-focused digital teammates that reason, retrieve, and act within approved boundaries.",
          },
          {
            title: "MLOps",
            description:
              "Model CI/CD, monitoring, drift detection, latency and cost controls, and safe rollback.",
          },
        ],
        layout: "cards",
      },
      {
        title: "Why Altair",
        items: [
          { title: "Human-centered design" },
          { title: "Scalable intelligence" },
          { title: "Trusted and responsible AI" },
          { title: "Rapid, measurable business impact" },
        ],
        layout: "steps",
      },
      {
        title: "Capability patterns we build",
        description:
          "Solution patterns our teams are equipped to deliver. These are capabilities, not published client engagements.",
        items: [
          { title: "Claims assistance" },
          { title: "Readmission risk modelling" },
          { title: "Product recommendations" },
          { title: "Fraud detection" },
          { title: "Document classification" },
          { title: "Demand forecasting" },
        ],
        layout: "list",
      },
    ],
    ctaLabel: "Talk to an AI expert",
    ctaInterest: "artificial-intelligence",
  },
  {
    slug: "cybersecurity",
    path: "/services/cybersecurity",
    name: "Cybersecurity",
    navLabel: "Cybersecurity",
    icon: ShieldCheck,
    group: "Build",
    cardDescription:
      "Intelligence-driven strategy, governance, and risk management that strengthen resilience.",
    tags: ["Strategy & readiness", "GRC", "Risk management", "Zero Trust"],
    h1: "Cybersecurity that anticipates what's next.",
    intro:
      "Our intelligence-driven approach helps organizations understand risk, strengthen resilience, meet compliance expectations, and protect the people, operations, and reputation behind the technology.",
    metaTitle: "Cybersecurity Services | Altair Technologies Inc.",
    metaDescription:
      "Cyber strategy, governance and risk, security assessments, secure design, and Zero Trust transformation services that reduce risk and support compliance goals.",
    sections: [
      {
        title: "Three pillars",
        items: [
          { title: "Cyber Strategy & Readiness" },
          { title: "Governance, Risk & Compliance" },
          { title: "Cyber Risk Management & Response" },
        ],
        layout: "steps",
      },
      {
        title: "Services",
        items: [
          {
            title: "Cyber Strategy and Planning",
            description:
              "Current-state assessment, target-state roadmap, resources, timelines, and maturity planning.",
          },
          {
            title: "Security Assessments",
            description:
              "Cloud, network, firewall, architecture, controls, and Zero Trust maturity.",
          },
          {
            title: "Cybersecurity & Privacy Compliance",
            description:
              "Align controls with business objectives, regulatory needs, and industry frameworks.",
          },
          {
            title: "Secure Design & Implementation",
            description: "Integrate customized controls into systems and operations.",
          },
          {
            title: "Cyber Risk Management",
            description:
              "Identify, assess, prioritize, and mitigate threats based on business impact.",
          },
          {
            title: "Transformation Services",
            description:
              "Guide movement toward SASE, Zero Trust, and application-aware security architectures.",
          },
        ],
        layout: "cards",
      },
      {
        title: "Benefits",
        items: [
          { title: "Sustain compliance goals" },
          { title: "Improve security posture" },
          { title: "Reduce risk exposure" },
          { title: "Access specialized expertise" },
        ],
        layout: "list",
      },
    ],
    ctaLabel: "Assess your security posture",
    ctaInterest: "cybersecurity",
  },
  {
    slug: "data-science-engineering",
    path: "/services/data-science-engineering",
    name: "Data Science & Engineering",
    navLabel: "Data Science & Engineering",
    icon: Database,
    group: "Build",
    cardDescription:
      "From fragmented data to trusted intelligence: pipelines, platforms, models, and decision-ready reporting.",
    tags: ["Pipelines", "Warehouses", "ML", "BI"],
    h1: "Turn data into clarity, action, and advantage.",
    intro:
      "Altair helps organizations move from fragmented data to trusted intelligence. We combine data engineering, analytics, machine learning, and visualization to support faster, more confident decisions.",
    metaTitle: "Data Science & Engineering Services | Altair Technologies Inc.",
    metaDescription:
      "Data strategy, batch and real-time pipelines, cloud warehouses, governance, predictive modelling, and executive dashboards that turn raw data into decisions.",
    sections: [
      {
        title: "Capabilities",
        items: [
          { title: "Data strategy and architecture" },
          { title: "Batch and real-time pipelines" },
          { title: "Cloud data lakes and warehouses" },
          { title: "Data quality, governance, and observability" },
          { title: "Predictive modeling and machine learning" },
          { title: "Business intelligence and executive dashboards" },
          { title: "Demand, churn, risk, and behavior analytics" },
        ],
        layout: "list",
      },
      {
        title: "Solution patterns",
        description:
          "Repeatable patterns our teams deliver. Presented as capabilities, not as published client results.",
        items: [
          { title: "Healthcare readmission analytics" },
          { title: "Retail segmentation" },
          { title: "Telecom churn analysis" },
          { title: "Financial KPI dashboards" },
          { title: "Insurance data lakes" },
          { title: "Inventory optimization" },
        ],
        layout: "cards",
      },
    ],
    ctaLabel: "Unlock your data",
    ctaInterest: "data-science-engineering",
  },
  {
    slug: "full-stack-development",
    path: "/services/full-stack-development",
    name: "Full-Stack Development",
    navLabel: "Full-Stack Development",
    icon: Layers,
    group: "Build",
    cardDescription:
      "Polished interfaces and resilient backends built with modern frameworks and dependable delivery practices.",
    tags: ["React & Angular", "APIs", "Microservices", "CI/CD"],
    h1: "Full-stack products built for performance, scale, and speed.",
    intro:
      "From polished user experiences to resilient backend systems, we build web and mobile products using modern frameworks, scalable architecture, and dependable delivery practices.",
    metaTitle: "Full-Stack Development Services | Altair Technologies Inc.",
    metaDescription:
      "Full-stack product engineering: React, Angular and Vue interfaces, Java, .NET and Python backends, secure APIs, microservices, and cloud-native delivery.",
    sections: [
      {
        title: "Capabilities",
        items: [
          { title: "Responsive React, Angular, and Vue interfaces" },
          { title: "Java, .NET, and Python backends" },
          { title: "Secure REST/GraphQL APIs and role-based access" },
          { title: "PostgreSQL, SQL Server, MongoDB, and NoSQL data layers" },
          { title: "Microservices and event-driven architectures" },
          { title: "Docker, Kubernetes, Kafka, and cloud-native deployment" },
          { title: "Background jobs, queues, and distributed processing" },
          { title: "CI/CD, observability, rollback, and production support" },
        ],
        layout: "list",
      },
    ],
    ctaLabel: "Build your next product",
    ctaInterest: "full-stack-development",
  },
  {
    slug: "it-staffing",
    path: "/services/it-staffing",
    name: "IT Staffing",
    navLabel: "IT Staffing",
    icon: Users,
    group: "Strengthen",
    cardDescription:
      "Flexible technology talent — from niche specialists to complete delivery teams.",
    tags: ["Contract", "Permanent", "Team augmentation"],
    h1: "Technology talent ready to contribute from day one.",
    intro:
      "Altair provides flexible, high-performance IT staffing — from niche specialists to complete development teams. We match organizations with talent that can integrate quickly and deliver meaningful results.",
    metaTitle: "IT Staffing Services | Altair Technologies Inc.",
    metaDescription:
      "Contract, permanent, remote and hybrid IT staffing plus team augmentation and project-based delivery teams across engineering, cloud, data, AI, and security.",
    sections: [
      {
        title: "Staffing models",
        items: [
          { title: "Contract staffing" },
          { title: "Permanent placement" },
          { title: "Remote and hybrid staffing" },
          { title: "Team augmentation" },
          { title: "Project-based delivery teams" },
        ],
        layout: "cards",
      },
      {
        title: "Talent areas",
        items: [
          { title: "Java" },
          { title: "Python" },
          { title: ".NET" },
          { title: "Full-stack engineering" },
          { title: "Cloud and DevOps" },
          { title: "Data science and engineering" },
          { title: "AI/ML" },
          { title: "Cybersecurity" },
          { title: "QA and automation" },
        ],
        layout: "list",
      },
      {
        title: "Our process",
        items: [
          { title: "Define Need" },
          { title: "Curate Talent" },
          { title: "Technical & Fit Screening" },
          { title: "Client Interview" },
          { title: "Onboard" },
          { title: "Ongoing Support" },
        ],
        layout: "steps",
      },
    ],
    ctaLabel: "Request technology talent",
    ctaInterest: "it-staffing",
  },
  {
    slug: "technology-consulting",
    path: "/services/technology-consulting",
    name: "Technology Consulting",
    navLabel: "Technology Consulting",
    icon: Braces,
    group: "Strengthen",
    cardDescription:
      "Strategy connected to execution — roadmaps, modernization, and architecture we help you build.",
    tags: ["Roadmapping", "Modernization", "Cloud & DevOps"],
    h1: "Technology consulting that moves from strategy to execution.",
    intro:
      "We connect business priorities with practical technology decisions. Our consultants work alongside your teams to modernize systems, solve complex challenges, and build scalable foundations for growth.",
    metaTitle: "Technology Consulting Services | Altair Technologies Inc.",
    metaDescription:
      "Technology roadmapping, digital transformation, legacy modernization, architecture consulting, AI and data strategy, security advisory, and cloud DevOps guidance.",
    sections: [
      {
        title: "Consulting services",
        items: [
          { title: "Technology roadmapping" },
          { title: "Digital transformation and legacy modernization" },
          { title: "Full-stack architecture and solution consulting" },
          { title: "AI and data strategy" },
          { title: "Cybersecurity advisory" },
          { title: "Cloud and DevOps consulting" },
        ],
        layout: "cards",
      },
    ],
    ctaLabel: "Start a transformation conversation",
    ctaInterest: "technology-consulting",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;

export const engagementOptions = [
  {
    title: "Project Delivery",
    description: "A scoped outcome delivered end to end by an Altair team.",
  },
  {
    title: "Team Augmentation",
    description: "Specialists embedded into your existing delivery teams.",
  },
  {
    title: "Advisory & Roadmapping",
    description: "Senior guidance on architecture, data, AI, and security decisions.",
  },
  {
    title: "Training & Enablement",
    description: "Practical upskilling through Altair Skills Lab.",
  },
];
