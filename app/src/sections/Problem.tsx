import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const stats = [
  { value: 26, suffix: '%', label: 'аденом пропускается', desc: 'Наиболее распространённый тип полипов с высоким риском малигнизации' },
  { value: 27, suffix: '%', label: 'серрированных полипов', desc: 'Сложнее обнаружить визуально, требуют повышенного внимания' },
  { value: 34, suffix: '%', label: 'плоских аденом', desc: 'Самый высокий процент пропуска из-за плоского профиля' },
];

function StatCard({
  value,
  suffix,
  label,
  desc,
  isVisible,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 1200, 0, isVisible);

  return (
    <div
      className={cn(
        'bg-[#08101F] border border-[rgba(0,229,255,0.1)] p-8 md:p-10 rounded-lg card-glow transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{
        transitionDelay: `${delay}ms`,
        borderTopWidth: '3px',
        borderTopColor: '#FF00E5',
      }}
    >
      <div className="font-mono text-5xl md:text-6xl text-[#FF00E5] leading-none">
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-base text-[rgba(230,241,255,0.6)]">{label}</div>
      <div className="mt-2 text-sm text-[rgba(230,241,255,0.35)]">{desc}</div>
    </div>
  );
}

export function Problem() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="problem" className="bg-[#040A14] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Проблема" color="magenta" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-[#E6F1FF] max-w-[700px] leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          Каждый четвёртый полип пропускается при колоноскопии
        </h2>

        <p
          className={cn(
            'mt-3 text-base text-[rgba(230,241,255,0.6)] transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Мета-анализ 43 исследований, &gt;15 000 колоноскопий (Gastroenterology, 2019)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
              isVisible={isVisible}
              delay={200 + i * 80}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={cn(
            'mt-12 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-[#FF00E5] to-transparent" />
          <p className="mt-4 text-base text-center text-[#FF00E5]/70">
            Пропуск полипа → колоректальный рак → стоимость лечения в 10–50 раз выше ранней диагностики
          </p>
        </div>
      </div>
    </section>
  );
}
