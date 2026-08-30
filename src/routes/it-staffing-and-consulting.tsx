import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/it-staffing-and-consulting")({
  beforeLoad: () => {
    throw redirect({ to: "/services", replace: true });
  },
});
