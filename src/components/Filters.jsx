export default function Filters({ filters, setFilters }) {
  const update = (key, value) => setFilters({ ...filters, [key]: value });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <select
          value={filters.body}
          onChange={(e) => update("body", e.target.value)}
          className="bg-white/90 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Body type</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Hatchback</option>
          <option>Coupe</option>
          <option>Wagon</option>
          <option>Pickup</option>
        </select>
        <select
          value={filters.fuel}
          onChange={(e) => update("fuel", e.target.value)}
          className="bg-white/90 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Fuel</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>
        <select
          value={filters.drive}
          onChange={(e) => update("drive", e.target.value)}
          className="bg-white/90 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Drive</option>
          <option>FWD</option>
          <option>RWD</option>
          <option>AWD</option>
        </select>
        <select
          value={filters.trans}
          onChange={(e) => update("trans", e.target.value)}
          className="bg-white/90 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Transmission</option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>
      </div>
    </section>
  );
}
