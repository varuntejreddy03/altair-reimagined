import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("data-science-engineering");

export const Route = createFileRoute("/services/data-science-engineering")({
  head: () => serviceHead(service),
  component: DataScienceEngineeringPage,
});

function DataScienceEngineeringPage() {
  return <ServicePageTemplate service={service} />;
}
