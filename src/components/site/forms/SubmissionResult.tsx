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
          className="hmh-btn hmh-btn-primary"
        >
          <span className="hmh-btn-circle">
            <Mail aria-hidden="true" className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Email your details</span>
        </a>
        <a
          href={company.phoneHref}
          data-analytics="phone_click"
          className="hmh-btn hmh-btn-outline"
        >
          <span className="hmh-btn-circle">
            <Phone aria-hidden="true" className="size-3.5 stroke-[2.5]" />
          </span>
          <span>Call {company.phone}</span>
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
