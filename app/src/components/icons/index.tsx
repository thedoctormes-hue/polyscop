interface IconProps {
  className?: string;
  size?: number;
}

export function IconEndoscope({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M8 32C8 32 10 28 14 26C18 24 22 24 24 22C26 20 26 16 26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 14C26 12 28 10 30 10C32 10 34 12 34 14C34 16 32 18 30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="14" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 32L6 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 30L10 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconHDMISplitter({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="8" y="14" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M14 26V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 26V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 26V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 30H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 30H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
      <circle cx="26" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconAIChip({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="16" y="16" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 16H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 20H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 24H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 16H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 20H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 24H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 30V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 30V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 30V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMonitor({ className, size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 28V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 28V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 32H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 20L16 16L20 19L24 14L28 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="22" y="10" width="8" height="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1" />
    </svg>
  );
}

export function IconLightning({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M11 2L4 11H10L9 18L16 9H10L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSearch({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconEye({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCircleOff({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconSquare({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="4" y="4" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconDiamond({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 3L5 8V15C5 22 10 27.5 16 29C22 27.5 27 22 27 15V8L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 16L14 19L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBrainChip({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16C12 13 14 11 16 11C18 11 20 13 20 16C20 19 18 21 16 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 14C13 14 14 12 16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <path d="M8 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 20H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 12H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 16H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 20H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconFlag({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M6 4V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6L24 6L20 12L24 18L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconExchange({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M24 8L8 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 24L24 24L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4L24 8L28 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 28L8 24L4 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconColon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 4C16 4 10 8 10 16C10 24 16 28 16 28C16 28 22 24 22 16C22 8 16 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 14C13 14 14 12 16 12C18 12 19 14 19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconStomach({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M10 6C10 6 8 10 8 14C8 20 12 26 18 26C22 26 24 22 24 18C24 14 22 12 20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 6C10 6 12 4 14 4C16 4 18 6 18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 14C14 14 16 12 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLungs({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14C16 14 12 10 8 12C4 14 4 22 6 26C8 28 14 26 16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14C16 14 20 10 24 12C28 14 28 22 26 26C24 28 18 26 16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 18C10 18 12 16 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 18C22 18 20 16 18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBladder({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 6C16 6 10 10 10 18C10 24 13 28 16 28C19 28 22 24 22 18C22 10 16 6 16 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 16C14 16 15 14 16 14C17 14 18 16 18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
