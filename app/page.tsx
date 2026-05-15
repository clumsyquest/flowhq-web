import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white">FlowHQ</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-400 hover:text-white transition-colors">Sign in</Link>
          <Link href="/register"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ background: "#6366f1" }}>
            Get started free
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-indigo-300 border border-indigo-900 mb-8" style={{ background: "#0d0d2f" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          New: Conditional branch logic is now live
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Automate your team&apos;s<br />
          <span style={{ color: "#818cf8" }}>workflows without code</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          FlowHQ connects your tools and automates the work between them — so your team can focus on what actually matters.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/register"
            className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
            style={{ background: "#6366f1" }}>
            Start building for free
          </Link>
          <Link href="/docs"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border"
            style={{ borderColor: "#2a2a4a" }}>
            Read the docs →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Visual builder", desc: "Drag-and-drop editor to build automations in minutes, no engineering needed." },
            { icon: "🔗", title: "200+ integrations", desc: "Connect Slack, Notion, GitHub, Salesforce and hundreds of other tools." },
            { icon: "📊", title: "Real-time analytics", desc: "See exactly how your automations perform with live metrics and logs." },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t px-8 py-8" style={{ borderColor: "#1a1a3a" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-slate-500 text-sm">© 2026 FlowHQ, Inc.</span>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/about" className="hover:text-slate-300">About</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}