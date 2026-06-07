export default function LP2() {
    return (
      <div className="bg-gray-100 min-h-screen text-center p-10">
        <h1 className="text-2xl mb-4 text-black font-bold">Kursus Jaringan Komputer</h1>
        <p className="mb-5 text-gray-700 max-w-md mx-auto">Kami menyediakan pelatihan jaringan berkualitas untuk Anda. Belajar dari dasar sampai mahir dengan kurikulum standar industri.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Daftar Sekarang</button>
        <div className="flex gap-4 mt-10 justify-center">
          <div className="border border-gray-300 p-4 bg-white w-40">
            <h3 className="font-bold">Materi</h3>
            <p className="text-sm">Video HD</p>
          </div>
          <div className="border border-gray-300 p-4 bg-white w-40">
            <h3 className="font-bold">Lab</h3>
            <p className="text-sm">Virtual Lab</p>
          </div>
        </div>
      </div>
    )
  }