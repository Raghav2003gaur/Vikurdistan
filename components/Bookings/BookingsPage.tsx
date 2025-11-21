import React from "react";
import Image from "next/image";

const villas = [
  {
    name: "Yellow House",
    description:
      "Cozy hideaway with fireplace, indoor comforts, and river views.",
    image: "/images/yellowvillaCard.png",
  },
  {
    name: "Red House",
    description:
      "Spacious villa with pool access and panoramic terrace lounges.",
    image: "/images/redVillaCard.png",
  },
  {
    name: "Blue House",
    description:
      "Modern retreat with indoor pool, garden lounge, and mountain outlook.",
    image: "/images/blueVillaCard.png",
  },
];

const tours = [
  {
    name: "Halgurd Mountain Expedition",
    details: "Snow-capped peaks, alpine lakes, and guided climbs.",
    image: "/images/halgurd.png",
  },
  {
    name: "Kurdistan Culture Tour",
    details: "Citadels, bazaars, monasteries, and Yazidi heritage trails.",
    image: "/images/kurdistantour.png",
  },
  {
    name: "Iraq Heritage Journey",
    details: "Mesopotamian ruins, Baghdad heartlands, spiritual centers.",
    image: "/images/Iraqtour.png",
  },
  {
    name: "Zagros Mountain Trail",
    details: "15-day trek across 12 stages, ending beneath Mount Halgurd.",
    image: "/images/zorgosMountain.png",
  },
  {
    name: "Ski Rally Experience",
    details: "Backcountry races, festivals, and winter hospitality.",
    image: "/images/skiing.png",
  },
  {
    name: "Mountain Biking Adventure",
    details: "Dusty descents, high passes, and local hospitality camps.",
    image: "/images/bikingImg/1.png",
  },
];

type BookingCardProps = {
  title: string;
  text: string;
  image: string;
};

const BookingCard = ({ title, text, image }: BookingCardProps) => {
  const safeImage = image || "/images/logo.png";
  return (
    <div className="bg-white/80 rounded-3xl border border-gray-200 shadow-lg flex flex-col h-full transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={safeImage} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold text-blue-950">{title}</h3>
          <span className="text-sm font-semibold text-rose-600">$1</span>
        </div>
        <p className="text-gray-600 mt-4 flex-1">{text}</p>
        <button className="mt-6 px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
          Book Now for $1
        </button>
      </div>
    </div>
  );
};

const BookingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
      <div className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto space-y-12">
        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.7em] text-gray-300">
            One Dollar Access
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Book Everything in One Place
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Choose a villa or a tour and unlock the VIKurdistan experiences for
            just $1. Your booking opens the door to curated hospitality,
            personalized guides, and unforgettable adventures.
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">Villas</h2>
            <p className="text-sm text-gray-300">Comfort, style, privacy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villas.map((villa) => (
              <BookingCard
                key={villa.name}
                title={villa.name}
                text={villa.description}
                image={villa.image}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Tours & Activities
            </h2>
            <p className="text-sm text-gray-300">
              Adrenaline, history, culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tours.map((tour) => (
              <BookingCard
                key={tour.name}
                title={tour.name}
                text={tour.details}
                image={tour.image}
              />
            ))}
          </div>
        </section>

        <section className="bg-white/10 border border-white/30 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Need help finalizing?
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Message our concierge or call +964 776 214 3322 to customize
            packages, add ski rallies, or plan multi-day treks with guides and
            transportation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg transition hover:shadow-2xl">
              Chat with Concierge
            </button>
            <button className="px-6 py-2 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition">
              Call Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookingsPage;
