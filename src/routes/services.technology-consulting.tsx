import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("technology-consulting");

export const Route = createFileRoute("/services/technology-consulting")({
  head: () => serviceHead(service),
  component: TechnologyConsultingPage,
});

function TechnologyConsultingPage() {
  return <ServicePageTemplate service={service} />;
}
