import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-workshop.jpg";
import {
  Breadcrumbs,
  ContactBand,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/content/site";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  CheckCircle2,
  Compass,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const title = "About Us | Altair Technologies Inc.";
const description =
  "Our mission is to empower businesses and individuals through technology that's not just smart—but transformational. Altair Technologies Inc. is a U.S.-based software development, IT staffing, and consulting company.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about-us" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});

const whatSetsUsApartPoints = [
  {
    icon: Award,
    title: "Technical Depth with Business Context",
    description:
      "At Altair, we combine deep engineering craftsmanship with strategic business alignment. We deliver more than just services—we deliver lasting partnerships rooted in transparency, agility, and measurable ROI.",
  },
  {
    icon: Zap,
    title: "Hands-on Innovation & Continuous R&D",
    description:
      "Our commitment to hands-on experimentation, live engineering simulations, and agile prototyping ensures that we consistently exceed enterprise benchmarks in speed, security, and scalability.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity, Purpose & Cultural Inclusivity",
    description:
      "Whether we are coding cloud microservices, consulting on executive AI strategy, or training engineers in Skills Lab, we do it with integrity, purpose, and a client-first commitment.",
  },
];

const missionPillars = [
  "Delivering innovative, high-quality software tailored to client needs",
  "Bridging the IT talent gap with top-tier vetted professionals and pods",
  "Equipping engineers with real-world skills through hands-on training",
  "Supporting digital transformation across critical industries",
  "Fostering long-term client partnerships built on trust and results",
  "Staying ahead of technology trends through continuous R&D and innovation",
];

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <PageHero
        eyebrow="Company Overview"
        title="Empowering Talent. Building Innovation."
        body="Altair Technologies Inc. is a U.S.-based software development, IT staffing, and consulting company committed to delivering end-to-end technology solutions across critical enterprise sectors."
        media={
          <div className="card-ref overflow-hidden shadow-2xl p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl">
            <img
              src={aboutImage}
              alt="Altair consultants collaborating in a strategy session"
              className="w-full h-72 sm:h-80 object-cover rounded-2xl"
            />
          </div>
        }
      >
        <Link to="/contact" className="hmh-btn hmh-btn-white">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Work With Us</span>
        </Link>
        <Link to="/services" className="hmh-btn hmh-btn-ghost">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Explore Capabilities</span>
        </Link>
      </PageHero>

      {/* Mission & Vision Section */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Purpose & Direction"
          title="Our Mission &amp; Strategic Vision"
          description="Transforming enterprise potential through intelligent software and top-tier engineering talent."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="hmh-tile p-8 sm:p-10 h-full bg-white border border-slate-200/80 hover:border-blue-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#0055FE] bg-blue-50 px-3 py-1 rounded-full border border-blue-100/80 mb-5 inline-block">
                  PILLAR // 01
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our mission is to empower businesses and individuals through technology that’s not
                  just smart—but transformational. We aim to be a trusted partner for organizations
                  seeking to build cutting-edge software, access top tech talent, and embrace digital
                  transformation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="hmh-tile p-8 sm:p-10 h-full bg-white border border-slate-200/80 hover:border-blue-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100/80 mb-5 inline-block">
                  PILLAR // 02
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our vision is to create a world where innovation is accessible, scalable, and
                  deeply impactful—driven by people who are passionate about solving problems and
                  building what’s next.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Differentiators"
            title="What Sets Altair Apart"
            description="At Altair, we combine technical depth with business understanding. We deliver more than just services—we deliver partnerships rooted in transparency, agility, and results."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whatSetsUsApartPoints.map((item, idx) => {
              return (
                <Reveal key={item.title} delay={idx * 80}>
                  <div className="hmh-tile p-7 sm:p-8 h-full bg-white border border-slate-200/80 hover:border-blue-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#0055FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                          CORE · 0{idx + 1}
                        </span>
                        <span className="size-2 rounded-full bg-[#0055FE]" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2.5">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Commitments Checklist */}
      <section className="container-page py-16 sm:py-24">
        <div className="rounded-3xl bg-[#003EA0] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute -top-32 -left-32 size-96 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-blue-300 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block">
                Core Commitments
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How We Deliver Every Engagement
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {missionPillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3.5 text-sm text-white/90 bg-white/10 p-3.5 rounded-2xl border border-white/15">
                  <div className="size-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3 font-bold" />
                  </div>
                  <span className="leading-relaxed font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        title="Connect with Altair Technologies Inc."
        description="Have queries or need assistance? Connect with our team today to harness the full potential of our IT consultancy and engineering services."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
