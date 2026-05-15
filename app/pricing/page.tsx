// PUBLIC — STATIC
// Stillworks should detect: STATIC, PUBLIC, PASS
export default function PricingPage() {
  const plans = [
    { name: "Free",    price: "€0",  features: ["1 repo", "100 runs/month", "Email alerts"] },
    { name: "Pro",     price: "€9",  features: ["Unlimited repos", "Unlimited runs", "Slack + email"] },
    { name: "Team",    price: "€29", features: ["5 developers", "Priority support", "API access"] },
  ];

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">Pricing</h1>
      <p className="text-gray-400 mb-8">Simple, transparent pricing.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
            <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}<span className="text-sm text-gray-500">/mo</span></div>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="text-green-400">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
