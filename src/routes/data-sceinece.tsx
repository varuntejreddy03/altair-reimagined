import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL from the previous site — preserved as a redirect.
export const Route = createFileRoute("/data-sceinece")({
  beforeLoad: () => {
    throw redirect({ to: "/services/data-science-engineering", replace: true });
  },
});
