import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Play, X } from 'lucide-react';

const specBadges = [
  { label: 'YOLOv8m', value: 'mAP50: 0.938' },
  { label: 'Задержка', value: '<100 мс' },
  { label: 'Датасет', value: 'Kvasir-SEG' },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040A14]/60 via-transparent to-[#040A14]" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glow-cyan translate-x-[30%] -translate-y-[30%] opacity-60 blur-[100px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 content-container flex flex-col items-center text-center px-4 sm:px-6">
        {/* Label */}
        <div
          className={cn(
            'flex items-center gap-3 mb-8 transition-all duration-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }}
        >
          <span className="w-8 h-[1px] bg-[#00E5FF]/40" />
          <span className="text-[11px] font-inter tracking-[0.1em] uppercase text-[#00E5FF]">
            Импортозамещающее решение
          </span>
        </div>

        {/* Heading */}
        <h1
          className={cn(
            'font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium leading-[0.95] tracking-[-0.04em] uppercase text-[#E6F1FF] max-w-[800px] transition-all duration-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transitionDelay: '150ms',
            textShadow: '0 0 60px rgba(0, 229, 255, 0.15)',
          }}
        >
          AI-ассистент детекции полипов
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            'mt-6 text-lg md:text-xl font-inter text-[rgba(230,241,255,0.6)] max-w-[600px] leading-relaxed transition-all duration-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transitionDelay: '300ms',
          }}
        >
          Система компьютерного зрения для поддержки врача-эндоскописта в реальном времени
        </p>

        {/* Spec badges */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-4 md:gap-10 mt-10 transition-all duration-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transitionDelay: '450ms',
          }}
        >
          {specBadges.map((badge) => (
            <div
              key={badge.label}
              className="border border-[rgba(0,229,255,0.1)] rounded-md px-5 py-3 text-center"
            >
              <div className="text-[11px] text-[rgba(230,241,255,0.35)] uppercase tracking-[0.1em]">
                {badge.label}
              </div>
              <div className="text-base font-mono text-[#00E5FF] mt-1">{badge.value}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-4 mt-12 transition-all duration-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transitionDelay: '600ms',
          }}
        >
          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-8 py-4 bg-[#00E5FF] text-[#040A14] text-sm font-medium uppercase tracking-[0.08em] rounded-md hover:shadow-glow-button hover:bg-[#33EBFF] transition-all duration-300"
          >
            Запросить демо
          </button>
          <button
            data-video-trigger
            onClick={() => setShowVideo(true)}
            className="px-8 py-4 border border-[rgba(0,229,255,0.4)] text-[#00E5FF] text-sm font-medium uppercase tracking-[0.08em] rounded-md hover:bg-[rgba(0,229,255,0.1)] hover:border-[#00E5FF] transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Смотреть демо
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-[#00E5FF]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-bounce-dot" />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-[90vw] max-w-[1200px] aspect-video rounded-lg overflow-hidden shadow-2xl shadow-[#00E5FF]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              src="/video/demo.mp4"
              controls
              autoPlay
              preload="metadata"
              className="w-full h-full object-contain"
              playsInline
            >
              <source src="/video/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
