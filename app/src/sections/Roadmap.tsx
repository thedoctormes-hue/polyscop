import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { IconColon, IconStomach, IconLungs, IconBladder } from '@/components/icons';
import { cn } from '@/lib/utils';

const stages = [
  {
    icon: IconColon,
    label: 'ЭТАП 1 — СЕЙЧАС',
    title: 'Колоноскопия',
    desc: 'Детекция полипов',
    focus: 'Профилактика колоректального рака',
    active: true,
  },
  {
    icon: IconStomach,
    label: 'ЭТАП 2',
    title: 'Гастроскопия',
    desc: 'Раннее выявление рака желудка',
    focus: 'Детекция H. pylori',
    active: false,
  },
  {
    icon: IconLungs,
    label: 'ЭТАП 3',
    title: 'Бронхоскопия',
    desc: 'Диагностика рака лёгкого',
    focus: 'На ранней стадии',
    active: false,
  },
  {
    icon: IconBladder,
    label: 'ЭТАП 4',
    title: 'Цистоскопия',
    desc: 'Выявление рака мочевого пузыря',
    focus: '',
    active: false,
  },
];

export function Roadmap() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="roadmap" className="bg-[var(--bg-secondary)] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Дальнейшее развитие" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          От колоноскопии ко всей эндоскопии
        </h2>

        {/* Timeline desktop */}
        <div className="hidden md:block mt-16">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute top-[7px] left-[12.5%] right-[12.5%] h-[2px] bg-[var(--accent-cyan-dim)]" />

            {/* Dots row */}
            <div className="flex justify-center gap-0">
              {stages.map((stage, i) => (
                <div key={stage.title} className="flex-1 flex justify-center">
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full z-10 transition-all duration-500',
                      stage.active
                        ? 'bg-[#00E5FF] shadow-glow-strong'
                        : 'bg-[var(--glow-strong)]'
                    )}
                    style={{
                      transitionDelay: `${300 + i * 100}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.title}
                  className={cn(
                    'bg-card border border-[var(--accent-cyan-dim)] p-8 rounded-lg card-glow transition-all duration-500',
                    stage.active && 'border-t-2 border-t-[#00E5FF]',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="text-[#00E5FF]">
                    <Icon size={28} />
                  </div>
                  <div className="mt-4 text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    {stage.label}
                  </div>
                  <div className="mt-2 text-2xl font-medium text-foreground">{stage.title}</div>
                  <div className="mt-2 text-sm text-[var(--text-secondary)]">{stage.desc}</div>
                  {stage.focus && (
                    <div className="mt-4 text-[13px] text-[#00E5FF]/60">{stage.focus}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline mobile */}
        <div className="flex md:hidden mt-12 flex-col gap-8">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="flex gap-4">
                {/* Vertical line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full flex-shrink-0 transition-all duration-500',
                      stage.active
                        ? 'bg-[#00E5FF] shadow-glow-strong'
                        : 'bg-[var(--glow-strong)]'
                    )}
                  />
                  {i < stages.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[var(--accent-cyan-dim)] mt-2" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={cn(
                    'flex-1 bg-card border border-[var(--accent-cyan-dim)] p-6 rounded-lg card-glow -mt-2 transition-all duration-500',
                    stage.active && 'border-l-2 border-l-[#00E5FF]',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="text-[#00E5FF]">
                    <Icon size={24} />
                  </div>
                  <div className="mt-3 text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    {stage.label}
                  </div>
                  <div className="mt-1 text-xl font-medium text-foreground">{stage.title}</div>
                  <div className="mt-1 text-sm text-[var(--text-secondary)]">{stage.desc}</div>
                  {stage.focus && (
                    <div className="mt-3 text-[13px] text-[#00E5FF]/60">{stage.focus}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth indicator */}
        <div
          className={cn(
            'mt-12 text-center transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="font-mono text-base text-[#00E5FF]">
            Каждый новый тип эндоскопии — ×4–5 рост адресуемого рынка
          </p>
        </div>
      </div>
    </section>
  );
}
