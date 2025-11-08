import CarCard from "./CarCard";

export default function CarGrid({ cars }) {
  if (!cars.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-gray-500">
        No cars match your filters yet.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cars.map((car) => (
          <CarCard key={`${car.make}-${car.model}-${car.year}-${car.trim}`} car={car} />
        ))}
      </div>
    </section>
  );
}
