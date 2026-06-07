import { useState } from "react";

export default function App() {
  const courses = [
    { icon: "🔷", title: "CCNA Complete", desc: "From subnetting to routing protocols. Covers all CCNA 200-301 exam objectives." },
    { icon: "🔶", title: "Mikrotik MTCNA", desc: "RouterOS configuration, firewall, hotspot, VPN, and bandwidth management." },
    { icon: "🟣", title: "BGP Masterclass", desc: "iBGP, eBGP, policy routing, and advanced traffic engineering for ISPs." },
  ];

  const progress = [
    { label: "CCNA Routing", sub: "Module 8 of 12", pct: 66, color: "#2563eb" },
    { label: "Firewall Config", sub: "Module 3 of 10", pct: 30, color: "#0ea5e9" },
    { label: "BGP Advanced", sub: "Module 1 of 8", pct: 12, color: "#8b5cf6" },
  ];

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#f4f6fb", color: "#1a2340", minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#2563eb" }}>
          Kursus<span style={{ color: "#1a2340" }}>Jaringan</span>.com
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["Courses", "Syllabus", "Pricing", "Blog"].map(n => (
            <a key={n} href="#" style={{ color: "#64748b", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>{n}</a>
          ))}
        </div>
        <button style={{ background: "#2563eb", color: "#fff", fontSize: 13, fontWeight: 700, padding: "7px 18px", borderRadius: 6, border: "none", cursor: "pointer" }}>
          Login
        </button>
      </nav>

      {/* Hero */}
      <div style={{ background: "#fff", padding: "48px 28px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "center", borderBottom: "1px solid #e2e8f0" }}>
        <div>
          <span style={{ display: "inline-block", background: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 99, marginBottom: 14, border: "1px solid #bfdbfe" }}>
            🎓 Certified Training Program
          </span>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1a2340", lineHeight: 1.25, marginBottom: 12 }}>
            Become a <span style={{ color: "#2563eb" }}>Network Engineer</span> in 6 Months
          </h1>
          <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 20 }}>
            Hands-on CCNA, CCNP, and Mikrotik courses taught by certified instructors with 10+ years of industry experience. Learn at your own pace.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 7, border: "none", cursor: "pointer" }}>
              Enroll Now
            </button>
            <button style={{ background: "#fff", color: "#2563eb", fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 7, border: "1.5px solid #2563eb", cursor: "pointer" }}>
              View Courses
            </button>
          </div>
        </div>

        {/* Progress card */}
        <div style={{ background: "#eff6ff", borderRadius: 12, border: "1px solid #bfdbfe", padding: 20 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
            {["#f87171", "#fbbf24", "#4ade80"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#1a2340", marginBottom: 12 }}>My Learning Progress</div>
          {progress.map(({ label, sub, pct, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontSize: 14 }}>⬡</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#1a2340" }}>{label}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{sub}</div>
              </div>
              <div style={{ flex: 1, height: 5, background: "#e2e8f0", borderRadius: 3 }}>
                <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3 }} />
              </div>
              <span style={{ fontSize: 11, color, fontWeight: 700, minWidth: 30, textAlign: "right" }}>{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        {[["12,500+", "Students Enrolled"], ["4.8 ⭐", "Average Rating"], ["150+", "Hours of Content"]].map(([num, lbl]) => (
          <div key={lbl} style={{ textAlign: "center", padding: "20px 28px", borderRight: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#2563eb" }}>{num}</div>
            <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginTop: 2 }}>{lbl}</div>
          </div>
        ))}
      </div>

      {/* Course cards */}
      <div style={{ padding: "28px 28px" }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#1a2340", marginBottom: 16 }}>Featured Courses</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {courses.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0", padding: 14 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a2340", marginBottom: 6 }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#1a2340", color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 14 }}>
        © 2024 KursusJaringan.com — All rights reserved.
      </div>
    </div>
  );
}