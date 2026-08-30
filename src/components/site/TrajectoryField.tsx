/** Decorative CSS/SVG trajectory field for the homepage hero. */
export function TrajectoryField() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="altair-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--cyan-500)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--cyan-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--cyan-300)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <path
        d="M-40 470 C 240 470, 320 300, 600 300 S 960 140, 1240 140"
        fill="none"
        stroke="url(#altair-path)"
        strokeWidth="1.5"
        strokeDasharray="10 14"
        style={{ animation: "trajectory-dash 14s linear infinite" }}
      />
      <path
        d="M-40 560 C 300 560, 420 420, 760 420 S 1080 330, 1240 330"
        fill="none"
        stroke="var(--cyan-300)"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {[
        { cx: 180, cy: 452 },
        { cx: 600, cy: 300 },
        { cx: 1020, cy: 168 },
      ].map((node, i) => (
        <circle
          key={node.cx}
          cx={node.cx}
          cy={node.cy}
          r={4}
          fill="var(--cyan-500)"
          style={{ animation: `signal-pulse 4s ease-in-out ${i * 0.8}s infinite` }}
        />
      ))}
    </svg>
  );
}
