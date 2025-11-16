import React from "react";
import { FaMap, FaCalendarAlt, FaUserFriends, FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 justify-center items-center mt-4 sm:mt-6 w-[95%] sm:w-[80%] mx-auto shadow-lg shadow-blue-900/10">
      <div className="flex items-center space-x-4">
        <FaMap className="w-6 h-6 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-1 text-left w-full">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Destination
          </span>
          <input
            type="text"
            placeholder="Where are you heading?"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="w-6 h-6 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-1 text-left w-full">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Check-in
          </span>
          <input
            type="date"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaCalendarAlt className="w-6 h-6 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-1 text-left w-full">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Check-out
          </span>
          <input
            type="date"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaUserFriends className="w-6 h-6 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-1 text-left w-full">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Guests
          </span>
          <input
            type="number"
            min={1}
            placeholder="2 Adults"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
      <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 h-full transition">
        <FaSearch className="w-5 h-5" />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
