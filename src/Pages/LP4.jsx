export default function App() {
    return (
      <div className="bg-[#0B0F19] min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Area */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              New CCNA 2024 Course Available
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Network.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 font-light mb-8 max-w-lg leading-relaxed">
              Stop memorizing commands. Start understanding how packets flow. The elite training platform for serious network engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                Enroll Now
              </button>
              <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start px-4">
                Try for free. No credit card required.
              </p>
            </div>
          </div>
  
          {/* Right Visual Area (Abstract Representation of a Network) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full aspect-square border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className="text-slate-600 text-sm font-mono absolute top-4 left-4">root@server:~# ping success</div>
               {/* You would put a cool graphic, dashboard image, or code snippet here */}
              <div className="w-48 h-48 border-4 border-cyan-500/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <div className="w-32 h-32 border-4 border-blue-600/50 rounded-full border-t-cyan-400 animate-[spin_3s_linear_infinite_reverse]"></div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    )
  }