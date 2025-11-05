import { ClipboardDocumentCheckIcon, CubeTransparentIcon, QueueListIcon } from "@heroicons/react/24/outline";
import { MetricCard } from "../components/MetricCard";
import { Timeline } from "../components/Timeline";
import { InventoryOverview } from "../components/InventoryOverview";
import { WeeklyCalendar } from "../components/WeeklyCalendar";
import { ApiStatusPanel } from "../components/ApiStatusPanel";
import { QuickActions } from "../components/QuickActions";
import { TaskTable } from "../components/TaskTable";
import {
  apiDiagnostics,
  calendarEvents,
  inventoryData,
  projectMetrics,
  quickActions,
  taskRows,
  timelineItems
} from "../lib/data";

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary-200">
            OrgaMaxx Cockpit
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Alles im Blick. Entscheidungen in Sekunden.</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Projekte, Aufgaben, Inventur und Assets verdichtet in einem Interface. Synchronisiert mit OrgaMaxx, optimiert für Teams,
            die Tempo machen wollen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1">
              <QueueListIcon className="h-4 w-4 text-primary-200" />
              Projektboard
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1">
              <CubeTransparentIcon className="h-4 w-4 text-cyan-200" />
              Asset-Tracking
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
              <ClipboardDocumentCheckIcon className="h-4 w-4 text-emerald-200" />
              Audit-Trails
            </span>
          </div>
        </div>
        <div className="w-full max-w-sm space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Letzter Sync</span>
            <span>vor 14 Minuten</span>
          </div>
          <div className="rounded-2xl border border-primary-500/40 bg-primary-500/10 p-4 text-primary-50">
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">API: OK</p>
            <p className="mt-2 text-3xl font-semibold">1.284 Datensätze</p>
            <p className="mt-1 text-xs text-primary-100">durchgeleitet in den letzten 24h</p>
          </div>
          <button className="w-full rounded-full bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-400">
            Frühwarnungen anzeigen
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projectMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Timeline items={timelineItems} />
        <QuickActions actions={quickActions} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-900/70 p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Priorisierte Aufgaben</h2>
                <p className="text-sm text-slate-400">Alle Teams kombiniert, sortiert nach Dringlichkeit</p>
              </div>
              <div className="flex gap-2 text-xs text-slate-400">
                <button className="rounded-full border border-white/10 px-3 py-2 transition hover:border-white/30 hover:text-white">
                  Filter
                </button>
                <button className="rounded-full bg-primary-500 px-3 py-2 font-semibold text-white transition hover:bg-primary-400">
                  Neue Aufgabe
                </button>
              </div>
            </div>
            <TaskTable data={taskRows} />
          </div>

          <InventoryOverview data={inventoryData} />
        </div>
        <div className="space-y-6">
          <WeeklyCalendar events={calendarEvents} />
          <ApiStatusPanel diagnostics={apiDiagnostics} />
        </div>
      </section>
    </div>
  );
}
