import { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "home", label: "Hero" },
  { id: "numbers", label: "Our Numbers" },
  { id: "about", label: "Who We Are" },
  { id: "services", label: "Core Practices" },
  { id: "specialties", label: "Specializations" },
  { id: "industries", label: "Industries" },
  { id: "why-us", label: "Why Altair" },
  { id: "case-studies", label: "Client Stories" },
  { id: "contact", label: "Get in Touch" },
];

/**
 * Floating side dot navigation inspired by Media Harbour's `hmh-dot-nav`.
 * Tracks page section visibility and allows direct smooth scrolling with hover tooltips.
 */
export function FloatingDotNav() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2.5 p-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-lg shadow-slate-900/5 transition-opacity"
    >
      {sections.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredSection === item.id;

        return (
          <div
            key={item.id}
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHoveredSection(item.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Tooltip flyout to the left */}
            <div
              className={`absolute right-full mr-3.5 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none transition-all duration-200 bg-slate-900 text-white shadow-xl ${
                isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
            >
              {item.label}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
            </div>

            {/* Dot button */}
            <button
              type="button"
              onClick={() => scrollTo(item.id)}
              aria-label={`Scroll to ${item.label}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-2.5 h-6 bg-gradient-to-b from-blue-600 to-cyan-500 shadow-md shadow-blue-500/40"
                  : "size-2 bg-slate-300 hover:bg-slate-400 hover:scale-125"
              }`}
            />
          </div>
        );
      })}
    </nav>
  );
}
