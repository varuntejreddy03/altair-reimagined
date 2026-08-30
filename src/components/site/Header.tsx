import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { primaryNav, type NavGroup, type NavItem } from "@/content/site";
import { Cta } from "./Primitives";
import { Logo } from "./Logo";

const isGroup = (item: NavItem | NavGroup): item is NavGroup => "items" in item;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Mobile menu: scroll lock, Escape, focus trap.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const linkTone = transparent ? "text-ice hover:text-cyan-soft" : "text-foreground hover:text-brand";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        transparent
          ? "bg-transparent"
          : isHome || mobileOpen
            ? "border-b border-navy-800 bg-navy-950/90 backdrop-blur-md"
            : "border-b border-line bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <div className={cn(isHome || mobileOpen ? "[&_span]:text-ice" : undefined)}>
          <Logo invert={isHome || mobileOpen} />
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === item.label}
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors",
                    isHome ? "text-ice hover:text-cyan-soft" : linkTone,
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-4 transition-transform",
                      openGroup === item.label && "rotate-180",
                    )}
                  />
                </button>
                {openGroup === item.label ? (
                  <div
                    className={cn(
                      "absolute left-0 top-full w-72 rounded-2xl border border-line bg-card p-2 shadow-[var(--shadow-soft)]",
                      item.items.length > 5 && "w-[34rem] grid grid-cols-2 gap-1",
                    )}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="col-span-full rounded-xl px-3 py-2 text-sm font-semibold text-brand hover:bg-ice"
                      >
                        {item.label} overview
                      </Link>
                    ) : null}
                    {item.items.map((sub) => (
                      <Link
                        key={sub.to + sub.label}
                        to={sub.to}
                        className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-ice hover:text-foreground"
                        activeProps={{ className: "block rounded-xl px-3 py-2 text-sm font-semibold text-foreground bg-ice" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium transition-colors",
                  isHome ? "text-ice hover:text-cyan-soft" : linkTone,
                )}
                activeProps={{ className: "font-semibold text-cyan-accent" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Cta to="/contact" variant={isHome ? "ghost-invert" : "primary"}>
            Start a Conversation
          </Cta>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border lg:hidden",
            isHome || mobileOpen ? "border-cyan-soft/40 text-ice" : "border-line text-foreground",
          )}
        >
          {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="on-navy h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page pb-10 pt-4">
            <ul className="divide-y divide-navy-800">
              {primaryNav.map((item) =>
                isGroup(item) ? (
                  <li key={item.label} className="py-1">
                    <details className="group">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-2 text-base font-semibold text-ice">
                        {item.label}
                        <ChevronDown aria-hidden="true" className="size-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="pb-3 pl-1">
                        {item.to ? (
                          <li>
                            <Link to={item.to} className="block py-2.5 text-sm text-cyan-accent">
                              {item.label} overview
                            </Link>
                          </li>
                        ) : null}
                        {item.items.map((sub) => (
                          <li key={sub.to + sub.label}>
                            <Link to={sub.to} className="block py-2.5 text-sm text-cyan-soft/85">
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="flex min-h-11 items-center py-3 text-base font-semibold text-ice"
                      activeProps={{ className: "flex min-h-11 items-center py-3 text-base font-semibold text-cyan-accent" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8">
              <Cta to="/contact" variant="ghost-invert" className="w-full">
                Start a Conversation
              </Cta>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
