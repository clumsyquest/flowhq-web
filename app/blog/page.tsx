import Link from "next/link";

const posts = [
  {
    slug: "introducing-conditional-branching",
    title: "Introducing conditional branching in FlowHQ",
    excerpt: "Build smarter workflows with if/else logic, nested conditions, and multi-path routing — all without writing a single line of code.",
    author: "Priya Sharma", date: "May 8, 2026", readTime: "4 min",
    tag: "Product",
  },
  {
    slug: "how-acme-saved-200-hours",
    title: "How Acme cut 200 hours of manual work per month",
    excerpt: "A deep dive into how Acme's ops team automated their entire lead-to-invoice pipeline using FlowHQ.",
    author: "Marcus Bell", date: "Apr 22, 2026", readTime: "7 min",
    tag: "Case study",
  },
  {
    slug: "api-v2-launch",
    title: "FlowHQ API v2 is now available",
    excerpt: "Faster, more predictable, and with full TypeScript SDK support. Here's everything that changed and how to migrate.",
    author: "Tom Walsh", date: "Apr 10, 2026", readTime: "5 min",
    tag: "Engineering",
  },
  {
    slug: "workflow-best-practices",
    title: "10 workflow best practices from our power users",
    excerpt: "We surveyed 500+ FlowHQ teams and compiled the patterns that separate good automations from great ones.",
    author: "Jane Doe", date: "Mar 28, 2026", readTime: "6 min",
    tag: "Guide",
  },
];

export default function BlogPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#1a1a3a" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-white">FlowHQ</span>
        </Link>
        <Link href="/login" className="text-sm text-slate-400 hover:text-white">Sign in</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-2">Blog</h1>
        <p className="text-slate-400 mb-12">Product updates, case studies, and guides.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="pb-8 border-b" style={{ borderColor: "#1a1a3a" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 rounded-full text-indigo-300 bg-indigo-950/60">{post.tag}</span>
                <span className="text-xs text-slate-600">{post.date} · {post.readTime} read</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 hover:text-indigo-300 cursor-pointer transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-5 h-5 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 font-semibold">
                  {post.author[0]}
                </div>
                {post.author}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}