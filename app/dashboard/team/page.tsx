"use client";
import { useState } from "react";

const members = [
  { name: "Jane Doe",      email: "jane@acme.com",    role: "Owner",  status: "active", joined: "Jan 2025" },
  { name: "Marcus Bell",   email: "marcus@acme.com",  role: "Admin",  status: "active", joined: "Feb 2025" },
  { name: "Priya Sharma",  email: "priya@acme.com",   role: "Editor", status: "active", joined: "Mar 2025" },
  { name: "Tom Walsh",     email: "tom@acme.com",     role: "Viewer", status: "active", joined: "Apr 2025" },
  { name: "Lena Fischer",  email: "lena@acme.com",    role: "Editor", status: "invited",joined: "—" },
];

export default function TeamPage() {
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Team</h1>
          <p className="text-slate-400 text-sm mt-1">{members.length} members</p>
        </div>
        <button onClick={() => setInviteOpen(!inviteOpen)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
          + Invite member
        </button>
      </div>

      {inviteOpen && (
        <div className="rounded-2xl border p-5 mb-6" style={{ background: "#0d0d1f", borderColor: "#6366f1" }}>
          <h3 className="font-semibold text-white mb-3">Invite a new member</h3>
          <div className="flex gap-3">
            <input type="email" placeholder="colleague@company.com"
              className="flex-1 px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
              style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            <select className="px-4 py-2.5 rounded-lg text-sm text-white border outline-none"
              style={{ background: "#080812", borderColor: "#1a1a3a" }}>
              <option>Editor</option>
              <option>Viewer</option>
              <option>Admin</option>
            </select>
            <button className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "#6366f1" }}>
              Send invite
            </button>
          </div>
        </div>
      )}

      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1a1a3a" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs text-slate-500 uppercase tracking-wide" style={{ borderColor: "#1a1a3a", background: "#0a0a18" }}>
              <th className="text-left px-5 py-3">Member</th>
              <th className="text-left px-5 py-3">Role</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Joined</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-b last:border-0" style={{ borderColor: "#1a1a3a" }}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 text-sm font-semibold">
                      {m.name[0]}
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium">{m.name}</div>
                      <div className="text-xs text-slate-500">{m.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-slate-400">{m.role}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${m.status === "active" ? "text-emerald-400 bg-emerald-950/50" : "text-amber-400 bg-amber-950/50"}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-slate-500">{m.joined}</td>
                <td className="px-5 py-4 text-right">
                  {m.role !== "Owner" && (
                    <button className="text-xs text-slate-500 hover:text-red-400 transition-colors">Remove</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}