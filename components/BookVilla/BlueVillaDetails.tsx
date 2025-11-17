"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/images/blueVillaImg/1.png",
  "/images/blueVillaImg/2.png",
  "/images/blueVillaImg/3.png",
  "/images/blueVillaImg/4.png",
  "/images/blueVillaImg/5.png",
  "/images/blueVillaImg/6.png",
  "/images/blueVillaImg/7.png",
  "/images/blueVillaImg/8.png",
  "/images/blueVillaImg/9.png",
  "/images/blueVillaImg/10.png",
  "/images/blueVillaImg/11.png",
  "/images/blueVillaImg/12.png",
  "/images/blueVillaImg/13.png",
  "/images/blueVillaImg/14.png",
  "/images/blueVillaImg/15.png",
  "/images/blueVillaImg/16.png",
  "/images/blueVillaImg/17.png",
  "/images/blueVillaImg/18.png",
  "/images/blueVillaImg/19.png",
  "/images/blueVillaImg/20.png",
  "/images/blueVillaImg/21.png",
  "/images/blueVillaImg/22.png",
  "/images/blueVillaImg/23.png",
  "/images/blueVillaImg/24.png",
];

const BlueVillaDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, [selectedIndex]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, [selectedIndex]);

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
  }, [selectedIndex, showNext, showPrev, closeLightbox]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[80%] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
            Choman Road
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
            Blue House
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A modern villa with indoor pool, generous living spaces, and all the
            comforts needed for a relaxing stay with friends and family.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Left: Price & Location */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
              <h2 className="text-xl font-semibold text-blue-950 mb-4">
                Price
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center justify-between">
                  <span className="font-medium">Weekend:</span>
                  <span className="text-lg font-bold text-blue-500">$200</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="font-medium">Other days:</span>
                  <span className="text-lg font-bold text-blue-500">$150</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
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
                    <span className="font-semibold">Floors:</span> 2 Floors +
                    balcony
                  </p>
                  <p>
                    <span className="font-semibold">
                      Heating &amp; Cooling:
                    </span>{" "}
                    Fireplace, AC, and oil heater
                  </p>
                  <p>
                    <span className="font-semibold">Bedrooms:</span> 1 (4×3 m)
                    bedroom with extra blankets and mattresses
                  </p>
                  <p>
                    <span className="font-semibold">Living Spaces:</span> 1 (5×4
                    m) hall on the first floor extended to the kitchen
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Second Floor Hall:</span> 1
                    (5×4 m) hall on the second floor
                  </p>
                  <p>
                    <span className="font-semibold">Kitchen:</span> Kitchen with
                    counter, refrigerator, stove, and eating table
                  </p>
                  <p>
                    <span className="font-semibold">Outdoor:</span> Indoor
                    swimming pool, garden, and barbecue grill
                  </p>
                  <p>
                    <span className="font-semibold">Guests:</span> Ideal for 10
                    – 12 persons
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 md:p-5 bg-blue-50 border border-blue-100 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-950 mb-2">
                  Check-in &amp; Check-out
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Check-in at <span className="font-semibold">03:00 PM</span>{" "}
                  and check-out at{" "}
                  <span className="font-semibold">02:00 PM</span> the day after.
                  For more information, please contact customer service.
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
                    className="block text-blue-600 font-semibold hover:text-blue-500 text-sm md:text-base"
                  >
                    info@visitiraqikurdistan.com
                  </a>
                  <a
                    href="tel:+9647762143322"
                    className="block text-blue-950 font-semibold hover:text-blue-500 text-sm md:text-base"
                  >
                    +964 776 214 3322
                  </a>
                  <a
                    href="tel:+9647502143322"
                    className="block text-blue-950 font-semibold hover:text-blue-500 text-sm md:text-base"
                  >
                    +964 750 214 3322
                  </a>
                </div>
                <div className="flex md:justify-end mt-4 md:mt-0">
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-200 hover:scale-105 w-full md:w-auto">
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
                Explore Blue House. Click on an image to view it in full size.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative group h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <Image
                  src={src}
                  alt={`Blue House image ${index + 1}`}
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
              className="absolute top-4 right-4 z-50 text-white text-2xl font-bold hover:text-blue-300"
              aria-label="Close image viewer"
            >
              ×
            </button>
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-50 text-white text-3xl font-bold hover:text-blue-300"
              aria-label="Previous image"
            >
              ‹
            </button>
            <Image
              src={galleryImages[selectedIndex]}
              alt={`Blue House image ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-50 text-white text-3xl font-bold hover:text-blue-300"
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

export default BlueVillaDetails;
