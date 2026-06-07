export default function App() {
    return (
      <div style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", background: "#f4f4f4", minHeight: "100vh" }}>
  
        {/* Marquee */}
        <div style={{ background: "#ffff00", color: "#cc0000", fontWeight: "bold", fontSize: 13, padding: "4px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
          <span style={{ display: "inline-block", animation: "scroll 14s linear infinite" }}>
            🔥 LIMITED TIME OFFER! 70% DISCOUNT — REGISTER NOW! ★ CCNA BOOTCAMP ★ MIKROTIK ★ BGP TRAINING ★ FREE EBOOK IF YOU JOIN TODAY! 🔥 &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <style>{`@keyframes scroll { 0%{transform:translateX(100vw)} 100%{transform:translateX(-100%)} }`}</style>
        </div>
  
        {/* Header */}
        <div style={{ background: "#cc0000", color: "#ffff00", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid #ffff00" }}>
          <h1 style={{ fontSize: 16, fontWeight: "bold" }}>🌐 KursusJaringan.com</h1>
          <span style={{ fontSize: 11 }}>📞 0812-3456-7890</span>
        </div>
  
        {/* Nav */}
        <div style={{ background: "#ff6600", display: "flex", gap: 2, padding: "4px 8px", flexWrap: "wrap" }}>
          {["Home", "Courses", "CCNA", "CCNP", "Mikrotik", "Firewall", "Forum", "Login", "Register"].map(n => (
            <a key={n} href="#" style={{ color: "#fff", fontSize: 12, textDecoration: "none", background: "#cc0000", padding: "3px 8px", border: "1px solid #ffff00" }}>{n}</a>
          ))}
        </div>
  
        {/* Body */}
        <div style={{ padding: "8px 10px", position: "relative" }}>
          <div style={{ paddingRight: 130 }}>
  
            {/* Hero */}
            <div style={{ background: "linear-gradient(#fffde7,#fff9c4)", padding: "12px 10px", borderBottom: "3px dashed #ff0000", marginBottom: 8 }}>
              <span style={{ display: "inline-block", background: "#ff0000", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 2, marginBottom: 4 }}>⭐ #1 NETWORKING COURSE IN INDONESIA ⭐</span>
              <h2 style={{ color: "#b71c1c", fontSize: 20, fontWeight: "bold", textDecoration: "underline", textTransform: "uppercase", margin: "6px 0" }}>
                Belajar Jaringan Komputer Terlengkap!
              </h2>
              <p style={{ fontSize: 12, color: "#333", lineHeight: 1.5, marginBottom: 8 }}>
                Apakah kamu ingin menjadi <b>Network Engineer profesional</b>? Di sini kamu bisa belajar <b>CCNA, CCNP, Mikrotik, BGP, OSPF, Firewall, Cisco, Juniper</b> dan masih banyak lagi! Dijamin lulus ujian sertifikasi atau <b>UANG KEMBALI 100%!</b>
              </p>
              <div style={{ display: "inline-block", background: "#ffff00", border: "3px solid #ff0000", padding: 8, transform: "rotate(-1deg)", marginBottom: 8 }}>
                <div style={{ fontSize: 12, textDecoration: "line-through", color: "#888" }}>Rp 2.500.000</div>
                <div style={{ fontSize: 28, fontWeight: "bold", color: "#cc0000" }}>Rp 749.000</div>
                <div style={{ fontSize: 10, color: "#444" }}>Harga berlaku sampai hari ini!</div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                <button style={{ background: "#00cc00", color: "#fff", fontWeight: "bold", fontSize: 14, padding: "8px 14px", border: "2px solid #006600", cursor: "pointer", textTransform: "uppercase", animation: "blink 1s step-end infinite" }}>
                  🛒 DAFTAR SEKARANG!!!
                </button>
                <button style={{ background: "#0000cc", color: "#ffff00", fontSize: 12, padding: "6px 12px", border: "2px solid #000088", cursor: "pointer" }}>
                  📖 Lihat Materi
                </button>
                <style>{`@keyframes blink { 50%{background:#009900} }`}</style>
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {[["12.500+", "Alumni"], ["4.9⭐", "Rating"], ["150+", "Video"], ["24/7", "Support"]].map(([num, lbl]) => (
                  <div key={lbl} style={{ background: "#cc0000", color: "#fff", fontSize: 10, padding: "3px 8px", textAlign: "center" }}>
                    <b style={{ display: "block", fontSize: 16 }}>{num}</b>{lbl}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Grid cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
              <div style={{ background: "#fff", border: "2px solid #cc0000", padding: 6 }}>
                <h3 style={{ fontSize: 12, fontWeight: "bold", color: "#cc0000", borderBottom: "1px solid #cc0000", marginBottom: 4 }}>📦 Yang Akan Didapat</h3>
                <ul style={{ paddingLeft: 14, fontSize: 11, color: "#333" }}>
                  {["Video HD 150+ jam", "Lab simulasi Cisco", "Ebook PDF 800 hal.", "Sertifikat kelulusan", "Group WhatsApp", "Update seumur hidup"].map(i => <li key={i} style={{ margin: "2px 0" }}>{i}</li>)}
                </ul>
              </div>
              <div style={{ background: "#fff", border: "2px solid #cc0000", padding: 6 }}>
                <h3 style={{ fontSize: 12, fontWeight: "bold", color: "#cc0000", borderBottom: "1px solid #cc0000", marginBottom: 4 }}>📋 Materi Kursus</h3>
                <ul style={{ paddingLeft: 14, fontSize: 11, color: "#333" }}>
                  {["Dasar Jaringan TCP/IP", "Routing & Switching", "OSPF, EIGRP, BGP", "Mikrotik RouterOS", "Cisco ASA Firewall", "Network Automation"].map(i => <li key={i} style={{ margin: "2px 0" }}>{i}</li>)}
                </ul>
              </div>
            </div>
  
            {/* Testimonials */}
            {[
              ["Setelah ikut kursus ini langsung dapat kerja di perusahaan telekomunikasi! Recommended banget!", "Budi S., Network Engineer"],
              ["Materi sangat lengkap, instruktur berpengalaman, worth it!", "Sari A., Mahasiswa"],
            ].map(([quote, name]) => (
              <div key={name} style={{ background: "#e8f5e9", borderLeft: "4px solid #00cc00", padding: 6, fontSize: 11, fontStyle: "italic", marginBottom: 6 }}>
                "{quote}" — <b>{name}</b>
              </div>
            ))}
          </div>
  
          {/* Sidebar */}
          <div style={{ position: "absolute", right: 0, top: 0, width: 120, background: "#fffde7", borderLeft: "2px solid #cc0000", padding: 6, fontSize: 10 }}>
            <h4 style={{ color: "#cc0000", fontSize: 11, fontWeight: "bold", marginBottom: 4 }}>🏅 Sertifikasi</h4>
            {["✅ Cisco CCNA", "✅ Cisco CCNP", "✅ Mikrotik MTCNA", "✅ Fortinet NSE"].map(s => <p key={s} style={{ color: "#333", margin: "2px 0" }}>{s}</p>)}
            <hr style={{ margin: "6px 0", borderColor: "#cc0000" }} />
            <h4 style={{ color: "#cc0000", fontSize: 11, fontWeight: "bold", marginBottom: 4 }}>📢 Promo!</h4>
            <p style={{ color: "#cc0000", fontWeight: "bold" }}>Beli 2 dapat 3! Ajak teman hemat 50%!</p>
            <hr style={{ margin: "6px 0", borderColor: "#cc0000" }} />
            <h4 style={{ color: "#cc0000", fontSize: 11, fontWeight: "bold", marginBottom: 4 }}>📅 Jadwal Live</h4>
            <p style={{ color: "#333", margin: "2px 0" }}>Sabtu, 19:00 WIB</p>
            <p style={{ color: "#333", margin: "2px 0" }}>Minggu, 15:00 WIB</p>
          </div>
        </div>
  
        {/* Footer */}
        <div style={{ background: "#222", color: "#aaa", fontSize: 10, padding: "6px 10px", textAlign: "center" }}>
          © 2024 KursusJaringan.com — All Rights Reserved | Syarat & Ketentuan | Kebijakan Privasi | Hubungi Kami
        </div>
      </div>
    );
  }