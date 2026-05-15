"use client";
// PUBLIC — FORM_FLOW
// Stillworks should detect: FORM_FLOW, PUBLIC, PASS
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Contact Us</h1>
      {submitted ? (
        <div className="p-4 rounded-lg bg-green-900/30 border border-green-700 text-green-400">
          ✓ Message sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Your message..."
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-blue-500 outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
