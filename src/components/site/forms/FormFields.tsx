import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="text-error"> *</span>
        ) : (
          <span className="font-normal text-ink-muted"> (optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${htmlFor}-hint`} className="text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const controlClass =
  "min-h-11 w-full rounded-xl border border-line bg-card px-4 py-2.5 text-base text-foreground placeholder:text-ink-muted focus-visible:border-brand";

export function ErrorSummary({ errors }: { errors: { id: string; message: string }[] }) {
  if (errors.length === 0) return null;
  return (
    <div
      role="alert"
      tabIndex={-1}
      className="rounded-xl border border-error/40 bg-error/5 p-4 text-sm text-error"
    >
      <p className="font-semibold">Please review {errors.length} field{errors.length > 1 ? "s" : ""}:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {errors.map((error) => (
          <li key={error.id}>
            <a href={`#${error.id}`} className="underline">
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Off-screen spam trap. */
export function Honeypot({ register }: { register: Record<string, unknown> }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label htmlFor="company-website">Do not fill this field</label>
      <input id="company-website" type="text" tabIndex={-1} autoComplete="off" {...register} />
    </div>
  );
}
