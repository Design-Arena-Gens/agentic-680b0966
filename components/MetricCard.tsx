import clsx from "clsx";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  tone?: "up" | "down" | "neutral";
}

const toneStyles = {
  up: "text-emerald-400 bg-emerald-400/10",
  down: "text-rose-400 bg-rose-400/10",
  neutral: "text-slate-300 bg-slate-300/10"
};

export function MetricCard({ title, value, subtitle, trend, tone = "neutral" }: MetricCardProps) {
  return (
    <div className="gradient-border overflow-hidden rounded-3xl bg-slate-900/60 p-[1px]">
      <div className="card-hover flex h-full flex-col justify-between rounded-3xl bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-400">{title}</p>
          <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
        </div>
        <span
          className={clsx(
            "mt-6 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
            toneStyles[tone]
          )}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}
