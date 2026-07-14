import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const contextCards = [
  { number: '5 000', desc: 'эндоскопических кабинетов по всей России — растущий рынок' },
  { title: 'Рост спроса', desc: 'на AI-диагностику, госпрограммы цифровизации здравоохранения' },
  { title: 'Импортозамещение', desc: 'уход западных решений открывает рынок' },
];

const marketRows = [
  { coverage: '10%', cabinets: '500', revenue: '0.19 млрд ₽', subscription: '90 млн ₽', total: '0.28 млрд ₽' },
  { coverage: '30%', cabinets: '1 500', revenue: '0.58 млрд ₽', subscription: '270 млн ₽', total: '0.85 млрд ₽' },
  { coverage: '60%', cabinets: '3 000', revenue: '1.16 млрд ₽', subscription: '540 млн ₽', total: '1.70 млрд ₽' },
  { coverage: '100%', cabinets: '5 000', revenue: '1.93 млрд ₽', subscription: '900 млн ₽', total: '2.83 млрд ₽', highlight: true },
];

export function Market() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="market" className="bg-background section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Рынок РФ" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-foreground leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          5 000 кабинетов, потенциал 2.83 млрд ₽
        </h2>

        {/* Context cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contextCards.map((card, i) => (
            <div
              key={card.number || card.title}
              className={cn(
                'bg-card border border-[var(--accent-cyan-dim)] p-6 rounded-lg text-center card-glow transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {card.number && (
                <div className="font-mono text-2xl text-[#00E5FF]">{card.number}</div>
              )}
              {card.title && (
                <div className="text-base font-medium text-foreground">{card.title}</div>
              )}
              <div className="mt-2 text-sm text-[var(--text-secondary)]">{card.desc}</div>
            </div>
          ))}
        </div>

        {/* Market table */}
        <div
          className={cn(
            'mt-12 overflow-x-auto transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-[var(--bg-elevated)]">
                <th className="text-left px-4 md:px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Покрытие
                </th>
                <th className="text-left px-4 md:px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Кабинетов
                </th>
                <th className="text-left px-4 md:px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Выручка (оборуд.)
                </th>
                <th className="text-left px-4 md:px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Подписка / год
                </th>
                <th className="text-left px-4 md:px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Итого
                </th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr
                  key={row.coverage}
                  className={cn(
                    'border-b border-[var(--accent-cyan-dim)] transition-colors',
                    row.highlight && 'bg-[var(--glow-color)]'
                  )}
                >
                  <td className="px-4 md:px-6 py-4 text-base font-medium text-foreground">{row.coverage}</td>
                  <td className="px-4 md:px-6 py-4 text-base text-[var(--text-secondary)]">{row.cabinets}</td>
                  <td className="px-4 md:px-6 py-4 text-base text-[var(--text-secondary)]">{row.revenue}</td>
                  <td className="px-4 md:px-6 py-4 text-base text-[var(--text-secondary)]">{row.subscription}</td>
                  <td className={cn(
                    'px-4 md:px-6 py-4 text-base font-medium',
                    row.highlight ? 'text-[#00E5FF]' : 'text-[#00E5FF]/80'
                  )}>
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className={cn(
            'mt-8 text-lg md:text-xl text-center text-[#00E5FF] transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          Даже при 10% покрытии рынка — выручка 280 млн ₽
        </p>
      </div>
    </section>
  );
}
