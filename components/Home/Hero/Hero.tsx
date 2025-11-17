import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* OVERLAY */}
      <div className="top-0 left-0 absolute w-full h-full bg-gray-800 opacity-70"></div>
      {/* VIDEO */}
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
      {/* CONTENT */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-[25px] mb-4 md:mb-0 text-center md-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold">
            LETS ENJOY THE NATURE
          </h1>
          <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px">
            Get best prices and best experience with us
          </p>
          {/* Book Now Button */}
          <button className="mt-6 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base text-blue-950 bg-yellow-300 hover:bg-yellow-400 transition-all duration-200 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
            Book Now
          </button>
          {/* SearchBox */}
          {/* <SearchBox /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
