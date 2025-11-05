interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  role: string;
  status: string;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Heute im Fokus</h2>
          <p className="text-sm text-slate-400">Synchronisierte Termine & Aktionen aus OrgaMaxx</p>
        </div>
        <button className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20">
          Kalender öffnen
        </button>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={`${item.time}-${item.title}`} className="flex items-start gap-4">
            <div className="relative mt-1 flex flex-col items-center">
              <span className="text-sm font-semibold text-primary-300">{item.time}</span>
              <span className="mt-1 block h-full w-px flex-1 bg-gradient-to-b from-primary-400/60 via-slate-700 to-transparent" />
            </div>
            <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <span className="rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium text-primary-200">{item.status}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
