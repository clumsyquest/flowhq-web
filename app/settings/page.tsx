"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../lib/auth";

export default function SettingsPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/login"); return; }
    setReady(true);
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen p-8" style={{ background: "#080812" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-2">Account settings</h1>
        <p className="text-slate-400 text-sm mb-8">Manage your profile and preferences.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border p-6 space-y-4" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <h2 className="font-semibold text-white">Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">First name</label>
                <input type="text" defaultValue="Jane"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Last name</label>
                <input type="text" defaultValue="Doe"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Email</label>
              <input type="email" defaultValue="demo@flowhq.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
          </div>

          <div className="rounded-2xl border p-6 space-y-3" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <h2 className="font-semibold text-white mb-2">Notifications</h2>
            {["Workflow failure alerts", "Weekly digest", "Product updates", "Team activity"].map((label) => (
              <label key={label} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-slate-300">{label}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-500" />
              </label>
            ))}
          </div>

          <button type="submit"
            className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: "#6366f1" }}>
            {saved ? "✓ Saved" : "Save changes"}
          </button>
        </form>
      </div>
    </div>
  );
}