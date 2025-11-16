import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";
const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text Content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What Our Customers Say
          </h1>
          <p className="text-gray-200 mt-6 ">
            Discover authentic experiences from travelers who have explored the
            world with us and created unforgettable memories.
          </p>
          {/* Ratings */}
          <div className="flex items-center space-x-6 mt-6">
            <div>
              <p className="text-white text-2xl font-bold">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items=center">
                <FaStar className=" text-white" />
                <FaStar className=" text-white" />
                <FaStar className=" text-white" />
                <FaStar className=" text-white" />
                <FaStar className=" text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
