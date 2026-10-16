import { createFileRoute } from "@tanstack/react-router";
import { Building2, Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/forms/ContactForm";
import { company, interestOptions } from "@/content/site";

const title = "Contact Us | Altair Technologies Inc.";
const description =
  "Connect with Altair Technologies Inc. Have questions about software delivery, AI consulting, cybersecurity, cloud architecture, or IT talent? Reach our leadership team directly.";

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
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
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
        eyebrow="Get in Touch"
        title="Tell us what you are building."
        body="Whether you need a dedicated software engineering squad, specialized IT consulting, or end-to-end talent augmentation, connect with our leadership team today."
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
                Direct Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Reach us directly.
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                We respond promptly to all business, partnership, and engineering inquiries.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={company.phoneHref}
                data-analytics="phone_click"
                className="hmh-tile flex items-start gap-4 p-5 bg-white border border-slate-200/80 hover:border-blue-300 transition-all group"
              >
                <div className="size-11 rounded-xl bg-blue-50 text-[#003EA0] flex items-center justify-center shrink-0 group-hover:bg-[#003EA0] group-hover:text-white transition-colors">
                  <Phone aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Phone Line
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#003EA0] transition-colors mt-0.5">
                    {company.phone}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Monday – Friday • 9:00 AM – 6:00 PM EST</div>
                </div>
              </a>

              <a
                href={company.emailHref}
                data-analytics="email_click"
                className="hmh-tile flex items-start gap-4 p-5 bg-white border border-slate-200/80 hover:border-blue-300 transition-all group"
              >
                <div className="size-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-[#003EA0] group-hover:text-white transition-colors">
                  <Mail aria-hidden="true" className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Executive Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003EA0] transition-colors break-all mt-0.5">
                    {company.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Direct routing to practice directors</div>
                </div>
              </a>

              <div className="hmh-tile flex items-start gap-4 p-5 bg-white border border-slate-200/80">
                <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin aria-hidden="true" className="size-5 text-[#003EA0]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Headquarters
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{company.name}</div>
                  <address className="text-xs text-slate-600 not-italic leading-relaxed mt-1">
                    {company.address}
                  </address>
                </div>
              </div>
            </div>

            {/* Response Commitment Badge */}
            <div className="bg-[#003EA0] text-white p-5 rounded-2xl shadow-lg border border-white/15 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldCheck className="size-4 text-cyan-300" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              <p className="text-xs text-white/85 leading-relaxed">
                Inquiries are reviewed by practice leaders within 24 business hours under strict confidentiality.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="card-ref p-6 sm:p-10 bg-white shadow-xl border border-slate-200/80 rounded-3xl">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below and an Altair consulting lead will get in touch.
                  </p>
                </div>

                {project ? (
                  <div className="mb-6 rounded-xl border border-sky-200 bg-sky-50/70 p-3.5 text-xs text-sky-900 flex items-center gap-2">
                    <Sparkles className="size-4 text-sky-600 shrink-0" />
                    <span>Inquiring about engagement: <strong>{project}</strong></span>
                  </div>
                ) : null}

                <ContactForm {...(validInterest ? { defaultInterest: validInterest } : {})} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
