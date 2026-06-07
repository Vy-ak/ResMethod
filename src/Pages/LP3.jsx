import { useState } from 'react';

export default function LP3() {
  const [theme, setTheme] = useState('modern'); // 'modern' | 'classic'

  const styles = {
    modern: {
      bg: 'bg-slate-50',
      text: 'text-slate-900',
      accent: 'text-blue-600',
      btn: 'bg-blue-600 hover:bg-blue-700',
      cardBorder: 'border-blue-600',
      imageFilter: 'grayscale-0'
    },
    classic: {
      bg: 'bg-stone-100',
      text: 'text-stone-900',
      accent: 'text-amber-800',
      btn: 'bg-amber-800 hover:bg-amber-900',
      cardBorder: 'border-amber-800',
      imageFilter: 'sepia-[.5]'
    }
  };

  const current = styles[theme];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${current.bg} font-sans`}>
      <nav className="p-5 flex justify-between items-center bg-white shadow-sm px-6 md:px-20">
        <div className={`font-bold text-xl ${current.accent}`}>JaringanID</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'modern' ? 'classic' : 'modern')}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Switch to {theme === 'modern' ? 'Classic' : 'Modern'} Theme
          </button>
          <button className={`${current.btn} text-white px-5 py-2 rounded-lg font-medium transition-colors`}>
            Join Class
          </button>
        </div>
      </nav>

      <header className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${current.text} mb-4 leading-tight`}>
            Kuasai Infrastruktur Jaringan
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Tingkatkan skill IT Anda dengan kurikulum terstruktur dari praktisi industri berpengalaman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${current.cardBorder}`}>
              <h3 className={`font-bold mb-2 ${current.text}`}>Kurikulum Standar</h3>
              <p className="text-sm text-gray-500">Materi yang selalu update sesuai kebutuhan industri.</p>
            </div>
            <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${current.cardBorder}`}>
              <h3 className={`font-bold mb-2 ${current.text}`}>E-Sertifikat</h3>
              <p className="text-sm text-gray-500">Dapatkan sertifikat resmi setelah lulus.</p>
            </div>
          </div>
        </div>

        {/* Polished Graphic */}
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
            alt="Global Network" 
            className={`w-full h-auto rounded-2xl shadow-xl transition-all duration-700 ${current.imageFilter}`}
          />
        </div>
      </header>
    </div>
  )
}