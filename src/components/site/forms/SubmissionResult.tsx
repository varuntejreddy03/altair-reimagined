import { Mail, Phone } from "lucide-react";
import { company } from "@/content/site";
import type { Submission } from "@/lib/submissions";
import { mailtoFromSubmission } from "@/lib/submissions";

/**
 * Disconnected mode: never claim a submission was received. We confirm the
 * details are valid and hand the visitor a prefilled email plus phone route.
 */
export function DisconnectedResult({ submission }: { submission: Submission }) {
  return (
    <div role="status" className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-7">
      <h3 className="h-card text-foreground">Online submission is not connected yet</h3>
      <p className="mt-3 text-sm text-ink">
        Your details were checked but not sent — this form is not wired to a submission endpoint.
        Use the prefilled email below, or call us and we will take the details directly.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={mailtoFromSubmission(submission, company.email)}
          data-analytics="email_click"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-primary-foreground"
        >
          <Mail aria-hidden="true" className="size-4" />
          Email your details
        </a>
        <a
          href={company.phoneHref}
          data-analytics="phone_click"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-6 text-sm font-semibold text-foreground"
        >
          <Phone aria-hidden="true" className="size-4" />
          Call {company.phone}
        </a>
      </div>
    </div>
  );
}

export function ConnectedResult() {
  return (
    <div role="status" className="rounded-2xl border border-success/40 bg-success/5 p-6 sm:p-7">
      <h3 className="h-card text-foreground">Thank you — your details are with us</h3>
      <p className="mt-3 text-sm text-ink">
        An Altair team member will review your message and route it to the right specialists. If
        your request is time-sensitive, call {company.phone}.
      </p>
    </div>
  );
}
