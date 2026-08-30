import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("software-development");

export const Route = createFileRoute("/services/software-development")({
  head: () => serviceHead(service),
  component: SoftwareDevelopmentPage,
});

function SoftwareDevelopmentPage() {
  return <ServicePageTemplate service={service} />;
}
