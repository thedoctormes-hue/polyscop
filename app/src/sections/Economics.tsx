import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const pricingCards = [
  { price: '35 000 ₽', label: 'Базовый комплект «под ключ»', desc: 'Инференс-блок + ПО + кабели + настройка', badge: null },
  { price: '15 000 ₽/мес', label: 'Подписка', desc: 'ПО + техническая поддержка + обновления моделей', badge: 'POPULAR' },
  { price: '30 000 ₽', label: 'Разово за установку', desc: 'Выезд специалиста, интеграция, обучение персонала', badge: null },
];

const metrics = [
  { value: '50.9%', label: 'Маржинальность по чистой прибыли' },
  { value: '~190 000 ₽', label: 'Мин. прибыль с единицы (консервативная оценка)' },
  { value: '2.1×', label: 'ROI на единицу, окупаемость с первой продажи' },
];

export function Economics() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="economics" className="bg-[#040A14] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Экономика" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-[#E6F1FF] leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          35 000 ₽ «под ключ» с маржинальностью 50.9%
        </h2>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pricingCards.map((card, i) => (
            <div
              key={card.label}
              className={cn(
                'bg-[#08101F] border border-[rgba(0,229,255,0.1)] p-8 md:p-10 rounded-lg card-glow transition-all duration-500 relative',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {card.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider bg-[rgba(0,229,255,0.15)] text-[#00E5FF] px-2 py-1 rounded">
                  {card.badge}
                </span>
              )}
              <div className="font-mono text-3xl md:text-4xl text-[#00E5FF]">{card.price}</div>
              <div className="mt-3 text-lg font-medium text-[#E6F1FF]">{card.label}</div>
              <div className="mt-2 text-sm text-[rgba(230,241,255,0.6)]">{card.desc}</div>
            </div>
          ))}
        </div>

        {/* Profit calculation */}
        <div
          className={cn(
            'mt-16 bg-[#08101F] border border-[rgba(0,229,255,0.1)] p-8 md:p-12 rounded-lg transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="font-oswald text-xl uppercase tracking-[-0.02em] text-[#E6F1FF] text-center">
            Расчёт прибыли (ОСН)
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[#00E5FF]">550 000 ₽</div>
              <div className="text-xs text-[rgba(230,241,255,0.35)] mt-1 uppercase">Цена продажи</div>
            </div>
            <span className="text-2xl text-[rgba(230,241,255,0.35)]">−</span>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[rgba(230,241,255,0.6)]">200 000 ₽</div>
              <div className="text-xs text-[rgba(230,241,255,0.35)] mt-1 uppercase">Себестоимость</div>
            </div>
            <span className="text-2xl text-[rgba(230,241,255,0.35)]">−</span>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-[rgba(230,241,255,0.6)]">116 667 ₽</div>
              <div className="text-xs text-[rgba(230,241,255,0.35)] mt-1 uppercase">Налоги (ОСН)</div>
            </div>
            <span className="text-2xl text-[#00E5FF]">=</span>
            <div className="text-center">
              <div className="font-mono text-3xl md:text-4xl text-[#00E5FF] text-glow-cyan">233 333 ₽</div>
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
              <div className="mt-2 text-sm text-[rgba(230,241,255,0.6)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
