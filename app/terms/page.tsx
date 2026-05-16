// TEST: error page text — simulates a Next.js/React error page
export default function TermsPage() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Application error</h1>
        <p style={{ color: "#94a3b8" }}>A client-side exception has occurred, see the browser console for more details.</p>
      </div>
    </div>
  )
}