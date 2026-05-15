"use client";
import { useState } from "react";

const integrations = [
  { name: "Slack",        desc: "Send alerts and notifications",  connected: true,  category: "communication" },
  { name: "GitHub",       desc: "Trigger on pull requests",       connected: true,  category: "dev" },
  { name: "Salesforce",   desc: "Sync leads and opportunities",   connected: true,  category: "crm" },
  { name: "HubSpot",      desc: "Automate CRM workflows",         connected: false, category: "crm" },
  { name: "Notion",       desc: "Update databases automatically", connected: true,  category: "productivity" },
  { name: "Stripe",       desc: "React to payment events",        connected: false, category: "payments" },
  { name: "Jira",         desc: "Create and update tickets",      connected: false, category: "dev" },
  { name: "Intercom",     desc: "Trigger customer messages",      connected: true,  category: "support" },
  { name: "Airtable",     desc: "Read and write records",         connected: false, category: "productivity" },
  { name: "SendGrid",     desc: "Send transactional email",       connected: true,  category: "communication" },
  { name: "Twilio",       desc: "Send SMS and voice calls",       connected: false, category: "communication" },
  { name: "PagerDuty",    desc: "Trigger on-call incidents",      connected: false, category: "dev" },
];

export default function IntegrationsPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? integrations : filter === "connected"
    ? integrations.filter((i) => i.connected)
    : integrations.filter((i) => i.category === filter);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Integrations</h1>
        <p className="text-slate-400 text-sm mt-1">{integrations.filter((i) => i.connected).length} connected · {integrations.length} available</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", "connected", "crm", "dev", "communication", "productivity", "payments", "support"].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-3 py-1.5 rounded-lg text-xs capitalize transition-colors"
            style={{
              background: filter === f ? "#1a1a3a" : "transparent",
              color: filter === f ? "white" : "#64748b",
              border: "1px solid",
              borderColor: filter === f ? "#6366f1" : "#1a1a3a",
            }}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((intg) => (
          <div key={intg.name} className="p-5 rounded-2xl border flex items-start justify-between" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                  {intg.name[0]}
                </div>
                <span className="font-medium text-white text-sm">{intg.name}</span>
              </div>
              <p className="text-xs text-slate-500">{intg.desc}</p>
            </div>
            <button className={`ml-4 mt-0.5 text-xs px-3 py-1.5 rounded-lg font-medium flex-shrink-0 ${intg.connected ? "text-emerald-400 bg-emerald-950/40" : "text-indigo-400 border"}`}
              style={intg.connected ? {} : { borderColor: "#6366f1" }}>
              {intg.connected ? "Connected" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}