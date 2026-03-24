const paragraphs = [
  "With a foundation that blends a PhD-level understanding of economics and computer science, I’ve spent my career creating platforms, infrastructure, and businesses at the intersection of finance, technology, and regulation. I’m not just a technologist — I’m someone who understands systems end to end: how they’re coded, how they’re financed, how they’re regulated, and how they scale in the real world.",
  "My work has powered platforms and infrastructure now used by over 36 million people globally. I’ve advised governments on national strategies for digital finance and worked closely with private sector leaders to architect solutions in trade finance, payments, and virtual assets. From regulatory frameworks to backend logic, I approach every project with depth — and with the goal of building something that works long after I’ve stepped away.",
  "I like to keep a low profile. My focus is on the craft, not the credit. I lead quietly, often behind the scenes, ensuring that the businesses, technologies, and ecosystems I help shape are built on solid ground — strategically sound, operationally resilient, and future-ready.",
  "Outside of my professional life, I write poetry and play the piano — small, steady rituals that remind me that structure and emotion aren’t opposites. They’re companions in any meaningful creation.",
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-stone-800/80 px-6 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="font-[family-name:var(--font-crimson)] text-2xl font-medium text-stone-100 md:text-3xl"
        >
          About
        </h2>
        <div className="mt-3 h-px w-16 bg-gradient-to-r from-orange-500 to-transparent" />
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-400">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <p className="text-stone-300">
            I’m writing articles on{" "}
            <a
              href="https://medium.com/turan-almammadov"
              className="text-orange-400 underline decoration-orange-500/40 underline-offset-4 transition hover:decoration-orange-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>{" "}
            about blockchain, big data, SaaS, and art.
          </p>
        </div>
      </div>
    </section>
  );
}
