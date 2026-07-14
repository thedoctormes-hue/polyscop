import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const benefits = [
  { number: '94%', title: 'Снижение пропуска полипов', desc: 'AI работает непрерывно, без усталости. Чувствительность 94% — как у эксперта-эндоскописта с 10-летним опытом.' },
  { number: '0 ₽', title: 'Без замены оборудования', desc: 'Подключается к существующему парку эндоскопов через HDMI. Не требует совместимого видеопроцессора.' },
  { number: '100%', title: 'Данные остаются в клинике', desc: 'Полностью локальный инференс. Не требует интернета. Соответствует требованиям к медицинским данным и 152-ФЗ.' },
  { number: '10–50×', title: 'Экономическая эффективность', desc: 'Лечение пропущенного рака в 10–50 раз выше ранней диагностики. Один предотвращённый случай окупает систему.' },
];

export function Benefits() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="benefits" className="bg-[var(--bg-secondary)] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Что получает клиника" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          4 ключевых преимущества внедрения
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={cn(
                'bg-card border border-[var(--accent-cyan-dim)] p-8 rounded-lg card-glow transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: `${200 + i * 120}ms`,
                borderLeftWidth: '3px',
                borderLeftColor: '#00E5FF',
              }}
            >
              <div className="font-mono text-4xl md:text-5xl text-[#00E5FF]">{benefit.number}</div>
              <h3 className="mt-4 text-xl font-medium text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
