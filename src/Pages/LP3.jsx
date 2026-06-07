export default function App() {
    return (
      <div className="bg-slate-900 min-h-screen text-slate-100 flex items-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            KursusJaringan.com
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Build the Infrastructure of the Future.
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Step-by-step training from basic subnetting to advanced BGP configurations. Join 5,000+ engineers advancing their IT careers.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-colors">
              Start Learning
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 px-8 rounded-lg border border-slate-700 transition-colors">
              View Syllabus
            </button>
          </div>
        </div>
      </div>
    )
  }