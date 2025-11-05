"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

interface TaskRow {
  priority: string;
  title: string;
  owner: string;
  due: string;
  status: string;
}

const columns: ColumnDef<TaskRow>[] = [
  {
    header: "Priorität",
    accessorKey: "priority",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      const tone =
        value === "Kritisch"
          ? "bg-rose-500/20 text-rose-200"
          : value === "Hoch"
            ? "bg-amber-500/20 text-amber-200"
            : value === "Mittel"
              ? "bg-primary-500/10 text-primary-200"
              : "bg-emerald-400/10 text-emerald-200";
      return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
    }
  },
  {
    header: "Thema",
    accessorKey: "title"
  },
  {
    header: "Verantwortlich",
    accessorKey: "owner"
  },
  {
    header: "Fällig",
    accessorKey: "due"
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      const tone =
        value === "Blockiert"
          ? "bg-rose-500/20 text-rose-200"
          : value === "In Bearbeitung"
            ? "bg-primary-500/10 text-primary-200"
            : value === "Offen"
              ? "bg-white/5 text-slate-200"
              : "bg-emerald-400/10 text-emerald-200";
      return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
    }
  }
];

export function TaskTable({ data }: { data: TaskRow[] }) {
  return <DataTable columns={columns} data={data} />;
}
