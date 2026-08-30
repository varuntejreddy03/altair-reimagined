import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/consulting")({
  beforeLoad: () => {
    throw redirect({ to: "/services/technology-consulting", replace: true });
  },
});
