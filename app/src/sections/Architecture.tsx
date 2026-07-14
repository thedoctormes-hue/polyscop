import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { IconEndoscope, IconHDMISplitter, IconAIChip, IconMonitor } from '@/components/icons';
import { cn } from '@/lib/utils';

const steps = [
  { icon: IconEndoscope, name: 'Эндоскоп', desc: 'HDMI-out, любой производитель' },
  { icon: IconHDMISplitter, name: 'HDMI-сплиттер', desc: 'Пассивный, без задержек' },
  { icon: IconAIChip, name: 'Инференс-блок', desc: 'YOLOv8m + NVIDIA Jetson' },
  { icon: IconMonitor, name: 'Монитор врача', desc: 'Видео + оверлей AI' },
];

const techSpecs = [
  { value: '<100 мс', label: 'Задержка обработки кадра' },
  { value: '0.938', label: 'mAP50 точность детекции' },
  { value: 'Kvasir-SEG', label: 'Медицинский датасет полипов' },
  { value: 'YOLOv8m', label: 'State-of-the-art детекция' },
];

export function Architecture() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="architecture" className="bg-background section-padding">
      <div ref={ref} className="content-container">
        <div className="text-center">
          <SectionLabel text="Архитектура" centered />

          <h2
            className={cn(
              'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            От эндоскопа до монитора за &lt;100 мс
          </h2>
        </div>

        {/* Pipeline */}
        <div
          className={cn(
            'mt-16 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Desktop horizontal pipeline */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.name} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-[220px]">
                    <div className="w-14 h-14 rounded-full bg-card border border-[var(--glow-strong)] flex items-center justify-center text-[#00E5FF]">
                      <Icon size={32} />
                    </div>
                    <div className="mt-4 text-base font-medium text-foreground">{step.name}</div>
                    <div className="mt-2 text-[13px] text-[var(--text-secondary)] max-w-[180px]">
                      {step.desc}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex items-center mx-2">
                      <div className="w-16 lg:w-20 h-[1px] border-t border-dashed border-[var(--glow-strong)]" />
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#00E5FF] -ml-1">
                        <path d="M2 2L8 6L2 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile vertical pipeline */}
          <div className="flex md:hidden flex-col items-center gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.name} className="flex flex-col items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-card border border-[var(--glow-strong)] flex items-center justify-center text-[#00E5FF]">
                      <Icon size={32} />
                    </div>
                    <div className="mt-4 text-base font-medium text-foreground">{step.name}</div>
                    <div className="mt-2 text-[13px] text-[var(--text-secondary)] max-w-[200px]">
                      {step.desc}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex flex-col items-center mt-6">
                      <div className="w-[1px] h-8 border-l border-dashed border-[var(--glow-strong)]" />
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#00E5FF] rotate-90 -mt-1">
                        <path d="M2 2L8 6L2 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech specs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {techSpecs.map((spec, i) => (
            <div
              key={spec.value}
              className={cn(
                'border-t-2 border-[#00E5FF] pt-6 transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="font-mono text-2xl md:text-3xl text-[#00E5FF]">{spec.value}</div>
              <div className="mt-2 text-sm text-[var(--text-secondary)]">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
