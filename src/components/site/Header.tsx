import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";
import { Logo } from "./Logo";

import heroImage from "@/assets/hero-engineering-team.jpg";
import aboutImage from "@/assets/about-workshop.jpg";
import securityImage from "@/assets/security-operations.jpg";
import trainingImage from "@/assets/training-workshop.jpg";

interface DropdownCol {
  image: string;
  title: string;
  items: { label: string; to: string; search?: Record<string, string>; highlight?: boolean }[];
}

interface DropdownDef {
  col1: DropdownCol;
  col2: DropdownCol;
}

const dropdowns: Record<string, DropdownDef> = {
  Company: {
    col1: {
      image: aboutImage,
      title: "About Altair",
      items: [
        { label: "About Us", to: "/about-us" },
        { label: "Mission & Vision", to: "/about-us" },
        { label: "Core Commitments", to: "/about-us" },
        { label: "Why Altair", to: "/about-us" },
      ],
    },
    col2: {
      image: heroImage,
      title: "Ecosystem & Lab",
      items: [
        { label: "Industries We Serve", to: "/industries" },
        { label: "Innovation Lab", to: "/innovation-lab" },
        { label: "Client Case Studies", to: "/case-studies" },
        { label: "Join Our Team", to: "/careers", highlight: true },
      ],
    },
  },
  Services: {
    col1: {
      image: heroImage,
      title: "Engineering & AI",
      items: [
        { label: "Custom Software", to: "/services/software-development" },
        { label: "AI & Intelligent Systems", to: "/services/artificial-intelligence" },
        { label: "Data Science & Analytics", to: "/services/data-science-engineering" },
        { label: "Full-Stack Development", to: "/services/full-stack-development" },
      ],
    },
    col2: {
      image: securityImage,
      title: "Advisory & Talent",
      items: [
        { label: "Technology Consulting", to: "/services/technology-consulting" },
        { label: "Cybersecurity & Cloud", to: "/services/cybersecurity" },
        { label: "IT Staffing & Pods", to: "/services/it-staffing" },
        { label: "View All 7 Practices →", to: "/services", highlight: true },
      ],
    },
  },
  "Skills Lab": {
    col1: {
      image: trainingImage,
      title: "Workforce Upskilling",
      items: [
        { label: "Skills Lab Overview", to: "/skills-lab" },
        { label: "Software Engineering Track", to: "/skills-lab" },
        { label: "AI & Data Fluency Track", to: "/skills-lab" },
        { label: "Cloud & DevOps Labs", to: "/skills-lab" },
      ],
    },
    col2: {
      image: aboutImage,
      title: "Corporate Solutions",
      items: [
        { label: "Corporate Training Cohorts", to: "/skills-lab/training" },
        { label: "Custom Enterprise Curriculum", to: "/skills-lab/training" },
        { label: "Engineering Pod Assessment", to: "/skills-lab/training" },
        {
          label: "Cohort Consultation →",
          to: "/contact",
          search: { interest: "skills-lab" },
          highlight: true,
        },
      ],
    },
  },
};

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedGroup(null);
    setOpenGroup(null);
  }, [pathname]);

  // Mobile menu scroll lock
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenGroup(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenGroup(null);
    }, 150);
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto">
        {/* Floating Pill Bar in Electric Royal Blue */}
        <div className="rounded-full bg-[#0055FE] shadow-2xl shadow-blue-950/40 border border-white/20 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between text-white transition-all duration-300">
          {/* Brand Logo inside pill */}
          <div className="pl-1 sm:pl-2 shrink-0">
            <Logo size="sm" invert />
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {/* 1. Company (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenGroup(openGroup === "Company" ? null : "Company")}
                aria-expanded={openGroup === "Company"}
                className={cn(
                  "inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap",
                  openGroup === "Company"
                    ? "bg-white/25 text-white shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/15",
                )}
              >
                <span>Company</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 transition-transform duration-200 opacity-80",
                    openGroup === "Company" && "rotate-180",
                  )}
                />
              </button>

              {openGroup === "Company" && (
                <DropdownMenu
                  def={dropdowns.Company}
                  onMouseEnter={() => handleMouseEnter("Company")}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* 2. Services (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenGroup(openGroup === "Services" ? null : "Services")}
                aria-expanded={openGroup === "Services"}
                className={cn(
                  "inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap",
                  openGroup === "Services"
                    ? "bg-white/25 text-white shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/15",
                )}
              >
                <span>Services</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 transition-transform duration-200 opacity-80",
                    openGroup === "Services" && "rotate-180",
                  )}
                />
              </button>

              {openGroup === "Services" && (
                <DropdownMenu
                  def={dropdowns.Services}
                  onMouseEnter={() => handleMouseEnter("Services")}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* 3. Skills Lab (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Skills Lab")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenGroup(openGroup === "Skills Lab" ? null : "Skills Lab")}
                aria-expanded={openGroup === "Skills Lab"}
                className={cn(
                  "inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap",
                  openGroup === "Skills Lab"
                    ? "bg-white/25 text-white shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/15",
                )}
              >
                <span>Skills Lab</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 transition-transform duration-200 opacity-80",
                    openGroup === "Skills Lab" && "rotate-180",
                  )}
                />
              </button>

              {openGroup === "Skills Lab" && (
                <DropdownMenu
                  def={dropdowns["Skills Lab"]}
                  onMouseEnter={() => handleMouseEnter("Skills Lab")}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* 4. Case Studies */}
            <Link
              to="/case-studies"
              className={cn(
                "inline-flex items-center px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap",
                pathname.startsWith("/case-studies")
                  ? "bg-white/25 text-white shadow-xs"
                  : "text-white/90 hover:text-white hover:bg-white/15",
              )}
            >
              Case Studies
            </Link>

            {/* 5. Careers */}
            <Link
              to="/careers"
              className={cn(
                "inline-flex items-center px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap",
                pathname === "/careers"
                  ? "bg-white/25 text-white shadow-xs"
                  : "text-white/90 hover:text-white hover:bg-white/15",
              )}
            >
              Careers
            </Link>

            {/* 6. Contact */}
            <Link
              to="/contact"
              className={cn(
                "inline-flex items-center px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap",
                pathname === "/contact"
                  ? "bg-white/25 text-white shadow-xs"
                  : "text-white/90 hover:text-white hover:bg-white/15",
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right End: Desktop CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA Button: strictly hidden on mobile/tablets (<lg), visible on desktop (lg+) */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="hmh-btn hmh-btn-white text-xs sm:text-sm py-2 px-4 sm:px-5 shadow-md whitespace-nowrap"
              >
                <span className="hmh-btn-circle">
                  <ArrowRight className="size-3.5 stroke-[2.5]" />
                </span>
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden size-10 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition cursor-pointer shrink-0"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Full-Screen Luxury Mobile Navigation Overlay (Media Harbour Style) */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] bg-[#0055FE] text-white flex flex-col p-5 sm:p-7 lg:hidden animate-in fade-in duration-200 pointer-events-auto">
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between pb-4 border-b border-white/15 shrink-0">
              <Logo size="md" invert />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close Navigation Menu"
                className="size-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition cursor-pointer"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Scrollable Accordion Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain py-4 space-y-1">
              {/* 1. Company (Accordion) */}
              <div className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedGroup(
                      mobileExpandedGroup === "Company" ? null : "Company",
                    )
                  }
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition text-left cursor-pointer"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200 text-sky-200",
                      mobileExpandedGroup === "Company" && "rotate-180",
                    )}
                  />
                </button>
                {mobileExpandedGroup === "Company" && (
                  <div className="pb-3 pl-3 grid grid-cols-2 gap-2.5 text-sm animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/about-us"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/industries"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Industries
                    </Link>
                    <Link
                      to="/innovation-lab"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Innovation Lab
                    </Link>
                    <Link
                      to="/careers"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* 2. Services (Accordion) */}
              <div className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedGroup(
                      mobileExpandedGroup === "Services" ? null : "Services",
                    )
                  }
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition text-left cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200 text-sky-200",
                      mobileExpandedGroup === "Services" && "rotate-180",
                    )}
                  />
                </button>
                {mobileExpandedGroup === "Services" && (
                  <div className="pb-3 pl-3 flex flex-col gap-2 text-sm animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/services/software-development"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Custom Software &amp; Innovation
                    </Link>
                    <Link
                      to="/services/technology-consulting"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Technology Consulting
                    </Link>
                    <Link
                      to="/services/artificial-intelligence"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Artificial Intelligence &amp; LLMs
                    </Link>
                    <Link
                      to="/services/cybersecurity"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Cybersecurity &amp; Cloud Protection
                    </Link>
                    <Link
                      to="/services/data-science-engineering"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Data Science &amp; Advanced Analytics
                    </Link>
                    <Link
                      to="/services/full-stack-development"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Full-Stack Engineering
                    </Link>
                    <Link
                      to="/services/it-staffing"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      IT Staffing &amp; Dedicated Pods
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-sky-200 font-bold"
                    >
                      Explore All 7 Practices →
                    </Link>
                  </div>
                )}
              </div>

              {/* 3. Skills Lab (Accordion) */}
              <div className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedGroup(
                      mobileExpandedGroup === "Skills Lab" ? null : "Skills Lab",
                    )
                  }
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition text-left cursor-pointer"
                >
                  <span>Skills Lab</span>
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200 text-sky-200",
                      mobileExpandedGroup === "Skills Lab" && "rotate-180",
                    )}
                  />
                </button>
                {mobileExpandedGroup === "Skills Lab" && (
                  <div className="pb-3 pl-3 flex flex-col gap-2 text-sm animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/skills-lab"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Skills Lab Overview
                    </Link>
                    <Link
                      to="/skills-lab/training"
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-white/85 hover:text-white"
                    >
                      Corporate Cohorts &amp; Upskilling
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Direct Links */}
              <div className="border-b border-white/15">
                <Link
                  to="/case-studies"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition"
                >
                  <span>Case Studies</span>
                  <ArrowRight className="size-4 opacity-70" />
                </Link>
              </div>

              <div className="border-b border-white/15">
                <Link
                  to="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition"
                >
                  <span>Careers</span>
                  <ArrowRight className="size-4 opacity-70" />
                </Link>
              </div>

              <div className="border-b border-white/15">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-between py-3.5 text-lg font-bold text-white hover:text-sky-200 transition"
                >
                  <span>Contact</span>
                  <ArrowRight className="size-4 opacity-70" />
                </Link>
              </div>
            </div>

            {/* Pinned Bottom CTA & Direct Call */}
            <div className="pt-4 border-t border-white/15 shrink-0 space-y-3 mt-auto">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 text-sm font-semibold text-sky-200 hover:text-white transition"
              >
                <div className="size-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="size-4 text-white" />
                </div>
                <span>{company.phone} (USA Headquarters)</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="hmh-btn hmh-btn-white w-full py-3.5 justify-center text-base shadow-xl"
              >
                <span className="hmh-btn-circle">
                  <ArrowRight className="size-3.5 stroke-[2.5]" />
                </span>
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Dropdown Menu Component styled exactly like the reference in Image 2        */
/* -------------------------------------------------------------------------- */

function DropdownMenu({
  def,
  onMouseEnter,
  onMouseLeave,
}: {
  def: DropdownDef;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto"
    >
      <div className="w-[580px] sm:w-[620px] rounded-[28px] bg-[#0055FE] p-6 sm:p-7 shadow-2xl shadow-blue-950/50 border border-white/20 text-white animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 divide-x divide-white/15">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={def.col1.image}
                alt=""
                className="size-11 rounded-xl object-cover ring-2 ring-white/30 shrink-0 shadow-md"
              />
              <span className="font-bold text-base text-white tracking-tight">
                {def.col1.title}
              </span>
            </div>

            <ul className="space-y-1.5 pl-1">
              {def.col1.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    search={item.search}
                    className={cn(
                      "block px-3 py-1.5 rounded-xl text-sm font-medium transition-all",
                      item.highlight
                        ? "text-sky-200 font-bold hover:text-white hover:bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/15",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="pl-6 sm:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={def.col2.image}
                alt=""
                className="size-11 rounded-xl object-cover ring-2 ring-white/30 shrink-0 shadow-md"
              />
              <span className="font-bold text-base text-white tracking-tight">
                {def.col2.title}
              </span>
            </div>

            <ul className="space-y-1.5 pl-1">
              {def.col2.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    search={item.search}
                    className={cn(
                      "block px-3 py-1.5 rounded-xl text-sm font-medium transition-all",
                      item.highlight
                        ? "text-sky-200 font-bold hover:text-white hover:bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/15",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
