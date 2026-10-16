import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Twitter, Globe, ArrowUpRight } from "lucide-react";
import { company } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Skills Lab", to: "/skills-lab" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo invert size="md" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Altair Technologies is an advanced IT consulting and software engineering firm delivering custom enterprise software, AI/ML systems, cybersecurity, and expert technology talent.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500 transition"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="https://altairtechnologiesinc.com"
                className="size-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition"
                aria-label="Website"
              >
                <Globe className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={service.path} className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact & Offices
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={company.emailHref}
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <a href={company.phoneHref} className="hover:text-blue-400 transition-colors block">
                    {company.phone} (USA)
                  </a>
                  <span className="text-xs text-slate-500">Mon–Fri: 9:00 AM – 6:00 PM EST</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300 block">USA Headquarters:</span>
                  {company.address}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about-us" className="hover:text-blue-400 transition">Privacy Policy</Link>
            <Link to="/about-us" className="hover:text-blue-400 transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
