import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Breadcrumbs,
  ContactBand,
  PageHero,
  SectionHeading,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { TalentNetworkForm } from "@/components/site/forms/TalentNetworkForm";

const title = "Careers | Altair Technologies Inc.";
const description =
  "Join Altair Technologies Inc. Explore technology roles across custom software development, AI, cybersecurity, cloud architecture, and modern IT consulting.";

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
    icon: GraduationCap,
    title: "Continuous Learning & Skills Lab",
    description: "Hands-on access to the Altair Skills Lab and dedicated time to master emerging AI, cloud, and architecture technologies.",
  },
  {
    icon: Rocket,
    title: "High-Impact Enterprise Engagements",
    description: "Build software that powers enterprise workflows across healthcare, banking, telecom, and retail.",
  },
  {
    icon: Users,
    title: "Collaborative Agile Culture",
    description: "Small, autonomous pods with direct client exposure, transparent feedback, and shared technical ownership.",
  },
  {
    icon: Sparkles,
    title: "Mentorship & Career Velocity",
    description: "Work directly alongside senior architects and practice leaders committed to your professional development.",
  },
];

const areas = [
  { name: "Full-Stack Software Engineering", icon: Code2, tags: ["React", "TypeScript", "Node.js", "Java"] },
  { name: "Artificial Intelligence & ML", icon: Cpu, tags: ["GenAI", "NLP", "Python", "Model Pipelines"] },
  { name: "Cybersecurity & Zero Trust", icon: ShieldCheck, tags: ["SecOps", "Cloud Audits", "SOC 2", "Compliance"] },
  { name: "Cloud, DevOps & Microservices", icon: Layers, tags: ["AWS", "Azure", "Kubernetes", "CI/CD"] },
  { name: "Enterprise IT Consulting", icon: Briefcase, tags: ["Architecture", "Modernization", "Agile Pods"] },
  { name: "Technical Training & Labs", icon: BookOpen, tags: ["Curriculum", "Mentorship", "Innovation Lab"] },
];

function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <PageHero
        eyebrow="Careers at Altair"
        title="Build meaningful technology with people who care."
        body="We are looking for engineers, architects, consultants, and problem-solvers who combine technical curiosity with ownership, craft, and a drive to solve hard problems."
      >
        <a href="#talent-network" className="hmh-btn hmh-btn-white">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Join Talent Network</span>
        </a>
        <Link to="/about-us" className="hmh-btn hmh-btn-ghost">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>About Altair</span>
        </Link>
      </PageHero>

      {/* Why Altair Section */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Why Altair"
          title="What working with us looks like."
          description="We combine technical depth with human respect. Here is what you can expect as part of the Altair Technologies engineering family."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyAltair.map((item, index) => {
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="hmh-tile p-6 sm:p-7 flex flex-col justify-between h-full bg-white group border border-slate-200/80 hover:border-blue-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#0055FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                        CULTURE · 0{index + 1}
                      </span>
                      <span className="size-2 rounded-full bg-[#0055FE]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#003EA0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Practices & Disciplines"
            title="Where our teams innovate & grow."
            description="We deploy engineering squads and specialists across six core discipline hubs."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => {
              return (
                <Reveal key={area.name} delay={idx * 60}>
                  <div className="hmh-tile p-6 bg-white border border-slate-200/80 hover:border-blue-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                          DISCIPLINE // 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-3">{area.name}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {area.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talent Network Form Section */}
      <section id="talent-network" className="container-page py-16 sm:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Talent Network"
            title="Introduce yourself."
            description="Share your background, key technologies, and areas of interest. We match vetted candidates directly with enterprise projects."
            align="center"
          />

          <div className="mt-10 card-ref p-6 sm:p-10 bg-white shadow-xl border border-slate-200/80 rounded-3xl">
            <TalentNetworkForm />
          </div>
        </div>
      </section>

      <ContactBand
        title="Questions about partnering or careers at Altair?"
        description="Connect with our recruitment and consulting leads directly."
        ctaLabel="Get in Touch"
        interest="careers"
      />
    </>
  );
}
