"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
  };

  return (
    <div style={{ background: "#080812", minHeight: "100vh", padding: "4rem 2rem", color: "white", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "480px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Contact us</h1>
        <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>Get in touch with the FlowHQ team.</p>

        {sent ? (
          <div data-testid="success-message" style={{ background: "#052e16", border: "1px solid #16a34a", borderRadius: "12px", padding: "1.5rem", color: "#4ade80", textAlign: "center" }}>
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", color: "#cbd5e1", marginBottom: "0.375rem" }}>Name</label>
              <input type="text" name="name" required placeholder="Your name"
                style={{ width: "100%", padding: "0.625rem 1rem", background: "#0d0d1f", border: "1px solid #1a1a3a", borderRadius: "8px", color: "white", fontSize: "0.875rem", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", color: "#cbd5e1", marginBottom: "0.375rem" }}>Email</label>
              <input type="email" name="email" required placeholder="you@example.com"
                style={{ width: "100%", padding: "0.625rem 1rem", background: "#0d0d1f", border: "1px solid #1a1a3a", borderRadius: "8px", color: "white", fontSize: "0.875rem", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", color: "#cbd5e1", marginBottom: "0.375rem" }}>Message</label>
              <textarea name="message" required rows={4} placeholder="How can we help?"
                style={{ width: "100%", padding: "0.625rem 1rem", background: "#0d0d1f", border: "1px solid #1a1a3a", borderRadius: "8px", color: "white", fontSize: "0.875rem", resize: "vertical", boxSizing: "border-box" }} />
            </div>
            <button type="submit" disabled={loading}
              style={{ padding: "0.625rem", background: "#6366f1", border: "none", borderRadius: "8px", color: "white", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", opacity: loading ? 0.6 : 1 }}>
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}