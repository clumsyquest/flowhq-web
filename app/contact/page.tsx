"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#080812", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white">FlowHQ</span>
        </Link>
        <Link href="/login" className="text-sm text-slate-400 hover:text-white">Sign in</Link>
      </nav>

      <main className="max-w-xl mx-auto px-8 py-20">
        <h1 className="text-4xl font-extrabold text-white mb-2">Get in touch</h1>
        <p className="text-slate-400 mb-10">We typically respond within one business day.</p>

        {submitted ? (
          <div className="p-6 rounded-2xl border text-center" style={{ background: "#0a1a0a", borderColor: "#166534" }}>
            <div className="text-3xl mb-3">✉️</div>
            <h2 className="text-white font-semibold mb-1">Message sent!</h2>
            <p className="text-slate-400 text-sm">We&apos;ll get back to you within one business day.</p>
          </div>
        ) : (
          <div className="rounded-2xl border p-8" style={{ background: "#0d0d1f", borderColor: "#1a1a3a" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                  <input type="text" name="name" required placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                    style={{ background: "#080812", borderColor: "#1a1a3a" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input type="email" name="email" required placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500"
                    style={{ background: "#080812", borderColor: "#1a1a3a" }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Subject</label>
                <select name="subject"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white border outline-none focus:border-indigo-500"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }}>
                  <option>General enquiry</option>
                  <option>Sales</option>
                  <option>Technical support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell us how we can help…"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border outline-none focus:border-indigo-500 resize-none"
                  style={{ background: "#080812", borderColor: "#1a1a3a" }} />
              </div>
              <button type="submit"
                className="w-full py-2.5 rounded-xl font-semibold text-sm text-white"
                style={{ background: "#6366f1" }}>
                Send message
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}