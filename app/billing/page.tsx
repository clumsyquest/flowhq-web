"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "../lib/auth";

export default function BillingPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/login"); return; }
    setReady(true);
  }, [router]);

  if (!ready) return null;

  const invoices = [
    { date: "May 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Apr 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Mar 1, 2026",  amount: "$49.00", status: "Paid" },
    { date: "Feb 1, 2026",  amount: "$49.00", status: "Paid" },
  ];

  return (
    <div className="min-h-screen p-8" style={{ background: "#080812" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">Billing</h1>
        <p className="text-slate-400 text-sm mb-8">Manage your subscription and invoices.</p>

        <div className="rounded-2xl border p-6 mb-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-white font-semibold text-lg">Growth plan</div>
              <div className="text-slate-400 text-sm">$49 / month · Renews June 1, 2026</div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-950/50">Active</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg text-sm text-slate-300 border transition-colors hover:border-indigo-500"
              style={{ borderColor: "#2a2a4a" }}>
              Change plan
            </button>
            <button className="px-4 py-2 rounded-lg text-sm text-red-400 hover:bg-red-950/20 transition-colors">
              Cancel subscription
            </button>
          </div>
        </div>

        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
            <h2 className="font-semibold text-white">Invoice history</h2>
          </div>
          <div>
            {invoices.map((inv) => (
              <div key={inv.date} className="px-6 py-4 flex items-center justify-between">
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
      </div>
    </div>
  );
}