import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";
const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <SectionHeading heading="Exiting Travel News For You" />
      {/* Section Content */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-stretch mt-20">
        <NewsCard
          image={"/images/n1.jpg"}
          title="Top 10 places to visit in Kurdistan"
          date="15 November 2025"
        />
        <NewsCard
          image="/images/n2.jpg"
          title="Top 10 places to visit in Iran"
          date="25 November 2025"
        />
        <NewsCard
          image="/images/n3.jpg"
          title="Top 10 places to visit in Iraq"
          date="15 November 2025"
        />
        <NewsCard
          image="/images/n1.jpg"
          title="Top 10 places to visit in Syria"
          date="15 November 2025"
        />
      </div>
    </div>
  );
};

export default News;
