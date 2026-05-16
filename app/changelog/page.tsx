"use client";

// TEST: persistent spinner — page never finishes loading
export default function ChangelogPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <div className="spinner" aria-busy="true" style={{ width: "2rem", height: "2rem", border: "3px solid #4f46e5", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 1rem" }} />
        <p style={{ color: "#94a3b8" }}>Loading changelog...</p>
      </div>
    </div>
  );
}