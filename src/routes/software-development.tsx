import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/software-development")({
  beforeLoad: () => {
    throw redirect({ to: "/services/software-development", replace: true });
  },
});
