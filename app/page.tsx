// PUBLIC — STATIC
// Stillworks should detect: STATIC, PUBLIC, PASS
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Stillworks Test App</h1>
      <p className="text-gray-400 text-lg mb-8">
        A real Next.js app with public and protected routes for testing Stillworks.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full">
        {[
          { href: "/about",    label: "About",    type: "PUBLIC" },
          { href: "/pricing",  label: "Pricing",  type: "PUBLIC" },
          { href: "/contact",  label: "Contact",  type: "PUBLIC — FORM" },
          { href: "/login",    label: "Login",    type: "PUBLIC — FORM" },
          { href: "/register", label: "Register", type: "PUBLIC — FORM" },
          { href: "/dashboard",label: "Dashboard",type: "PROTECTED" },
          { href: "/settings", label: "Settings", type: "PROTECTED" },
          { href: "/billing",  label: "Billing",  type: "PROTECTED" },
        ].map(({ href, label, type }) => (
          <a
            key={href}
            href={href}
            className="p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="font-semibold text-white">{label}</div>
            <div className="text-xs text-gray-500 mt-1">{type}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
