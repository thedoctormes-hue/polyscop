import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Продукт', href: '#solution' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Экономика', href: '#economics' },
  { label: 'Рынок', href: '#market' },
  { label: 'Команда', href: '#team' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300',
          scrolled
            ? 'bg-[#040A14]/85 backdrop-blur-xl border-b border-[rgba(0,229,255,0.08)]'
            : 'bg-transparent'
        )}
      >
        <div className="content-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-oswald text-xl font-medium tracking-[0.15em] uppercase text-[#E6F1FF]">
              ПОЛИСКОП
            </span>
            <span className="hidden sm:inline-block w-[1px] h-4 bg-[rgba(0,229,255,0.1)]" />
            <span className="hidden sm:inline-block text-[11px] font-inter text-[rgba(230,241,255,0.35)] uppercase tracking-[0.05em]">
              AI-ассистент
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-inter text-[rgba(230,241,255,0.6)] hover:text-[#00E5FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[12px] font-inter font-medium uppercase tracking-[0.08em] px-5 py-2.5 bg-[#00E5FF] text-[#040A14] rounded-md hover:shadow-glow-button transition-all duration-300"
            >
              Связаться
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={cn(
                'w-6 h-[2px] bg-[rgba(230,241,255,0.6)] transition-all duration-300',
                mobileOpen && 'rotate-45 translate-y-[5px] bg-[#00E5FF]'
              )}
            />
            <span
              className={cn(
                'w-6 h-[2px] bg-[rgba(230,241,255,0.6)] transition-all duration-300',
                mobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-[2px] bg-[rgba(230,241,255,0.6)] transition-all duration-300',
                mobileOpen && '-rotate-45 -translate-y-[5px] bg-[#00E5FF]'
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#040A14] flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-oswald text-2xl uppercase tracking-[0.05em] text-[#E6F1FF] hover:text-[#00E5FF] transition-colors"
            style={{
              transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="mt-4 text-base font-inter font-medium uppercase tracking-[0.08em] px-8 py-3 bg-[#00E5FF] text-[#040A14] rounded-md"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : '0ms',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          Связаться
        </a>
      </div>
    </>
  );
}
