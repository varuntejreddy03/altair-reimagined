import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field, ErrorSummary, Honeypot, controlClass } from "./FormFields";
import { ConnectedResult, DisconnectedResult } from "./SubmissionResult";
import { FORMS_CONNECTED } from "@/content/site";
import { buildSubmission, type Submission } from "@/lib/submissions";

const areas = [
  "Software engineering",
  "AI and data",
  "Cybersecurity",
  "Cloud and DevOps",
  "Technology consulting",
  "Talent operations",
];

const schema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().min(1, "Email is required").email("Enter a valid email").max(160),
  phone: z.string().max(40).optional(),
  location: z.string().min(1, "Location is required").max(120),
  area: z.string().min(1, "Select an area of interest"),
  profileUrl: z
    .string()
    .url("Enter a full URL, including https://")
    .max(300)
    .optional()
    .or(z.literal("")),
  summary: z.string().max(1200).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent to continue" }) }),
  companyWebsite: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function TalentNetworkForm() {
  const [submission, setSubmission] = useState<Submission | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { area: "" } });

  const onSubmit = (values: FormValues) => {
    if (values.companyWebsite) return;
    setSubmission(
      buildSubmission({
        formType: "career_interest",
        name: values.name,
        email: values.email,
        ...(values.phone ? { phone: values.phone } : {}),
        interest: values.area,
        message: [values.summary, values.profileUrl ? `Profile: ${values.profileUrl}` : null, `Location: ${values.location}`]
          .filter(Boolean)
          .join("\n"),
        sourcePath: "/careers",
      }),
    );
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

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name?.message}>
          <input id="name" autoComplete="name" className={controlClass} {...register("name")} />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={controlClass} {...register("email")} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input id="phone" type="tel" autoComplete="tel" className={controlClass} {...register("phone")} />
        </Field>
        <Field label="Location" htmlFor="location" required error={errors.location?.message}>
          <input id="location" autoComplete="address-level2" className={controlClass} {...register("location")} />
        </Field>
      </div>

      <Field label="Area of interest" htmlFor="area" required error={errors.area?.message}>
        <select id="area" className={controlClass} {...register("area")}>
          <option value="">Select an area</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="LinkedIn or portfolio URL"
        htmlFor="profileUrl"
        hint="Resume uploads are unavailable until secure storage is approved."
        error={errors.profileUrl?.message}
      >
        <input id="profileUrl" type="url" className={controlClass} {...register("profileUrl")} />
      </Field>

      <Field label="Short summary" htmlFor="summary" error={errors.summary?.message}>
        <textarea id="summary" rows={5} className={controlClass} {...register("summary")} />
      </Field>

      <div className="flex items-start gap-3">
        <input id="talent-consent" type="checkbox" className="mt-1 size-5 rounded border-line" {...register("consent")} />
        <label htmlFor="talent-consent" className="text-sm text-ink">
          I consent to Altair Technologies Inc. keeping these details on file for future roles.
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
        {isSubmitting ? "Checking details…" : "Join the talent network"}
      </button>
    </form>
  );
}
