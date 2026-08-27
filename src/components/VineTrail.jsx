export default function VineTrail() {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block fixed top-0 left-8 h-full w-px pointer-events-none z-0"
    >
      <svg
        width="2"
        height="100%"
        className="h-full"
        preserveAspectRatio="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="var(--color-sage)"
          strokeWidth="1.5"
          strokeDasharray="1 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}