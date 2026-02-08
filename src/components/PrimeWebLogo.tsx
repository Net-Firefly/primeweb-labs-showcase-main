const PrimeWebLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
        <stop offset="100%" stopColor="hsl(270, 70%, 60%)" />
      </linearGradient>
    </defs>
    {/* Abstract P / connected nodes */}
    <path
      d="M8 32V8h8c6.627 0 12 4.373 12 10s-5.373 10-12 10h-4"
      stroke="url(#logoGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="28" cy="18" r="3" fill="url(#logoGradient)" opacity="0.8" />
    <circle cx="20" cy="28" r="2.5" fill="url(#logoGradient)" opacity="0.6" />
    <line
      x1="28"
      y1="18"
      x2="20"
      y2="28"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <circle cx="34" cy="10" r="2" fill="url(#logoGradient)" opacity="0.4" />
    <line
      x1="28"
      y1="18"
      x2="34"
      y2="10"
      stroke="url(#logoGradient)"
      strokeWidth="1"
      opacity="0.3"
    />
  </svg>
);

export default PrimeWebLogo;
