import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import LP1 from './Pages/LP1';
import LP2 from './Pages/LP2';
import LP3 from './Pages/LP3';
import LP4 from './Pages/LP4';

const pages = [
  {
    to: "/lp1",
    label: "LP1",
    tier: "Poor",
    score: 1,
    desc: "Old-school vibes",
    accent: "#ef4444",
    accentSoft: "rgba(239,68,68,0.12)",
    accentBorder: "rgba(239,68,68,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    bars: 1,
  },
  {
    to: "/lp2",
    label: "LP2",
    tier: "Moderate",
    score: 2,
    desc: "Clean & functional",
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.12)",
    accentBorder: "rgba(245,158,11,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    bars: 2,
  },
  {
    to: "/lp3",
    label: "LP3",
    tier: "Good",
    score: 3,
    desc: "Dark & polished",
    accent: "#3b82f6",
    accentSoft: "rgba(59,130,246,0.12)",
    accentBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    bars: 3,
  },
  {
    to: "/",
    label: "LP4",
    tier: "Excellent",
    score: 4,
    desc: "Elite & immersive",
    accent: "#10b981",
    accentSoft: "rgba(16,185,129,0.12)",
    accentBorder: "rgba(16,185,129,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    bars: 4,
  },
];

function ScoreBars({ count, color }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 16 }}>
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          style={{
            width: 4,
            height: 4 + i * 3,
            borderRadius: 2,
            background: i <= count ? color : "rgba(255,255,255,0.12)",
            transition: "background 0.2s",
          }}
        />
      ))}
    </div>
  );
}

function NavCard({ page, isActive }) {
  const { to, label, tier, desc, accent, accentSoft, accentBorder, icon, bars } = page;

  return (
    <Link
      to={to}
      style={{ textDecoration: "none", flex: "1 1 0", minWidth: 0 }}
    >
      <div
        style={{
          position: "relative",
          padding: "10px 14px",
          borderRadius: 12,
          border: `1px solid ${isActive ? accentBorder : "rgba(255,255,255,0.07)"}`,
          background: isActive ? accentSoft : "rgba(255,255,255,0.03)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {/* Active glow strip */}
        {isActive && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
              borderRadius: "12px 12px 0 0",
            }}
          />
        )}

        {/* Top row: icon + label + score bars */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div
              style={{
                color: isActive ? accent : "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
            >
              {icon}
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: isActive ? "#f9fafb" : "rgba(249,250,251,0.45)",
                letterSpacing: "-0.02em",
                transition: "color 0.2s",
              }}
            >
              {label}
            </span>
          </div>
          <ScoreBars count={bars} color={isActive ? accent : "rgba(255,255,255,0.2)"} />
        </div>

        {/* Tier badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 600,
              color: isActive ? accent : "rgba(255,255,255,0.25)",
              background: isActive ? accentSoft : "transparent",
              border: `1px solid ${isActive ? accentBorder : "rgba(255,255,255,0.08)"}`,
              borderRadius: 99,
              padding: "2px 8px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            {tier}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 11,
            color: isActive ? "rgba(249,250,251,0.55)" : "rgba(249,250,251,0.2)",
            margin: 0,
            lineHeight: 1.4,
            transition: "color 0.2s",
          }}
        >
          {desc}
        </p>
      </div>
    </Link>
  );
}

function NavBar() {
  const location = useLocation();

  const getActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&display=swap');
      `}</style>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(3,7,18,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "10px 16px",
        }}
      >
        {/* Header label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <div style={{ width: 20, height: 1, background: "rgba(255,255,255,0.15)" }} />
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Landing Page Comparison
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Cards row */}
        <div style={{ display: "flex", gap: 8 }}>
          {pages.map((page) => (
            <NavCard
              key={page.label}
              page={page}
              isActive={getActive(page.to)}
            />
          ))}
        </div>
      </nav>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LP4 />} />
          <Route path="/lp3" element={<LP3 />} />
          <Route path="/lp2" element={<LP2 />} />
          <Route path="/lp1" element={<LP1 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;