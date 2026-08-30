import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("cybersecurity");

export const Route = createFileRoute("/services/cybersecurity")({
  head: () => serviceHead(service),
  component: CybersecurityPage,
});

function CybersecurityPage() {
  return <ServicePageTemplate service={service} />;
}
