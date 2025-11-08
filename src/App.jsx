import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import CarGrid from "./components/CarGrid";

// Minimal curated dataset to demonstrate filtering and layout
const INVENTORY = [
  {
    make: "Tesla",
    model: "Model 3",
    year: 2024,
    trim: "Long Range AWD",
    hp: 393,
    zeroTo60: 4.2,
    fuel: "Electric",
    range: 341,
    drive: "AWD",
    trans: "Single-speed",
    body: "Sedan",
    price: 46990,
    image:
      "https://images.unsplash.com/photo-1549921296-3f4b9a0e1f2d?auto=format&fit=crop&w=1400&q=60",
  },
  {
    make: "BMW",
    model: "M3",
    year: 2023,
    trim: "Competition xDrive",
    hp: 503,
    zeroTo60: 3.4,
    fuel: "Petrol",
    range: 330,
    drive: "AWD",
    trans: "Automatic",
    body: "Sedan",
    price: 86995,
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1400&q=60",
  },
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    trim: "Hybrid XSE",
    hp: 208,
    zeroTo60: 7.4,
    fuel: "Hybrid",
    range: 610,
    drive: "FWD",
    trans: "Automatic",
    body: "Sedan",
    price: 32990,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=60",
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2024,
    trim: "Lariat",
    hp: 400,
    zeroTo60: 5.9,
    fuel: "Petrol",
    range: 500,
    drive: "4WD",
    trans: "Automatic",
    body: "Pickup",
    price: 59990,
    image:
      "https://images.unsplash.com/photo-1623002747235-d9d5abca9c86?auto=format&fit=crop&w=1400&q=60",
  },
  {
    make: "Porsche",
    model: "Taycan",
    year: 2024,
    trim: "4S",
    hp: 522,
    zeroTo60: 3.8,
    fuel: "Electric",
    range: 246,
    drive: "AWD",
    trans: "2-speed",
    body: "Sedan",
    price: 109990,
    image:
      "https://images.unsplash.com/photo-1590374691660-9e2f29e70cd9?auto=format&fit=crop&w=1400&q=60",
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    trim: "Sport",
    hp: 158,
    zeroTo60: 8.2,
    fuel: "Petrol",
    range: 430,
    drive: "FWD",
    trans: "Manual",
    body: "Hatchback",
    price: 23990,
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b9c38f?auto=format&fit=crop&w=1400&q=60",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ body: "", fuel: "", drive: "", trans: "" });

  const cars = useMemo(() => {
    const q = search.trim().toLowerCase();
    return INVENTORY.filter((c) => {
      const matchesQuery = !q ||
        [c.make, c.model, c.trim, c.fuel, c.drive, c.body].some((v) => String(v).toLowerCase().includes(q));
      const matchesFilters = (!filters.body || c.body === filters.body)
        && (!filters.fuel || c.fuel === filters.fuel)
        && (!filters.drive || c.drive === filters.drive)
        && (!filters.trans || c.trans === filters.trans);
      return matchesQuery && matchesFilters;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar search={search} onSearchChange={setSearch} />
      <main className="pb-16">
        <Hero />
        <Filters filters={filters} setFilters={setFilters} />
        <CarGrid cars={cars} />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1">
            Explore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            All working car models with every little detail
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Search and filter a curated showcase of modern vehicles. Compare power, range, and key specs in a clean interface.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} AutoAtlas. All rights reserved.</div>
        <div className="text-gray-400">Built for exploration and comparison.</div>
      </div>
    </footer>
  );
}
