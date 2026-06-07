export default function LP3() {
    return (
      <div className="bg-slate-50 min-h-screen">
        <nav className="p-5 flex justify-between items-center bg-white shadow-sm px-20">
          <div className="font-bold text-blue-600">JaringanID</div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium">Join Class</button>
        </nav>
        <header className="py-20 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Kuasai Infrastruktur Jaringan</h1>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">Tingkatkan skill IT Anda dengan kurikulum terstruktur dari praktisi industri berpengalaman.</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md w-64 border-t-4 border-blue-600">
              <h3 className="font-bold mb-2">Kurikulum Standar</h3>
              <p className="text-sm text-slate-500">Materi yang selalu update sesuai kebutuhan industri IT saat ini.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md w-64 border-t-4 border-blue-600">
              <h3 className="font-bold mb-2">E-Sertifikat</h3>
              <p className="text-sm text-slate-500">Dapatkan sertifikat resmi setelah menyelesaikan modul kursus.</p>
            </div>
          </div>
        </header>
      </div>
    )
  }