import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field, ErrorSummary, Honeypot, controlClass } from "./FormFields";
import { ConnectedResult, DisconnectedResult } from "./SubmissionResult";
import { FORMS_CONNECTED, interestOptions } from "@/content/site";
import { buildSubmission, type Submission } from "@/lib/submissions";

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().min(1, "Work email is required").email("Enter a valid work email").max(160),
  phone: z.string().max(40).optional(),
  company: z.string().max(120).optional(),
  role: z.string().max(120).optional(),
  interest: z.string().min(1, "Select what your enquiry is about"),
  message: z
    .string()
    .min(30, "Project summary needs at least 30 characters")
    .max(2000, "Project summary must be under 2,000 characters"),
  budget: z.string().max(60).optional(),
  preferredContact: z.enum(["email", "phone"]),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent to continue" }) }),
  companyWebsite: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const budgets = ["Not sure yet", "Under $50k", "$50k – $150k", "$150k – $500k", "$500k+"];

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [failed, setFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      interest: defaultInterest ?? "",
      preferredContact: "email",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (values.companyWebsite) return; // honeypot tripped
    const built = buildSubmission({
      formType: "general_contact",
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      ...(values.phone ? { phone: values.phone } : {}),
      ...(values.company ? { company: values.company } : {}),
      ...(values.role ? { role: values.role } : {}),
      interest: values.interest,
      message: values.budget ? `${values.message}\n\nBudget: ${values.budget}` : values.message,
      sourcePath: typeof window === "undefined" ? "/contact" : window.location.pathname,
    });

    if (!FORMS_CONNECTED) {
      setSubmission(built);
      return;
    }

    try {
      // Wire a validated server function / endpoint here when connected.
      throw new Error("No submission endpoint configured");
    } catch {
      setFailed(true);
    }
  };

  if (submission) {
    return FORMS_CONNECTED ? <ConnectedResult /> : <DisconnectedResult submission={submission} />;
  }

  const errorList = Object.entries(errors)
    .filter(([, value]) => value?.message)
    .map(([key, value]) => ({ id: key, message: String(value?.message) }));

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="relative space-y-6">
      <ErrorSummary errors={errorList} />
      {failed ? (
        <div
          role="alert"
          className="rounded-xl border border-error/40 bg-error/5 p-4 text-sm text-error"
        >
          We couldn't send your message. Please email or call us instead.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <input
            id="firstName"
            autoComplete="given-name"
            className={controlClass}
            {...register("firstName")}
          />
        </Field>
        <Field label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <input
            id="lastName"
            autoComplete="family-name"
            className={controlClass}
            {...register("lastName")}
          />
        </Field>
        <Field label="Work email" htmlFor="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={controlClass}
            {...register("email")}
          />
        </Field>
        <Field
          label="Phone"
          htmlFor="phone"
          hint="Include country code"
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={controlClass}
            {...register("phone")}
          />
        </Field>
        <Field label="Company or organization" htmlFor="company" error={errors.company?.message}>
          <input
            id="company"
            autoComplete="organization"
            className={controlClass}
            {...register("company")}
          />
        </Field>
        <Field label="Role or title" htmlFor="role" error={errors.role?.message}>
          <input
            id="role"
            autoComplete="organization-title"
            className={controlClass}
            {...register("role")}
          />
        </Field>
      </div>

      <Field
        label="What is this about?"
        htmlFor="interest"
        required
        error={errors.interest?.message}
      >
        <select id="interest" className={controlClass} {...register("interest")}>
          <option value="">Select an option</option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Project summary"
        htmlFor="message"
        required
        hint="30–2,000 characters. What are you trying to achieve, and by when?"
        error={errors.message?.message}
      >
        <textarea id="message" rows={6} className={controlClass} {...register("message")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" htmlFor="budget" error={errors.budget?.message}>
          <select id="budget" className={controlClass} {...register("budget")}>
            <option value="">Prefer not to say</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Preferred contact method"
          htmlFor="preferredContact"
          required
          error={errors.preferredContact?.message}
        >
          <select id="preferredContact" className={controlClass} {...register("preferredContact")}>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </Field>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 size-5 rounded border-line"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-ink">
          I consent to Altair Technologies Inc. storing these details to respond to my enquiry.
          <span className="text-error"> *</span>
        </label>
      </div>
      {errors.consent?.message ? (
        <p role="alert" className="text-sm text-error">
          {errors.consent.message}
        </p>
      ) : null}

      <Honeypot register={register("companyWebsite")} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "Checking details…" : "Send your enquiry"}
      </button>
    </form>
  );
}
