import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Industries", to: "/industries" },
  { label: "Innovation Lab", to: "/innovation-lab" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const skillsLabLinks = [
  { label: "Skills Lab Overview", to: "/skills-lab" },
  { label: "Training Programs", to: "/skills-lab/training" },
];

export function Footer() {
  return (
    <footer className="on-navy border-t border-navy-800">
      <div className="container-page section-y-sm">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="[&_span]:text-ice">
              <Logo invert />
            </div>
            <p className="mt-5 max-w-xs text-sm text-cyan-soft/80">{company.tagline}</p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold text-ice">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.path}
                    className="link-underline text-cyan-soft/80 hover:text-ice"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="text-sm font-semibold text-ice">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[...companyLinks, ...skillsLabLinks].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="link-underline text-cyan-soft/80 hover:text-ice">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-ice">Contact</h2>
            <ul className="mt-4 space-y-4 text-sm text-cyan-soft/80">
              <li>
                <a
                  href={company.phoneHref}
                  data-analytics="phone_click"
                  className="inline-flex items-start gap-3 hover:text-ice"
                >
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cyan-accent" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  data-analytics="email_click"
                  className="inline-flex items-start gap-3 break-all hover:text-ice"
                >
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cyan-accent" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cyan-accent" />
                <address className="not-italic">{company.address}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-cyan-soft/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          {/* Privacy Policy and Terms are intentionally unpublished until
              client-approved legal documents exist. */}
          <p>Privacy Policy and Terms available on request.</p>
        </div>
      </div>
    </footer>
  );
}
