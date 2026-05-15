export default function ReportsPage() {
  const reports = [
    { name: "Weekly execution summary",  date: "May 12, 2026", size: "48 KB",  type: "PDF" },
    { name: "Error rate analysis",       date: "May 5, 2026",  size: "32 KB",  type: "PDF" },
    { name: "Integration health check",  date: "Apr 28, 2026", size: "61 KB",  type: "PDF" },
    { name: "Monthly usage report",      date: "Apr 1, 2026",  size: "124 KB", type: "PDF" },
    { name: "Team activity log",         date: "Mar 31, 2026", size: "29 KB",  type: "CSV" },
    { name: "Billing statement",         date: "Mar 1, 2026",  size: "18 KB",  type: "PDF" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports</h1>
          <p className="text-slate-400 text-sm mt-1">Generated automatically each week.</p>
        </div>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
          Generate report
        </button>
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
        <div className="px-6 py-3 border-b text-xs text-slate-500 uppercase tracking-wide grid grid-cols-4" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
          <span>Report</span>
          <span>Generated</span>
          <span>Size</span>
          <span>Format</span>
        </div>
        {reports.map((r, i) => (
          <div key={i} className="px-6 py-4 border-b last:border-0 grid grid-cols-4 items-center hover:bg-white/[0.02] transition-colors" style={{ borderColor: "#1a1a3a" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: r.type === "PDF" ? "#1e1040" : "#0a1e10", color: r.type === "PDF" ? "#818cf8" : "#34d399" }}>
                {r.type}
              </div>
              <span className="text-sm text-white">{r.name}</span>
            </div>
            <span className="text-sm text-slate-400">{r.date}</span>
            <span className="text-sm text-slate-500">{r.size}</span>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors text-left">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}