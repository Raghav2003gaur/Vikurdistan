import React from "react";
const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-blue-950 border-t border-blue-900">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* 1st Part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Contact Us
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Privacy Policy
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Terms & Conditions
          </p>
        </div>
        {/* 2st Part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Support</h1>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            About Us
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Blogs
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Gift Cards
          </p>
        </div>
        {/* 3st Part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Other Services</h1>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Car Rental
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Activity Booking
          </p>
          <p className="text-gray-300 font-medium cursor-pointer text-sm hover:text-yellow-300 transition-colors">
            Tour Booking
          </p>
        </div>
        {/* 4st Part*/}
        <div>
          <h1 className="text-lg font-bold text-white">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-gray-400 text-sm">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +964 776 214 3322
            </h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +964 750 214 3322
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
