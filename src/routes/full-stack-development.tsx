import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/full-stack-development")({
  beforeLoad: () => {
    throw redirect({ to: "/services/full-stack-development", replace: true });
  },
});
