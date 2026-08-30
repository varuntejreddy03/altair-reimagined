import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("full-stack-development");

export const Route = createFileRoute("/services/full-stack-development")({
  head: () => serviceHead(service),
  component: FullStackDevelopmentPage,
});

function FullStackDevelopmentPage() {
  return <ServicePageTemplate service={service} />;
}
