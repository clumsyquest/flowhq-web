"use client";

// TEST: persistent spinner — minimal text, spinner always visible
export default function ChangelogPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="spinner" aria-busy="true" style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ width: "1.25rem", height: "1.25rem", border: "2px solid #4f46e5", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        Loading...
      </div>
    </div>
  );
}