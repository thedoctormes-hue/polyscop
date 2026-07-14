import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Переключить тему"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--accent-cyan)]"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
