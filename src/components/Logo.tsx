export function Logo({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="9" fill="#b8994f" />
        <path d="M11 24V8h6.2c3.4 0 5.6 2 5.6 5s-2.2 5-5.6 5H11" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span className={`block text-[1.12rem] font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          <span className={light ? 'text-gold' : 'text-accent'}>P</span>AL
        </span>
        <span className={`mt-0.5 block text-[0.62rem] font-medium tracking-[0.18em] uppercase ${light ? 'text-white/60' : 'text-muted'}`}>
          Web Agency
        </span>
      </span>
    </span>
  );
}
