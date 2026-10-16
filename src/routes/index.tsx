import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Lock,
  Mail,
  MapPin,
  Network,
  Phone,
  Quote,
  Radio,
  Rocket,
  Send,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-engineering-team.jpg";
import aboutImage from "@/assets/about-workshop.jpg";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/content/site";
import { HeroCanvasFx } from "@/components/site/HeroCanvasFx";
import { TechMarquee } from "@/components/site/TechMarquee";

const title = "Altair Technologies Inc. | Empowering Talent. Building Innovation.";
const description =
  "U.S.-based software development, IT staffing, and consulting company delivering end-to-end technology solutions across AI, Cybersecurity, Data Science, and Full Stack development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// Official Metrics directly from altairtechnologiesinc.com
const officialNumbers = [
  {
    value: "81+",
    title: "Projects Completed",
    detail: "Delivered over 81 technology solutions, from app dev to agile transformations, across 15+ states.",
  },
  {
    value: "240+",
    title: "IT Professionals",
    detail: "Over 240 high-caliber IT professionals successfully deployed across healthcare, finance, and enterprise projects.",
  },
  {
    value: "15+",
    title: "Enterprise Clients",
    detail: "Partnered with 15+ Fortune 500 and mid-sized enterprises including healthcare payers and SaaS providers.",
  },
  {
    value: "10+",
    title: "Years Experience",
    detail: "A decade of industry experience delivering customized technology consulting and staffing excellence.",
  },
];

// Core & Specialized Services directly from altairtechnologiesinc.com
const allServicesData = [
  {
    category: "core",
    icon: Code2,
    badge: "Core Practice",
    title: "Software Development & Innovation",
    path: "/services/software-development",
    description:
      "We design and build cutting-edge software solutions tailored to business needs, leveraging the latest technologies in AI, cloud computing, and full-stack development to drive innovation and efficiency.",
    highlights: [
      "Custom AI, Machine Learning & NLP",
      "Proactive Cybersecurity Architectures",
      "Enterprise Full Stack Applications",
      "Agile CI/CD & Cloud Delivery",
    ],
  },
  {
    category: "core",
    icon: Users,
    badge: "Core Practice",
    title: "IT Staffing and Consulting",
    path: "/services/it-staffing",
    description:
      "We deliver top-tier technology talent and strategic consulting services that empower businesses to streamline operations, accelerate innovation, and build long-term value through smarter, more agile solutions.",
    highlights: [
      "Dedicated Engineering Pods",
      "Contract & Direct-Hire Staffing",
      "Top 3% Vetted IT Professionals",
      "Rapid Matching & Cultural Alignment",
    ],
  },
  {
    category: "core",
    icon: GraduationCap,
    badge: "Core Practice",
    title: "Altair Skills Lab",
    path: "/skills-lab",
    description:
      "Designed for working professionals, our training programs enhance skills through hands-on, project-driven learning focused on evolving technology trends, preparing participants to confidently meet modern industry requirements.",
    highlights: [
      "Job-Ready Hands-On Engineering Labs",
      "Java, SQL, AI & Full Stack Curriculums",
      "1-on-1 Mentorship & Practical Projects",
      "Internal Innovation Lab Prototyping",
    ],
  },
  {
    category: "specialized",
    icon: Cpu,
    badge: "Specialized Area",
    title: "AI (Artificial Intelligence)",
    path: "/services/artificial-intelligence",
    description:
      "We craft intelligent AI solutions that automate decisions, predict outcomes, and personalize user experiences. From machine learning to NLP, we help businesses unlock deeper insights and smarter operations through custom-built, future-focused AI systems.",
    highlights: [
      "GenAI Assistants & Copilots",
      "Anomaly Detection & Automation",
      "NLP Processing & Sentiment Pipelines",
      "Predictive Machine Learning Models",
    ],
  },
  {
    category: "specialized",
    icon: ShieldCheck,
    badge: "Specialized Area",
    title: "Cyber Security",
    path: "/services/cybersecurity",
    description:
      "Our cybersecurity solutions protect your digital assets with proactive defense strategies, threat detection, and risk mitigation. We build secure, compliant systems that safeguard data and infrastructure ensuring business continuity and peace of mind in an ever-evolving threat landscape.",
    highlights: [
      "Zero Trust Architecture & Audits",
      "Real-Time Threat Detection & Response",
      "Cloud Security & Penetration Testing",
      "SOC 2, ISO 27001 & HIPAA Compliance",
    ],
  },
  {
    category: "specialized",
    icon: Database,
    badge: "Specialized Area",
    title: "Data Science & Analytics",
    path: "/services/data-science-engineering",
    description:
      "We turn raw data into actionable intelligence with end-to-end data science and engineering solutions. From modern data pipelines to predictive modeling, we help businesses make confident, data-driven decisions that fuel growth and innovation.",
    highlights: [
      "Cloud Data Lakes & Warehousing",
      "Predictive Modeling & Statistical ML",
      "Power BI & Real-Time KPI Dashboards",
      "Big Data Governance & Compliance",
    ],
  },
  {
    category: "specialized",
    icon: Layers,
    badge: "Specialized Area",
    title: "Full Stack Development",
    path: "/services/full-stack-development",
    description:
      "Our full stack development services bring ideas to life with robust front-end experiences and powerful back-end systems. We build scalable web and mobile applications using modern frameworks that deliver performance, flexibility, and seamless user engagement.",
    highlights: [
      "Modern React, TypeScript & Node",
      "Distributed Cloud Microservices",
      "Scalable REST & GraphQL Endpoints",
      "High Scalability & Performance Tuning",
    ],
  },
];

