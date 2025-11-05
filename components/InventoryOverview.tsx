interface InventoryEntry {
  category: string;
  availability: number;
  usage: number;
  critical: number;
}

export function InventoryOverview({ data }: { data: InventoryEntry[] }) {
  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Inventarstatus</h2>
          <p className="text-sm text-slate-400">Live-Sicht auf Verfügbarkeit, Auslastung und kritische Assets</p>
        </div>
        <button className="rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-primary-400">
          Inventur starten
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((entry) => (
          <div
            key={entry.category}
            className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-primary-400/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">{entry.category}</h3>
              <span className="text-xs uppercase tracking-[0.28em] text-slate-500">Trend</span>
            </div>
            <div className="space-y-4">
              <StatBar label="Verfügbar" value={entry.availability} tone="positive" />
              <StatBar label="Auslastung" value={entry.usage} tone="neutral" />
              <StatBar label="Kritisch" value={entry.critical} tone="negative" suffix="Assets" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBar({
  label,
  value,
  tone,
  suffix
}: {
  label: string;
  value: number;
  tone: "positive" | "neutral" | "negative";
  suffix?: string;
}) {
  const toneColor = {
    positive: "from-emerald-400 to-emerald-500",
    neutral: "from-primary-300 to-primary-500",
    negative: "from-rose-400 to-rose-500"
  }[tone];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        <span className="font-semibold text-white">
          {value}
          {suffix ? ` ${suffix}` : "%"}
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${toneColor}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}
