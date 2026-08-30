/**
 * Shared, server-safe submission shape. When a validated endpoint is connected,
 * `submitForm` is the single place to wire it up (see FORMS_CONNECTED).
 */
export type FormType =
  | "general_contact"
  | "staffing_request"
  | "training_interest"
  | "career_interest"
  | "case_study_request";

export type Submission = {
  id: string;
  createdAt: string;
  formType: FormType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  interest: string;
  message: string;
  sourcePath: string;
  status: "new";
  consentAt: string;
};

export function buildSubmission(
  input: Omit<Submission, "id" | "createdAt" | "status" | "consentAt">,
): Submission {
  const now = new Date().toISOString();
  return {
    ...input,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `sub_${Date.now()}`,
    createdAt: now,
    status: "new",
    consentAt: now,
  };
}

/** Builds a prefilled mail draft so nothing is lost while forms are disconnected. */
export function mailtoFromSubmission(submission: Submission, to: string) {
  const subject = `${submission.formType.replace(/_/g, " ")} — ${submission.name}`;
  const body = [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.phone ? `Phone: ${submission.phone}` : null,
    submission.company ? `Company: ${submission.company}` : null,
    submission.role ? `Role: ${submission.role}` : null,
    `Interest: ${submission.interest}`,
    `Page: ${submission.sourcePath}`,
    "",
    submission.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
