"use client";
import { destinationData } from "@/data/data";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};
const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((destination) => {
        return (
          <div key={destination.id} className="m-3">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={destination.image}
                alt={destination.country}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1324px) 45vw, 20vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold">{destination.country}</h1>
              <p className="text-sm text-gray-600">
                {destination.travelers} travelers
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
