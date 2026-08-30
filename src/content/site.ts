/**
 * Single source of approved Altair Technologies Inc. content.
 * Anything unverified must stay behind SHOW_UNVERIFIED_PROOF.
 */

export const SHOW_UNVERIFIED_PROOF = false;

/** Set to true only when a validated submission endpoint is connected. */
export const FORMS_CONNECTED = false;

export const company = {
  name: "Altair Technologies Inc.",
  shortName: "Altair",
  tagline: "Software, talent, and innovation built for what's next.",
  phone: "+1 (720) 675-3656",
  phoneHref: "tel:+17206753656",
  email: "admin@altairtechnologiesinc.com",
  emailHref: "mailto:admin@altairtechnologiesinc.com",
  address: "11675 Century Dr, Unit A, Alpharetta, Georgia 30009",
};

export type NavItem = { label: string; to: string };
export type NavGroup = { label: string; to?: string; items: NavItem[] };

export const primaryNav: (NavItem | NavGroup)[] = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    items: [
      { label: "About Us", to: "/about-us" },
      { label: "Industries", to: "/industries" },
      { label: "Innovation Lab", to: "/innovation-lab" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    items: [
      { label: "Software Development", to: "/services/software-development" },
      { label: "Artificial Intelligence", to: "/services/artificial-intelligence" },
      { label: "Cybersecurity", to: "/services/cybersecurity" },
      { label: "Data Science & Engineering", to: "/services/data-science-engineering" },
      { label: "Full-Stack Development", to: "/services/full-stack-development" },
      { label: "IT Staffing", to: "/services/it-staffing" },
      { label: "Technology Consulting", to: "/services/technology-consulting" },
    ],
  },
  {
    label: "Skills Lab",
    to: "/skills-lab",
    items: [
      { label: "Overview", to: "/skills-lab" },
      { label: "Training Programs", to: "/skills-lab/training" },
    ],
  },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const deliverySteps = [
  {
    title: "Discover",
    description: "Clarify goals, constraints, users, data, and risk before a line of code is written.",
  },
  {
    title: "Design",
    description: "Shape architecture, experience, and security decisions into a plan teams can execute.",
  },
  {
    title: "Build",
    description: "Deliver in short, reviewable increments with engineering standards applied throughout.",
  },
  {
    title: "Validate",
    description: "Test functionality, performance, accessibility, and security against agreed outcomes.",
  },
  {
    title: "Scale",
    description: "Release safely, monitor in production, and keep improving as the business grows.",
  },
];

export const industries = [
  {
    slug: "healthcare",
    name: "Healthcare",
    challenge:
      "Fragmented clinical data, manual coordination, and strict privacy expectations slow down patient-facing improvement.",
    summary:
      "Improve patient engagement, clinical workflows, care coordination, and compliance through secure digital health systems.",
    capabilities: [
      "Secure patient and provider portals",
      "Care-coordination and workflow automation",
      "Clinical and operational analytics",
      "Access control, auditability, and privacy-by-design",
    ],
    patterns: [
      "Readmission and utilization analytics as a decision-support pattern",
      "Document intelligence for intake and prior-authorization workloads",
      "Interoperability and integration between clinical systems",
    ],
    services: ["/services/data-science-engineering", "/services/cybersecurity"],
  },
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    challenge:
      "Legacy cores, rising fraud sophistication, and regulatory scrutiny make change expensive and slow.",
    summary:
      "Build secure, scalable platforms for smarter lending, faster transactions, customer experience, and risk management.",
    capabilities: [
      "Modernization of core and customer-facing platforms",
      "Risk, fraud, and anomaly-detection models",
      "Event-driven transaction architectures",
      "Security engineering and control alignment",
    ],
    patterns: [
      "Lending workflow digitization",
      "Real-time transaction monitoring pipelines",
      "Executive risk and performance dashboards",
    ],
    services: ["/services/full-stack-development", "/services/artificial-intelligence"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    challenge:
      "Policy and claims operations depend on manual handoffs and documents that resist automation.",
    summary:
      "Modernize policy and claims operations with automation, digital workflows, data-driven underwriting, and compliant platforms.",
    capabilities: [
      "Claims and policy workflow automation",
      "Document classification and extraction",
      "Underwriting analytics and data products",
      "Auditability and controls",
    ],
    patterns: [
      "Assisted claims triage as a capability pattern",
      "Insurance data lake and reporting foundation",
      "Self-service portals for policyholders and agents",
    ],
    services: ["/services/artificial-intelligence", "/services/technology-consulting"],
  },
  {
    slug: "retail",
    name: "Retail",
    challenge:
      "Inventory, channels, and customer data live in separate systems, so decisions arrive late.",
    summary:
      "Connect inventory, customer journeys, analytics, and omnichannel experiences.",
    capabilities: [
      "Omnichannel commerce experiences",
      "Inventory and demand analytics",
      "Customer segmentation and personalization",
      "Integration between store, web, and fulfilment systems",
    ],
    patterns: [
      "Segmentation and lifecycle analytics",
      "Inventory optimization modelling",
      "Unified product and order data services",
    ],
    services: ["/services/data-science-engineering", "/services/full-stack-development"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    challenge:
      "Operational alert noise and scale pressure make reliability work reactive instead of predictive.",
    summary:
      "Scale infrastructure, improve uptime, automate operations, and strengthen real-time network insight.",
    capabilities: [
      "Streaming and real-time data pipelines",
      "Operational automation and smart alerting",
      "Churn and behaviour analytics",
      "Cloud-native platform engineering",
    ],
    patterns: [
      "Event classification to reduce alert noise",
      "Churn propensity modelling",
      "Network and service observability foundations",
    ],
    services: ["/services/data-science-engineering", "/services/technology-consulting"],
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  published: boolean;
};

/** Detail content is pending client approval; nothing is published. */
export const caseStudies: CaseStudy[] = [
  { slug: "ahd", name: "AHD", published: false },
  { slug: "dx-utility", name: "DX Utility", published: false },
  { slug: "carelon-rx", name: "Carelon Rx", published: false },
];

export const interestOptions = [
  { value: "software-development", label: "Software Development" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "data-science-engineering", label: "Data Science & Engineering" },
  { value: "full-stack-development", label: "Full-Stack Development" },
  { value: "it-staffing", label: "IT Staffing" },
  { value: "technology-consulting", label: "Technology Consulting" },
  { value: "training", label: "Training" },
  { value: "innovation-partnership", label: "Innovation Partnership" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];
