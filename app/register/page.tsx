"use client";
// PUBLIC — FORM_FLOW (registration page)
// Stillworks should detect: FORM_FLOW, PUBLIC (known_auth_page signal)
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Create Account</h1>
        {submitted ? (
          <div className="p-4 rounded-lg bg-green-900/30 border border-green-700 text-green-400">
            ✓ Account created! Check your email to verify.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name</label>
              <input type="text" name="name" required placeholder="John Doe"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input type="email" name="email" required placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input type="password" name="password" required placeholder="Min 8 characters"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none" />
            </div>
            <button type="submit"
              className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
              Create Account
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
