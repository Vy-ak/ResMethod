export default function App() {
    const courses = [
      { color: "rgba(99,102,241,.15)", iconColor: "#818cf8", icon: "🎓", title: "CCNA 200-301 Complete", lessons: 150, hours: 62, badge: "Popular", badgeBg: "#6366f1" },
      { color: "rgba(16,185,129,.1)", iconColor: "#10b981", icon: "🔧", title: "Mikrotik RouterOS Professional", lessons: 94, hours: 38, badge: "New", badgeBg: "#10b981" },
      { color: "rgba(249,115,22,.1)", iconColor: "#f97316", icon: "🔒", title: "Network Security & Firewall", lessons: 78, hours: 29, badge: null, badgeBg: null },
      { color: "rgba(139,92,246,.1)", iconColor: "#8b5cf6", icon: "🌐", title: "BGP & Advanced Routing", lessons: 60, hours: 24, badge: null, badgeBg: null },
    ];
  
    const metrics = [
      ["12k+", "Active Students"],
      ["4.8★", "Average Rating"],
      ["380+", "Lab Exercises"],
      ["92%", "Exam Pass Rate"],
    ];
  
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f172a", color: "#e2e8f0", minHeight: "100vh" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap');`}</style>
  
        {/* Nav */}
        <nav style={{ padding: "0 36px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(99,102,241,.15)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#6366f1,#818cf8)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 16 }}>⬡</span>
            </div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>NetAcademy</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Courses", "Learning Paths", "Labs", "Community", "Pricing"].map(n => (
              <a key={n} href="#" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>{n}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Sign in</span>
            <button style={{ background: "#6366f1", color: "#fff", fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", letterSpacing: ".02em" }}>
              Get Started
            </button>
          </div>
        </nav>
  
        {/* Hero */}
        <div style={{ padding: "52px 36px 40px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "start" }}>
          <div>
            {/* Pill badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.3)", color: "#a5b4fc", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 99, marginBottom: 20, letterSpacing: ".04em", textTransform: "uppercase" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
              Trusted by 5,000+ Engineers
            </div>
  
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 38, color: "#f8fafc", lineHeight: 1.15, marginBottom: 16, fontWeight: 400 }}>
              Build <em style={{ fontStyle: "normal", color: "#818cf8" }}>real-world</em> network infrastructure skills
            </h1>
            <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.75, marginBottom: 28, maxWidth: 440, fontWeight: 300 }}>
              From CCNA fundamentals to advanced BGP engineering — structured learning paths with hands-on labs, real equipment simulations, and industry-recognized certifications.
            </p>
  
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 28 }}>
              <button style={{ background: "#6366f1", color: "#fff", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 9, border: "none", cursor: "pointer" }}>
                Start Free Trial
              </button>
              <button style={{ background: "transparent", color: "#94a3b8", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 9, border: "1px solid rgba(148,163,184,.25)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                ▶ Watch Demo
              </button>
            </div>
  
            <div style={{ display: "flex", gap: 20 }}>
              {["No credit card", "7-day free access", "Cancel anytime"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b" }}>
                  <span style={{ color: "#6366f1", fontWeight: 700 }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
  
          {/* Course list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {courses.map(({ color, iconColor, icon, title, lessons, hours, badge, badgeBg }) => (
              <div key={title} style={{ background: "rgba(30,41,59,.7)", border: `1px solid ${badge === "Popular" ? "rgba(99,102,241,.5)" : "rgba(99,102,241,.15)"}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 9, background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
                  {icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 11, color: "#64748b", display: "flex", gap: 10 }}>
                    <span>{lessons} lessons</span><span>{hours} hours</span>
                  </div>
                </div>
                {badge && (
                  <div style={{ background: badgeBg, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, whiteSpace: "nowrap", alignSelf: "flex-start" }}>
                    {badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(99,102,241,.1)", borderBottom: "1px solid rgba(99,102,241,.1)" }}>
          {metrics.map(([num, lbl], i) => (
            <div key={lbl} style={{ padding: "20px 36px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(99,102,241,.1)" : "none" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                {num.replace(/[k+★%]/g, "")}
                <span style={{ color: "#818cf8" }}>{num.match(/[k+★%]/g)?.join("") ?? ""}</span>
              </div>
              <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".06em" }}>{lbl}</div>
            </div>
          ))}
        </div>
  
        {/* Footer */}
        <div style={{ background: "#0a0f1e", borderTop: "1px solid rgba(99,102,241,.1)", padding: "16px 36px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#475569" }}>© 2024 NetAcademy — Empowering Network Engineers</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy", "Terms", "Support"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "#475569", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }