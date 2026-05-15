"use client";
// PUBLIC — AUTH PAGE (login page itself is always public)
// Stillworks should detect: FORM_FLOW, PUBLIC (known_auth_page signal)
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const email    = (form.elements.namedItem("email")    as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // Simple mock auth: test@demo.com / password123
    await new Promise((r) => setTimeout(r, 800));

    if (email === "test@demo.com" && password === "password123") {
      localStorage.setItem("sw_test_auth", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Try test@demo.com / password123");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">Sign In</h1>
        <p className="text-gray-400 mb-6 text-sm">
          Test account: <code className="text-blue-300">test@demo.com</code> / <code className="text-blue-300">password123</code>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="test@demo.com"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="password123"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none"
            />
          </div>
          {error && (
            <div className="p-3 rounded-lg bg-red-900/30 border border-red-700 text-red-400 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
