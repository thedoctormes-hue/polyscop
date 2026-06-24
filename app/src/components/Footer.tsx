export function Footer() {
  return (
    <footer className="bg-[#040A14] border-t border-[rgba(0,229,255,0.1)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="content-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-oswald text-base font-medium tracking-[0.1em] text-[#E6F1FF]">
            ПОЛИСКОП
          </span>
          <p className="text-xs text-[rgba(230,241,255,0.35)] mt-1">&copy; 2026</p>
        </div>

        <a
          href="https://scopiq.gyxer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] text-[#00E5FF] hover:underline"
        >
          scopiq.gyxer.com
        </a>

        <div className="text-right">
          <p className="text-xs text-[rgba(230,241,255,0.35)]">
            Импортозамещающее решение
          </p>
          <p className="text-xs text-[rgba(230,241,255,0.35)]">
            AI-ассистент детекции полипов
          </p>
        </div>
      </div>
    </footer>
  );
}
