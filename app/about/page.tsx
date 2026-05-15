// PUBLIC — STATIC
// Stillworks should detect: STATIC, PUBLIC, PASS
export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">About Us</h1>
      <p className="text-gray-400 mb-4">
        This is a test application designed to validate Stillworks route detection.
      </p>
      <p className="text-gray-400 mb-4">
        It includes public routes, protected routes, forms, and various page types
        to ensure comprehensive testing coverage.
      </p>
      <div className="mt-8 p-4 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-2">Route Types</h2>
        <ul className="text-gray-400 space-y-1 text-sm">
          <li>✅ Static pages (/, /about, /pricing)</li>
          <li>✅ Form pages (/contact, /login, /register)</li>
          <li>🔒 Protected pages (/dashboard, /settings, /billing)</li>
        </ul>
      </div>
    </main>
  );
}
