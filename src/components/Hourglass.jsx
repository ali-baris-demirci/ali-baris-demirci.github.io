export default function Hourglass() {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      className="animate-hourglass-flip inline-block"
      aria-label="Hourglass"
    >
      {/* Top frame bar */}
      <line x1="1" y1="1" x2="17" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom frame bar */}
      <line x1="1" y1="21" x2="17" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Glass outline */}
      <path
        d="M2 2 L16 2 L9 11 L16 20 L2 20 L9 11 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
