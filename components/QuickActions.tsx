"use client";

interface QuickAction {
  title: string;
  description: string;
  shortcut: string;
}

export function QuickActions({ actions }: { actions: QuickAction[] }) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Schnellaktionen</h2>
          <p className="text-sm text-slate-400">In Sekunden vom Gedanken zur Aktion</p>
        </div>
        <span className="rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium text-primary-200">
          Shortcut: Shift + Enter
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-left transition hover:border-primary-400/40 hover:bg-slate-900/60"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">{action.title}</h3>
                <span className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold tracking-[0.24em] text-slate-200">
                  {action.shortcut}
                </span>
              </div>
              <p className="text-sm text-slate-300">{action.description}</p>
            </div>
            <span className="mt-5 text-xs text-primary-200 opacity-0 transition group-hover:opacity-100">
              Jetzt starten {"->"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
