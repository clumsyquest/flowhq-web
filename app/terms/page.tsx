import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated May 1, 2026</p>
        <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
          {[
            { title: "1. Acceptance", body: "By accessing or using FlowHQ, you agree to be bound by these Terms. If you do not agree, do not use the service." },
            { title: "2. Your account", body: "You are responsible for safeguarding your account credentials and for all activity that occurs under your account." },
            { title: "3. Acceptable use", body: "You may not use FlowHQ to violate any law, infringe third-party rights, distribute malware, or engage in abusive automation." },
            { title: "4. Subscriptions and billing", body: "Paid plans are billed in advance on a monthly or annual basis. Downgrading or cancelling takes effect at the end of the current billing period." },
            { title: "5. Data", body: "You retain ownership of all data you process through FlowHQ. We process it only to provide the service." },
            { title: "6. Termination", body: "We may suspend or terminate your account for violations of these Terms, with or without prior notice depending on severity." },
            { title: "7. Limitation of liability", body: "FlowHQ is provided as-is. We are not liable for indirect, consequential, or incidental damages arising from your use of the service." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-white font-semibold mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}