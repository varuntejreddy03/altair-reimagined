import { useEffect, useState } from "react";

/**
 * Real-time scroll progress bar tracking reading completion.
 * Features a glowing gradient in Altair's ocean-to-cyan spectrum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const percent = Math.min(Math.max((scrollY / totalScroll) * 100, 0), 100);
        setProgress(percent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[65] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
