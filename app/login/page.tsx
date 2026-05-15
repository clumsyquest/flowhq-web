"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    await new Promise((r) => setTimeout(r, 700));
    if (email === "thomas@flowhq.io" && password === "admin2024") {
      signIn(true);
      router.push("/dashboard");
    } else if (email === "sarah@flowhq.io" && password === "launch2024") {
      signIn(false);
      router.push("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
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
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-slate-400 text-sm">Sign in to your workspace</p>
        </div>
        <div className="rounded-2xl border p-8" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input
                type="email" name="email" required placeholder="demo@flowhq.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none transition-colors focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input
                type="password" name="password" required placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none transition-colors focus:border-indigo-500"
                style={{ background: "#080812", borderColor: "#1a1a3a" }}
              />
            </div>
            {error && (
              <div className="px-4 py-3 rounded-lg text-sm text-red-400 border border-red-900/50" style={{ background: "#200a0a" }}>
                {error}
              </div>
            )}
            <button
              type="submit" disabled={loading}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors disabled:opacity-60"
              style={{ background: "#6366f1" }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
          <p className="text-center text-sm text-slate-500 mt-6">
            No account?{" "}
            <Link href="/register" className="text-indigo-400 hover:text-indigo-300">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}