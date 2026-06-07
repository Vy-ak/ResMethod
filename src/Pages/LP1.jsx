import { useState } from 'react';

export default function LP1() {
  const [uglyTheme, setUglyTheme] = useState('bg-yellow-300 text-red-800');

  return (
    <div className={`p-2 text-xs min-h-screen ${uglyTheme}`}>
      <button 
        onClick={() => setUglyTheme(uglyTheme === 'bg-yellow-300 text-red-800' ? 'bg-lime-400 text-pink-900' : 'bg-yellow-300 text-red-800')}
        className="border-2 border-black p-1 mb-2 bg-white"
      >
        Click to change looks
      </button>

      <div>selamat datang di kursus jaringan. kami adalah tempat belajar terbaik.</div>
      
      {/* Badly sized image */}
      <img 
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" 
        alt="Network" 
        className="w-[150px] h-[300px] my-2" 
      />

      <p>belajar routing switching mikrotik cisco semuanya ada disini lengkap sekali dari dasar sampai mahir untuk pemula dan profesional. jangan lewatkan kesempatan ini karena sangat terbatas sekali kuotanya bagi yang ingin daftar silakan klik link.</p>
      
      <a href="#" className="text-blue-800 underline font-bold">daftar disini</a>
      
      <div className="mt-2">Fitur: 1. lab online 2. materi video 3. sertifikat 4. grup telegram tanya jawab 24 jam bersama mentor ahli jaringan dunia.</div>
    </div>
  )
}