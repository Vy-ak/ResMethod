export default function LP4() {
    return (
      <div className="bg-slate-950 min-h-screen text-white overflow-hidden relative">
        {/* Ornamen Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-8">
            Masa Depan Karir IT Anda
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-center tracking-tight mb-8">
            Architect Your <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Future Network</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl text-center max-w-2xl leading-relaxed mb-12">
            Platform pembelajaran jaringan premium dengan simulasi real-time. Dirancang untuk mencetak engineer kelas dunia.
          </p>
          <div className="flex gap-6">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
              Daftar Sekarang
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all border border-slate-700">
              Lihat Silabus
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full">
            {[
              { t: "Expert Mentor", d: "Belajar langsung dari CCIE & Praktisi ISP." },
              { t: "Cloud Lab", d: "Simulasi jaringan skala besar di cloud." },
              { t: "Job Connect", d: "Akses ke 500+ mitra penyalur kerja." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">{f.t}</h3>
                <p className="text-slate-500">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }