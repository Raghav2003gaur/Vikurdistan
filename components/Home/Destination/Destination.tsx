import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { tourExperiences } from "@/data/data";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Explore Top Destinations" />
      <div className="mt-12 w-[90%] md:w-[85%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tourExperiences.map((experience) => (
          <Link
            key={experience.id}
            href={experience.route}
            className="group bg-white/95 rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col transition hover:-translate-y-2"
          >
            <div className="relative h-52 w-full">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-xs tracking-[0.4em] uppercase text-rose-600 mb-2">
                {experience.category}
              </p>
              <h3 className="text-xl font-semibold text-blue-950 mb-3">{experience.title}</h3>
              <p className="text-gray-700 flex-1">{experience.description}</p>
              <button className="mt-5 self-start px-4 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold rounded-full shadow-lg">
                Discover
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destination;
