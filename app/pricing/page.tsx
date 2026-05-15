import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter", price: "$0", period: "forever",
      desc: "For individuals and small teams just getting started.",
      features: ["Up to 3 workflows", "500 runs/month", "Basic integrations", "Community support"],
      cta: "Get started free", href: "/register", highlight: false,
    },
    {
      name: "Growth", price: "$49", period: "per month",
      desc: "For growing teams that need more power and scale.",
      features: ["Unlimited workflows", "50,000 runs/month", "All integrations", "Priority support", "Team collaboration", "Custom webhooks"],
      cta: "Start free trial", href: "/register", highlight: true,
    },
    {
      name: "Enterprise", price: "Custom", period: "",
      desc: "For large organisations with advanced security needs.",
      features: ["Unlimited everything", "SLA guarantee", "SSO & SAML", "Audit logs", "Dedicated support", "Custom contracts"],
      cta: "Contact sales", href: "/contact", highlight: false,
    },
  ];

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

      <main className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-4">Simple, transparent pricing</h1>
          <p className="text-slate-400">No hidden fees. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name}
              className="rounded-2xl border p-8 flex flex-col"
              style={{
                background: plan.highlight ? "#0d0d2f" : "#0d0d1f",
                borderColor: plan.highlight ? "#6366f1" : "#1a1a3a",
              }}>
              {plan.highlight && (
                <div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">Most popular</div>
              )}
              <h2 className="text-xl font-bold text-white">{plan.name}</h2>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400 text-sm ml-1">/{plan.period}</span>}
              </div>
              <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href}
                className="block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors"
                style={{
                  background: plan.highlight ? "#6366f1" : "transparent",
                  color: plan.highlight ? "white" : "#818cf8",
                  border: plan.highlight ? "none" : "1px solid #6366f1",
                }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}