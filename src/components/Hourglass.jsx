import { useEffect, useRef } from "react"

export default function Hourglass() {
  const topSandRef = useRef(null)
  const botSandRef = useRef(null)

  useEffect(() => {
    let animationId = null
    let startTime = null
    const CYCLE = 6000 // 6s full cycle

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const t = (elapsed % CYCLE) / CYCLE // 0 → 1

      // Phase: 0-0.7 pour, 0.7-0.8 pause, 0.8-1 flip
      let progress
      if (t < 0.7) {
        progress = t / 0.7 // 0→1 pour
      } else if (t < 0.8) {
        progress = 1 // paused at bottom
      } else {
        progress = 0 // flip (reset)
      }

      // Top sand: starts at y=2 (full), drains to y=12 (near empty)
      if (topSandRef.current) {
        const topY = 2 + (12 - 2) * progress
        topSandRef.current.setAttribute("y", topY)
      }

      // Bottom sand: starts at y=26 (empty), rises to y=14 (full)
      if (botSandRef.current) {
        const botY = 26 - (26 - 14) * progress
        botSandRef.current.setAttribute("y", botY)
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      aria-label="Hourglass animation"
      className="inline-block"
    >
      {/* Glass outline with rounded joints */}
      <path
        d="M2 2 L12 2 L22 2 L14 12 L14 14 L22 26 L12 26 L2 26 L10 14 L10 12 Z"
        stroke="#c8dbe8"
        strokeWidth="0.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Top frame bar */}
      <line x1="1" y1="1.5" x2="23" y2="1.5" stroke="#c8dbe8" strokeWidth="1" strokeLinecap="round" />
      {/* Bottom frame bar */}
      <line x1="1" y1="26.5" x2="23" y2="26.5" stroke="#c8dbe8" strokeWidth="1" strokeLinecap="round" />

      {/* Clip paths matching the hourglass chambers */}
      <defs>
        <clipPath id="top-chamber">
          <polygon points="2.4,2 21.6,2 14,14 10,14" />
        </clipPath>
        <clipPath id="bot-chamber">
          <polygon points="10,14 14,14 21.6,26 2.4,26" />
        </clipPath>
      </defs>

      {/* Top sand — clipped to top chamber */}
      <rect
        ref={topSandRef}
        x="2"
        y="2"
        width="20"
        height="12"
        fill="#2a5b7d"
        clipPath="url(#top-chamber)"
        opacity="0.55"
      />

      {/* Bottom sand — clipped to bottom chamber */}
      <rect
        ref={botSandRef}
        x="2"
        y="14"
        width="20"
        height="12"
        fill="#2a5b7d"
        clipPath="url(#bot-chamber)"
        opacity="0.55"
      />

      {/* Neck connection — subtle bridge between chambers */}
      <rect x="10" y="13.5" width="4" height="1" fill="#2a5b7d" opacity="0.7" rx="0.5" />
    </svg>
  )
}
