"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, signOut } from "../lib/auth";

const navItems = [
  { href: "/dashboard",                label: "Overview",     icon: "◈" },
  { href: "/dashboard/projects",       label: "Projects",     icon: "⬡" },
  { href: "/dashboard/analytics",      label: "Analytics",    icon: "◎" },
  { href: "/dashboard/team",           label: "Team",         icon: "◉" },
  { href: "/dashboard/reports",        label: "Reports",      icon: "▤" },
  { href: "/dashboard/integrations",   label: "Integrations", icon: "⬢" },
  { href: "/dashboard/api-keys",       label: "API Keys",     icon: "◇" },
];

const bottomItems = [
  { href: "/dashboard/billing",  label: "Billing",  icon: "⬛" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated()) router.push("/login");
  }, [router]);

  return (
    <div className="h-screen flex overflow-hidden" style={{ background: "#080812" }}>
      <aside className="w-56 flex-shrink-0 flex flex-col border-r overflow-y-auto"
        style={{ background: "#0a0a18", borderColor: "#1a1a3a" }}>
        <div className="px-5 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white text-sm">FlowHQ</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors"
                style={{
                  color: active ? "white" : "#64748b",
                  background: active ? "#1a1a3a" : "transparent",
                }}>
                <span className="text-xs">{icon}</span>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t space-y-0.5" style={{ borderColor: "#1a1a3a" }}>
          {bottomItems.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors"
                style={{
                  color: active ? "white" : "#64748b",
                  background: active ? "#1a1a3a" : "transparent",
                }}>
                <span className="text-xs">{icon}</span>
                {label}
              </Link>
            );
          })}
          <button onClick={signOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-950/30 transition-colors">
            <span className="text-xs">⏻</span>
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}