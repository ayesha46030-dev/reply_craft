const ConnectIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
    <circle cx="48" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
    <circle cx="32" cy="48" r="6" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="20" x2="28" y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="44" y1="20" x2="36" y2="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="22" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
  </svg>
);

export default ConnectIcon;
