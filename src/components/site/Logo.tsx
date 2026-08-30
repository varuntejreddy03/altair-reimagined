import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface LogoProps {
  invert?: boolean;
  iconOnly?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Altair Technologies Inc. Official Vector Logo
 * Features the faceted blue/cyan crystal "A" glyph with circuit node and tech data blocks.
 */
export function AltairMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mark-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="mark-left-deep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="mark-right-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="mark-circuit" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Top Apex Facet */}
      <polygon points="50,4 60,22 50,30 40,22" fill="url(#mark-top)" />

      {/* Left Outer Upper Facet */}
      <polygon points="50,4 40,22 24,44 35,42" fill="#0ea5e9" />

      {/* Left Upper-Mid Facet */}
      <polygon points="40,22 50,30 35,42" fill="#0284c7" />

      {/* Left Deep Inner Facet */}
      <polygon points="50,30 35,42 39,58 48,48" fill="url(#mark-left-deep)" />

      {/* Left Mid Facet */}
      <polygon points="35,42 24,44 14,70 30,64 39,58" fill="#0369a1" />

      {/* Left Lower Base Facet */}
      <polygon points="14,70 6,86 28,86 30,64" fill="#0284c7" />
      <polygon points="6,86 16,79 28,86" fill="#0369a1" />

      {/* Right Upper Outer Facet */}
      <polygon points="50,4 60,22 76,52 63,46" fill="#38bdf8" />

      {/* Right Upper Mid Facet */}
      <polygon points="60,22 50,30 63,46" fill="#0284c7" />

      {/* Right Center Facet */}
      <polygon points="50,30 63,46 74,62 56,59" fill="url(#mark-right-mid)" />

      {/* Right Lower Outer Facet */}
      <polygon points="63,46 76,52 94,86 76,79 74,62" fill="#0ea5e9" />

      {/* Right Base Facet */}
      <polygon points="76,79 94,86 70,86" fill="#0284c7" />

      {/* Circuit Trace Line */}
      <rect x="28" y="65" width="40" height="4.5" rx="2.25" fill="url(#mark-circuit)" />

      {/* Left Circuit Node Outer Ring & Inner Dot */}
      <circle cx="28" cy="67.25" r="8" fill="none" stroke="#38bdf8" strokeWidth="3.75" />
      <circle cx="28" cy="67.25" r="3" fill="#ffffff" />

      {/* Right Circuit Node Small Circle */}
      <circle cx="68" cy="67.25" r="5.25" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />

      {/* Data Pixels / Tech Blocks */}
      <rect x="35" y="50" width="4.75" height="4.75" rx="0.75" fill="#ffffff" />
      <rect x="42" y="55" width="4.25" height="4.25" rx="0.75" fill="#38bdf8" />
      <rect x="33" y="57" width="4" height="4" rx="0.75" fill="#bae6fd" />
    </svg>
  );
}

export function Logo({ invert = false, iconOnly = false, className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12 sm:size-14",
  };

  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-95",
        className,
      )}
      aria-label="Altair Technologies Inc. — Home"
    >
      <AltairMark className={cn(sizeClasses[size], "transition-transform group-hover:scale-105")} />

      {!iconOnly && (
        <span className="flex flex-col tracking-tight leading-none select-none">
          <span
            className={cn(
              "font-display font-extrabold tracking-wider",
              size === "sm" && "text-base",
              size === "md" && "text-lg",
              size === "lg" && "text-xl sm:text-2xl",
              invert ? "text-ice" : "text-navy-950",
            )}
          >
            ALTAIR
          </span>
          <span
            className={cn(
              "font-sans font-bold uppercase tracking-[0.22em]",
              size === "sm" && "text-[0.55rem]",
              size === "md" && "text-[0.625rem]",
              size === "lg" && "text-[0.75rem]",
              invert ? "text-cyan-soft/80" : "text-slate-700",
            )}
          >
            Technologies Inc
          </span>
        </span>
      )}
    </Link>
  );
}
