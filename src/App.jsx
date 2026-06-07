import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import LP1 from './Pages/LP1';
import LP2 from './Pages/LP2';
import LP3 from './Pages/LP3';
import LP4 from './Pages/LP4';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        {/* Navigasi Control Panel */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 px-6 flex justify-center gap-4 text-xs md:text-sm font-bold overflow-x-auto">
          <Link to="/" className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">LP4 (Excellent)</Link>
          <Link to="/lp3" className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">LP3 (Good)</Link>
          <Link to="/lp2" className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full">LP2 (Moderate)</Link>
          <Link to="/lp1" className="text-red-600 bg-red-50 px-3 py-1 rounded-full">LP1 (Poor)</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LP4 />} />
          <Route path="/lp3" element={<LP3 />} />
          <Route path="/lp2" element={<LP2 />} />
          <Route path="/lp1" element={<LP1 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;