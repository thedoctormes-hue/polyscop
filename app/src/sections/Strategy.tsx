import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { IconShield, IconBrainChip, IconFlag, IconExchange } from '@/components/icons';
import { cn } from '@/lib/utils';

const strategies = [
  {
    icon: IconShield,
    title: 'Нацпроект «Продолжительная и активная жизнь»',
    desc: 'Повышение качества диагностики онкологических заболеваний — снижение смертности',
  },
  {
    icon: IconBrainChip,
    title: 'Федеральный проект цифрового здравоохранения',
    desc: 'Внедрение интеллектуальных ИИ-решений в клиническую практику на всех уровнях',
  },
  {
    icon: IconFlag,
    title: 'Стратегия развития ИИ в РФ',
    desc: 'Отечественная разработка, технологический суверенитет в сфере медицинского ИИ',
  },
  {
    icon: IconExchange,
    title: 'Импортозамещение медицинских технологий',
    desc: 'Замена ушедших западных решений: GI Genius, CAD EYE, ENDO-AID',
  },
];

const effects = [
  'Повышение качества диагностики колоректального рака на ранних стадиях',
  'Внедрение отечественных ИИ-решений в государственные клиники',
  'Технологический суверенитет в области медицинского искусственного интеллекта',
  'Снижение нагрузки на врачей и уменьшение человеческого фактора',
];

export function Strategy() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="strategy" className="bg-[#040A14] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Соответствие стратегии" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-[#E6F1FF] leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Нацпроекты, ИИ-стратегия, импортозамещение
        </h2>

        {/* Strategy grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {strategies.map((strat, i) => {
            const Icon = strat.icon;
            return (
              <div
                key={strat.title}
                className={cn(
                  'bg-[#08101F] border border-[rgba(0,229,255,0.1)] p-8 rounded-lg card-glow transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="text-[#00E5FF]">
                  <Icon size={32} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-[#E6F1FF]">{strat.title}</h3>
                <p className="mt-2 text-sm text-[rgba(230,241,255,0.6)] leading-relaxed">{strat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Effects */}
        <div
          className={cn(
            'mt-16 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="font-oswald text-xl uppercase tracking-[-0.02em] text-[#E6F1FF] text-center">
            Эффекты внедрения
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-[800px] mx-auto">
            {effects.map((effect, i) => (
              <div
                key={effect}
                className={cn(
                  'flex items-start gap-3 transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${700 + i * 100}ms` }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#00E5FF] flex-shrink-0 mt-0.5">
                  <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-base text-[rgba(230,241,255,0.6)] leading-relaxed">{effect}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
