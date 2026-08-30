import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-engineering-team.jpg";
import { TrajectoryField } from "@/components/site/TrajectoryField";
import { Reveal } from "@/components/site/Reveal";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CallCta, Cta, FeatureCard, SectionHeading } from "@/components/site/Primitives";
import { caseStudies, company, industries } from "@/content/site";
import { services } from "@/content/services";

const title = "Altair Technologies Inc. | Software, IT Staffing & Consulting";
const description =
  "Altair Technologies Inc. builds secure software, delivers IT staffing and consulting, and develops technology talent across AI, cybersecurity, data, and full-stack engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const capabilityRail = [
  "Artificial Intelligence & LLMs",
  "Zero-Trust Cybersecurity",
  "Distributed Data Engineering",
  "Cloud & Full-Stack Systems",
  "Specialized IT Staffing",
  "Altair Skills Lab",
];

const principles = [
  {
    title: "Client-first",
    description:
      "Deep collaboration, clear decisions, and delivery directly tied to measurable business goals.",
  },
  {
    title: "Built to scale",
    description:
      "Secure, maintainable architectures and resilient teams designed for long-term operational growth.",
  },
  {
    title: "Always advancing",
    description:
      "Continuous learning, hands-on lab experiments, and practical adoption of emerging technologies.",
  },
];

const serviceGroups = [
  {
    title: "Software Development & Innovation",
    description:
      "Custom AI applications, cybersecurity defense, distributed data platforms, and high-performance full-stack products.",
    to: "/services/software-development",
    icon: Layers,
  },
  {
    title: "IT Staffing & Consulting",
    description:
      "Flexible talent augmentation models, dedicated engineering pods, and executive technology strategy.",
    to: "/services/it-staffing",
    icon: Users,
  },
  {
    title: "Altair Skills Lab",
    description:
      "Intensive project-driven training, enterprise upskilling, and our internal innovation incubator.",
    to: "/skills-lab",
    icon: Sparkles,
  },
];

const featured = [
  services.find((s) => s.slug === "artificial-intelligence")!,
  services.find((s) => s.slug === "cybersecurity")!,
  services.find((s) => s.slug === "data-science-engineering")!,
  services.find((s) => s.slug === "full-stack-development")!,
];

