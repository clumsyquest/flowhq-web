"use client";
import { useState } from "react";

const keys = [
  { name: "Production",  key: "fhq_live_4xK9mN2pQr7sT1vW",  created: "Jan 12, 2026", lastUsed: "2m ago",    scope: "full" },
  { name: "Staging",     key: "fhq_test_8jL3nO5qRs0uV6xY",  created: "Feb 3, 2026",  lastUsed: "1d ago",    scope: "read" },
  { name: "CI/CD",       key: "fhq_live_2bD7eF1gHi4jK6lM",  created: "Mar 18, 2026", lastUsed: "3h ago",    scope: "write" },
];

export default function ApiKeysPage() {
  const [showNew, setShowNew] = useState(false);
  const [revealed, setRevealed] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">API Keys</h1>
          <p className="text-slate-400 text-sm mt-1">Authenticate your API requests.</p>
        </div>
        <button onClick={() => setShowNew(!showNew)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
          + New key
        </button>
      </div>

      {showNew && (
        <div className="rounded-2xl border p-5 mb-6" style={{ background: "#0d0d1f", borderColor: "#6366f1" }}>
          <h3 className="font-semibold text-white mb-3">Create new API key</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Key name</label>
              <input type="text" placeholder="e.g. Mobile app"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Scope</label>
              <select className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none"
                style={{ background: "#080812", borderColor: "#1a1a3a" }}>
                <option>Full access</option>
                <option>Read only</option>
                <option>Write only</option>
              </select>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
            Generate key
          </button>
        </div>
      )}

      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs text-slate-500 uppercase tracking-wide" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
              <th className="text-left px-5 py-3">Name</th>
              <th className="text-left px-5 py-3">Key</th>
              <th className="text-left px-5 py-3">Scope</th>
              <th className="text-left px-5 py-3">Last used</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {keys.map((k, i) => (
              <tr key={i} className="border-b last:border-0" style={{ borderColor: "#1a1a3a" }}>
                <td className="px-5 py-4 text-sm text-white font-medium">{k.name}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-slate-400 font-mono">
                      {revealed === i ? k.key : k.key.slice(0, 12) + "••••••••••••"}
                    </code>
                    <button onClick={() => setRevealed(revealed === i ? null : i)} className="text-xs text-slate-600 hover:text-slate-400">
                      {revealed === i ? "hide" : "show"}
                    </button>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs px-2 py-0.5 rounded-full text-indigo-300 bg-indigo-950/50">{k.scope}</span>
                </td>
                <td className="px-5 py-4 text-xs text-slate-500">{k.lastUsed}</td>
                <td className="px-5 py-4 text-right">
                  <button className="text-xs text-red-400 hover:text-red-300 transition-colors">Revoke</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-xl border text-sm text-slate-400" style={{ borderColor: "#1a1a3a", background: "#0d0d1f" }}>
        <strong className="text-white">Base URL:</strong>{" "}
        <code className="text-indigo-300 font-mono text-xs">https://api.flowhq.com/v1</code>
        <span className="mx-3 text-slate-700">·</span>
        <a href="/docs" className="text-indigo-400 hover:text-indigo-300">View API docs →</a>
      </div>
    </div>
  );
}