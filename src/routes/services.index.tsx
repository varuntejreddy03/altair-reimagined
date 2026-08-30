import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  ContactBand,
  FeatureCard,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { engagementOptions, services } from "@/content/services";

const title = "Services | Altair Technologies Inc.";
const description =
  "Software development, AI, cybersecurity, data engineering, full-stack delivery, IT staffing, and technology consulting from one accountable partner.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const groups = [
    { name: "Build", items: services.filter((s) => s.group === "Build") },
    { name: "Strengthen", items: services.filter((s) => s.group === "Strengthen") },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Capabilities"
        title="Capabilities that move businesses forward."
        body="From strategy and talent to production-ready systems, Altair brings together the capabilities organizations need to modernize, scale, and innovate."
      />

      {groups.map((group, groupIndex) => (
        <section key={group.name} className={groupIndex % 2 === 1 ? "bg-surface" : undefined}>
          <div className="container-page section-y">
            <SectionHeading
              eyebrow={group.name}
              title={
                group.name === "Build"
                  ? "Build the systems your business depends on."
                  : "Strengthen the teams and decisions behind them."
              }
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((service, index) => (
                <Reveal key={service.slug} delay={index * 55}>
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
          </div>
        </section>
      ))}

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Engagement options"
          title="Work with us the way your programme needs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 55}>
              <FeatureCard title={option.title} description={option.description} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBand
        title="Not sure which capability you need?"
        description="Describe the challenge and we will point you to the right team — engineering, talent, or advisory."
      />
    </>
  );
}
