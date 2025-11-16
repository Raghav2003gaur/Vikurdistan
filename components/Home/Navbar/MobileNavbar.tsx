import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navPanelClass = showNav ? "translate-x-0" : "translate-x-[100%]";
  const overlayClass = showNav
    ? "opacity-70 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 bg-black z-[1002] w-full h-screen ${overlayClass}`}
        onClick={closeNav}
      />
      {/* NavLinks */}
      <div
        className={`${navPanelClass} right-0 top-0 text-white justify-center fixed flex flex-col h-full transform transition-transform duration-500 delay-100 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white pb-1 sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/* Book Now Button in Mobile Menu */}
        <div className="ml-12 mt-4">
          <button className="px-8 py-3 text-base sm:text-lg bg-white text-black hover:bg-gray-200 transition-all duration-200 rounded-lg font-medium">
            Book Now
          </button>
        </div>
        {/*CLOSE BUTTON*/}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
