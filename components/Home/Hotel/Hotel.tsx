import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import HotelCard from "./HotelCard";
const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading heading="Recommended Hotels" />
      {/* Section Content */}
      <div className=" w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Hotel Card */}
          {hotelsData.map((data) => (
            <HotelCard key={data.id} hotel={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
