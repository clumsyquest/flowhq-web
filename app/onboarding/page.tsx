"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isAuthenticated } from "../lib/auth";

const steps = ["Welcome", "Your team", "First workflow", "Integrations"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isAuthenticated()) router.push("/login");
  }, [router]);

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#080812" }}>
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white">FlowHQ</span>
          </div>
          <button onClick={() => router.push("/dashboard")} className="text-xs text-slate-500 hover:text-slate-300">
            Skip setup
          </button>
        </div>

        <div className="flex gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 h-1 rounded-full transition-colors"
              style={{ background: i <= step ? "#6366f1" : "#1a1a3a" }} />
          ))}
        </div>

        <div className="rounded-2xl border p-8" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          {step === 0 && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Welcome to FlowHQ 👋</h1>
              <p className="text-slate-400 mb-6">Let&apos;s get your workspace set up in a few quick steps.</p>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">Workspace name</label>
                <input type="text" placeholder="Acme Inc."
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Invite your team</h2>
              <p className="text-slate-400 mb-6">FlowHQ works better together. Invite colleagues to collaborate.</p>
              <textarea rows={3} placeholder="Enter email addresses, one per line…"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500 resize-none"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Create your first workflow</h2>
              <p className="text-slate-400 mb-6">Choose a template to get started quickly.</p>
              <div className="grid grid-cols-2 gap-3">
                {["Slack alerts", "Lead nurturing", "CRM sync", "Custom"].map((t) => (
                  <div key={t} className="p-4 rounded-xl border cursor-pointer hover:border-indigo-500 transition-colors text-sm text-slate-300"
                    style={{ borderColor: "#1a1a3a" }}>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Connect your tools</h2>
              <p className="text-slate-400 mb-6">Connect at least one integration to power your workflows.</p>
              <div className="space-y-2">
                {["Slack", "GitHub", "Salesforce", "Notion"].map((t) => (
                  <div key={t} className="flex items-center justify-between px-4 py-3 rounded-xl border" style={{ borderColor: "#1a1a3a" }}>
                    <span className="text-sm text-slate-300">{t}</span>
                    <button className="text-xs text-indigo-400 border border-indigo-800 px-3 py-1 rounded-lg">Connect</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={next}
            className="w-full mt-8 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: "#6366f1" }}>
            {step < steps.length - 1 ? "Continue →" : "Go to dashboard →"}
          </button>
        </div>

        <p className="text-center text-xs text-slate-600 mt-4">
          Step {step + 1} of {steps.length} — {steps[step]}
        </p>
      </div>
    </div>
  );
}