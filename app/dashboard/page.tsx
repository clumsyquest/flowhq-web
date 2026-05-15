// PROTECTED — ACTION_FLOW
// Stillworks should detect: PROTECTED (via parent layout), ACTION_FLOW
export default function DashboardPage() {
  const stats = [
    { label: "Total Runs",    value: "1,284", change: "+12%" },
    { label: "Pass Rate",     value: "94.2%", change: "+2.1%" },
    { label: "Repos Watched", value: "7",     change: "+1" },
    { label: "Avg Duration",  value: "4.2s",  change: "-0.8s" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Overview</h1>
      <p className="text-gray-400 mb-8">Welcome back. Here's what's happening.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-xl border border-gray-700 bg-gray-900">
            <div className="text-sm text-gray-400 mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-green-400 mt-1">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Runs</h2>
        <div className="space-y-3">
          {[
            { repo: "myapp",   commit: "7a2c1f9", status: "PASS",   routes: 6, time: "2 min ago" },
            { repo: "api",     commit: "3b4d8e2", status: "FAIL",   routes: 4, time: "1 hr ago" },
            { repo: "landing", commit: "9f1a5c7", status: "PASS",   routes: 3, time: "3 hr ago" },
          ].map((run) => (
            <div key={run.commit} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
              <div>
                <span className="text-white font-mono text-sm">{run.repo}</span>
                <span className="text-gray-500 font-mono text-xs ml-2">#{run.commit}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-xs">{run.routes} routes</span>
                <span className={`text-xs font-mono font-bold ${run.status === "PASS" ? "text-green-400" : "text-red-400"}`}>
                  {run.status}
                </span>
                <span className="text-gray-500 text-xs">{run.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
