import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import {
  IconLightning,
  IconSearch,
  IconEye,
  IconCircleOff,
  IconSquare,
  IconDiamond,
} from '@/components/icons';
import { cn } from '@/lib/utils';

const features = [
  { icon: IconLightning, title: 'В реальном времени', desc: 'Анализирует видеопоток с эндоскопа непрерывно, без задержек и прерываний' },
  { icon: IconSearch, title: 'Обнаруживает', desc: 'Подозрительные образования и полипы всех типов, включая плоские' },
  { icon: IconEye, title: 'Подсвечивает', desc: 'Полипы на экране врача с задержкой менее 100 мс' },
  { icon: IconCircleOff, title: 'Не вмешивается', desc: 'Подключение через пассивный HDMI-сплиттер, не требует модификации оборудования' },
  { icon: IconSquare, title: 'Не требует интернета', desc: 'Весь инференс локально на Jetson. Данные не покидают кабинет' },
  { icon: IconDiamond, title: 'Работает с любым', desc: 'Совместим с эндоскопами любого производителя через стандартный HDMI' },
];

export function Solution() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="solution" className="bg-[var(--bg-secondary)] section-padding">
      <div ref={ref} className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-16 items-center">
          {/* Left column - content */}
          <div>
            <div
              className={cn(
                'transition-all duration-600',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <SectionLabel text="Решение" />
            </div>

            <h2
              className={cn(
                'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Система компьютерного зрения для поддержки врача
            </h2>

            <p
              className={cn(
                'mt-4 text-xl text-[#00E5FF] transition-all duration-600',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              Чувствительность 94% — сопоставимо с экспертом-эндоскопистом
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={cn(
                      'flex items-start gap-4 transition-all duration-500',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-card border border-[var(--accent-cyan-dim)] flex items-center justify-center text-[#00E5FF]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-foreground">{feature.title}</div>
                      <div className="text-sm text-[var(--text-secondary)] mt-0.5">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - image */}
          <div
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative rounded-lg overflow-hidden border border-[var(--accent-cyan-dim)] shadow-glow">
              <img
                src="/assets/solution-endoscopy.jpg"
                alt="AI-детекция полипа в реальном времени"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
