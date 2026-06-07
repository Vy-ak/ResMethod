export default function App() {
    const navLinks = ["Curriculum", "Labs", "Paths", "Community", "Pricing"];
  
    const termLines = [
      { prompt: true, text: "show bgp summary" },
      { prompt: false, text: "BGP router identifier 10.0.0.1, local AS 65001", dim: true },
      { prompt: false, text: "Neighbor    AS     State    PfxRcd", green: true },
      { prompt: false, text: "10.0.0.2    65002  Estab    24", green: true },
      { prompt: false, text: "10.0.0.3    65003  Estab    18", green: true },
      { prompt: true, text: "ping 203.0.113.1 repeat 5" },
      { prompt: false, text: "!!!!!  Success rate 100% (5/5)", green: true },
    ];
  
    const stats = [["420+", "Lab Hours"], ["94%", "Pass Rate"], ["4.9★", "Rating"]];
    const certs = ["CCNA 200-301", "CCNP Enterprise", "MTCNA"];
    const avatars = [["AN", "#7c3aed"], ["DR", "#0f766e"], ["FH", "#b45309"], ["SL", "#be185d"], ["RM", "#1d4ed8"]];
    const bottomItems = ["Real GNS3 & EVE-NG Labs", "Private Discord Community", "Lifetime Content Updates"];
  
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", background: "#030712", color: "#f9fafb", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        `}</style>
  
        {/* Glows */}
        <div style={{ position: "absolute", top: -120, left: -80, width: 480, height: 480, background: "radial-gradient(circle,rgba(124,58,237,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 60, right: -60, width: 320, height: 320, background: "radial-gradient(circle,rgba(16,185,129,.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: "40%", width: 400, height: 300, background: "radial-gradient(circle,rgba(124,58,237,.09) 0%,transparent 70%)", pointerEvents: "none" }} />
  
        {/* Nav */}
        <nav style={{ position: "relative", zIndex: 10, padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#7c3aed,#a855f7)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 16 }}>⬡</span>
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#f9fafb", letterSpacing: "-.01em" }}>
              Net<span style={{ color: "#a78bfa" }}>Forge</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {navLinks.map(n => (
              <a key={n} href="#" style={{ color: "rgba(249,250,251,.45)", fontSize: 13, fontWeight: 400, textDecoration: "none", letterSpacing: ".01em" }}>{n}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "rgba(249,250,251,.5)", fontSize: 13, cursor: "pointer" }}>Sign in</span>
            <button style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontSize: 13, fontWeight: 500, padding: "8px 22px", borderRadius: 99, border: "none", cursor: "pointer", letterSpacing: ".02em" }}>
              Join Free
            </button>
          </div>
        </nav>
  
        {/* Hero */}
        <div style={{ position: "relative", zIndex: 10, padding: "60px 40px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
  
          {/* Left */}
          <div>
            {/* Overline */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
              <div style={{ width: 24, height: 1, background: "linear-gradient(90deg,#7c3aed,transparent)" }} />
              <span style={{ fontSize: 11, fontWeight: 500, color: "#7c3aed", letterSpacing: ".12em", textTransform: "uppercase" }}>
                Elite Network Engineering Training
              </span>
            </div>
  
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 46, fontWeight: 800, color: "#f9fafb", lineHeight: 1.07, letterSpacing: "-.03em", marginBottom: 22 }}>
              Think in<br />
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>packets,</span>
              <br />
              <span style={{ color: "rgba(249,250,251,.35)" }}>not commands.</span>
            </h1>
  
            <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(249,250,251,.5)", lineHeight: 1.75, maxWidth: 420, marginBottom: 36 }}>
              NetForge teaches you how networks <strong style={{ color: "rgba(249,250,251,.75)", fontWeight: 400 }}>actually work</strong> — not how to pass a multiple choice test. Hands-on labs, real topologies, career-level depth.
            </p>
  
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <button style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontSize: 14, fontWeight: 500, padding: "13px 30px", borderRadius: 99, border: "none", cursor: "pointer", letterSpacing: ".02em", boxShadow: "0 0 30px rgba(124,58,237,.35)" }}>
                Start Free for 7 Days
              </button>
              <span style={{ color: "rgba(249,250,251,.4)", fontSize: 12 }}>
                No card needed · <a href="#" style={{ color: "#a78bfa", textDecoration: "none" }}>See curriculum ↗</a>
              </span>
            </div>
  
            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex" }}>
                {avatars.map(([initials, bg], i) => (
                  <div key={initials} style={{ width: 28, height: 28, borderRadius: "50%", background: bg, border: "2px solid #030712", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600, color: "#f9fafb", marginLeft: i === 0 ? 0 : -8 }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: "rgba(249,250,251,.4)", lineHeight: 1.5 }}>
                Joined by <strong style={{ color: "rgba(249,250,251,.7)", fontWeight: 500 }}>5,200+ engineers</strong> this year<br />
                from Telkom, Biznet, AWS, and more
              </div>
            </div>
          </div>
  
          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
  
            {/* Terminal */}
            <div style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,.06)", background: "#0a0f15" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ fontSize: 11, color: "rgba(249,250,251,.25)", marginLeft: 6, fontFamily: "monospace" }}>
                  netforge-lab · bgp-session.pkt
                </span>
              </div>
              <div style={{ padding: 14, fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: 1.8 }}>
                {termLines.map(({ prompt, text, dim, green }, i) => (
                  <div key={i} style={{ color: prompt ? undefined : dim ? "rgba(249,250,251,.2)" : green ? "#10b981" : "rgba(249,250,251,.6)" }}>
                    {prompt && <span style={{ color: "#7c3aed" }}>R1# </span>}
                    <span style={{ color: prompt ? "rgba(249,250,251,.6)" : undefined }}>{text}</span>
                  </div>
                ))}
                <div>
                  <span style={{ color: "#7c3aed" }}>R1# </span>
                  <span style={{ color: "rgba(249,250,251,.5)", animation: "pulse 1.2s infinite" }}>_</span>
                </div>
              </div>
            </div>
  
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {stats.map(([num, lbl]) => (
                <div key={lbl} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#f9fafb", letterSpacing: "-.02em", marginBottom: 2 }}>
                    {num.replace(/[+★%]/g, "")}
                    <span style={{ color: "#7c3aed" }}>{num.match(/[+★%]/g)?.join("") ?? ""}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(249,250,251,.35)", fontWeight: 400, letterSpacing: ".03em", textTransform: "uppercase" }}>{lbl}</div>
                </div>
              ))}
            </div>
  
            {/* Cert badges */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {certs.map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: "rgba(249,250,251,.5)", fontWeight: 500 }}>
                  <span style={{ color: "#a78bfa" }}>🎓</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,.05)", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {bottomItems.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(249,250,251,.3)" }}>
                <span style={{ color: "#7c3aed" }}>✦</span> {item}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 11, color: "rgba(249,250,251,.2)" }}>© 2024 NetForge</span>
        </div>
      </div>
    );
  }