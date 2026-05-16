"use client";
import { useEffect } from "react";

// TEST: critical JS error — TypeError thrown after mount
export default function ContactPage() {
  useEffect(() => {
    const obj: any = null;
    console.log(obj.property); // TypeError: Cannot read properties of null
  }, []);

  return (
    <div style={{ background: "#080812", minHeight: "100vh", padding: "4rem 2rem", color: "white" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact</h1>
      <p style={{ color: "#94a3b8" }}>Get in touch with the FlowHQ team.</p>
    </div>
  );
}