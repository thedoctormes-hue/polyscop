import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const stats = [
  { value: '94%', label: 'чувствительность' },
  { value: '<100 мс', label: 'задержка' },
  { value: '35 000 ₽', label: 'стартовая цена' },
  { value: '100%', label: 'локальный' },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-cta section-padding"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      <div ref={ref} className="max-w-[800px] mx-auto text-center px-4 sm:px-6">
        <SectionLabel text="Свяжитесь с нами" centered />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-[#E6F1FF] leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Готовы обсудить пилотный проект в вашей клинике
        </h2>

        <p
          className={cn(
            'mt-4 text-base text-[rgba(230,241,255,0.6)] transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          Демонстрация работы системы · Техническая консультация · Коммерческое предложение
        </p>

        {/* Stats */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-8 md:gap-16 mt-12 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '300ms' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl md:text-5xl text-[#00E5FF]">{stat.value}</div>
              <div className="mt-2 text-sm text-[rgba(230,241,255,0.6)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-4 mt-12 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-10 py-5 bg-[#00E5FF] text-[#040A14] text-base font-medium uppercase tracking-[0.08em] rounded-md hover:shadow-glow-button hover:bg-[#33EBFF] transition-all duration-300"
          >
            Запросить демо
          </button>
          <a
            href="https://scopiq.gyxer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-[rgba(0,229,255,0.4)] text-[#00E5FF] text-base font-medium uppercase tracking-[0.08em] rounded-md hover:bg-[rgba(0,229,255,0.1)] hover:border-[#00E5FF] transition-all duration-300"
          >
            Посмотреть демо
          </a>
        </div>

        {/* Contact link */}
        <div
          className={cn(
            'mt-8 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://scopiq.gyxer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base text-[#00E5FF] border-b border-[#00E5FF] hover:text-[#33EBFF] hover:border-[#33EBFF] transition-colors"
          >
            scopiq.gyxer.com
          </a>
        </div>

        {/* Footer tagline */}
        <p
          className={cn(
            'mt-20 font-mono text-xs text-[rgba(230,241,255,0.35)] uppercase tracking-wider transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          ПОЛИСКОП | AI-ассистент детекции полипов | Импортозамещающее решение
        </p>
      </div>
    </section>
  );
}
