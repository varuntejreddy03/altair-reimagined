import { createFileRoute } from "@tanstack/react-router";
import aboutImage from "@/assets/about-workshop.jpg";
import {
  Breadcrumbs,
  ContactBand,
  FeatureCard,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/content/site";

const title = "About Us | Altair Technologies Inc.";
const description =
  "Altair Technologies Inc. is a technology solutions company delivering software development, IT staffing, consulting, and practical technical training.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});

const differentiators = [
  {
    title: "Technical depth with business context",
    description: "Engineering decisions grounded in the outcome the business needs.",
  },
  {
    title: "Transparent, agile partnerships",
    description: "Clear scope, visible progress, and outcome-oriented collaboration.",
  },
  {
    title: "Hands-on building",
    description: "We build and operate, not presentation-only consulting.",
  },
  {
    title: "Continuous learning",
    description: "Responsible innovation supported by our own Skills Lab.",
  },
  {
    title: "Integrity and inclusion",
    description: "Long-term value created with teams we respect.",
  },
];

const howWeWork = [
  {
    title: "Collaboration",
    description: "Your team and ours work as one group with shared visibility.",
  },
  {
    title: "Rapid iteration",
    description: "Short cycles that produce something reviewable early.",
  },
  {
    title: "Measurable outcomes",
    description: "Success defined before we start, tracked while we deliver.",
  },
  {
    title: "Scalable implementation",
    description: "Solutions built to survive growth, audit, and change.",
  },
];

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <PageHero
        eyebrow="Company"
        title="Technology expertise. Human partnership."
        body={`${company.name} is a technology solutions company specializing in software development, IT staffing, consulting, and technical training. We help businesses accelerate growth, improve performance, and stay ready for a rapidly changing digital world.`}
        media={
          <img
            src={aboutImage}
            alt="Altair consultants planning a delivery roadmap in a workshop session"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[7/5] w-full rounded-3xl border border-navy-800 object-cover"
          />
        }
      />

      <section className="container-page section-y">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-card p-7">
              <h2 className="h-card text-foreground">Our mission</h2>
              <p className="mt-4 text-ink">
                Our mission is to empower businesses and individuals through technology that is not
                only smart, but transformational. We help organizations build modern software,
                access strong technical talent, and navigate digital change with confidence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-line bg-card p-7">
              <h2 className="h-card text-foreground">Our vision</h2>
              <p className="mt-4 text-ink">
                We envision a world where meaningful innovation is accessible, scalable, and driven
                by people who care deeply about solving real problems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="What sets us apart"
            title="Depth, transparency, and follow-through."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 55}>
                <FeatureCard title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Our approach"
          title="A delivery model built for clarity."
          description="Five stages that keep every engagement predictable, from first conversation to production scale."
        />
        <ProcessTimeline />
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="How we work"
            title="Practical habits that keep delivery honest."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, index) => (
              <Reveal key={item.title} delay={index * 55}>
                <FeatureCard title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Meet with Altair."
        description="Bring us the problem you are working on and we will bring the right people."
        ctaLabel="Meet with Altair"
      />
    </>
  );
}
