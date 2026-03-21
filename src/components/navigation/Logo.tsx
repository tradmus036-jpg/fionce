interface LogoProps {
  className?: string;
  iconSize?: number;
  showWordmark?: boolean;
  wordmarkClass?: string;
}

export default function Logo({
  className = "",
  iconSize = 32,
  showWordmark = true,
  wordmarkClass = "text-xl font-bold text-indigo-600",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* SVG Mark — geometric "F" monogram on indigo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#4F46E5" />
        {/* F lettermark */}
        <path
          d="M9 8h14v3H12v4h8v3h-8v6H9V8z"
          fill="white"
        />
        {/* Accent dot — bottom right */}
        <circle cx="23" cy="23" r="2.5" fill="#818CF8" />
      </svg>

      {showWordmark && (
        <span
          className={wordmarkClass}
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
          }}
        >
          Fionce
        </span>
      )}
    </span>
  );
}
