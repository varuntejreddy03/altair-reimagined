import { useEffect, useRef } from "react";

interface HeroCanvasFxProps {
  className?: string;
  variant?: "konvergenz" | "flow" | "netz";
  colorA?: string; // RGB string e.g. "2, 132, 199" (Ocean Blue #0284c7)
  colorB?: string; // RGB string e.g. "14, 165, 233" (Vivid Cyan #0ea5e9)
  colorC?: string; // RGB string e.g. "56, 189, 248" (Sky Blue #38bdf8)
}

interface StreamLine {
  y0: number;
  lane: number;
  speed: number;
  phase: number;
  amp: number;
  hasDots: boolean;
  wavelength: number;
}

interface MeshNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

/**
 * High-performance interactive HTML5 Canvas background inspired by Media Harbour's
 * signature "konvergenz" and "flow" canvas motion effects.
 *
 * Uses Altair's exact logo color spectrum:
 * Ocean Blue (#0284c7), Vivid Cyan (#0ea5e9), and Sky Blue (#38bdf8).
 */
export function HeroCanvasFx({
  className = "",
  variant = "konvergenz",
  colorA = "2, 132, 199",
  colorB = "14, 165, 233",
  colorC = "56, 189, 248",
}: HeroCanvasFxProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId: number;
    let isVisible = true;
    let tick = 0;

    // Mouse tracking for subtle interactive displacement
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 220,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Streamlines for convergence effect
    let streams: StreamLine[] = [];
    const streamCount = 28;

    // Nodes for connected mesh effect
    let nodes: MeshNode[] = [];
    const nodeCount = 42;

    const initStreams = () => {
      streams = [];
      for (let i = 0; i < streamCount; i++) {
        streams.push({
          y0: 0.05 * height + (Math.random() * 0.9 * height),
          lane: i % 8,
          speed: 0.4 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2,
          amp: 24 + Math.random() * 70,
          hasDots: Math.random() < 0.75,
          wavelength: 0.008 + Math.random() * 0.006,
        });
      }
    };

    const initNodes = () => {
      nodes = [];
      const startX = width * 0.25;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: startX + Math.random() * (width - startX),
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: 1.2 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initStreams();
      initNodes();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Pause animation when canvas is off-screen for maximum performance
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    // Compute y coordinate of a convergence stream line at x
    const getStreamY = (s: StreamLine, x: number) => {
      const progress = Math.min(Math.max(x / width, 0), 1);
      // Smooth cubic convergence ease
      const ease = progress * progress * (3 - 2 * progress);
      // Target convergence line height on the right side
      const targetY = 0.22 * height + (s.lane * (0.56 * height)) / 7;

      // Mouse influence
      let mouseDisplacement = 0;
      if (mouse.x > 0 && mouse.y > 0) {
        const dx = x - mouse.x;
        const dy = s.y0 - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const factor = (1 - dist / mouse.radius);
          mouseDisplacement = Math.sin(factor * Math.PI) * -18;
        }
      }

      // Traveling sinusoidal wave
      const wave =
        Math.sin(s.wavelength * x + s.phase + tick * s.speed * 0.02) *
        s.amp *
        (1 - ease * 0.7);

      return (s.y0 + wave + mouseDisplacement) * (1 - ease) + targetY * ease;
    };

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick++;

      // Smooth mouse lerp
      if (mouse.targetX > 0) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      ctx.clearRect(0, 0, width, height);

      // Start position: begin subtle fade-in from ~8% of width
      const startX = width * 0.06;

      // -----------------------------------------------------------------------
      // 1. Draw Flowing Convergence Lines
      // -----------------------------------------------------------------------
      for (let i = 0; i < streams.length; i++) {
        const s = streams[i];
        ctx.beginPath();

        const step = 16;
        for (let x = startX; x <= width + step; x += step) {
          const y = getStreamY(s, x);
          if (x === startX) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Gradient: Transparent -> Ocean Blue -> Vivid Cyan / Sky Blue
        const grad = ctx.createLinearGradient(startX, 0, width, 0);
        grad.addColorStop(0, `rgba(${colorA}, 0)`);
        grad.addColorStop(0.35, `rgba(${colorA}, 0.14)`);
        grad.addColorStop(0.75, `rgba(${colorB}, 0.32)`);
        grad.addColorStop(1, `rgba(${colorC}, 0.55)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.15;
        ctx.stroke();

        // ---------------------------------------------------------------------
        // 2. Draw Traveling Light Nodes along the streams
        // ---------------------------------------------------------------------
        if (s.hasDots) {
          const streamLength = width - startX;
          const cycleOffset = (tick * s.speed * 2.2 + i * 147) % streamLength;
          const dotX = startX + cycleOffset;
          const dotY = getStreamY(s, dotX);

          // Alpha brightens toward convergence point on the right
          const dotAlpha = 0.25 + 0.75 * (cycleOffset / streamLength);

          ctx.beginPath();
          ctx.arc(dotX, dotY, 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorC}, ${dotAlpha.toFixed(2)})`;
          ctx.shadowColor = `rgba(${colorB}, 0.85)`;
          ctx.shadowBlur = 9;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Secondary trailing micro-spark
          const trailX = Math.max(startX, dotX - 18 * s.speed);
          const trailY = getStreamY(s, trailX);
          ctx.beginPath();
          ctx.arc(trailX, trailY, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorB}, ${(dotAlpha * 0.45).toFixed(2)})`;
          ctx.fill();
        }
      }

      // -----------------------------------------------------------------------
      // 3. Draw Interactive Constellation Mesh in the background
      // -----------------------------------------------------------------------
      const maxDist = 120;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce within bounding area
        if (n.x < width * 0.25 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Node-to-node connectors
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${colorB}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Draw pulsating node dot
        const pulse = Math.sin(tick * 0.03 + n.pulsePhase);
        const radius = n.radius + pulse * 0.4;
        const nodeAlpha = 0.35 + 0.35 * pulse;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(radius, 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorC}, ${nodeAlpha.toFixed(2)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, colorA, colorB, colorC]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
