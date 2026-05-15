import Link from "next/link";

export default function AboutPage() {
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

      <main className="max-w-3xl mx-auto px-8 py-20">
        <h1 className="text-4xl font-extrabold text-white mb-6">About FlowHQ</h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          FlowHQ was founded in 2022 with a simple belief: automation should be accessible to everyone, not just engineers.
        </p>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>We started as a small team of four, frustrated by the amount of repetitive work eating into our days. Tools existed, but they either required deep technical knowledge or were too rigid to fit real workflows.</p>
          <p>So we built FlowHQ — a visual automation platform that speaks the language of operations, marketing, and product teams, not just developers.</p>
          <p>Today, over 12,000 teams across 80 countries use FlowHQ to automate everything from lead nurturing to incident response. We&apos;re backed by Sequoia and Y Combinator, and we&apos;re just getting started.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 my-12">
          {[
            { value: "12,000+", label: "Teams worldwide" },
            { value: "80+", label: "Countries" },
            { value: "200+", label: "Integrations" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl border" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
              <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/register"
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: "#6366f1" }}>
            Join FlowHQ
          </Link>
          <Link href="/contact"
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-300 border"
            style={{ borderColor: "#2a2a4a" }}>
            Contact us
          </Link>
        </div>
      </main>
    </div>
  );
}