// Mission pillars directly from altairtechnologiesinc.com
const missionPillars = [
  "Delivering innovative, high-quality software tailored to client needs",
  "Bridging the IT talent gap with top-tier professionals and teams",
  "Equipping engineers with real-world skills through hands-on training",
  "Supporting digital transformation across critical industries",
  "Fostering long-term client partnerships built on trust and results",
  "Staying ahead of technology trends through continuous R&D and innovation",
];

// Industries directly from altairtechnologiesinc.com
const industriesData = [
  {
    icon: HeartPulse,
    name: "Health Care",
    color: "text-rose-600 bg-rose-50 border-rose-100",
    description:
      "We implement IT systems that improve patient engagement, enhance clinical workflows, and ensure regulatory compliance. From digital health platforms to intelligent care coordination, our solutions support safer, more efficient, and data-driven healthcare delivery.",
  },
  {
    icon: ShieldAlert,
    name: "Insurance",
    color: "text-sky-600 bg-sky-50 border-sky-100",
    description:
      "We modernize insurance platforms with automation, claims digitization, and data-driven underwriting tools. Our solutions improve customer interactions, reduce processing time, and ensure transparency while supporting regulatory compliance across the insurance lifecycle.",
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    color: "text-amber-600 bg-amber-50 border-amber-100",
    description:
      "Our IT implementations empower retailers to manage dynamic inventories, personalize customer journeys, and integrate omnichannel platforms, delivering seamless, data-driven experiences that adapt to shifting consumer demands.",
  },
  {
    icon: Radio,
    name: "Telecom",
    color: "text-teal-600 bg-teal-50 border-teal-100",
    description:
      "We enable telecom providers to scale infrastructure, improve service uptime, and automate operations. Our solutions enhance user management, real-time analytics, and network monitoring to support modern, high-volume communication ecosystems.",
  },
  {
    icon: Landmark,
    name: "Banking & Financial",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    description:
      "We support digital banking transformation with secure, scalable platforms that optimize operations, enhance customer experience, and meet strict compliance requirements, enabling smarter lending, faster transactions, and better risk management.",
  },
];

