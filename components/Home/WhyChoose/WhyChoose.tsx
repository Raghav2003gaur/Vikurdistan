import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import WhyChoseCards from "./WhyChoseCards";
const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* Why Choose Card */}
        <WhyChoseCards image="/images/c1.svg" title="Best Price Guarantee" />
        <WhyChoseCards image="/images/c2.svg" title="Easy & Quick Booking" />
        <WhyChoseCards image="/images/c3.svg" title="Customer Care 24/7" />
      </div>
    </div>
  );
};

export default WhyChoose;
