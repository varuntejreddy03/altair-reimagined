import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/forms/ContactForm";
import { company, interestOptions } from "@/content/site";

const title = "Contact | Altair Technologies Inc.";
const description =
  "Talk to Altair Technologies Inc. about software delivery, AI, cybersecurity, data, IT staffing, consulting, or training. Call, email, or send us the details.";

type ContactSearch = { interest?: string; project?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    ...(typeof search["interest"] === "string" ? { interest: search["interest"] } : {}),
    ...(typeof search["project"] === "string" ? { project: search["project"] } : {}),
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest, project } = Route.useSearch();
  const validInterest = interestOptions.some((option) => option.value === interest)
    ? interest
    : undefined;

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        body="Whether you need a software partner, specialized technology talent, consulting guidance, or practical training, share the challenge and we'll route it to the right team."
      />

      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="h-card text-foreground">Reach us directly</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={company.phoneHref}
                  data-analytics="phone_click"
                  className="accent-card flex items-start gap-4 rounded-2xl border border-line bg-card p-5"
                >
                  <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-sm font-semibold text-foreground">Call</span>
                    <span className="text-sm text-ink">{company.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  data-analytics="email_click"
                  className="accent-card flex items-start gap-4 rounded-2xl border border-line bg-card p-5"
                >
                  <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Email</span>
                    <span className="block break-all text-sm text-ink">{company.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-line bg-card p-5">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Visit</span>
                  <address className="text-sm not-italic text-ink">{company.address}</address>
                </span>
              </li>
            </ul>
          </div>

          <Reveal>
            <h2 className="h-card text-foreground">Send us the details</h2>
            {project ? (
              <p className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm text-ink">
                Requesting details about: <strong className="text-foreground">{project}</strong>
              </p>
            ) : null}
            <div className="mt-6">
              <ContactForm {...(validInterest ? { defaultInterest: validInterest } : {})} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
