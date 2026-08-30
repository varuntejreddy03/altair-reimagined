import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/innovation")({
  beforeLoad: () => {
    throw redirect({ to: "/innovation-lab", replace: true });
  },
});
