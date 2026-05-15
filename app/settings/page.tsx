"use client";
// PROTECTED — FORM_FLOW + useSession pattern
// Stillworks should detect: PROTECTED (page_file signal — useSession), FORM_FLOW
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Simulates useSession from next-auth
function useSession() {
  const [session, setSession] = useState<{ user: { email: string } } | null>(null);
  useEffect(() => {
    const isAuth = localStorage.getItem("sw_test_auth");
    if (isAuth) setSession({ user: { email: "test@demo.com" } });
  }, []);
  return { data: session };
}

export default function SettingsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (session === null) {
      // Only redirect after checking
      const timer = setTimeout(() => {
        if (!localStorage.getItem("sw_test_auth")) {
          router.push("/login");
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 space-y-4">
          <h2 className="text-lg font-semibold text-white">Profile</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input type="email" defaultValue={session?.user?.email || "test@demo.com"}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Display Name</label>
            <input type="text" defaultValue="Test User"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 outline-none" />
          </div>
        </div>

        <div className="p-6 rounded-xl border border-gray-700 bg-gray-900 space-y-4">
          <h2 className="text-lg font-semibold text-white">Notifications</h2>
          {["Email alerts", "Slack notifications", "Weekly digest"].map((label) => (
            <label key={label} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-500" />
              <span className="text-gray-400 text-sm">{label}</span>
            </label>
          ))}
        </div>

        <button type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
          {saved ? "✓ Saved!" : "Save Settings"}
        </button>
      </form>
    </main>
  );
}
