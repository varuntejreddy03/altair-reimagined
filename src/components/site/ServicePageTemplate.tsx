import { Breadcrumbs, ContactBand, FeatureCard, PageHero, SectionHeading } from "./Primitives";
import { ProcessTimeline } from "./ProcessTimeline";
import { Reveal } from "./Reveal";
import type { Service, ServiceSection } from "@/content/services";

function SectionBody({ section }: { section: ServiceSection }) {
  if (section.layout === "steps") {
    return <ProcessTimeline steps={section.items} />;
  }

  if (section.layout === "list") {
    return (
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {section.items.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 40}>
            <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-card px-5 py-4">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-accent"
              />
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                {item.description ? (
                  <p className="mt-1 text-sm text-ink">{item.description}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {section.items.map((item, index) => (
        <Reveal key={item.title} delay={index * 55}>
          <FeatureCard
            title={item.title}
            {...(item.description ? { description: item.description } : {})}
          />
        </Reveal>
      ))}
    </div>
  );
}

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.name }]} />
      <PageHero
        eyebrow={service.group === "Build" ? "Build" : "Strengthen"}
        title={service.h1}
        body={service.intro}
      />

      {service.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 1 ? "bg-surface" : undefined}>
          <div className="container-page section-y">
            <SectionHeading
              title={section.title}
              {...(section.description ? { description: section.description } : {})}
            />
            <SectionBody section={section} />
          </div>
        </section>
      ))}

      <ContactBand
        title={service.ctaLabel + "."}
        description={`Tell us about your ${service.name.toLowerCase()} goals and we will connect you with the right Altair specialists.`}
        ctaLabel={service.ctaLabel}
        interest={service.ctaInterest}
      />
    </>
  );
}

export function serviceHead(service: Service) {
  return {
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: service.path },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: service.path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
            { "@type": "ListItem", position: 3, name: service.name, item: service.path },
          ],
        }),
      },
    ],
  };
}
