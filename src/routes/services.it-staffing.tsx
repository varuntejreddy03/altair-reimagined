import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate, serviceHead } from "@/components/site/ServicePageTemplate";
import { getService } from "@/content/services";

const service = getService("it-staffing");

export const Route = createFileRoute("/services/it-staffing")({
  head: () => serviceHead(service),
  component: ItStaffingPage,
});

function ItStaffingPage() {
  return <ServicePageTemplate service={service} />;
}
