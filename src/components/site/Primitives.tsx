import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Phone, type LucideIcon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";
import { Reveal } from "./Reveal";

/* ---------------------------------- CTA ---------------------------------- */

type CtaProps = {
  to: string;
  search?: Record<string, string>;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost-invert";
  className?: string;
};

const ctaBase =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";

const ctaStyles: Record<NonNullable<CtaProps["variant"]>, string> = {
  primary: "bg-brand text-primary-foreground hover:bg-navy-800",
  outline: "border border-line bg-background text-foreground hover:border-brand",
  "ghost-invert": "border border-cyan-soft/40 text-ice hover:border-cyan-accent hover:bg-navy-800",
};

export function Cta({ to, search, children, variant = "primary", className }: CtaProps) {
  return (
    <Link
      to={to}
      search={search}
      className={cn(ctaBase, ctaStyles[variant], className)}
      data-analytics="cta_click"
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}

export function CallCta({ variant = "outline" }: { variant?: "outline" | "ghost-invert" }) {
  return (
    <a
      href={company.phoneHref}
      data-analytics="phone_click"
      className={cn(ctaBase, ctaStyles[variant])}
    >
      <Phone aria-hidden="true" className="size-4" />
      <span>Call {company.phone}</span>
    </a>
  );
}

/* ------------------------------ SectionHeading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "start",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "start" | "center";
  id?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className={invert ? "eyebrow-invert" : "eyebrow"}>{eyebrow}</p> : null}
      <h2 id={id} className={cn("h-section mt-4", invert ? "text-ice" : "text-foreground")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "measure mt-5 text-base sm:text-lg",
            align === "center" && "mx-auto",
            invert ? "text-cyan-soft/85" : "text-ink",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/* -------------------------------- PageHero -------------------------------- */

export function PageHero({
  eyebrow,
  title,
  body,
  children,
  media,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <section className="on-navy relative overflow-hidden">
      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-40" />
      <div className="container-page relative section-y">
        <div className={cn("grid gap-12", media && "lg:grid-cols-[1.1fr_0.9fr] lg:items-center")}>
          <div>
            {eyebrow ? <p className="eyebrow-invert">{eyebrow}</p> : null}
            <h1 className="h-display mt-5 text-ice">{title}</h1>
            {body ? <p className="measure mt-6 text-base text-cyan-soft/85 sm:text-lg">{body}</p> : null}
            {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
          </div>
          {media ? <div>{media}</div> : null}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FeatureCard ------------------------------ */

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tags,
  to,
  search,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  tags?: string[];
  to?: string;
  search?: Record<string, string>;
}) {
  const inner = (
    <>
      {Icon ? (
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ice text-brand">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      ) : null}
      <h3 className="h-card mt-5 text-foreground">{title}</h3>
      {description ? <p className="mt-3 text-sm text-ink sm:text-base">{description}</p> : null}
      {tags?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {to ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
          Explore
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const classes =
    "accent-card group flex h-full flex-col rounded-2xl border border-line bg-card p-6 sm:p-7";

  if (to) {
    return (
      <Link to={to} search={search} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}

/* ------------------------------- Breadcrumbs ------------------------------ */

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-surface">
      <div className="container-page py-3">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted sm:text-sm">
          <li>
            <Link to="/" className="link-underline hover:text-brand">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {item.to ? (
                <Link to={item.to} className="link-underline hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

/* ------------------------------- ContactBand ------------------------------ */

export function ContactBand({
  title = "Have a technology or talent challenge? Let's solve it.",
  description = "Share the problem and we will route it to the right Altair team.",
  ctaLabel = "Start a Conversation",
  interest,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  interest?: string;
}) {
  return (
    <section className="on-navy relative overflow-hidden">
      <div aria-hidden="true" className="grid-field absolute inset-0 opacity-30" />
      <div className="container-page relative section-y-sm">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="h-section max-w-2xl text-ice">{title}</h2>
            <p className="measure mt-4 text-cyan-soft/85">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Cta to="/contact" search={interest ? { interest } : undefined}>
              {ctaLabel}
            </Cta>
            <CallCta variant="ghost-invert" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- BackToTop ------------------------------- */

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-line bg-card text-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
    >
      <ArrowUp aria-hidden="true" className="size-5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
