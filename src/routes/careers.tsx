import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  ContactBand,
  FeatureCard,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { TalentNetworkForm } from "@/components/site/forms/TalentNetworkForm";

const title = "Careers | Altair Technologies Inc.";
const description =
  "Join Altair Technologies Inc. Explore the areas of work we hire for and join our talent network for engineering, data, security, cloud, and consulting roles.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/careers" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const whyAltair = [
  {
    title: "Continuous learning",
    description: "Access to Skills Lab and time to build depth in your craft.",
  },
  {
    title: "Meaningful projects",
    description: "Work that ships and gets used, across industries and technologies.",
  },
  {
    title: "Collaborative culture",
    description: "Small teams, direct communication, and shared ownership.",
  },
  {
    title: "Technical growth",
    description: "Mentorship and exposure to architecture, data, AI, and security work.",
  },
];

const areas = [
  "Software engineering",
  "AI and data",
  "Cybersecurity",
  "Cloud and DevOps",
  "Technology consulting",
  "Talent operations",
];

function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <PageHero
        eyebrow="Careers"
        title="Build meaningful technology with people who care."
        body="We are interested in engineers, consultants, and problem-solvers who combine technical curiosity with responsibility, collaboration, and a drive to create real outcomes."
      />

      <section className="container-page section-y">
        <SectionHeading eyebrow="Why Altair" title="What working here looks like." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyAltair.map((item, index) => (
            <Reveal key={item.title} delay={index * 55}>
              <FeatureCard title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading eyebrow="Areas of interest" title="Where our teams grow." />
          <ul className="mt-10 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink"
              >
                {area}
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-line bg-card p-7">
              <h3 className="h-card text-foreground">Current openings</h3>
              <p className="mt-3 text-ink">No public openings at the moment.</p>
              <p className="mt-2 text-sm text-ink-muted">
                Join the talent network below and we will reach out when a matching role opens.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Talent network"
          title="Introduce yourself."
          description="Share your background and area of interest. Resume uploads are not accepted until secure storage is approved — link a portfolio or profile instead."
        />
        <div className="mt-10 max-w-3xl">
          <TalentNetworkForm />
        </div>
      </section>

      <ContactBand
        title="Questions about working at Altair?"
        description="Reach out and we will point you to the right person."
        ctaLabel="Contact us"
        interest="careers"
      />
    </>
  );
}
