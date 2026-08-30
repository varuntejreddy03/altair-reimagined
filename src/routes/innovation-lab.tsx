import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, ContactBand, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Innovation Lab | Altair Technologies Inc.";
const description =
  "Inside Altair's Innovation Lab: internal prototypes exploring GenAI assistants, phishing detection, smart infrastructure alerting, and automated code review.";

export const Route = createFileRoute("/innovation-lab")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/innovation-lab" },
    ],
    links: [{ rel: "canonical", href: "/innovation-lab" }],
  }),
  component: InnovationLabPage,
});

const prototypes = [
  {
    title: "GenAI Knowledge Assistant",
    description:
      "Retrieval of documentation, FAQs, and code snippets for onboarding and internal support.",
  },
  {
    title: "Phishing Detection Engine",
    description: "NLP and anomaly detection for suspicious email identification.",
  },
  {
    title: "Infrastructure Smart Alerting",
    description: "Event classification and noise reduction for operational alerts.",
  },
  {
    title: "Automated Code Review",
    description:
      "Detection of logic issues, style violations, and potential security gaps in pull requests.",
  },
];

function InnovationLabPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Innovation Lab" }]} />
      <PageHero
        eyebrow="Company"
        title="Where ideas become working possibilities."
        body="Altair's Innovation Lab gives engineers and researchers space to design, prototype, and validate practical applications of emerging technology. These projects explore real problems and help turn promising ideas into usable systems."
      />

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Current themes"
          title="Prototypes under active exploration."
          description="Each item below is internal research and development. None are published as production products or client deliverables."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {prototypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="accent-card h-full rounded-2xl border border-line bg-card p-6 sm:p-7">
                <span className="w-fit rounded-full border border-line bg-ice px-3 py-1 text-xs font-semibold text-brand">
                  Prototype / Internal R&amp;D
                </span>
                <h3 className="h-card mt-5 text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-ink sm:text-base">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand
        title="Explore an innovation partnership."
        description="If one of these themes maps to a problem in your organization, let's compare notes."
        ctaLabel="Explore an innovation partnership"
        interest="innovation-partnership"
      />
    </>
  );
}
