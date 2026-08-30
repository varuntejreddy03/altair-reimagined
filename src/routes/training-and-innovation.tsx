import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/training-and-innovation")({
  beforeLoad: () => {
    throw redirect({ to: "/skills-lab", replace: true });
  },
});
