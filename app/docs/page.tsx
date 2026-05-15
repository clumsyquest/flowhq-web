import Link from "next/link";

const sections = [
  {
    title: "Getting started",
    items: ["Quickstart guide", "Core concepts", "Your first workflow", "Authentication"],
  },
  {
    title: "Workflows",
    items: ["Triggers", "Actions", "Conditions & branching", "Error handling", "Retry policies"],
  },
  {
    title: "Integrations",
    items: ["Slack", "GitHub", "Salesforce", "HubSpot", "Airtable", "Custom webhooks"],
  },
  {
    title: "API reference",
    items: ["Authentication", "Workflows", "Executions", "Team & members", "Webhooks"],
  },
];

export default function DocsPage() {
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

      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-2">Documentation</h1>
        <p className="text-slate-400 mb-4">Everything you need to build with FlowHQ.</p>

        <div className="relative mb-12">
          <input type="text" placeholder="Search docs…"
            className="w-full px-5 py-3 rounded-xl text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
            style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }} />
          <span className="absolute right-4 top-3 text-slate-600 text-xs">⌘K</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
              <h2 className="font-semibold text-white mb-4">{s.title}</h2>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                      <span className="text-indigo-600">▸</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border" style={{ background: "#0a0a1f", borderColor: "#2a2a5a" }}>
          <h2 className="font-semibold text-white mb-2">Quickstart</h2>
          <pre className="text-xs text-slate-300 overflow-x-auto">
            <code>{`npm install @flowhq/sdk

import { FlowHQ } from '@flowhq/sdk'

const client = new FlowHQ({ apiKey: 'fhq_live_...' })

await client.workflows.trigger('wf_abc123', {
  data: { email: 'user@example.com' }
})`}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}