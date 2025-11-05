import type { ApiDiagnostic } from "../lib/data";

const toneStyles = {
  up: "text-emerald-400 bg-emerald-400/10",
  down: "text-rose-400 bg-rose-400/10",
  neutral: "text-primary-200 bg-primary-400/10"
};

export function ApiStatusPanel({ diagnostics }: { diagnostics: ApiDiagnostic[] }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-primary-500/20 via-slate-900/80 to-cyan-500/10 p-[1px]">
      <div className="rounded-3xl bg-slate-950/90 p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-primary-200/70">OrgaMaxx API</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Status & Integrität</h2>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              Letzte Synchronisierung erfolgreich abgeschlossenen. Automatische Validierung für Projekte, Aufgaben und Inventarbestände aktiv.
            </p>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/30">
            Sync jetzt auslösen
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {diagnostics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
              <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-medium ${toneStyles[item.tone]}`}>
                {item.tone === "up" && "Stabil"}
                {item.tone === "down" && "Warnung"}
                {item.tone === "neutral" && "Monitor"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
