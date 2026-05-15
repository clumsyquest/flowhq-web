export default function DashboardPage() {
  const stats = [
    { label: "Active workflows", value: "24",    change: "+3 this week",  up: true },
    { label: "Runs today",       value: "1,847", change: "+12% vs yesterday", up: true },
    { label: "Success rate",     value: "98.4%", change: "+0.6%",         up: true },
    { label: "Avg. runtime",     value: "1.2s",  change: "-0.3s",         up: true },
  ];

  const recentRuns = [
    { name: "Lead enrichment",     status: "success", time: "2m ago",   duration: "0.8s" },
    { name: "Slack alert on error","status": "success", time: "5m ago",  duration: "0.4s" },
    { name: "Daily CRM sync",      status: "success", time: "1h ago",   duration: "4.1s" },
    { name: "Invoice generator",   status: "failed",  time: "2h ago",   duration: "2.2s" },
    { name: "Onboarding sequence", status: "success", time: "3h ago",   duration: "1.1s" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Overview</h1>
        <p className="text-slate-400 text-sm mt-1">Welcome back. Everything looks healthy.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="p-5 rounded-2xl border" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div className="text-xs text-slate-500 mb-2">{s.label}</div>
            <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
            <div className="text-xs text-emerald-400">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <h2 className="font-semibold text-white mb-4">Recent runs</h2>
          <div className="space-y-1">
            {recentRuns.map((run, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: "#1a1a3a" }}>
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${run.status === "success" ? "bg-emerald-400" : "bg-red-400"}`} />
                  <span className="text-sm text-slate-300">{run.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>{run.duration}</span>
                  <span>{run.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <h2 className="font-semibold text-white mb-4">Quick actions</h2>
          <div className="space-y-2">
            {[
              { label: "New workflow",    href: "/dashboard/projects" },
              { label: "Invite teammate", href: "/dashboard/team" },
              { label: "Add integration", href: "/dashboard/integrations" },
              { label: "View reports",    href: "/dashboard/reports" },
            ].map((a) => (
              <a key={a.label} href={a.href}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-slate-300 border transition-colors hover:border-indigo-600"
                style={{ borderColor: "#1a1a3a" }}>
                {a.label}
                <span className="text-slate-600">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}