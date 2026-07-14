export function Footer() {
  return (
    <footer className="bg-background border-t border-[var(--accent-cyan-dim)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="content-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-oswald text-base font-medium tracking-[0.1em] text-foreground">
            ПОЛИСКОП
          </span>
          <p className="text-xs text-[var(--text-muted)] mt-1">&copy; 2026</p>
        </div>


        <div className="text-right">
          <p className="text-xs text-[var(--text-muted)]">
            Импортозамещающее решение
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            AI-ассистент детекции полипов
          </p>
        </div>
      </div>
    </footer>
  );
}
