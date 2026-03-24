export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800/80 px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center text-sm text-stone-500 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-[family-name:var(--font-crimson)] italic text-stone-400">
          Pro captu lectoris habent sua fata libelli.
        </p>
        <p className="text-stone-600">© {new Date().getFullYear()} Turan Almammadov</p>
      </div>
    </footer>
  );
}
