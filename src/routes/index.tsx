import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Database, Layers, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-engineering-team.jpg";
import { TrajectoryField } from "@/components/site/TrajectoryField";
import { Reveal } from "@/components/site/Reveal";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CallCta, Cta, FeatureCard, SectionHeading } from "@/components/site/Primitives";
import { caseStudies, company, industries } from "@/content/site";
import { services } from "@/content/services";

const title = "Altair Technologies Inc. | Software, IT Staffing & Consulting";
const description =
  "Altair Technologies Inc. builds software, delivers IT staffing and consulting, and develops technology talent across AI, cybersecurity, data, and full-stack engineering.";

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
  "Artificial Intelligence",
  "Cybersecurity",
  "Data Engineering",
  "Full-Stack Systems",
  "IT Staffing",
  "Skills Lab",
];

const principles = [
  {
    title: "Client-first",
    description: "Deep collaboration, clear decisions, and delivery tied to business goals.",
  },
  {
    title: "Built to scale",
    description: "Secure architectures and teams designed for long-term growth.",
  },
  {
    title: "Always advancing",
    description: "Continuous learning and practical exploration of emerging technology.",
  },
];

const serviceGroups = [
  {
    title: "Software Development & Innovation",
    description: "AI, cybersecurity, data science and engineering, and full-stack products.",
    to: "/services/software-development",
    icon: Layers,
  },
  {
    title: "IT Staffing & Consulting",
    description: "Flexible talent models and hands-on technology strategy.",
    to: "/services/it-staffing",
    icon: Users,
  },
  {
    title: "Altair Skills Lab",
    description: "Project-driven training and an internal innovation lab.",
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

const featuredIcons = { Bot, ShieldCheck, Database, Layers };
void featuredIcons;

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="on-navy relative overflow-hidden">
        <div aria-hidden="true" className="grid-field absolute inset-0 opacity-45" />
        <TrajectoryField />
        <div className="container-page relative section-y">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
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
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-navy-800">
              <img
                src={heroImage}
                alt="Altair engineers reviewing system architecture together in the office"
                width={1600}
                height={1008}
                className="aspect-[16/10] w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-navy-950/35" />
            </div>
          </div>
        </div>
      </section>

      {/* Capability rail */}
      <section className="border-y border-line bg-surface">
        <div className="container-page py-6">
          <h2 className="sr-only">Core capabilities</h2>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-ink-muted">
            {capabilityRail.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-cyan-accent" />
                {item}
              </li>
            ))}
          </ul>
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
            <Reveal key={principle.title} delay={index * 70}>
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
              <Reveal key={group.title} delay={index * 70}>
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
            <Reveal key={service.slug} delay={index * 60}>
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

      {/* Industries */}
      <section className="on-navy">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Industries"
            invert
            title="Technology shaped around your industry."
            description="Context matters as much as code. We bring patterns that fit the way your sector actually works."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 60}>
                <Link
                  to="/industries"
                  hash={industry.slug}
                  className="accent-card group flex h-full flex-col rounded-2xl border border-navy-800 bg-navy-900 p-6"
                >
                  <h3 className="h-card text-ice">{industry.name}</h3>
                  <p className="mt-3 text-sm text-cyan-soft/80">{industry.challenge}</p>
                  <p className="mt-4 text-sm text-cyan-soft">{industry.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-accent">
                    See how we help
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
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
              <Reveal key={study.slug} delay={index * 70}>
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
            <Cta to="/contact" search={{ interest: "other" }}>
              Discuss a similar challenge
            </Cta>
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
