// PROTECTED — inherited from dashboard layout
// Stillworks should detect: PROTECTED (via parent layout)
export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Projects</h1>
      <div className="grid gap-4">
        {[
          { name: "myapp",   url: "https://myapp.vercel.app",   status: "PASS",   routes: 6 },
          { name: "api",     url: "https://api.railway.app",    status: "FAIL",   routes: 4 },
          { name: "landing", url: "https://landing.vercel.app", status: "PASS",   routes: 3 },
        ].map((p) => (
          <div key={p.name} className="p-5 rounded-xl border border-gray-700 bg-gray-900 flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">{p.name}</div>
              <div className="text-gray-500 text-sm font-mono">{p.url}</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">{p.routes} routes</span>
              <span className={`text-sm font-mono font-bold ${p.status === "PASS" ? "text-green-400" : "text-red-400"}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
