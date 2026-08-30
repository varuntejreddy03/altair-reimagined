import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, ContactBand, Cta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies } from "@/content/site";

const title = "Case Studies | Altair Technologies Inc.";
const description =
  "How strategy, engineering, and talent come together at Altair. Detailed engagement write-ups are published only once clients approve the content.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      <PageHero
        eyebrow="Proof"
        title="From complex challenge to measurable change."
        body="Explore how strategy, engineering, and talent come together to solve meaningful business problems."
      />

      <section className="container-page section-y">
        <SectionHeading
          title="Engagements currently in review"
          description="We publish a case study only after the client approves the challenge, approach, and results. Request details and we will share what has been cleared."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 70}>
              <article className="accent-card flex h-full flex-col rounded-2xl border border-line bg-card p-6 sm:p-7">
                <span className="w-fit rounded-full border border-line bg-ice px-3 py-1 text-xs font-semibold text-brand">
                  Case study in review
                </span>
                <h3 className="h-card mt-5 text-foreground">{study.name}</h3>
                <p className="mt-3 text-sm text-ink">
                  Challenge, approach, and outcomes are pending client approval.
                </p>
                <div className="mt-6">
                  <Cta to="/contact" search={{ interest: "other", project: study.slug }} variant="outline">
                    Request details
                  </Cta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand
        title="Want to talk through a comparable project?"
        description="We can walk you through relevant experience in a conversation while written case studies are being approved."
        ctaLabel="Discuss a similar challenge"
      />
    </>
  );
}
