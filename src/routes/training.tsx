import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/training")({
  beforeLoad: () => {
    throw redirect({ to: "/skills-lab/training", replace: true });
  },
});
