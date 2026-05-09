const PrismIcon = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M48 8L88 80H8L48 8Z" stroke="currentColor" strokeWidth="1" />
    <line x1="48" y1="8" x2="48" y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="48" y1="44" x2="20" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <line x1="48" y1="44" x2="76" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <line x1="48" y1="44" x2="48" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="48" cy="44" r="3" fill="currentColor" opacity="0.3" />
  </svg>
);

export default PrismIcon;
