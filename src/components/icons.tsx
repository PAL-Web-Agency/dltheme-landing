type P = React.SVGProps<SVGSVGElement>;

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

/** Bong bóng chat có chữ "Zalo" — không dùng logo chính thức */
export const ZaloIcon = (p: P) => (
  <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      d="M12 3C6.5 3 2 6.8 2 11.5c0 2.6 1.4 4.9 3.6 6.5L5 21l3.6-1.8c1.1.3 2.2.5 3.4.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3Z"
      fill="currentColor"
    />
    <text x="12" y="13.6" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
      Zalo
    </text>
  </svg>
);

/** Chữ "f" trong ô tròn — không dùng logo chính thức */
export const FacebookIcon = (p: P) => (
  <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden {...p}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M13.2 20v-6.2h2.1l.3-2.5h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.4a17 17 0 0 0-1.9-.1c-1.9 0-3.2 1.2-3.2 3.3v1.8H8.5v2.5h2.1V20" fill="#fff" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/** Biểu tượng cho các gói dịch vụ */
export const BuildingIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4M9 14.5l2 2 4-4" />
  </svg>
);

export const BagIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
  </svg>
);

export const RocketIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 15c4-2.5 7-6.5 7-11-4.5 0-8.5 3-11 7l4 4Z" />
    <path d="M8 11 5 11l-2 3 4 1M13 16v3l-3 2-1-4M15.5 8.5h.01" />
  </svg>
);

export const DeviceIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="14" height="10" rx="1.5" />
    <path d="M6 18h7M9.5 14v4" />
    <rect x="17" y="9" width="4.5" height="10" rx="1" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.4 3 7.8 7 9.5 4-1.7 7-5.1 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChatIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 10h8M8 13h5" />
  </svg>
);
