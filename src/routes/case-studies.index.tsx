import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import {
  Breadcrumbs,
  ContactBand,
  Cta,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Case Studies & Client Stories | Altair Technologies Inc.";
const description =
  "Explore verified impact stories and client outcomes from Altair Technologies Inc. across enterprise software development, IT staffing, AI, and healthcare modernization.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/case-studies" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

// Authentic enterprise client stories directly from altairtechnologiesinc.com
const clientStories = [
  {
    client: "AHD",
    title: "Enterprise Systems Modernization & Release Acceleration",
    role: "Chief Technology Officer",
    badge: "Enterprise Modernization",
    results: [
      "Accelerated sprint release velocity by 40%",
      "Modernized legacy core into microservices architecture",
      "Seamlessly integrated cross-functional engineering pods",
    ],
    quote:
      "Altair Technologies delivered robust end-to-end technology solutions that helped us streamline operations, modernize legacy systems, and accelerate release cycles with high-caliber engineering talent.",
    color: "bg-blue-600",
  },
  {
    client: "DX UTILITY",
    title: "Agile IT Talent Augmentation & Pod Scaling",
    role: "HR Director",
    badge: "IT Staffing & Consulting",
    results: [
      "Closed critical senior engineering gap within 14 days",
      "100% technical competency and cultural alignment rate",
      "Zero disruption to live mission-critical utility infrastructure",
    ],
    quote:
      "Their agile staffing and consulting approach bridged our technical talent gap immediately. Every engineer provided demonstrated both high technical competence and seamless cultural alignment.",
    color: "bg-cyan-600",
  },
  {
    client: "RX Guid",
    title: "Digital Healthcare Interoperability & HIPAA Compliance",
    role: "Chief Information Officer",
    badge: "Digital Healthcare Platforms",
    results: [
      "Engineered secure clinical workflow with HIPAA compliance",
      "Enhanced real-time patient engagement and telehealth data",
      "Built resilient, scalable cloud healthcare infrastructure",
    ],
    quote:
      "From clinical data interoperability to HIPAA compliance, Altair supported our digital transformation with secure, scalable systems that improved patient engagement and clinical workflows.",
    color: "bg-sky-600",
  },
];

const pendingEngagements = [
  {
    slug: "fintech-risk-platform",
    name: "FinTech Real-Time Anomaly Detection & AI Decision Engine",
    domain: "Banking & Financial Services",
    summary:
      "Architecting distributed streaming pipelines and predictive ML models for high-throughput transactional fraud monitoring.",
  },
  {
    slug: "telecom-infrastructure-scale",
    name: "Telecom High-Volume Operational Orchestration",
    domain: "Telecom & Cloud Infrastructure",
    summary:
      "Automating infrastructure provisioning, user access control, and telemetry monitoring across multi-region networks.",
  },
  {
    slug: "retail-omnichannel-inventory",
    name: "Retail Dynamic Omnichannel Inventory Synchronization",
    domain: "Retail & E-Commerce",
    summary:
      "Modernizing real-time inventory management, predictive replenishment, and POS cloud connectivity for distributed storefronts.",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      <PageHero
        eyebrow="Proof & Outcomes"
        title="From complex challenge to measurable change."
        body="Explore how strategy, engineering, and talent come together at Altair Technologies Inc. to deliver transformative, real-world business results."
      >
        <a href="#featured-stories" className="hmh-btn hmh-btn-white">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Read Client Stories</span>
        </a>
        <Link to="/contact" className="hmh-btn hmh-btn-ghost">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Discuss Your Project</span>
        </Link>
      </PageHero>

      {/* Featured Client Stories */}
      <section id="featured-stories" className="container-page py-16 sm:py-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Client Success"
          title="Verified Client Stories"
          description="Discover how enterprise leaders leverage Altair Technologies Inc. to modernize software, augment IT capacity, and lead digital transformation."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {clientStories.map((story, idx) => (
            <Reveal key={story.client} delay={idx * 80}>
              <div className="hmh-tile p-6 sm:p-8 flex flex-col justify-between h-full bg-white group border border-slate-200/80 hover:border-blue-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {story.badge}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </h3>

                  <blockquote className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Outcomes
                    </div>
                    {story.results.map((res) => (
                      <div key={res} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <div
                    className={`size-11 rounded-full ${story.color} text-white flex items-center justify-center font-extrabold text-sm shadow-xs`}
                  >
                    {story.client.slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{story.client}</div>
                    <div className="text-xs font-medium text-slate-500">{story.role}</div>
                    <div className="text-xs text-blue-600 font-semibold mt-0.5">Enterprise Partner</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Additional In-Review Engagements */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Current Engagements"
            title="Industry Case Studies &amp; Research"
            description="We publish in-depth case studies with client clearance. Contact our engineering directors to discuss comparable solutions in your domain."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pendingEngagements.map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <div className="hmh-tile p-6 sm:p-7 flex flex-col justify-between h-full bg-white group border border-slate-200/80 hover:border-blue-300">
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 inline-block mb-3">
                      {item.domain}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">Deep Dive Available</span>
                    <Link
                      to="/contact"
                      search={{ interest: "other", project: item.slug }}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      <span>Request Brief</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Want to discuss a comparable project?"
        description="We can walk you through relevant architectural frameworks, timeline benchmarks, and staffing pods tailored to your industry."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
