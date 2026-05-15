import Link from "next/link";

const entries = [
  {
    version: "2.8.0", date: "May 12, 2026", type: "feature",
    changes: ["Conditional branching with nested logic", "Multi-path routing", "New Airtable integration", "Bulk workflow export"],
  },
  {
    version: "2.7.3", date: "Apr 28, 2026", type: "fix",
    changes: ["Fixed webhook signature verification", "Improved Salesforce connector retry logic", "Reduced p99 latency by 40ms"],
  },
  {
    version: "2.7.0", date: "Apr 10, 2026", type: "feature",
    changes: ["API v2 with TypeScript SDK", "New analytics dashboard", "Team audit log", "Webhook replay functionality"],
  },
  {
    version: "2.6.1", date: "Mar 22, 2026", type: "fix",
    changes: ["Security patch: improved API key entropy", "Fixed timezone handling in scheduled triggers", "UI performance improvements"],
  },
  {
    version: "2.6.0", date: "Mar 5, 2026", type: "feature",
    changes: ["Scheduled workflow triggers", "Custom retry policies", "Jira integration (beta)", "Improved error messages"],
  },
];

const typeColor: Record<string, string> = {
  feature: "text-indigo-300 bg-indigo-950/60",
  fix: "text-amber-300 bg-amber-950/60",
};

export default function ChangelogPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white">FlowHQ</span>
        </Link>
        <Link href="/login" className="text-sm text-slate-400 hover:text-white">Sign in</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-2">Changelog</h1>
        <p className="text-slate-400 mb-12">What&apos;s new in FlowHQ.</p>

        <div className="space-y-10">
          {entries.map((e) => (
            <div key={e.version} className="relative pl-6 border-l" style={{ borderColor: "#2a2a4a" }}>
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-600" />
              <div className="flex items-center gap-3 mb-3">
                <span className="font-bold text-white text-lg">{e.version}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${typeColor[e.type]}`}>{e.type}</span>
                <span className="text-xs text-slate-500">{e.date}</span>
              </div>
              <ul className="space-y-1.5">
                {e.changes.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-indigo-500 mt-0.5">▸</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}