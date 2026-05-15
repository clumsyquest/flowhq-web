"use client";
// PROTECTED — redirect('/login') pattern
// Stillworks should detect: PROTECTED (page_file signal — redirect to login)
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BillingPage() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("sw_test_auth");
    if (!isAuth) {
      router.push("/login"); // redirect to login — Stillworks detects this pattern
      return;
    }
    setLoaded(true);
  }, [router]);

  if (!loaded) return <div className="p-8 text-gray-400">Loading...</div>;

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Billing</h1>

      <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-white font-semibold">Pro Plan</div>
            <div className="text-gray-400 text-sm">€9/month · Next billing: June 1, 2026</div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-400 text-xs font-mono">ACTIVE</span>
        </div>
        <button className="px-4 py-2 rounded-lg border border-gray-600 text-gray-400 hover:text-white text-sm transition-colors">
          Manage Subscription
        </button>
      </div>

      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Invoice History</h2>
        <div className="space-y-3">
          {[
            { date: "May 1, 2026",  amount: "€9.00", status: "Paid" },
            { date: "Apr 1, 2026",  amount: "€9.00", status: "Paid" },
            { date: "Mar 1, 2026",  amount: "€9.00", status: "Paid" },
          ].map((inv) => (
            <div key={inv.date} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400 text-sm">{inv.date}</span>
              <div className="flex items-center gap-4">
                <span className="text-white font-mono text-sm">{inv.amount}</span>
                <span className="text-green-400 text-xs">{inv.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
