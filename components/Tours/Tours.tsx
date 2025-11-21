import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tours = () => {
  // Tours and Activities data
  const activities = [
    {
      id: 1,
      name: "Halgurd",
      image: "/images/halgurd.png",
      route: "/tours/halgurd",
    },
    {
      id: 2,
      name: "Kurdistan Tour",
      image: "/images/kurdistantour.png",
      route: "/tours/kurdistan-tour",
    },
    {
      id: 3,
      name: "Zagros Mountain Trail",
      image: "/images/zorgosMountain.png",
      route: "/tours/zagros-mountain-trail",
    },
    {
      id: 4,
      name: "Ski Rally",
      image: "/images/skiing.png",
      route: "/tours/ski-rally",
    },
    {
      id: 5,
      name: "Mountain Biking in Iraqi Kurdistan",
      image: "/images/mountain_bike.png",
      route: "/tours/mountain-biking",
    },
    {
      id: 6,
      name: "Iraq Tour",
      image: "/images/Iraqtour.png",
      route: "/tours/iraq-tour",
    },
  ];

  // Villa data (reused from BookVilla)
  const villas = [
    {
      id: 1,
      name: "Yellow House",
      price: 150,
      size: "150 Sq.",
      floors: "1 Floor",
      features: "1 Bath",
      location: "Kurdistan , Erbil.",
      address: "Choman Road",
      image: "/images/yellowvillaCard.png",
      buttonColor: "bg-yellow-300 hover:bg-yellow-400",
      titleColor: "text-yellow-500",
      priceColor: "text-yellow-500",
    },
    {
      id: 2,
      name: "Red House",
      price: 250,
      size: "325 Sq.",
      floors: "2 Floors",
      features: "Swimming pool",
      location: "Kurdistan , Erbil.",
      address: "Choman Road",
      image: "/images/redVillaCard.png",
      buttonColor: "bg-red-500 hover:bg-red-600",
      titleColor: "text-red-500",
      priceColor: "text-red-500",
    },
    {
      id: 3,
      name: "Blue House",
      price: 200,
      size: "150 Sq.",
      floors: "2 Floors",
      features: "1 Bath",
      location: "Kurdistan , Erbil.",
      address: "Choman Road",
      image: "/images/blueVillaCard.png",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      titleColor: "text-blue-500",
      priceColor: "text-blue-500",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[80%] mx-auto">
        {/* Section 1: About VIKurdistan */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image - Left on desktop, first on mobile */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden order-1 lg:order-1">
              <Image
                src="/images/aboutVIKurdistan.png"
                alt="About VIKurdistan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text Content - Right on desktop, second on mobile */}
            <div className="order-2 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                About VIKurdistan
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded in 2012 by Omar Chomani, our company offers guided tours
                  to cultural and historical destinations all across Iraq and
                  Kurdistan. VIKurdistan&apos;s team has helped local and
                  international clients in having memorable experiences through
                  exploring the beauty and rich history of Kurdistan, &quot;The
                  Cradle of Mankind&quot;.
                </p>
                <p>
                  In addition to helping individual clients, we&apos;ve been
                  pivotal in aiding our international climbing, hiking, and
                  skiing teams to serve as guides to the region&apos;s beautiful
                  landscapes and cultural landmarks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Tours and Activities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Tours and Activities
            </h2>
            <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Explore our exciting range of tours and activities
            </p>
          </div>

          {/* Activities Grid - 3 cards per row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link
                href={activity.route}
                key={activity.id}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-red-600 transition-colors">
                    {activity.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: Book a Villa */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Book a Villa
            </h2>
            <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Choose from our selection of beautiful villas in Kurdistan
            </p>
          </div>

          {/* Villa Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <div
                key={villa.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Price */}
                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className={`text-2xl font-bold ${villa.titleColor} transition-colors`}
                    >
                      {villa.name}
                    </h2>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${villa.priceColor}`}>
                        ${villa.price}
                      </p>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700 font-medium">
                      {villa.size} • {villa.floors} • {villa.features}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-1">{villa.location}</p>
                    <p className="text-gray-800 font-medium">{villa.address}</p>
                  </div>

                  {/* Book Button */}
                  {villa.id === 1 ? (
                    <Link href="/yellow-villa">
                      <button
                        className={`w-full px-6 py-3 ${villa.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105`}
                      >
                        More Details
                      </button>
                    </Link>
                  ) : villa.id === 2 ? (
                    <Link href="/red-villa">
                      <button
                        className={`w-full px-6 py-3 ${villa.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105`}
                      >
                        More Details
                      </button>
                    </Link>
                  ) : (
                    <Link href="/blue-villa">
                      <button
                        className={`w-full px-6 py-3 ${villa.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105`}
                      >
                        More Details
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tours;

