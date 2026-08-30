import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, ContactBand, FeatureCard, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Altair Skills Lab | Altair Technologies Inc.";
const description =
  "Altair Skills Lab connects practical training for professionals with an internal innovation lab that prototypes AI, security, data, and software ideas.";

export const Route = createFileRoute("/skills-lab/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/skills-lab" },
    ],
    links: [{ rel: "canonical", href: "/skills-lab" }],
  }),
  component: SkillsLabPage,
});

const audiences = [
  { title: "Working professionals", description: "Engineers and analysts adding depth in Java, SQL, AI, or full-stack delivery." },
  { title: "Aspiring engineers", description: "People moving into technology who need real projects, not only theory." },
  { title: "Teams", description: "Organizations that want practical enablement alongside a delivery programme." },
];

function SkillsLabPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Skills Lab" }]} />
      <PageHero
        eyebrow="Skills Lab"
        title="Build the skills. Build the future."
        body="Altair Skills Lab connects knowledge with real-world engineering. We help professionals grow through practical training while giving engineers space to prototype solutions in AI, cybersecurity, data, and modern software development."
      />

      <section className="container-page section-y">
        <SectionHeading eyebrow="Two pathways" title="Learning and experimentation, side by side." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <FeatureCard
              title="Training Programs"
              description="Structured, project-driven learning for working professionals and aspiring engineers."
              to="/skills-lab/training"
            />
          </Reveal>
          <Reveal delay={80}>
            <FeatureCard
              title="Innovation Lab"
              description="Internal prototypes that test emerging technologies against real business problems."
              to="/innovation-lab"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading eyebrow="Who it is for" title="Practical growth for people who build." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <FeatureCard title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Interested in Skills Lab?"
        description="Tell us what you want to learn or prototype and we will follow up with the details."
        ctaLabel="Register your interest"
        interest="training"
      />
    </>
  );
}
