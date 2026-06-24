import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/utils';

const tableData = [
  { criterion: 'Стоимость', artincol: '3.75 млн ₽', poliscop: '550 тыс. ₽', highlight: true },
  { criterion: 'Подключение', artincol: 'Совместимый видеопроцессор, HD-SDI', poliscop: 'Любой эндоскоп через HDMI', highlight: false },
  { criterion: 'Парк эндоскопов', artincol: 'Требует совместное железо', poliscop: 'Работает с существующим парком', highlight: false },
  { criterion: 'Готовность', artincol: 'Нет — Legendo отдельно', poliscop: 'Да — всё включено', highlight: false },
  { criterion: 'Ценовой сегмент', artincol: 'Enterprise (сервер + МИС)', poliscop: 'Доступно любой клинике', highlight: false },
];

const advantages = [
  { title: 'В 7 раз дешевле', desc: 'Доступно частным клиникам' },
  { title: 'Plug-and-play', desc: 'Никакой модификации оборудования' },
  { title: 'Всё включено', desc: 'ПО, поддержка, обновления' },
  { title: 'Локальный инференс', desc: 'Без облака, без интернета' },
];

export function Competitors() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="competitors" className="bg-[#060E1A] section-padding">
      <div ref={ref} className="content-container">
        <SectionLabel text="Конкуренты" />

        <h2
          className={cn(
            'font-oswald text-3xl md:text-[40px] font-normal uppercase tracking-[-0.02em] text-[#E6F1FF] leading-tight transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          В 5 раз дешевле при сопоставимом качестве
        </h2>

        {/* Comparison table */}
        <div
          className={cn(
            'mt-12 overflow-x-auto transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-[#0D1829]">
                <th className="text-left px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  Критерий
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[rgba(230,241,255,0.6)] uppercase tracking-wider border-b-2 border-[#00E5FF]">
                  ArtInCol (NMITS)
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#00E5FF] uppercase tracking-wider border-b-2 border-[#00E5FF] bg-[rgba(0,229,255,0.05)]">
                  ПОЛИСКОП
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.criterion}
                  className="border-b border-[rgba(0,229,255,0.1)] hover:bg-[rgba(0,229,255,0.03)] transition-colors"
                >
                  <td className="px-6 py-5 text-base text-[#E6F1FF]">{row.criterion}</td>
                  <td className="px-6 py-5 text-base text-[rgba(230,241,255,0.6)]">{row.artincol}</td>
                  <td
                    className={cn(
                      'px-6 py-5 text-base font-medium bg-[rgba(0,229,255,0.03)]',
                      row.highlight ? 'text-[#00E5FF]' : 'text-[#00E5FF]/90'
                    )}
                  >
                    {row.poliscop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[13px] text-[rgba(230,241,255,0.35)]">
          * Источник: КП ООО «Ventum Med» от 23.06.2026
        </p>

        {/* Competitive advantages */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={cn(
                'text-center transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#08101F] border border-[rgba(0,229,255,0.1)] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00E5FF]">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mt-3 text-base font-medium text-[#E6F1FF]">{adv.title}</div>
              <div className="mt-1 text-[13px] text-[rgba(230,241,255,0.35)]">{adv.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
