import { Car, Search } from "lucide-react";

export default function Navbar({ search, onSearchChange }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center shadow">
            <Car className="h-5 w-5" />
          </div>
          <span className="text-lg">AutoAtlas</span>
        </div>
        <div className="flex-1" />
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search make, model, or spec..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white/90"
          />
        </div>
      </div>
    </header>
  );
}
