const roles = [
  "entrepreneur",
  "futurist",
  "piano player",
  "product manager",
  "innovator",
  "maker of things",
] as const;

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-600/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-orange-400/90">
          Hi, I am Turan
        </p>
        <h1
          id="hero-heading"
          className="font-[family-name:var(--font-crimson)] text-4xl font-medium leading-[1.15] tracking-tight text-stone-50 md:text-5xl md:leading-[1.1]"
        >
          I work where economics, code, and regulation meet — building systems
          that last.
        </h1>

        <ul
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Roles and interests"
        >
          {roles.map((role) => (
            <li key={role}>
              <span className="inline-flex items-center rounded-full border border-stone-700/80 bg-stone-900/50 px-3 py-1 text-sm text-stone-300">
                {role}
                {role === "piano player" ? " 🎹" : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
