"use client";
import { useState } from "react";

const projects = [
  { name: "Lead enrichment",     runs: 1240, success: 98, status: "active",  lastRun: "2m ago" },
  { name: "Slack error alerts",  runs: 876,  success: 100,status: "active",  lastRun: "5m ago" },
  { name: "Daily CRM sync",      runs: 432,  success: 97, status: "active",  lastRun: "1h ago" },
  { name: "Invoice automation",  runs: 209,  success: 88, status: "paused",  lastRun: "2h ago" },
  { name: "Onboarding emails",   runs: 1803, success: 99, status: "active",  lastRun: "3h ago" },
  { name: "Support ticket triage",runs: 654, success: 95, status: "active",  lastRun: "4h ago" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-slate-400 text-sm mt-1">{projects.length} workflows</p>
        </div>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
          + New workflow
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {["all", "active", "paused"].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-3 py-1.5 rounded-lg text-sm capitalize transition-colors"
            style={{
              background: filter === f ? "#1a1a3a" : "transparent",
              color: filter === f ? "white" : "#64748b",
              border: "1px solid",
              borderColor: filter === f ? "#6366f1" : "#1a1a3a",
            }}>
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs text-slate-500 uppercase tracking-wide" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
              <th className="text-left px-5 py-3">Workflow</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Runs</th>
              <th className="text-left px-5 py-3">Success rate</th>
              <th className="text-left px-5 py-3">Last run</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-white/[0.02] transition-colors" style={{ borderColor: "#1a1a3a" }}>
                <td className="px-5 py-4 text-sm text-white font-medium">{p.name}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "active" ? "text-emerald-400 bg-emerald-950/50" : "text-amber-400 bg-amber-950/50"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-slate-400">{p.runs.toLocaleString()}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-indigo-500" style={{ width: `${p.success}%` }} />
                    </div>
                    <span className="text-xs text-slate-400">{p.success}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-xs text-slate-500">{p.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}