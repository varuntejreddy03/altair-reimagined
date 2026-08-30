import { deliverySteps } from "@/content/site";
import { Reveal } from "./Reveal";

export function ProcessTimeline({
  steps = deliverySteps,
  invert = false,
}: {
  steps?: { title: string; description?: string }[];
  invert?: boolean;
}) {
  return (
    <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * 70}>
          <div
            className={
              invert
                ? "flex h-full flex-col rounded-2xl border border-cyan-soft/20 bg-navy-900 p-5"
                : "flex h-full flex-col rounded-2xl border border-line bg-card p-5"
            }
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand text-xs font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-cyan-accent/50" />
            </span>
            <h3 className={invert ? "mt-4 text-base font-semibold text-ice" : "mt-4 text-base font-semibold text-foreground"}>
              {step.title}
            </h3>
            {step.description ? (
              <p className={invert ? "mt-2 text-sm text-cyan-soft/80" : "mt-2 text-sm text-ink"}>
                {step.description}
              </p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
