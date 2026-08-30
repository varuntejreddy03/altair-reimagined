import { Link } from "@tanstack/react-router";

/** Wordmark with the geometric Altair triangle. */
export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label="Altair Technologies Inc. — home">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="size-9 shrink-0"
        fill="none"
      >
        <path d="M20 4 L36 34 H4 Z" stroke="var(--cyan-500)" strokeWidth="2" />
        <path d="M20 15 L28 30 H12 Z" fill="var(--blue-600)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={
            invert
              ? "font-display text-base font-semibold tracking-tight text-ice"
              : "font-display text-base font-semibold tracking-tight text-foreground"
          }
        >
          Altair
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink-muted">
          Technologies
        </span>
      </span>
    </Link>
  );
}
