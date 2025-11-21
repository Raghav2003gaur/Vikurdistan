import React from "react";
import Image from "next/image";

const skiGallery = Array.from(
  { length: 13 },
  (_, index) => `/images/skiImg/${index + 1}.png`
);

const trips = [
  {
    title: "Next Rally",
    dates: "February 1st 2026 – February 10th 2026",
  },
];

const storytellingBlocks = [
  {
    title: "Festival DNA",
    copy:
      "Set in the Przhè mountains near Choman, the Ski Rally blends Alpine-style racing with Kurdish hospitality. Expect live music, artisan markets, and evenings filled with cultural performances.",
  },
  {
    title: "Legacy",
    copy:
      "We launched Iraq’s first counter rally in February 2018. Since then, thousands of international and local athletes have visited, and sponsors from around the world have backed the festival.",
  },
  {
    title: "Why Kurdistan",
    copy:
      "Skiing here feels new: the region is recovering from instability and lacks traditional infrastructure, yet locals love snow and the mountains—our festival amplifies that passion while building access.",
  },
  {
    title: "Global Recognition",
    copy:
      "International media and local TV continue to highlight the Rally. Every year the spotlight grows, announcing Kurdistan as an unexpected winter destination.",
  },
  {
    title: "Community Impact",
    copy:
      "Through our Free to Run partnership we train refugee girls, offering them skiing skills and the chance to become community leaders who reclaim winter spaces.",
  },
  {
    title: "Women's Empowerment",
    copy:
      "The Ski Rally is a safe space where girls learn resilience, teamwork, and public leadership through outdoor adventure—shifting mindsets about women’s roles in society.",
  },
];

const activityHighlights = [
  "Ski & snowboard racing",
  "Cultural performances & traditional music",
  "Local food and artisan markets",
  "Workshops & youth-friendly programming",
  "NGO & sponsor booths",
  "Evening networking & entertainment",
];

const SkiRallyPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[85%] mx-auto space-y-14">
        <header className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            Welcome to the Ski Rally & Festival February 2026!
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get ready for an amazing 10-day journey packed with snow, music, culture, and fun.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {storytellingBlocks.map((block) => (
              <article
                key={block.title}
                className="bg-slate-50 rounded-3xl border border-gray-100 p-6 shadow-lg flex flex-col justify-between animate-fade-up"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{block.title}</h3>
                <p className="text-gray-700 leading-relaxed">{block.copy}</p>
              </article>
            ))}
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-950">Next Rally</h3>
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="bg-gray-100 rounded-2xl p-4 border border-gray-200"
              >
                <p className="text-lg font-semibold text-red-600">{trip.title}</p>
                <p className="text-sm text-gray-600">{trip.dates}</p>
              </div>
            ))}
            <div className="mt-6 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-2xl p-5 space-y-4">
              <p className="text-sm uppercase tracking-[0.4em]">Key Activities</p>
              <ul className="space-y-2 text-sm">
                {activityHighlights.map((activity) => (
                  <li key={activity} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Ski Rally Highlights</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skiGallery.map((src) => (
              <div key={src} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="Ski Rally"
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

export default SkiRallyPage;

