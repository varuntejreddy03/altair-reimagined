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
  variant?: "primary" | "outline" | "ghost-invert" | "white";
  className?: string;
};

export function Cta({ to, search = {}, children, variant = "primary", className }: CtaProps) {
  const variantClass = {
    primary: "hmh-btn-primary",
    outline: "hmh-btn-outline",
    "ghost-invert": "hmh-btn-ghost",
    white: "hmh-btn-white",
  }[variant];

  return (
    <Link
      to={to}
      search={search}
      className={cn("hmh-btn cursor-pointer", variantClass, className)}
      data-analytics="cta_click"
    >
      <span className="hmh-btn-circle">
        <ArrowRight aria-hidden="true" className="size-3.5 stroke-[2.5]" />
      </span>
      <span>{children}</span>
    </Link>
  );
}

export function CallCta({ variant = "outline" }: { variant?: "outline" | "ghost-invert" | "white" }) {
  const variantClass = {
    outline: "hmh-btn-outline",
    "ghost-invert": "hmh-btn-ghost",
    white: "hmh-btn-white",
  }[variant];

  return (
    <a
      href={company.phoneHref}
      data-analytics="phone_click"
      className={cn("hmh-btn cursor-pointer", variantClass)}
    >
      <span className="hmh-btn-circle">
        <Phone aria-hidden="true" className="size-3.5 stroke-[2.5]" />
      </span>
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
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border inline-block mb-3",
            invert
              ? "text-sky-200 bg-white/10 border-white/20"
              : "text-blue-600 bg-blue-50 border-blue-100",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight",
          invert ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm sm:text-base leading-relaxed",
            align === "center" && "mx-auto",
            invert ? "text-white/80" : "text-slate-600",
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003EA0] via-[#002d73] to-[#041944] text-white pt-28 sm:pt-36 pb-16 sm:pb-24">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-20 size-96 rounded-full bg-cyan-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 size-96 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <div className={cn("grid gap-10", media && "lg:grid-cols-[1.1fr_0.9fr] lg:items-center")}>
          <div>
            {eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-200 backdrop-blur-md mb-4">
                <span className="size-1.5 rounded-full bg-cyan-300 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            ) : null}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              {title}
            </h1>
            {body ? (
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                {body}
              </p>
            ) : null}
            {children ? <div className="mt-8 flex flex-wrap gap-3.5">{children}</div> : null}
          </div>
          {media ? <div className="relative">{media}</div> : null}
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
  search = {},
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  tags?: string[];
  to?: string;
  search?: Record<string, string>;
}) {
  const inner = (
    <div className="flex flex-col justify-between h-full">
      <div>
        {Icon ? (
          <div className="mb-4 text-[#0055FE] group-hover:translate-x-1 transition-transform inline-flex">
            <Icon aria-hidden="true" className="size-6 stroke-[1.75]" />
          </div>
        ) : null}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0055FE] transition-colors">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
        ) : null}
        {tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[0.7rem] font-medium text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {to ? (
        <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0055FE]">
          <span className="size-5 rounded-full bg-blue-50 text-[#0055FE] group-hover:bg-[#0055FE] group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowRight
              aria-hidden="true"
              className="size-3 stroke-[2.5] transition-transform group-hover:translate-x-0.5"
            />
          </span>
          <span>Explore Practice</span>
        </div>
      ) : null}
    </div>
  );

  const classes =
    "hmh-tile group flex h-full flex-col p-6 sm:p-7 bg-white border border-slate-200/80 hover:border-blue-300 transition-all";

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
    <nav aria-label="Breadcrumb" className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xs">
      <div className="container-page py-2.5">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-medium">
          <li>
            <Link to="/" className="hover:text-[#003EA0] transition-colors">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-slate-300">/</span>
              {item.to ? (
                <Link to={item.to} className="hover:text-[#003EA0] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-slate-900">
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
  ctaLabel = "Get in Touch",
  interest,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  interest?: string;
}) {
  return (
    <section className="bg-[#003EA0] text-white py-14 sm:py-20 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full bg-cyan-400 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-1">
              Collaborate With Altair
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Cta to="/contact" search={interest ? { interest } : {}} variant="white">
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
      className="fixed bottom-6 right-6 z-40 inline-flex size-11 items-center justify-center rounded-full bg-[#003EA0] text-white shadow-xl hover:bg-[#042a70] transition-all hover:-translate-y-1 cursor-pointer border border-white/20"
      aria-label="Back to top"
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
