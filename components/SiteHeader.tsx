import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-crimson)] text-lg tracking-tight text-stone-100 transition hover:text-orange-400"
        >
          Turan Almammadov
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-400">
          <a
            href="#about"
            className="transition hover:text-stone-100"
          >
            About
          </a>
          <a
            href="https://medium.com/turan-almammadov"
            className="transition hover:text-stone-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing
          </a>
          <a href="#contact" className="transition hover:text-stone-100">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
