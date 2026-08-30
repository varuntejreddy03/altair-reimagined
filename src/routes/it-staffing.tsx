import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/it-staffing")({
  beforeLoad: () => {
    throw redirect({ to: "/services/it-staffing", replace: true });
  },
});
