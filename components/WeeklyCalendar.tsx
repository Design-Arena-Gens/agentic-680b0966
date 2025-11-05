import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";

interface CalendarEvent {
  date: string;
  title: string;
  tag: string;
  time: string;
}

const tagColors: Record<string, string> = {
  Inventar: "bg-emerald-400/10 text-emerald-200",
  System: "bg-primary-400/10 text-primary-200",
  Projekt: "bg-cyan-400/10 text-cyan-200",
  Team: "bg-amber-400/10 text-amber-200"
};

export function WeeklyCalendar({ events }: { events: CalendarEvent[] }) {
  const grouped = events.reduce<Record<string, CalendarEvent[]>>((acc, event) => {
    const key = format(parseISO(event.date), "EEEE", { locale: de });
    acc[key] = acc[key] ? [...acc[key], event] : [event];
    return acc;
  }, {});

  const daysOrdered = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ];

  return (
    <div className="rounded-3xl bg-slate-900/70 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Woche im Überblick</h2>
          <p className="text-sm text-slate-400">Kalender-Events mit OrgaMaxx synchronisiert</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/30 hover:text-white">
            Woche -1
          </button>
          <button className="rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20">
            Woche +1
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {daysOrdered.map((day) => (
          <div key={day} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{day}</span>
              <span className="text-xs text-slate-500">
                {grouped[day]?.length ? `${grouped[day].length} Termin(e)` : "Frei"}
              </span>
            </div>
            <div className="space-y-3">
              {grouped[day]?.map((event) => (
                <div key={event.title} className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">{event.title}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${tagColors[event.tag] ?? "bg-white/10 text-slate-200"}`}>
                      {event.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{event.time}</p>
                </div>
              )) || <p className="text-xs text-slate-500">Keine Termine</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
