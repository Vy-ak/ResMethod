import { useState } from 'react';

export default function LP2() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen p-10 text-center transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-black'}`}>
      
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`mb-6 px-4 py-1 text-sm border rounded ${isDark ? 'border-gray-500 text-gray-300' : 'border-gray-400 text-gray-700'}`}
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>

      <h1 className={`text-2xl mb-4 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
        Kursus Jaringan Komputer
      </h1>
      
      <p className={`mb-5 max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
        Kami menyediakan pelatihan jaringan berkualitas untuk Anda. Belajar dari dasar sampai mahir dengan kurikulum standar industri.
      </p>

      {/* Standard Image placement */}
      <img 
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" 
        alt="Server Room" 
        className="w-full max-w-md mx-auto rounded mb-6 shadow-sm"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
        Daftar Sekarang
      </button>

      <div className="flex gap-4 mt-10 justify-center">
        <div className={`border p-4 w-40 rounded ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
          <h3 className="font-bold">Materi</h3>
          <p className="text-sm">Video HD</p>
        </div>
        <div className={`border p-4 w-40 rounded ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
          <h3 className="font-bold">Lab</h3>
          <p className="text-sm">Virtual Lab</p>
        </div>
      </div>
    </div>
  )
}