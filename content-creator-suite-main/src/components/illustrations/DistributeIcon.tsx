const DistributeIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1" />
    <rect x="26" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1" />
    <rect x="48" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1" />
    <line x1="32" y1="8" x2="10" y2="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="32" y1="8" x2="32" y2="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="32" y1="8" x2="54" y2="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <circle cx="32" cy="8" r="3" fill="currentColor" opacity="0.2" />
  </svg>
);

export default DistributeIcon;
