import Link from "next/link";

export default function DashboardBillingPage() {
  const invoices = [
    { date: "May 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Apr 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Mar 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Feb 1, 2026",  amount: "$49.00", status: "Paid" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Billing</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your subscription and payment method.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs text-slate-500 mb-1">Current plan</div>
              <div className="text-xl font-bold text-white">Growth</div>
              <div className="text-slate-400 text-sm mt-0.5">$49 / month · Renews June 1, 2026</div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs text-emerald-400 bg-emerald-950/50">Active</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg text-sm text-slate-300 border" style={{ borderColor: "#2a2a4a" }}>
              Change plan
            </button>
            <button className="px-4 py-2 rounded-lg text-sm text-red-400 hover:bg-red-950/20">
              Cancel
            </button>
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <div className="text-xs text-slate-500 mb-3">Payment method</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 font-mono">VISA</div>
            <span className="text-sm text-white">•••• •••• •••• 4242</span>
            <span className="text-xs text-slate-500">Expires 12/27</span>
          </div>
          <button className="text-sm text-indigo-400 hover:text-indigo-300">Update card →</button>
        </div>
      </div>

      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
          <h2 className="font-semibold text-white">Invoice history</h2>
        </div>
        {invoices.map((inv) => (
          <div key={inv.date} className="px-6 py-4 border-b last:border-0 flex items-center justify-between" style={{ borderColor: "#1a1a3a" }}>
            <div>
              <div className="text-sm text-white">{inv.date}</div>
              <div className="text-xs text-slate-500 mt-0.5">Growth plan · monthly</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-white">{inv.amount}</span>
              <span className="text-xs text-emerald-400">{inv.status}</span>
              <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300">PDF</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}