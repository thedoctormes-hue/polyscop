import { cn } from '@/lib/utils';

interface SectionLabelProps {
  text: string;
  className?: string;
  color?: 'cyan' | 'magenta';
  centered?: boolean;
}

export function SectionLabel({ text, className, color = 'cyan', centered = false }: SectionLabelProps) {
  const colorClass = color === 'cyan' ? 'text-[#00E5FF]' : 'text-[#FF00E5]';
  const lineColor = color === 'cyan' ? 'bg-[#00E5FF]/40' : 'bg-[#FF00E5]/40';

  return (
    <div className={cn('flex items-center gap-3 mb-6', centered && 'justify-center', className)}>
      <span className={cn('w-8 h-[1px]', lineColor)} />
      <span className={cn('text-[11px] font-inter tracking-[0.1em] uppercase', colorClass)}>
        {text}
      </span>
    </div>
  );
}
