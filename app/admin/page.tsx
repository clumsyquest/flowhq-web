"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin, signOut } from "../lib/auth";

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAdmin()) { router.push("/login"); return; }
    setReady(true);
  }, [router]);

  if (!ready) return null;

  const stats = [
    { label: "Total users",      value: "3,291" },
    { label: "Active this month", value: "1,847" },
    { label: "Pro subscribers",  value: "412" },
    { label: "MRR",              value: "$20,188" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080812" }}>
      <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white">FlowHQ</span>
          <span className="text-xs px-2 py-0.5 rounded bg-red-950/60 text-red-400 font-medium">ADMIN</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin/users" className="text-sm text-slate-400 hover:text-white">Users</Link>
          <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">App</Link>
          <button onClick={signOut} className="text-sm text-red-400 hover:text-red-300">Sign out</button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-8 py-10">
        <h1 className="text-2xl font-bold text-white mb-2">Admin panel</h1>
        <p className="text-slate-400 text-sm mb-8">Internal view — not visible to regular users.</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="p-5 rounded-2xl border" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
              <div className="text-xs text-slate-500 mb-2">{s.label}</div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <h2 className="font-semibold text-white mb-4">Recent signups</h2>
            <div className="space-y-2">
              {["sarah@stripe.com", "dev@notion.so", "ops@linear.app", "admin@vercel.com"].map((email) => (
                <div key={email} className="flex items-center justify-between py-2 border-b last:border-0 text-sm" style={{ borderColor: "#1a1a3a" }}>
                  <span className="text-slate-300">{email}</span>
                  <span className="text-xs text-slate-500">just now</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-6" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <h2 className="font-semibold text-white mb-4">Quick links</h2>
            <div className="space-y-2">
              {[
                { label: "Manage users", href: "/admin/users" },
                { label: "View all workflows", href: "/dashboard/projects" },
                { label: "Billing overview", href: "/dashboard/billing" },
                { label: "System logs", href: "#" },
              ].map((l) => (
                <Link key={l.label} href={l.href}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm text-slate-300 hover:border-indigo-600 transition-colors"
                  style={{ borderColor: "#1a1a3a" }}>
                  {l.label}
                  <span className="text-slate-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}