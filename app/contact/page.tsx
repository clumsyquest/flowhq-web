"use client";
import { useEffect } from "react";

// TEST: critical JS error — TypeError thrown after mount, page has real content
export default function ContactPage() {
  useEffect(() => {
    const obj: any = null;
    console.log(obj.property); // TypeError: Cannot read properties of null
  }, []);

  return (
    <div style={{ background: "#080812", minHeight: "100vh", padding: "4rem 2rem", color: "white" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
        Get in touch with the FlowHQ team. We are happy to answer your questions and help you get started.
      </p>
      <p style={{ color: "#94a3b8" }}>
        Reach out to us at support@flowhq.io or use the form below to send us a message.
      </p>
    </div>
  );
}