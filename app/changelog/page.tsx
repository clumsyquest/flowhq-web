"use client";

// TEST: persistent spinner — page has text but spinner is always visible
export default function ChangelogPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh", padding: "4rem 2rem", color: "white" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Changelog</h1>
      <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
        Latest updates and improvements to FlowHQ. New features and fixes are released every week.
      </p>
      <div className="spinner" aria-busy="true" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#94a3b8" }}>
        <div style={{ width: "1.25rem", height: "1.25rem", border: "2px solid #4f46e5", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        Loading latest entries...
      </div>
    </div>
  );
}