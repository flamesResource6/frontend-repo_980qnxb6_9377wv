import { Horse, Gauge, Battery, Fuel } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
      <div className="aspect-video bg-gray-100">
        {/* Using a simple fallback image URL for demonstration */}
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://images.unsplash.com/photo-1549921296-3f4b9a0e1f2d?auto=format&fit=crop&w=1200&q=60`;
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-sm text-gray-500">{car.trim}</p>
          </div>
          <span className="text-indigo-600 font-semibold">${car.price.toLocaleString()}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2"><Horse className="h-4 w-4 text-gray-400" />{car.hp} hp</div>
          <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-gray-400" />{car.zeroTo60}s 0-60</div>
          <div className="flex items-center gap-2"><Fuel className="h-4 w-4 text-gray-400" />{car.fuel}</div>
          <div className="flex items-center gap-2"><Battery className="h-4 w-4 text-gray-400" />{car.range} mi range</div>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          {car.drive} • {car.trans} • {car.body}
        </div>
      </div>
    </div>
  );
}
