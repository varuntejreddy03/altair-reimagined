import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/cyber-security")({
  beforeLoad: () => {
    throw redirect({ to: "/services/cybersecurity", replace: true });
  },
});
