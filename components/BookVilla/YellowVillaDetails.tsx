"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/images/yellowVillaImg/1.png",
  "/images/yellowVillaImg/2.png",
  "/images/yellowVillaImg/3.png",
  "/images/yellowVillaImg/4.png",
  "/images/yellowVillaImg/5.png",
  "/images/yellowVillaImg/6.png",
  "/images/yellowVillaImg/7.png",
  "/images/yellowVillaImg/8.png",
  "/images/yellowVillaImg/9.png",
  "/images/yellowVillaImg/10.png",
];

const YellowVillaDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    // Only close the image viewer; stay on the villa details page
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (prev) =>
        prev === null
          ? null
          : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (prev) =>
        prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  // Keyboard controls for lightbox (Esc to close, arrows to navigate)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[80%] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
            Choman Road
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-3">
            Yellow Villa
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A cozy mountain escape in the heart of Kurdistan, designed for
            comfort, relaxation, and unforgettable memories.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Left: Price & Location */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-yellow-100">
              <h2 className="text-xl font-semibold text-blue-950 mb-4">
                Price
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center justify-between">
                  <span className="font-medium">Weekend:</span>
                  <span className="text-lg font-bold text-yellow-500">
                    $150
                  </span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="font-medium">Other days:</span>
                  <span className="text-lg font-bold text-yellow-500">
                    $100
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-yellow-100">
              <h2 className="text-xl font-semibold text-blue-950 mb-4">
                Location
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Iraq, Kurdistan, Choman, Nawroen Resort
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-950 mb-6">
                Villa Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm md:text-base">
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Floors:</span> 1 Floor
                  </p>
                  <p>
                    <span className="font-semibold">
                      Heating &amp; Cooling:
                    </span>{" "}
                    Fireplace, cooler, and oil heater
                  </p>
                  <p>
                    <span className="font-semibold">Bedrooms:</span> 2 (4×4 m)
                    bedrooms with extra blankets and mattresses
                  </p>
                  <p>
                    <span className="font-semibold">Kitchen:</span> Counter,
                    refrigerator, stove, and eating table
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Outdoor:</span> Swimming
                    pool, garden, and barbecue grill
                  </p>
                  <p>
                    <span className="font-semibold">Bathroom:</span> One indoor
                    bathroom with hot water, laundry, shampoo, soap, towels, and
                    tissues
                  </p>
                  <p>
                    <span className="font-semibold">Electricity:</span> 24/7
                    electricity
                  </p>
                  <p>
                    <span className="font-semibold">Guests:</span> 5 – 8
                    persons
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 md:p-5 bg-yellow-50 border border-yellow-100 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-950 mb-2">
                  Check-in &amp; Check-out
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Check-in at{" "}
                  <span className="font-semibold">03:00 PM</span> and check-out
                  at <span className="font-semibold">02:00 PM</span> the day
                  after. For more information, please contact customer service.
                </p>
              </div>

              {/* Contact / Availability */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 space-y-2">
                  <h3 className="text-lg font-semibold text-blue-950 mb-2">
                    Check Availability
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Email us or call our team for booking and availability
                    details.
                  </p>
                  <a
                    href="mailto:info@visitiraqikurdistan.com"
                    className="block text-yellow-600 font-semibold hover:text-yellow-500 text-sm md:text-base"
                  >
                    info@visitiraqikurdistan.com
                  </a>
                  <a
                    href="tel:+9647762143322"
                    className="block text-blue-950 font-semibold hover:text-yellow-500 text-sm md:text-base"
                  >
                    +964 776 214 3322
                  </a>
                  <a
                    href="tel:+9647502143322"
                    className="block text-blue-950 font-semibold hover:text-yellow-500 text-sm md:text-base"
                  >
                    +964 750 214 3322
                  </a>
                </div>
                <div className="flex md:justify-end mt-4 md:mt-0">
                  <button className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-semibold rounded-lg shadow-md transition-transform duration-200 hover:scale-105 w-full md:w-auto">
                    Contact to Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
                Gallery
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Explore Yellow Villa. Click on an image to view it in full size.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative group h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <Image
                  src={src}
                  alt={`Yellow Villa image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white text-2xl font-bold hover:text-yellow-300"
              aria-label="Close image viewer"
            >
              ×
            </button>
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-50 text-white text-3xl font-bold hover:text-yellow-300"
              aria-label="Previous image"
            >
              ‹
            </button>
            <Image
              src={galleryImages[selectedIndex]}
              alt={`Yellow Villa image ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-50 text-white text-3xl font-bold hover:text-yellow-300"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YellowVillaDetails;


