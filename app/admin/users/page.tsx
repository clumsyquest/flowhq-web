"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "../../lib/auth";

const users = [
  { name: "Jane Doe",     email: "demo@flowhq.com",   plan: "Growth",   status: "active", joined: "Jan 12, 2026" },
  { name: "Sarah Chen",   email: "sarah@stripe.com",  plan: "Growth",   status: "active", joined: "Feb 3, 2026"  },
  { name: "Luca Bianchi", email: "luca@notion.so",    plan: "Starter",  status: "active", joined: "Feb 18, 2026" },
  { name: "Omar Hassan",  email: "ops@linear.app",    plan: "Growth",   status: "active", joined: "Mar 5, 2026"  },
  { name: "Mei Lin",      email: "mei@vercel.com",    plan: "Starter",  status: "active", joined: "Mar 20, 2026" },
  { name: "David Park",   email: "david@railway.app", plan: "Starter",  status: "suspended", joined: "Apr 1, 2026" },
  { name: "Emma Wilson",  email: "emma@supabase.com", plan: "Growth",   status: "active", joined: "Apr 14, 2026" },
];

export default function AdminUsersPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isAdmin()) { router.push("/login"); return; }
    setReady(true);
  }, [router]);

  if (!ready) return null;

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

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
        <Link href="/admin" className="text-sm text-slate-400 hover:text-white">← Admin panel</Link>
      </div>

      <main className="max-w-5xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Users</h1>
            <p className="text-slate-400 text-sm mt-1">{users.length} total accounts</p>
          </div>
          <input type="text" placeholder="Search users…" value={search} onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
            style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }} />
        </div>

        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
          <table className="w-full">
            <thead>
              <tr className="border-b text-xs text-slate-500 uppercase tracking-wide" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
                <th className="text-left px-5 py-3">User</th>
                <th className="text-left px-5 py-3">Plan</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Joined</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-white/[0.02]" style={{ borderColor: "#1a1a3a" }}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 text-xs font-bold">
                        {u.name[0]}
                      </div>
                      <div>
                        <div className="text-sm text-white">{u.name}</div>
                        <div className="text-xs text-slate-500">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${u.plan === "Growth" ? "text-indigo-300 bg-indigo-950/50" : "text-slate-400 bg-slate-800/50"}`}>
                      {u.plan}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs ${u.status === "active" ? "text-emerald-400" : "text-red-400"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs text-slate-500">{u.joined}</td>
                  <td className="px-5 py-4 text-right">
                    <button className="text-xs text-slate-500 hover:text-red-400 transition-colors">Suspend</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}