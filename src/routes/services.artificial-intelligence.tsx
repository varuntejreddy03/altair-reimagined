import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("artificial-intelligence");

export const Route = createFileRoute("/services/artificial-intelligence")({
  head: () => serviceHead(service),
  component: ArtificialIntelligencePage,
});

function ArtificialIntelligencePage() {
  return <ServicePageTemplate service={service} />;
}
