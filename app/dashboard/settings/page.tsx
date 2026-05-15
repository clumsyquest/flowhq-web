"use client";
import { useState } from "react";

export default function DashboardSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("profile");

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your workspace preferences.</p>
      </div>

      <div className="flex gap-1 mb-6 border-b" style={{ borderColor: "#1a1a3a" }}>
        {["profile", "workspace", "security", "notifications"].map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className="px-4 py-2.5 text-sm capitalize transition-colors border-b-2 -mb-px"
            style={{
              color: tab === t ? "white" : "#64748b",
              borderColor: tab === t ? "#6366f1" : "transparent",
            }}>
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={save} className="max-w-lg space-y-6">
        {tab === "profile" && (
          <div className="rounded-2xl border p-6 space-y-4" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 rounded-full bg-indigo-900 flex items-center justify-center text-xl font-bold text-indigo-300">J</div>
              <button type="button" className="text-sm text-indigo-400 hover:text-indigo-300">Change avatar</button>
            </div>
            {[
              { label: "First name", value: "Sarah",           type: "text" },
              { label: "Last name",  value: "Moore",           type: "text" },
              { label: "Email",      value: "sarah@flowhq.io", type: "email" },
              { label: "Company",    value: "FlowHQ",          type: "text" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm text-slate-400 mb-1.5">{f.label}</label>
                <input type={f.type} defaultValue={f.value}
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
            ))}
          </div>
        )}
        {tab === "workspace" && (
          <div className="rounded-2xl border p-6 space-y-4" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Workspace name</label>
              <input type="text" defaultValue="Acme Inc."
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Timezone</label>
              <select className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none"
                style={{ background: "#080812", borderColor: "#1a1a3a" }}>
                <option>UTC</option>
                <option>Europe/Paris</option>
                <option>America/New_York</option>
              </select>
            </div>
          </div>
        )}
        {tab === "security" && (
          <div className="rounded-2xl border p-6 space-y-4" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Current password</label>
              <input type="password" placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">New password</label>
              <input type="password" placeholder="Min. 12 characters"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
          </div>
        )}
        {tab === "notifications" && (
          <div className="rounded-2xl border p-6 space-y-3" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            {["Workflow failure alerts", "Weekly digest", "Product updates", "Team activity", "Billing reminders"].map((label) => (
              <label key={label} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-slate-300">{label}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-500" />
              </label>
            ))}
          </div>
        )}
        <button type="submit"
          className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white"
          style={{ background: "#6366f1" }}>
          {saved ? "✓ Saved" : "Save changes"}
        </button>
      </form>
    </div>
  );
}