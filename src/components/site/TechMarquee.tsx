import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Database,
  Users,
  HeartPulse,
  Landmark,
  Radio,
  ShoppingCart,
  Rocket,
} from "lucide-react";

const capabilities = [
  { icon: Sparkles, text: "Artificial Intelligence & LLMs" },
  { icon: ShieldCheck, text: "Cybersecurity & Threat Defense" },
  { icon: Database, text: "Data Science & Advanced Analytics" },
  { icon: Cpu, text: "Full Stack & Cloud Native" },
  { icon: Users, text: "Enterprise IT Staffing Pods" },
  { icon: HeartPulse, text: "Healthcare & HIPAA Systems" },
  { icon: Landmark, text: "Fintech & Banking Platforms" },
  { icon: Radio, text: "Telecom 5G Infrastructure" },
  { icon: ShoppingCart, text: "Omnichannel Retail Systems" },
  { icon: Rocket, text: "Innovation & Skills Lab" },
];

/**
 * Infinite smooth capability ticker inspired by Media Harbour's `hmh-brands-marquee`.
 * Seamlessly loops horizontally with pause-on-hover interaction.
 */
export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200/60 bg-white/50 backdrop-blur-sm">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 items-center">
        {/* Double array for seamless loop */}
        {[...capabilities, ...capabilities].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.text}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-xs hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/10 transition-all cursor-default select-none shrink-0"
            >
              <div className="size-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Icon className="size-3.5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
