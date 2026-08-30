import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, ContactBand, Cta, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/content/site";
import { services } from "@/content/services";

const title = "Industries | Altair Technologies Inc.";
const description =
  "Healthcare, banking, insurance, retail, and telecom teams work with Altair on secure platforms, data products, automation, and modernization built for their context.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/industries" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries" }]} />
      <PageHero
        eyebrow="Company"
        title="Technology built with industry context."
        body="Sector knowledge shapes the architecture, the data model, and the controls. Here is how we apply Altair capabilities across the industries we serve most."
      />

      <nav aria-label="Industries" className="border-b border-line bg-surface">
        <div className="container-page flex flex-wrap gap-2 py-4">
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={`#${industry.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium text-ink hover:border-brand hover:text-brand"
            >
              {industry.name}
            </a>
          ))}
        </div>
      </nav>

      {industries.map((industry, index) => (
        <section
          key={industry.slug}
          id={industry.slug}
          className={index % 2 === 1 ? "bg-surface scroll-mt-24" : "scroll-mt-24"}
        >
          <div className="container-page section-y">
            <Reveal>
              <h2 className="h-section text-foreground">{industry.name}</h2>
              <p className="measure mt-5 text-ink">{industry.summary}</p>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <Reveal>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="h-card text-foreground">Industry challenges</h3>
                  <p className="mt-3 text-sm text-ink">{industry.challenge}</p>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="h-card text-foreground">Relevant capabilities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink">
                    {industry.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-accent"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="h-card text-foreground">Example solution patterns</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink">
                    {industry.patterns.map((pattern) => (
                      <li key={pattern} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-accent"
                        />
                        {pattern}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink-muted">
                    Patterns describe capabilities we can deliver, not published client outcomes.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Cta to="/contact" search={{ interest: "other" }}>
                Discuss a similar need
              </Cta>
              {industry.services.map((path) => {
                const service = services.find((s) => s.path === path);
                if (!service) return null;
                return (
                  <Link
                    key={path}
                    to={service.path}
                    className="link-underline text-sm font-semibold text-brand"
                  >
                    {service.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <ContactBand
        title="Bring us your industry problem."
        description="We will map it to the capabilities, data, and controls it actually needs."
      />
    </>
  );
}
