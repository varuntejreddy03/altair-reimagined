import { useEffect, useRef, useState } from "react";

/**
 * Smooth magnetic follower cursor inspired by Media Harbour's cursor.js.
 * Provides subtle interactive feedback on desktop devices while staying completely
 * out of the way on touch devices and respecting prefers-reduced-motion.
 */
export function SmoothCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on fine-pointer devices (desktop mouse/trackpad)
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -9999;
    let mouseY = -9999;
    let ringX = -9999;
    let ringY = -9999;
    let isHovering = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, [role='button'], input, textarea, select, .cursor-hover, .card-ref",
        );
        isHovering = Boolean(interactive);
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const loop = () => {
      if (isVisible) {
        // Direct position for the center dot
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        // Smooth spring lerp for the outer ring
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        const scale = isHovering ? 1.6 : 1;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;

        if (isHovering) {
          ring.classList.add("cursor-hover-active");
        } else {
          ring.classList.remove("cursor-hover-active");
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Crisp center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 size-2 -ml-1 -mt-1 rounded-full bg-sky-500 opacity-0 transition-opacity duration-200 pointer-events-none shadow-[0_0_8px_rgba(14,165,233,0.8)]"
      />
      {/* Fluid trailing aura ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 size-8 -ml-4 -mt-4 rounded-full border border-sky-400/50 bg-sky-400/10 opacity-0 transition-colors duration-200 pointer-events-none backdrop-blur-[0.5px]"
      />
    </div>
  );
}
