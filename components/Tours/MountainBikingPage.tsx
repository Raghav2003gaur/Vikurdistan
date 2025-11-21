import React from "react";
import Image from "next/image";

const bikingGallery = Array.from(
  { length: 15 },
  (_, index) => `/images/bikingImg/${index + 1}.png`
);

const sections = [
  {
    title: "Childhood dreams",
    text: "Growing up in Kurdistan, I always yearned for wide-open spaces where my bicycle could carry me over hills and deeper into the mountains. The sense of freedom that came with each ride became a dream of exploring every trail the region could offer.",
  },
  {
    title: "Growing older & inspiration",
    text: "As I grew older, I studied the achievements of international riders and watched footage of epic rides. Their courage and exploration fueled my desire to bring the same spirit of adventure to Kurdistan’s slopes.",
  },
  {
    title: "Meeting Norwegian biker Kit Mohsen",
    text: "Meeting Kit Mohsen ignited a partnership built on stamina and a shared love for off-road exploration. Together we started to chart routes no one else had conquered in Kurdistan.",
  },
  {
    title: "Dutch visitor story",
    text: "A Dutch visitor once joined us to document his rides through the Zagros foothills, praising the diverse terrain and the resilience of the local communities we met along the way.",
  },
  {
    title: "First ride & techniques learned",
    text: "On my first guided ride, I learned to master steep drop-ins, cornering techniques, and how to read the unpredictable soil conditions of the region. I realized each trail demanded respect and precision.",
  },
  {
    title: "High-altitude challenge",
    text: "Riding above 3,000 meters, I felt the air thin and the trails tighten. It was a test of breath, patience, and the trust I built with my bike.",
  },
  {
    title: "Bike fall",
    text: "A tumble into a field of wildflowers reminded me that even the most careful rider can fall, and the way back up defines the journey.",
  },
  {
    title: "Tire puncture fix",
    text: "A punctured tire taught me to improvise with what the mountains provided—patching tubes alongside shepherds and learning to keep momentum when supplies ran low.",
  },
  {
    title: "Downhill ride",
    text: "Descending through narrow gorges, the rush of wind became a chorus cheering the love of play and discovery.",
  },
  {
    title: "Return journey",
    text: "The ride home was a meditation on gratitude—grateful for safety, for the communities who hosted us, and for the strength we found in riding together.",
  },
  {
    title: "Reflections & dream for future biking routes",
    text: "I dream of mapping connected routes across Kurdistan, inviting riders from everywhere to feel the rhythm of our mountains and the warmth of our people.",
  },
];

const nextTrips = [
  { title: "Next Trip", dates: "April 10th 2026 – April 20th 2026" },
  { title: "Next Trip", dates: "June 8th 2026 – June 18th 2026" },
];

const featuredMoments = [
  {
    title: "Kit Mohsen partnership",
    subtitle: "Two riders carving the Zagros dawn",
    src: "/images/bikingImg/2.png",
  },
  {
    title: "High plateau calm",
    subtitle: "Riding with the clouds below",
    src: "/images/bikingImg/5.png",
  },
  {
    title: "Descent trails",
    subtitle: "Fast, dusty, and unforgettable",
    src: "/images/bikingImg/3.png",
  },
];

const MountainBikingPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[85%] mx-auto space-y-16">
        <header className="text-center space-y-3">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-sm">Mountain Biking Tales</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            From Childhood Dreams to Mountain Adventures: My Story of Mountain Biking in Kurdistan
          </h1>
        </header>

        <section className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-gray-700">
              <p>
                In Kurdistan, each ride told a story of perseverance. I studied international riders, met partners from across the globe, and finally dared to chase every trail.
                The mountains taught me patience, respect, and how to read the land before charging forward.
              </p>
              <p>
                Adventures through the Zagros foothills, the scent of wildflowers, and the rhythm of the villages compelled me to keep exploring, while teaching gear maintenance and riding techniques.
              </p>
            </div>
            <div className="space-y-5 bg-rose-50 rounded-2xl p-5 border border-rose-200">
              <h3 className="text-2xl font-semibold text-red-700">Next Trips</h3>
              {nextTrips.map((trip) => (
                <div key={trip.dates} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <p className="text-lg font-semibold text-blue-900">{trip.title}</p>
                  <p className="text-sm text-gray-600">{trip.dates}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredMoments.map((moment) => (
              <div
                key={moment.title}
                className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-lg h-64 group"
              >
                <Image
                  src={moment.src}
                  alt={moment.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-1">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/80">{moment.subtitle}</p>
                  <p className="text-lg font-bold">{moment.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-red-500 via-pink-500 to-purple-500" />
          <div className="space-y-10 pl-12">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="relative flex flex-col gap-2 rounded-3xl bg-white/60 p-4 border border-gray-100 shadow-lg transition transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute -left-9 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Chapter {index + 1}</p>
                  <span className="text-sm text-gray-500">Kurdistan</span>
                </div>
                <h2 className="text-2xl font-semibold text-blue-950">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Mountain Biking in Kurdistan</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikingGallery.map((src) => (
              <div
                key={src}
                className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <Image
                  src={src}
                  alt="Mountain biking"
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

export default MountainBikingPage;

