// Logo component using exact theme colors:
// primary: #0ea5e9 (sky blue) → #0284c7
// secondary: #d946ef (fuchsia) → #c026d3

export default function Logo({ className = '', height = 40, variant = 'color' }) {
  // variant: 'color' for light bg, 'white' for dark bg (footer)
  const isWhite = variant === 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 44"
      height={height}
      style={{ width: 'auto', display: 'block' }}
      className={className}
      aria-label="BudgetYatra — Travel Smart, Spend Less"
      role="img"
    >
      <defs>
        <linearGradient id={`lg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isWhite ? '#ffffff' : '#0ea5e9'} />
          <stop offset="100%" stopColor={isWhite ? '#e0f2fe' : '#0284c7'} />
        </linearGradient>
        <linearGradient id={`ig-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isWhite ? '#bae6fd' : '#0ea5e9'} />
          <stop offset="100%" stopColor={isWhite ? '#ffffff' : '#d946ef'} />
        </linearGradient>
      </defs>

      {/* ── Globe ── */}
      {/* Outer circle */}
      <circle cx="22" cy="20" r="13" fill="none" stroke={`url(#ig-${variant})`} strokeWidth="2" />
      {/* Horizontal arcs */}
      <path d="M9 20 Q22 14 35 20" fill="none" stroke={`url(#ig-${variant})`} strokeWidth="1.4" />
      <path d="M9 20 Q22 26 35 20" fill="none" stroke={`url(#ig-${variant})`} strokeWidth="1.4" />
      {/* Vertical ellipse */}
      <ellipse cx="22" cy="20" rx="6.5" ry="13" fill="none" stroke={`url(#ig-${variant})`} strokeWidth="1.4" />

      {/* ── Airplane over globe ── */}
      <g transform="translate(15,13) rotate(-28)">
        {/* Body */}
        <path d="M0 0 L11 -2.5 L13 0 L11 2.5 Z" fill={`url(#ig-${variant})`} />
        {/* Left wing */}
        <path d="M4 -0.8 L8 -5.5 L9.5 -4 L6.5 -0.5Z" fill={`url(#ig-${variant})`} opacity="0.85" />
        {/* Right wing */}
        <path d="M4 0.8 L8 5.5 L9.5 4 L6.5 0.5Z" fill={`url(#ig-${variant})`} opacity="0.85" />
        {/* Tail */}
        <path d="M9.5 -0.4 L12 -2.2 L12.5 -1 L10.5 0.4Z" fill={`url(#ig-${variant})`} opacity="0.7" />
      </g>

      {/* ── BUDGETYATRA text ── */}
      <text
        x="44"
        y="23"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="1.2"
        fill={`url(#lg-${variant})`}
      >
        BUDGETYATRA
      </text>

      {/* ── Tagline ── */}
      <text
        x="45"
        y="35"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="2.2"
        fill={isWhite ? '#bae6fd' : '#0ea5e9'}
        opacity="0.9"
      >
        TRAVEL SMART. SPEND LESS
      </text>
    </svg>
  );
}
