const links = [
  {
    label: "Email",
    description: "Collaboration or questions",
    href: "mailto:turan@almammadov.com",
    external: false,
  },
  {
    label: "Schedule a call",
    description: "Calendly — book a meeting",
    href: "https://calendly.com/tma-schedule-meeting",
    external: true,
  },
  {
    label: "Read the blog",
    description: "Medium — articles & essays",
    href: "https://medium.com/turan-almammadov",
    external: true,
  },
] as const;

export function Connect() {
  return (
    <section
      className="border-t border-stone-800/80 bg-stone-900/30 px-6 py-20 md:py-28"
      aria-labelledby="connect-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="connect-heading"
          className="font-[family-name:var(--font-crimson)] text-2xl font-medium text-stone-100 md:text-3xl"
        >
          Connect
        </h2>
        <p className="mt-3 max-w-xl text-stone-400">
          Reach out directly or follow writing — whichever fits your next step.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-1">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col rounded-xl border border-stone-800 bg-stone-950/60 p-5 transition hover:border-orange-900/60 hover:bg-stone-900/40 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <span className="font-medium text-stone-100">{item.label}</span>
                  <p className="mt-1 text-sm text-stone-500">{item.description}</p>
                </div>
                <span className="mt-3 text-sm text-orange-400 transition group-hover:text-orange-300 md:mt-0">
                  Open →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
