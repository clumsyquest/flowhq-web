import Link from "next/link";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated May 1, 2026</p>
        <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
          {[
            { title: "Information we collect", body: "We collect information you provide when creating an account (name, email, company), payment details processed by Stripe, and usage data to improve the service." },
            { title: "How we use your information", body: "We use your data to provide and improve FlowHQ, send transactional emails, handle billing, and comply with legal obligations. We do not sell your data." },
            { title: "Data storage", body: "Your data is stored on servers in the EU (Frankfurt). We use AES-256 encryption at rest and TLS 1.3 in transit." },
            { title: "Third-party services", body: "We use Stripe for payments, Brevo for email, and Vercel/Railway for infrastructure. Each subprocessor is bound by data processing agreements." },
            { title: "Your rights", body: "You have the right to access, correct, export, or delete your data at any time. Contact privacy@flowhq.com to exercise your rights." },
            { title: "Cookies", body: "We use only essential session cookies. We do not use advertising or tracking cookies." },
            { title: "Contact", body: "For privacy enquiries, contact us at privacy@flowhq.com or write to FlowHQ Inc., 123 Market Street, San Francisco, CA 94105." },
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