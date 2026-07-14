import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    role: 'Научный руководитель',
    desc: 'Научная обоснованность модели, экспертная оценка, публикации в рецензируемых журналах',
    tags: ['Медицинские ИС', 'Клиническая эндоскопия'],
  },
  {
    role: 'Врач-методист',
    desc: 'Клиническая экспертиза, валидация сценариев, проведение клинических испытаний',
    tags: ['Клиническая эндоскопия', 'Медицинская методология'],
  },
  {
    role: 'Технический руководитель',
    desc: 'ML-pipeline разработка, архитектура и код, инфраструктура и интеграция',
    tags: ['Машинное обучение', 'Компьютерное зрение'],
  },
  {
    role: 'Бизнес-развитие',
    desc: 'Выход на рынок, взаимодействие с клиниками, регуляторика медизделий',
    tags: ['Регуляторика медизделий', 'B2B продажи'],
  },
];

const values = ['Пациентоориентированность', 'Научная строгость', 'Технологическое лидерство'];

export function Team() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="team" className="bg-[var(--bg-secondary)] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Команда" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Профессионалы с экспертизой в медицинских ИС, эндоскопии и ML
        </h2>

        <p
          className={cn(
            'mt-3 text-base font-mono text-[var(--text-secondary)] transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '150ms' }}
        >
          Медицинские ИС · Клиническая эндоскопия · Машинное обучение · Компьютерное зрение · Регуляторика медизделий
        </p>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, i) => (
            <div
              key={member.role}
              className={cn(
                'bg-card border border-[var(--accent-cyan-dim)] p-8 rounded-lg text-center card-glow transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--glow-color)] border-2 border-[var(--glow-strong)] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00E5FF]/60">
                  <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 28C6 28 8 20 16 20C24 20 26 28 26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="mt-4 text-xl font-medium text-foreground">{member.role}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{member.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-background border border-[var(--accent-cyan-dim)] px-3 py-1 rounded text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          className={cn(
            'mt-12 text-center transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">Ценности команды</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4">
            {values.map((val) => (
              <span key={val} className="font-mono text-base text-[#00E5FF]">
                ● {val}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
