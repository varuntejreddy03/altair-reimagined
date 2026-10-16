import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import trainingImage from "@/assets/training-workshop.jpg";
import { Breadcrumbs, ContactBand, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Training Programs | Altair Technologies Inc.";
const description =
  "Project-driven training in Java, SQL and database design, artificial intelligence, and full-stack development, guided by working industry professionals.";

export const Route = createFileRoute("/skills-lab/training")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/skills-lab/training" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/skills-lab/training" }],
  }),
  component: TrainingPage,
});

const programs = [
  {
    title: "Java Development",
    description:
      "Object-oriented programming, multithreading, Spring Boot, APIs, testing, and backend projects.",
  },
  {
    title: "SQL & Database Design",
    description:
      "Complex queries, performance tuning, relational and NoSQL systems, administration, and enterprise design patterns.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Python, machine learning, deep learning, real datasets, evaluation, and deployment fundamentals.",
  },
  {
    title: "Full-Stack Development",
    description:
      "React or Angular, Java/Python/.NET backends, databases, APIs, testing, and DevOps deployment.",
  },
];

function TrainingPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Skills Lab", to: "/skills-lab" }, { label: "Training Programs" }]}
      />
      <PageHero
        eyebrow="Hands-on Tracks"
        title="Training programs that build bold engineers."
        body="Our programs connect theory with hands-on practice, real projects, and guidance from industry professionals — helping participants build, test, deploy, and communicate like working engineers."
        media={
          <div className="card-ref overflow-hidden shadow-2xl p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl">
            <img
              src={trainingImage}
              alt="Instructor guiding professionals through a hands-on software training session"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[7/5] w-full rounded-2xl object-cover"
            />
          </div>
        }
      >
        <a href="#tracks" className="hmh-btn hmh-btn-white">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>View 4 Tracks</span>
        </a>
        <Link to="/contact" className="hmh-btn hmh-btn-ghost">
          <span className="hmh-btn-circle">
            <ArrowRight className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Register Interest</span>
        </Link>
      </PageHero>

      <section id="tracks" className="container-page py-16 sm:py-24 scroll-mt-24">
        <SectionHeading eyebrow="Curriculum Tracks" title="Four practice-first tracks." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 60}>
              <div className="hmh-tile h-full rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 hover:border-blue-300 transition-all">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Track 0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">{program.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{program.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-sm text-slate-700 leading-relaxed flex items-center gap-3">
            <Sparkles className="size-5 text-blue-600 shrink-0" />
            <span>
              Program schedules, delivery modes, and hands-on capstone projects are customized for working professionals and enterprise cohorts.
            </span>
          </div>
        </Reveal>
      </section>

      <ContactBand
        title="Register your interest."
        description="Share your background and the track you are interested in, and we will follow up with program details."
        ctaLabel="Register your interest"
        interest="training"
      />
    </>
  );
}
