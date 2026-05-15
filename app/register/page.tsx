"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "../lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    signIn(false);
    router.push("/onboarding");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#080812" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">FlowHQ</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Start for free</h1>
          <p className="text-slate-400 text-sm">No credit card required</p>
        </div>
        <div className="rounded-2xl border p-8" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">First name</label>
                <input type="text" name="firstName" required placeholder="Jane"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Last name</label>
                <input type="text" name="lastName" required placeholder="Doe"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Work email</label>
              <input type="email" name="email" required placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input type="password" name="password" required placeholder="Min. 8 characters"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
              <input type="text" name="company" required placeholder="Acme Inc."
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }} />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white disabled:opacity-60"
              style={{ background: "#6366f1" }}>
              {loading ? "Creating account…" : "Create free account"}
            </button>
          </form>
          <p className="text-center text-xs text-slate-500 mt-4">
            By signing up you agree to our{" "}
            <Link href="/terms" className="text-indigo-400">Terms</Link> and{" "}
            <Link href="/privacy" className="text-indigo-400">Privacy Policy</Link>
          </p>
          <p className="text-center text-sm text-slate-500 mt-3">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}