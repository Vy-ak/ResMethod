import { useState } from 'react';

export default function LP4() {
  const [theme, setTheme] = useState('tech'); // 'tech' | 'phantom'

  const styles = {
    tech: {
      bg: 'bg-slate-950',
      text: 'text-white',
      accentText: 'bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent',
      blur: 'bg-indigo-500/10',
      btnPrimary: 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-2xl shadow-emerald-500/20',
      btnSecondary: 'bg-slate-800 hover:bg-slate-700 text-white rounded-2xl border-slate-700',
      card: 'bg-slate-900/50 border-slate-800 rounded-3xl',
      badge: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400 rounded-full',
      imageStyle: 'rounded-3xl shadow-2xl shadow-indigo-500/20 rotate-0'
    },
    phantom: {
      bg: 'bg-zinc-950',
      text: 'text-zinc-100',
      accentText: 'text-red-600',
      blur: 'bg-red-600/10',
      btnPrimary: 'bg-red-600 hover:bg-red-700 text-white rounded-none shadow-red-600/40 uppercase tracking-widest border border-red-500',
      btnSecondary: 'bg-transparent hover:bg-zinc-900 text-red-500 rounded-none border-red-900 uppercase tracking-widest',
      card: 'bg-zinc-900/80 border-red-900/50 rounded-none skew-x-[-2deg]',
      badge: 'border-red-600 bg-red-950/50 text-red-500 rounded-none uppercase skew-x-[-6deg]',
      imageStyle: 'rounded-none shadow-[10px_10px_0px_0px_rgba(220,38,38,1)] -rotate-2 scale-105 grayscale contrast-125'
    }
  };

  const current = styles[theme];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${current.bg} ${current.text}`}>
      
      {/* Background Ornaments */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full transition-colors duration-700 ${current.blur} pointer-events-none`}></div>
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setTheme(theme === 'tech' ? 'phantom' : 'tech')}
          className={`px-4 py-2 text-xs font-bold transition-all duration-300 ${current.btnSecondary}`}
        >
          {theme === 'tech' ? 'INITIATE PHANTOM MODE' : 'RETURN TO TECH MODE'}
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start">
          <span className={`px-4 py-1.5 text-xs font-semibold tracking-widest border mb-8 transition-all duration-500 ${current.badge}`}>
            Masa Depan Karir IT Anda
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Architect Your <br/>
            <span className={`transition-all duration-500 ${current.accentText}`}>Future Network</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
            Platform pembelajaran jaringan premium dengan simulasi real-time. Dirancang untuk mencetak engineer kelas dunia.
          </p>
          <div className="flex gap-4">
            <button className={`px-8 py-4 font-bold transition-all shadow-lg ${current.btnPrimary}`}>
              Daftar Sekarang
            </button>
            <button className={`px-8 py-4 font-bold transition-all border ${current.btnSecondary}`}>
              Lihat Silabus
            </button>
          </div>
        </div>

        {/* Hero Graphic */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80" 
            alt="Cyber Security Concept" 
            className={`w-full h-auto object-cover transition-all duration-700 ${current.imageStyle}`}
          />
        </div>

      </div>

      {/* Feature Cards */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { t: "Expert Mentor", d: "Belajar langsung dari CCIE & Praktisi ISP." },
            { t: "Cloud Lab", d: "Simulasi jaringan skala besar di cloud." },
            { t: "Job Connect", d: "Akses ke 500+ mitra penyalur kerja." }
          ].map((f, i) => (
            <div key={i} className={`p-8 border backdrop-blur-sm transition-all duration-500 ${current.card}`}>
              <h3 className="text-xl font-bold mb-3">{f.t}</h3>
              <p className="text-gray-400 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}