// Why Choose Us directly from altairtechnologiesinc.com
const whyChooseUsPillars = [
  {
    icon: Award,
    title: "Industry Leading Expertise",
    description:
      "With years of experience in IT consulting, staffing, and software development, we deliver tailored solutions that drive business success.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Driven Agile Approach",
    description:
      "We prioritize excellence in everything we do, from sourcing top-tier talent to building innovative, scalable technology solutions.",
  },
  {
    icon: Zap,
    title: "Commitment to Innovation & Emerging Tech",
    description:
      "We stay ahead of industry trends, integrating the latest advancements in AI, cloud, and modern architecture to future-proof your business.",
  },
  {
    icon: Users,
    title: "Dedicated & Vetted IT Pods",
    description:
      "Rapid talent matching and dedicated engineering pods tailored to your tech stack, culture, and compliance guidelines.",
  },
  {
    icon: ShieldCheck,
    title: "Client-Centric Transparency & Pricing",
    description:
      "Partnerships rooted in transparency, agile collaboration, and measurable business outcomes with zero hidden complexities.",
  },
];

// Client Stories directly from altairtechnologiesinc.com
const clientStories = [
  {
    client: "AHD",
    role: "Chief Technology Officer",
    badge: "Enterprise Modernization",
    quote:
      "Altair Technologies delivered robust end-to-end technology solutions that helped us streamline operations, modernize legacy systems, and accelerate release cycles with high-caliber engineering talent.",
    color: "bg-blue-600",
  },
  {
    client: "DX UTILITY",
    role: "HR Director",
    badge: "IT Staffing & Pod Scaling",
    quote:
      "Their agile staffing and consulting approach bridged our technical talent gap immediately. Every engineer provided demonstrated both high technical competence and seamless cultural alignment.",
    color: "bg-cyan-600",
  },
  {
    client: "RX Guid",
    role: "Chief Information Officer",
    badge: "Digital Healthcare Platforms",
    quote:
      "From clinical data interoperability to HIPAA compliance, Altair supported our digital transformation with secure, scalable systems that improved patient engagement and clinical workflows.",
    color: "bg-sky-600",
  },
];

function HomePage() {
  const [serviceFilter, setServiceFilter] = useState<"all" | "core" | "specialized">("all");
  const [activePillar, setActivePillar] = useState<number | null>(0);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactInterest, setContactInterest] = useState("Software Development");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
    }, 700);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#003EA0] via-[#002d73] to-[#041944] text-white pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
      >
        {/* Media Harbour Signature Interactive Canvas Wave Background */}
        <HeroCanvasFx colorA="3, 105, 161" colorB="47, 217, 255" colorC="56, 189, 248" />

        {/* Ambient floating glow drift orbs */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/15 rounded-full filter blur-[110px]" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[100px]" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Official Hero Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                  <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                  <span>Altair Technologies Inc. · Global Technology &amp; IT Staffing</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] text-white tracking-tight">
                  Empowering Talent.{" "}
                  <span className="block text-[#38bdf8] mt-1 sm:mt-2">Building Innovation.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <div className="space-y-3">
                  <p className="text-base sm:text-lg font-semibold text-sky-200">
                    Comprehensive consulting services for your enterprise needs.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
                    Altair Technologies Inc. is a U.S.-based software development, IT staffing, and
                    consulting company committed to delivering end-to-end technology solutions. We
                    specialize in building powerful software in areas like Cybersecurity, AI, Data
                    Science, and Full Stack development while connecting businesses with skilled IT
                    professionals and training the next generation of innovative engineers.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="space-y-4 pt-1">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="#contact"
                      className="hmh-btn hmh-btn-white cursor-pointer"
                    >
                      <span className="hmh-btn-circle">
                        <ArrowRight className="size-3.5 stroke-[2.5]" />
                      </span>
                      <span>Get in Touch</span>
                    </a>

                    <Link
                      to="/services"
                      className="hmh-btn hmh-btn-ghost cursor-pointer"
                    >
                      <span className="hmh-btn-circle">
                        <ArrowRight className="size-3.5 stroke-[2.5]" />
                      </span>
                      <span>Explore Services</span>
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sky-200/90 pt-1 font-medium">
                    <div className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>U.S. Headquartered Entity</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Top-Tier Vetted IT Talent</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Enterprise &amp; Mid-Market Ready</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={200} variant="scale">
                <div className="rounded-3xl p-4 sm:p-6 shadow-2xl relative bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                  <div className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden mb-5 group">
                    <img
                      src={heroImage}
                      alt="Altair engineering team collaborating"
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold">
                        <Sparkles className="size-3.5 text-cyan-300" />
                        <span>Altair Technologies Inc.</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium mt-1.5 text-white/90">
                        Smart, scalable, and future-ready technology solutions.
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-6 rounded-lg bg-cyan-400 text-slate-900 flex items-center justify-center font-bold">
                          <Zap className="size-3.5" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white">Agile Approach</div>
                      </div>
                      <div className="text-xs text-sky-100/80">
                        Deep collaboration, rapid iteration, and scalable solutions.
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-6 rounded-lg bg-sky-400 text-slate-900 flex items-center justify-center font-bold">
                          <Award className="size-3.5" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white">Top-Tier Talent</div>
                      </div>
                      <div className="text-xs text-sky-100/80">
                        Bridging the IT talent gap with proven professionals.
                      </div>
                    </div>
                  </div>

                  {/* Consultation Banner */}
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-white font-bold text-sm">Have a talent or project need?</div>
                      <div className="text-xs text-sky-200">
                        Connect with our consulting and staffing specialists.
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="hmh-btn hmh-btn-white text-xs py-1.5 px-3.5 shadow-sm cursor-pointer shrink-0"
                    >
                      <span className="hmh-btn-circle">
                        <Send className="size-3 stroke-[2.5]" />
                      </span>
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>

                {/* Floating Corner Badge */}
                <div className="absolute -bottom-6 -right-4 hidden sm:block">
                  <div className="bg-[#003EA0] border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Network className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold opacity-80">
                        U.S. Headquartered
                      </div>
                      <div className="text-sm font-semibold">Alpharetta, GA 30009</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR NUMBERS SECTION (Official Live Metrics)                               */}
      {/* ========================================================================= */}
      <section id="numbers" className="container-page -mt-8 sm:-mt-12 relative z-20 scroll-mt-24">
        <Reveal>
          <div className="card-ref p-6 sm:p-8 md:p-10 bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/80 rounded-3xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                  Our Numbers
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                  Proven Track Record &amp; <span className="text-gradient">Measurable Impact</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                Delivered across 15+ states with 10+ years of industry excellence, connecting top-tier talent with enterprise-scale projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {officialNumbers.map((s, idx) => {
                return (
                  <div
                    key={s.title}
                    className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-sky-50/50 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0055FE] tracking-tight group-hover:scale-105 transition-transform">
                        {s.value}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0055FE] bg-blue-50/90 px-2.5 py-1 rounded-full border border-blue-100">
                        KPI · 0{idx + 1}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {s.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Media-Harbour Style Continuous Capability & Tech Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* WHO WE ARE & OUR MISSION SECTION                                          */}
      {/* ========================================================================= */}
      <section id="about" className="container-page scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                <Globe className="size-3.5 text-blue-600" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Empowering Businesses, <span className="text-gradient">Engineers &amp; Innovation</span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p className="font-semibold text-slate-900 text-base sm:text-lg">
                  Altair Technologies Inc. is a U.S.-based software development, IT staffing, and
                  consulting company committed to delivering end-to-end technology solutions.
                </p>
                <p>
                  We specialize in building powerful software in areas like Cybersecurity, AI, Data
                  Science, and Full Stack development while connecting businesses with skilled IT
                  professionals and training the next generation of innovative engineers.
                </p>
                <p>
                  Our mission is to empower businesses and individuals by creating smart, scalable, and
                  future-ready technology solutions. We strive to deliver real-world impact by combining
                  technical expertise with a passion for continuous improvement, helping our clients thrive
                  in a rapidly evolving digital landscape.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-r from-sky-50 to-blue-50/50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Quote className="size-4 text-blue-600" />
                  <span>Our Guiding Philosophy</span>
                </div>
                <blockquote className="text-sm italic text-slate-700 leading-relaxed">
                  &ldquo;Innovation distinguishes between a leader and a follower.&rdquo;
                </blockquote>
                <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  — Steve Jobs
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-2">
                <a href="#services" className="hmh-btn hmh-btn-primary">
                  <span className="hmh-btn-circle">
                    <ArrowRight className="size-3.5 stroke-[2.5]" />
                  </span>
                  <span>More about Altair</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="card-ref p-6 sm:p-8 bg-white space-y-5 shadow-xl border border-slate-200/80 rounded-3xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Our Mission
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    Key Mission Deliverables
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Principles guiding our software, staffing, and engineering solutions.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  {missionPillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                    >
                      <div className="size-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Check className="size-3" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHAT WE DO FOR YOU (Media Harbour 6 Royal Blue Cards)                     */}
      {/* ========================================================================= */}
      <section id="services" className="container-page scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              What we do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              What we do <span className="text-gradient">for you.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Explore our range of comprehensive consulting services designed to address your specific
              business needs and drive sustainable growth.
            </p>

            {/* Media Harbour style interactive service filter tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              <button
                type="button"
                onClick={() => setServiceFilter("all")}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  serviceFilter === "all"
                    ? "bg-[#003EA0] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                All Capabilities
              </button>
              <button
                type="button"
                onClick={() => setServiceFilter("core")}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  serviceFilter === "core"
                    ? "bg-[#003EA0] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                Core Practices
              </button>
              <button
                type="button"
                onClick={() => setServiceFilter("specialized")}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  serviceFilter === "specialized"
                    ? "bg-[#003EA0] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                Specialized Technology Areas
              </button>
            </div>
          </Reveal>
        </div>

        {/* 6 Royal Blue Cards matching Media Harbour */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allServicesData
            .filter((s) => (serviceFilter === "all" ? true : s.category === serviceFilter))
            .map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={idx * 60}>
                  <div className="hmh-blue-card h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                          PRACTICE // 0{idx + 1}
                        </span>
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-sky-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6 pt-3 border-t border-white/15">
                        {service.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                            <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/15 flex items-center justify-between mt-auto">
                      <Link
                        to={service.path}
                        className="text-xs font-semibold text-cyan-300 hover:text-white inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        <span>Explore service</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                      <a
                        href="#contact"
                        className="text-xs font-medium text-white/70 hover:text-white transition cursor-pointer"
                      >
                        Consult Specialists →
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
        </div>

        {/* Media Harbour Bottom Center Button */}
        <div className="text-center pt-10 sm:pt-12">
          <Link
            to="/services"
            className="hmh-btn hmh-btn-primary"
          >
            <span className="hmh-btn-circle">
              <ArrowRight className="size-3.5 stroke-[2.5]" />
            </span>
            <span>All services &amp; practices</span>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INDUSTRIES WE SERVE SECTION                                               */}
      {/* ========================================================================= */}
      <section id="industries" className="container-page scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Industry Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              We serve a wide range of industries by delivering customized technology solutions that
              address unique challenges and opportunities across domains such as healthcare,
              banking, retail, telecom, and insurance. We empower organizations to innovate, scale,
              and stay competitive in a digital-first world.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesData.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={idx * 70}>
                <div className="hmh-tile p-6 sm:p-7 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#0055FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                        SECTOR // 0{idx + 1}
                      </span>
                      <span className="size-2 rounded-full bg-[#0055FE]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{ind.description}</p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">Industry Practice</span>
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      Consult Specialists →
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE US (Media Harbour Royal Blue 2-Column Accordion)               */}
      {/* ========================================================================= */}
      <section id="why-us" className="bg-[#003EA0] text-white py-16 sm:py-24 relative overflow-hidden scroll-mt-24">
        {/* Ambient background glow */}
        <div aria-hidden="true" className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -left-32 size-96 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading + Description + White Pill Button */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                  Why clients value working with us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
                  We listen. We solve. <br />
                  <span className="text-cyan-300">We deliver.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed pt-2">
                  We take a client-first, agile approach that focuses on deep collaboration, rapid iteration, and scalable solutions. Our process combines domain knowledge with emerging technologies to deliver measurable results while forming lasting partnerships built on trust and shared success.
                </p>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  Integrity, innovation, collaboration, and customer focus form the backbone of Altair Technologies Inc.
                </p>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="hmh-btn hmh-btn-white cursor-pointer"
                  >
                    <span className="hmh-btn-circle">
                      <ArrowRight className="size-3.5 stroke-[2.5]" />
                    </span>
                    <span>Speak with Leadership</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 5 Horizontal Accordion Rows */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="divide-y divide-white/20 border-y border-white/20">
                  {whyChooseUsPillars.map((item, idx) => {
                    const isOpen = activePillar === idx;
                    return (
                      <div key={item.title} className="hmh-accordion-item">
                        <button
                          type="button"
                          onClick={() => setActivePillar(isOpen ? null : idx)}
                          className="hmh-accordion-btn group"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs sm:text-sm font-mono font-bold text-sky-300">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <div
                            className={`size-8 rounded-full border border-white/25 flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${
                              isOpen ? "rotate-180 bg-white text-[#003EA0]" : "text-white group-hover:border-white"
                            }`}
                          >
                            <ChevronDown className="size-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="pb-5 px-1 sm:px-2 pt-1 text-sm sm:text-base text-white/85 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                            <p>{item.description}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CLIENT STORIES SECTION                                                    */}
      {/* ========================================================================= */}
      <section id="case-studies" className="container-page scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Impact &amp; Trust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Client <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Discover how our clients have benefited from the expertise and support of Altair
              Technologies Inc. Their success stories reflect the profound impact of our IT
              consultancy services on their businesses.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {clientStories.map((story, idx) => (
            <Reveal key={story.client} delay={idx * 80}>
              <div className="hmh-tile p-6 sm:p-8 flex flex-col justify-between h-full bg-white group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {story.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <div
                    className={`size-11 rounded-full ${story.color} text-white flex items-center justify-center font-bold text-sm`}
                  >
                    {story.client.slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{story.client}</div>
                    <div className="text-xs font-semibold text-slate-500">{story.role}</div>
                    <div className="text-xs text-blue-600 mt-0.5">Enterprise Client Partner</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT US & WHAT SETS US APART                                             */}
      {/* ========================================================================= */}
      <section id="about" className="container-page scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                About <span className="text-gradient">Altair Technologies Inc.</span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Our mission is to empower businesses and individuals through technology that’s not
                just smart—but transformational.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We aim to be a trusted partner for organizations seeking to build cutting-edge software,
                access top tech talent, and embrace digital transformation. Our vision is to create a
                world where innovation is accessible, scalable, and deeply impactful—driven by people who
                are passionate about solving problems and building what’s next.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="pt-2 space-y-3">
                <h4 className="text-base font-bold text-slate-900">What Sets Us Apart</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At Altair, we combine technical depth with business understanding. We deliver more
                  than just services, we deliver partnerships rooted in transparency, agility, and
                  results. Our commitment to hands-on innovation, continuous learning, and ethical
                  practices ensures that we not only meet expectations—we consistently exceed them.
                  Whether we’re coding, consulting, or training, we do it with integrity, purpose, and a
                  drive to make technology work better for everyone.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual & Office Location Cards */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={150} variant="scale">
              <div className="card-ref overflow-hidden shadow-xl">
                <img
                  src={aboutImage}
                  alt="Altair engineers in workshop"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="card-ref p-5 bg-white space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{company.name}</div>
                    <div className="text-xs text-slate-500">Corporate Headquarters</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed flex items-start gap-2 pt-1 border-t border-slate-100">
                  <MapPin className="size-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{company.address}</span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Phone className="size-4 text-blue-600 shrink-0" />
                  <span>{company.phone}</span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Mail className="size-4 text-blue-600 shrink-0" />
                  <span>{company.email}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CALL TO ACTION BANNER (Media Harbour Royal Blue)                          */}
      {/* ========================================================================= */}
      <section className="bg-[#003EA0] text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div aria-hidden="true" className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-page relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Ready to collaborate?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              Tell us what you are planning.
            </h2>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed pt-1">
              Whether you need high-impact custom software, specialized IT talent to scale your engineering squads, or strategic IT consulting, Altair Technologies delivers precision and partnership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="#contact"
                className="hmh-btn hmh-btn-white cursor-pointer w-full sm:w-auto"
              >
                <span className="hmh-btn-circle">
                  <ArrowRight className="size-3.5 stroke-[2.5]" />
                </span>
                <span>Get in touch</span>
              </a>

              <Link
                to="/services"
                className="hmh-btn hmh-btn-ghost cursor-pointer w-full sm:w-auto"
              >
                <span className="hmh-btn-circle">
                  <ArrowRight className="size-3.5 stroke-[2.5]" />
                </span>
                <span>Explore all services</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTACT SECTION                                                           */}
      {/* ========================================================================= */}
      <section id="contact" className="container-page scroll-mt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Connect with <span className="text-gradient">Our Team</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Have queries or need assistance? Connect with our team today. We are dedicated to helping
              you harness the full potential of our IT consultancy services.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="card-ref p-6 sm:p-8 bg-white shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
                <p className="text-xs text-slate-500 mb-6">
                  We respond promptly to all business and staffing inquiries.
                </p>

                {contactSuccess ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Message Delivered!</h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <span className="font-semibold">{contactName}</span>! An Altair
                      practice director will reach out to your email shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactSuccess(false)}
                      className="px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Primary Topic
                      </label>
                      <select
                        value={contactInterest}
                        onChange={(e) => setContactInterest(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                      >
                        <option>Software Development</option>
                        <option>IT Staffing and Consulting</option>
                        <option>AI (Artificial Intelligence)</option>
                        <option>Cyber Security</option>
                        <option>Data Science</option>
                        <option>Full Stack Development</option>
                        <option>Altair Skills Lab (Training & Innovation)</option>
                        <option>General Corporate Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Tell us about your consulting, staffing, or project requirements..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="hmh-btn hmh-btn-primary w-full justify-center text-sm cursor-pointer disabled:opacity-60"
                    >
                      <span className="hmh-btn-circle">
                        <Send className="size-3.5 stroke-[2.5]" />
                      </span>
                      <span>{contactSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Contact Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={100}>
              <div className="card-ref p-5 bg-white">
                <div className="flex items-start gap-3.5">
                  <Mail className="size-5 text-[#0055FE] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Us</h4>
                    <p className="text-xs text-slate-500 mb-1.5">
                      Direct contact with Altair Technologies.
                    </p>
                    <a
                      href={company.emailHref}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-all"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="card-ref p-5 bg-white">
                <div className="flex items-start gap-3.5">
                  <Phone className="size-5 text-[#0055FE] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Call Us</h4>
                    <p className="text-xs text-slate-500 mb-1.5">Direct Line</p>
                    <a
                      href={company.phoneHref}
                      className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="bg-[#003EA0] rounded-2xl p-6 text-white shadow-xl space-y-3 text-center border border-white/15">
                <h4 className="text-lg font-bold">Comprehensive Consulting Services</h4>
                <p className="text-xs text-white/90 leading-relaxed">
                  Connect with our team today. We are dedicated to helping you harness the full
                  potential of our IT consultancy services.
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="hmh-btn hmh-btn-white cursor-pointer text-xs py-2 px-6"
                  >
                    <span className="hmh-btn-circle">
                      <ArrowRight className="size-3.5 stroke-[2.5]" />
                    </span>
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
