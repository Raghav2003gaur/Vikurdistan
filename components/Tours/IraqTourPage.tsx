import React from "react";
import Image from "next/image";

const iraqGallery = Array.from({ length: 15 }, (_, index) => `/images/iraqTour/${index + 1}.png`);

const trips = [
  {
    title: "First Trip",
    dates: "1st November 2025 – 10th November 2025",
  },
  {
    title: "Second Trip",
    dates: "19th March 2026 – 28th March 2026",
  },
];

const IraqTourPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[85%] mx-auto space-y-16">
        <header className="space-y-3 text-center">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-sm">Federal Iraq Tour</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">About The Tour</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the rich history, culture, and heritage of Iraq, the land where civilization first began.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Explore the rich history, culture, and heritage of Iraq, the land where civilization first began.
              From the banks of the Tigris and Euphrates to the great cities of Mesopotamia, this region is home to
              some of the world’s most important archaeological treasures, sacred sites, and beautiful living traditions.
            </p>
            <p>
              The Federal Iraq Tour offers a journey through time, where you’ll explore the ancient ziggurats and temples,
              legendary cities like Babylon, spiritual centers such as Najaf and Karbala, and the cultural heart of Baghdad.
            </p>
            <p>
              Alongside the historic wonders, travelers encounter welcoming communities, traditional cuisine, and the resilience
              of a nation where history is not only preserved but lived every day.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-950">Next Trip</h3>
            {trips.map((trip) => (
              <div key={trip.title} className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
                <p className="text-lg font-semibold text-red-600">{trip.title}</p>
                <p className="text-sm text-gray-600">{trip.dates}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Iraq Tour Highlights</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {iraqGallery.map((src) => (
              <div key={src} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="Iraq Tour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IraqTourPage;

