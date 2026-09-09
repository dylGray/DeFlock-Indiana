"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import cities from "../data/cities.json";

type City = {
  name: string;
  county: string;
  cameraCount: number;
  flockCount: number;
}

export default function CityPicker() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelectCity(city: City) {
    setSelectedCity(city);
    setIsOpen(false);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl p-6 shadow-sm sm:p-8">
        <label
          htmlFor="city"
          className="text-md font-semibold text-white"
        >
          Find a Flock in Indiana
        </label>

        <div ref={containerRef} className="relative mt-3">
          <button
            id="city"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-4 text-left text-lg text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
          >
            <span className={selectedCity ? "" : "text-slate-500"}>
              {selectedCity ? selectedCity.name : "Choose a city..."}
            </span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <ul
              role="listbox"
              className="absolute left-0 right-0 top-full z-20 mt-2 max-h-64 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg"
            >
              {cities.map((city) => (
                <li
                  key={city.name}
                  role="option"
                  aria-selected={selectedCity?.name === city.name}
                  onClick={() => handleSelectCity(city)}
                  className="cursor-pointer px-4 py-3 text-lg text-slate-900 hover:bg-slate-100"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedCity && (
          <div className="mt-6 rounded-2xl bg-slate-950 p-8 text-white">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {selectedCity.name}, Indiana
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-4xl font-bold tracking-tight">{selectedCity.cameraCount}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Total ALPR Cameras</p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tight text-red-500">{selectedCity.flockCount}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Flock Cameras</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              {selectedCity.cameraCount - selectedCity.flockCount} non-Flock camera{selectedCity.cameraCount - selectedCity.flockCount === 1 ? "" : "s"}
            </p>

            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">{selectedCity.county}</p>
          </div>
        )}
      </div>
    </div>
  );
}