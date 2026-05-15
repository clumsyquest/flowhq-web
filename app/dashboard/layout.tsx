"use client";
// PROTECTED LAYOUT — all routes under /dashboard are protected
// This is how Stillworks should detect protection via parent layout
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Check auth — redirect to login if not authenticated
    const isAuth = localStorage.getItem("sw_test_auth");
    if (!isAuth) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 border-r border-gray-800 p-4 flex flex-col gap-2">
        <div className="text-blue-400 font-bold mb-6 text-lg">Dashboard</div>
        {[
          { href: "/dashboard",         label: "Overview" },
          { href: "/dashboard/projects",label: "Projects" },
          { href: "/dashboard/team",    label: "Team" },
          { href: "/settings",          label: "Settings" },
          { href: "/billing",           label: "Billing" },
        ].map(({ href, label }) => (
          <a key={href} href={href}
            className="px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm">
            {label}
          </a>
        ))}
        <div className="mt-auto">
          <button
            onClick={() => { localStorage.removeItem("sw_test_auth"); window.location.href = "/login"; }}
            className="w-full px-3 py-2 rounded-lg text-red-400 hover:bg-red-900/20 text-sm text-left transition-colors">
            Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
