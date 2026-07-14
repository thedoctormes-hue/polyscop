import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const pricingCards = [
  { price: '550 000 ₽', label: 'Базовый комплект «под ключ»', desc: 'Инференс-блок + ПО + кабели + настройка', badge: null },
  { price: '35 000 ₽', label: 'Подписка', desc: 'ПО + техническая поддержка + обновления моделей', badge: 'POPULAR' },
  { price: '30 000 ₽', label: 'Разово за установку', desc: 'Выезд специалиста, интеграция, обучение персонала', badge: null },
];

const metrics = [
  { value: '~221 667 ₽', label: 'Прибыль с единицы (ОСН)' },
  { value: '2.76×', label: 'ROI на единицу, окупаемость с первой продажи' },
];

export function Economics() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="economics" className="bg-background section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Экономика" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          550 000 ₽ «под ключ»
        </h2>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pricingCards.map((card, i) => (
            <div
              key={card.label}
              className={cn(
                'bg-card border border-[var(--accent-cyan-dim)] p-8 md:p-10 rounded-lg card-glow transition-all duration-500 relative',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {card.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider bg-[var(--glow-color)] text-[#00E5FF] px-2 py-1 rounded">
                  {card.badge}
                </span>
              )}
              <div className="font-mono text-3xl md:text-4xl text-[#00E5FF]">{card.price}</div>
              <div className="mt-3 text-lg font-medium text-foreground">{card.label}</div>
              <div className="mt-2 text-sm text-[var(--text-secondary)]">{card.desc}</div>
            </div>
          ))}
        </div>

        {/* Profit calculation */}
        <div
          className={cn(
            'mt-16 bg-card border border-[var(--accent-cyan-dim)] p-8 md:p-12 rounded-lg transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="font-oswald text-xl uppercase tracking-[-0.02em] text-foreground text-center">
            Расчёт прибыли (ОСН)
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[#00E5FF]">550 000 ₽</div>
              <div className="text-xs text-[var(--text-muted)] mt-1 uppercase">Цена продажи</div>
            </div>
            <span className="text-2xl text-[var(--text-muted)]">−</span>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[var(--text-secondary)]">200 000 ₽</div>
              <div className="text-xs text-[var(--text-muted)] mt-1 uppercase">Себестоимость</div>
            </div>
            <span className="text-2xl text-[var(--text-muted)]">−</span>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[var(--text-secondary)]">128 333 ₽</div>
              <div className="text-xs text-[var(--text-muted)] mt-1 uppercase">Налоги (ОСН)</div>
            </div>
            <span className="text-2xl text-[#00E5FF]">=</span>
            <div className="text-center">
              <div className="font-mono text-3xl md:text-4xl text-[#00E5FF] text-glow-cyan">221 667 ₽</div>
              <div className="text-xs text-[#00E5FF]/60 mt-1 uppercase">Прибыль</div>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={cn(
                'text-center transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${700 + i * 100}ms` }}
            >
              <div className="font-mono text-2xl md:text-3xl text-[#00E5FF]">{metric.value}</div>
              <div className="mt-2 text-sm text-[var(--text-secondary)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
