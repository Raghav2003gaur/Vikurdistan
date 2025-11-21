import React from "react";
import Image from "next/image";

const kurdistanGallery = Array.from(
  { length: 59 },
  (_, index) => `/images/kurdistanImg/${index + 1}.png`
);

const trips = [
  {
    title: "First Tour",
    dates: "1st November 2025 – 10th November 2025",
  },
  {
    title: "Second Tour",
    dates: "19th March 2026 – 28th March 2026",
  },
];

const KurdistanTourPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[85%] mx-auto space-y-16">
        <header className="text-center space-y-3">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-sm">Guided By VIKurdistan</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">Kurdistan Tour</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the rich history, culture, and landscapes of the diverse region of Kurdistan, Iraq.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Explore the rich history, culture, and landscapes of the diverse region of Kurdistan, Iraq.
              With us, you’ll spend 7 miraculous days visiting ancient cities and sacred sites, mountainous
              areas, and culturally rich cities.
            </p>
            <p>
              This trip explores the Kurdistan, Iraq taking in the cultural, geographical and historical highlights
              as well as getting a greater understanding of life in this semi-autonomous region of Iraq. We start
              in Erbil with its famous citadel.
            </p>
            <p>
              At 6,500 years old, it is one of the oldest continuously inhabited cities in the world and now a UNESCO World Heritage site.
              Departing the city, the trip encompasses many natural sights: from blue waterfalls to steep gorges, deep caves and spectacular
              mountains between Dohuk and Soran. We explore the regions cultural and ethnic diversity by taking in Christian monasteries,
              and the spiritual home of the Yazidi people as well as places that give us an understanding of modern Iraq including visiting the Halabja memorial and Sulaymaniyah.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-950">Next Trip</h3>
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
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Kurdistan in Pictures</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kurdistanGallery.map((src) => (
              <div key={src} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="Kurdistan landscape"
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

export default KurdistanTourPage;

