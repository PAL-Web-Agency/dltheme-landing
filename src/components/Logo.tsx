export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="7" fill="#2b1f17" />
        <path d="M8 9h5.2c4 0 6.3 2.6 6.3 7s-2.3 7-6.3 7H8V9Z" fill="none" stroke="#f7f3ec" strokeWidth="2.4" />
        <path d="M21 9v14h4.5" fill="none" stroke="#d2a65a" strokeWidth="2.4" />
      </svg>
      <span className="font-display text-[1.15rem] font-bold tracking-tight">
        DL <span className="font-medium">Theme</span>
      </span>
    </span>
  );
}
