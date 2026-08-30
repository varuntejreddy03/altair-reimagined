import { createFileRoute } from "@tanstack/react-router";
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
        eyebrow="Skills Lab"
        title="Training programs that build bold engineers."
        body="Our programs connect theory with hands-on practice, real projects, and guidance from industry professionals — helping participants build, test, deploy, and communicate like working engineers."
        media={
          <img
            src={trainingImage}
            alt="Instructor guiding professionals through a hands-on software training session"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[7/5] w-full rounded-3xl border border-navy-800 object-cover"
          />
        }
      />

      <section className="container-page section-y">
        <SectionHeading eyebrow="Programs" title="Four practice-first tracks." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 60}>
              <article className="accent-card h-full rounded-2xl border border-line bg-card p-6 sm:p-7">
                <h3 className="h-card text-foreground">{program.title}</h3>
                <p className="mt-3 text-sm text-ink sm:text-base">{program.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 rounded-2xl border border-line bg-surface p-6 text-sm text-ink">
            Program schedules, fees, delivery mode, and prerequisites are confirmed directly with
            each participant. Register your interest and an Altair advisor will share current
            details.
          </p>
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
