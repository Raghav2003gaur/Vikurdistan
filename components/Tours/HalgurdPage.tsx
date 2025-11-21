import React from "react";
import Image from "next/image";

const halgurdGallery = Array.from(
  { length: 40 },
  (_, index) => `/images/halgurdImg/${index + 1}.png`
);

const trips = [
  {
    title: "Halgurd Trip 1",
    dates: "20th March 2026 – 28th March 2026",
  },
  {
    title: "Halgurd Trip 2",
    dates: "26th April 2026 – 3rd May 2026",
  },
];

const HalgurdPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[85%] mx-auto space-y-16">
        <header className="text-center space-y-2">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-sm">Mount Halgurd</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">Mount Halgurd</h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
            <p>
              It is the highest mountain in Iraq with an altitude of 3.607m. It is situated
              170km north-east of Erbil. Halgurd Mountain is fully covered in snow till April
              and you can still find piles of snow throughout the summer.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">Next Trip</h3>
            <div className="space-y-3">
              {trips.map((trip) => (
                <div
                  key={trip.title}
                  className="bg-gray-100 rounded-2xl p-4 border border-gray-200"
                >
                  <p className="text-lg font-semibold text-red-600">{trip.title}</p>
                  <p className="text-sm text-gray-600">{trip.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Halgurd Images</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {halgurdGallery.map((src) => (
              <div key={src} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="Halgurd mountain"
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

export default HalgurdPage;

