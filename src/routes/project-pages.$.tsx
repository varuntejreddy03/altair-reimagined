import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy case-study template URLs. Details are unpublished, so send visitors
// to the case studies index rather than an empty detail page.
export const Route = createFileRoute("/project-pages/$")({
  beforeLoad: () => {
    throw redirect({ to: "/case-studies", replace: true });
  },
});