const techCategories = [
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    description: "Resilient infrastructure and automated deployment pipelines.",
    techs: [
      { name: "AWS & Azure", detail: "Multi-cloud architecture & cost optimization" },
      { name: "Kubernetes & Docker", detail: "Container orchestration & microservices" },
      { name: "Terraform & IaC", detail: "Automated, reproducible infrastructure" },
      { name: "CI/CD Automation", detail: "GitHub Actions, GitLab & ArgoCD" },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Production-grade models, pipelines, and intelligent workflows.",
    techs: [
      { name: "LLMs & RAG Architectures", detail: "Grounded enterprise retrieval systems" },
      { name: "PyTorch & TensorFlow", detail: "Custom model training & fine-tuning" },
      { name: "Vector Databases", detail: "Pinecone, Qdrant & pgvector storage" },
      { name: "Agentic Workflows", detail: "Autonomous tool use & task automation" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    icon: Terminal,
    description: "High-throughput APIs, services, and distributed microservices.",
    techs: [
      { name: "Go & Node.js / TypeScript", detail: "Fast, concurrent backend services" },
      { name: "Python & Java / Spring", detail: "Enterprise data processing & services" },
      { name: "GraphQL & REST APIs", detail: "Typed, contract-driven interfaces" },
      { name: "Event Streaming", detail: "Apache Kafka, RabbitMQ & Redis" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: Database,
    description: "Modern data warehousing, transformation, and analytics.",
    techs: [
      { name: "PostgreSQL & NoSQL", detail: "ACID compliance & flexible document stores" },
      { name: "Snowflake & BigQuery", detail: "Petabyte-scale analytics & warehousing" },
      { name: "dbt & Apache Spark", detail: "Structured data modeling & batch pipelines" },
      { name: "Real-time Dashboards", detail: "Streaming business intelligence" },
    ],
  },
  {
    id: "security",
    label: "Security & Governance",
    icon: Lock,
    description: "Zero-trust verification, encryption, and regulatory compliance.",
    techs: [
      { name: "Zero Trust Architecture", detail: "Continuous authentication & least privilege" },
      { name: "SOC 2 & HIPAA Guardrails", detail: "Enterprise compliance alignment" },
      { name: "SAST / DAST Scanning", detail: "Automated code vulnerability checks" },
      { name: "Identity & IAM", detail: "OAuth2, OpenID Connect & SAML SSO" },
    ],
  },
];

const engagementModels = [
  {
    icon: Users,
    title: "Dedicated Engineering Pods",
    tagline: "Autonomous squads embedded directly in your sprints",
    description:
      "A complete, cross-functional team (Tech Lead, Senior Engineers, QA) focused on driving product roadmap velocity with minimal management overhead.",
    fit: "Fast-growing software products and multi-quarter initiatives",
    deliverables: [
      "Full sprint integration",
      "Direct Git repo collaboration",
      "Weekly velocity reporting",
    ],
  },
  {
    icon: Briefcase,
    title: "Talent Augmentation & IT Staffing",
    tagline: "Pre-vetted senior engineers ready to deploy in days",
    description:
      "Bridge critical skill gaps with hand-selected senior engineers thoroughly vetted through our internal technical assessment framework and Skills Lab.",
    fit: "Targeted skill gaps, sudden workload spikes, and specialized roles",
    deliverables: [
      "Thorough technical screening",
      "Flexible contract or contract-to-hire",
      "Ongoing performance management",
    ],
  },
  {
    icon: Rocket,
    title: "Turnkey Project Delivery",
    tagline: "Fixed-scope, milestone-driven execution from start to finish",
    description:
      "From discovery and architectural blueprinting to production release and warranty support, Altair owns end-to-end delivery against agreed milestones.",
    fit: "New system builds, legacy platform migrations, and MVP launches",
    deliverables: [
      "Architectural specifications",
      "Milestone-based delivery gates",
      "Full documentation and IP transfer",
    ],
  },
  {
    icon: Code2,
    title: "Strategic Consulting & Advisory",
    tagline: "High-level architecture, cloud audits, and security strategy",
    description:
      "Objective evaluations of your software architecture, cloud expenditures, security posture, or AI adoption feasibility by experienced principals.",
    fit: "CTOs and leadership evaluating major modernization or security decisions",
    deliverables: [
      "Comprehensive audit reports",
      "Actionable remediation roadmaps",
      "Executive presentation deck",
    ],
  },
];

const skillsLabHighlights = [
  {
    title: "Hands-on Architecture Simulations",
    description:
      "Engineers build production-grade microservices and distributed systems under real failure scenarios.",
  },
  {
    title: "Zero-Trust Security & Compliance",
    description:
      "Every engineer is trained on OWASP Top 10, secure coding standards, and compliance-first practices.",
  },
  {
    title: "Modern AI & Machine Learning Tracks",
    description:
      "Practical engineering with LLMs, vector search, RAG pipelines, and automated agent evaluation.",
  },
  {
    title: "Continuous Peer Code Reviews",
    description:
      "Senior engineering leads provide rigorous review cycles, instilling high quality benchmarks.",
  },
];

function HomePage() {
  const [activeTechCategory, setActiveTechCategory] = useState("cloud");
  const selectedTech = techCategories.find((c) => c.id === activeTechCategory) || techCategories[0];

  return (
    <>
      {/* Hero */}
      <section className="on-navy relative -mt-16 overflow-hidden pt-16 sm:-mt-20 sm:pt-20">
        <div aria-hidden="true" className="grid-field absolute inset-0 opacity-45" />
        <TrajectoryField />
        <div className="container-page relative section-y">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="eyebrow-invert">Software · Talent · Innovation</p>
              <h1 className="h-display mt-5 text-ice">Engineering what&rsquo;s next.</h1>
              <p className="measure mt-6 text-base text-cyan-soft/85 sm:text-lg">
                {company.name} builds secure software, connects businesses with high-impact
                technology talent, and develops future-ready engineers.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Cta to="/contact">Start a Conversation</Cta>
                <Cta to="/services" variant="ghost-invert">
                  Explore Our Capabilities
                </Cta>
              </div>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-soft/70">
                {["Build", "Scale", "Advance"].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-accent" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150} variant="scale" className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-navy-800 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Altair engineers reviewing system architecture together in the office"
                  width={1600}
                  height={1008}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-navy-950/30" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capability rail */}
      <section className="border-y border-line bg-surface">
        <div className="container-page py-6">
          <h2 className="sr-only">Core capabilities</h2>
          <Reveal>
            <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm font-medium text-ink-muted">
              {capabilityRail.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Who we are"
          title="Technology expertise built around real outcomes."
          description={`${company.name} is a U.S.-based software development, IT staffing, consulting, and training company. We combine engineering depth with business understanding to build scalable technology, strengthen teams, and turn ambitious ideas into practical systems.`}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 90}>
              <FeatureCard title={principle.title} description={principle.description} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service groups */}
      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="What we do"
            title="One partner across technology and talent."
            description="Three connected practices that cover building software, strengthening teams, and growing capability."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 90}>
                <FeatureCard
                  icon={group.icon}
                  title={group.title}
                  description={group.description}
                  to={group.to}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured capabilities */}
      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineering depth where it matters most."
          description="Every capability list is visible without hover, on any device."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <FeatureCard
                icon={service.icon}
                title={service.name}
                description={service.cardDescription}
                tags={service.tags}
                to={service.path}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Technology Ecosystem Matrix */}
      <section className="bg-surface border-y border-line">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Technology Matrix"
            title="Modern tools, proven architectures."
            description="We build with modern frameworks, battle-tested cloud platforms, and enterprise data backbones designed for reliability and scale."
          />

          <div className="mt-10">
            {/* Tab navigation */}
            <Reveal>
              <div className="flex flex-wrap gap-2 rounded-2xl border border-line bg-card p-2 shadow-xs">
                {techCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeTechCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveTechCategory(cat.id)}
                      className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-navy-950 text-ice shadow-xs"
                          : "text-ink hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <Icon
                        className={`size-4 ${isActive ? "text-cyan-accent" : "text-ink-muted"}`}
                      />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Selected category content */}
            <Reveal delay={100} key={selectedTech.id} className="mt-6">
              <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="h-card text-foreground">{selectedTech.label}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{selectedTech.description}</p>
                  </div>
                  <Cta
                    to="/services/software-development"
                    variant="outline"
                    className="w-fit text-xs"
                  >
                    View full tech stack
                  </Cta>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {selectedTech.techs.map((item, i) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-line bg-surface p-4 transition-all duration-200 hover:border-brand"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-brand shrink-0" />
                        <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                      </div>
                      <p className="mt-2 text-xs text-ink">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Flexible Engagement Models */}
      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Structured for your speed and scope."
          description="Whether you need an entire autonomous engineering pod or specific high-caliber specialists, we align with your operational model."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <Reveal key={model.title} delay={index * 90}>
                <div className="accent-card flex h-full flex-col rounded-3xl border border-line bg-card p-7 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-ice text-brand shrink-0">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="h-card text-foreground">{model.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-brand">{model.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-ink sm:text-base">{model.description}</p>

                  <div className="mt-6 rounded-2xl border border-line bg-surface p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                      Ideal For
                    </p>
                    <p className="mt-1 text-xs text-foreground font-medium">{model.fit}</p>
                  </div>

                  <div className="mt-6 border-t border-line pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                      Key Highlights
                    </p>
                    <ul className="space-y-2">
                      {model.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-ink font-medium"
                        >
                          <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-2">
                    <Cta
                      to="/contact"
                      search={{ interest: "consulting" }}
                      variant="outline"
                      className="w-full"
                    >
                      Discuss This Model
                    </Cta>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* NEW SECTION: Skills Lab & Talent Accelerator */}
      <section className="on-navy relative overflow-hidden">
        <div aria-hidden="true" className="grid-field absolute inset-0 opacity-25" />
        <div className="container-page relative section-y">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="eyebrow-invert">Altair Skills Lab</p>
              <h2 className="h-section mt-4 text-ice">
                Bridging talent ambition with enterprise reality.
              </h2>
              <p className="measure mt-5 text-base sm:text-lg text-cyan-soft/85">
                We believe engineering excellence is trained, not assumed. Through the Altair Skills
                Lab, our engineers build complex simulated systems, master security compliance, and
                solve edge cases before stepping onto client initiatives.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {skillsLabHighlights.map((item, idx) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-navy-800 bg-navy-900/80 p-4"
                  >
                    <h3 className="text-sm font-bold text-ice">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-cyan-soft/75">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Cta to="/skills-lab">Explore the Skills Lab</Cta>
                <Cta to="/skills-lab/training" variant="ghost-invert">
                  View Training Programs
                </Cta>
              </div>
            </Reveal>

            <Reveal delay={120} variant="scale">
              <div className="rounded-3xl border border-navy-800 bg-navy-900 p-7 sm:p-9 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
                  <GraduationCap className="size-6 text-cyan-accent" />
                  <div>
                    <h3 className="text-base font-bold text-ice">Talent Readiness Standards</h3>
                    <p className="text-xs text-cyan-soft/70">
                      Continuous verification & skill testing
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: "Architecture & Microservices",
                      progress: "100% Practical Labs",
                      score: "Tier 1",
                    },
                    {
                      label: "Zero-Trust & Secure Coding",
                      progress: "OWASP Top 10 Certified",
                      score: "Strict",
                    },
                    {
                      label: "Cloud & Distributed Systems",
                      progress: "AWS & Kubernetes Ready",
                      score: "Verified",
                    },
                    {
                      label: "Modern AI & LLM Systems",
                      progress: "RAG & Agent Pipelines",
                      score: "Advanced",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="rounded-xl border border-navy-800 bg-navy-950 p-3.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-ice">{row.label}</span>
                        <span className="rounded-full bg-cyan-accent/15 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-accent">
                          {row.score}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-cyan-soft/75">{row.progress}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-cyan-accent/20 bg-cyan-accent/5 p-4 text-center">
                  <p className="text-xs text-cyan-soft">
                    All staffing candidates undergo rigorous technical vetting by senior architects
                    prior to client presentation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface border-y border-line">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Industries"
            title="Technology shaped around your industry."
            description="Context matters as much as code. We bring patterns that fit the way your sector actually works."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 70}>
                <Link
                  to="/industries"
                  hash={industry.slug}
                  className="accent-card group flex h-full flex-col rounded-2xl border border-line bg-card p-6"
                >
                  <h3 className="h-card text-foreground">{industry.name}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{industry.challenge}</p>
                  <p className="mt-4 text-sm text-ink">{industry.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    See how we help
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Delivery model"
          title="A delivery rhythm teams can rely on."
          description="Five stages that keep decisions clear from first conversation to production scale."
        />
        <ProcessTimeline />
      </section>

      {/* Case studies */}
      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Proof"
            title="Client work in review."
            description="Detailed case studies are being prepared with our clients. Until they are approved for publication, we share the engagement names only."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6">
                  <span className="w-fit rounded-full border border-line bg-ice px-3 py-1 text-xs font-semibold text-brand">
                    Case study in review
                  </span>
                  <h3 className="h-card mt-5 text-foreground">{study.name}</h3>
                  <p className="mt-3 text-sm text-ink">
                    Details are pending client approval and will be published once confirmed.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Reveal delay={120}>
              <Cta to="/contact" search={{ interest: "other" }}>
                Discuss a similar challenge
              </Cta>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="on-navy relative overflow-hidden">
        <div aria-hidden="true" className="grid-field absolute inset-0 opacity-30" />
        <div className="container-page relative section-y">
          <Reveal>
            <h2 className="h-section max-w-3xl text-ice">
              Have a technology or talent challenge? Let&rsquo;s solve it.
            </h2>
            <p className="measure mt-4 text-base text-cyan-soft/85 sm:text-lg">
              Talk directly with our technical team to discuss project requirements, team
              augmentation, or advisory needs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Cta to="/contact">Start a Conversation</Cta>
              <CallCta variant="ghost-invert" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
