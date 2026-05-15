export default function AnalyticsPage() {
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const values = [62, 75, 58, 88, 91, 84, 97];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-slate-400 text-sm mt-1">Workflow performance over the last 7 months.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total runs",     value: "48,291" },
          { label: "Success rate",   value: "98.4%"  },
          { label: "Avg. runtime",   value: "1.2s"   },
          { label: "Data processed", value: "2.4 GB" },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-2xl border" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div className="text-xs text-slate-500 mb-2">{s.label}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border p-6 mb-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
        <h2 className="font-semibold text-white mb-6">Monthly runs</h2>
        <div className="flex items-end gap-3 h-40">
          {months.map((m, i) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full rounded-t-lg transition-all" style={{ height: `${values[i]}%`, background: "#6366f1", opacity: 0.7 + i * 0.04 }} />
              <span className="text-xs text-slate-500">{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <h2 className="font-semibold text-white mb-4">Top workflows by runs</h2>
          <div className="space-y-3">
            {[
              { name: "Onboarding emails",   pct: 92 },
              { name: "Lead enrichment",     pct: 78 },
              { name: "Slack error alerts",  pct: 65 },
              { name: "Daily CRM sync",      pct: 48 },
              { name: "Invoice automation",  pct: 30 },
            ].map((w) => (
              <div key={w.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{w.name}</span>
                  <span className="text-slate-500">{w.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-indigo-500" style={{ width: `${w.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <h2 className="font-semibold text-white mb-4">Error breakdown</h2>
          <div className="space-y-2">
            {[
              { type: "Timeout",         count: 42, color: "#f59e0b" },
              { type: "Auth failure",    count: 28, color: "#ef4444" },
              { type: "Rate limited",    count: 19, color: "#8b5cf6" },
              { type: "Invalid payload", count: 11, color: "#06b6d4" },
            ].map((e) => (
              <div key={e.type} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: "#1a1a3a" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: e.color }} />
                  <span className="text-sm text-slate-300">{e.type}</span>
                </div>
                <span className="text-sm text-slate-500">{e.count} errors</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}