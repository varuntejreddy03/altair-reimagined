import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/ai")({
  beforeLoad: () => {
    throw redirect({ to: "/services/artificial-intelligence", replace: true });
  },
});
