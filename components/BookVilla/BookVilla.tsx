import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookVilla = () => {
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
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Book a Villa
          </h1>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Choose from our selection of beautiful villas in Kurdistan
          </p>
        </div>

        {/* Villa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
      </div>
    </div>
  );
};

export default BookVilla;
