"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg ? "bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative h-10 w-[180px] md:w-[220px]">
            <Image
              src="/images/logo.png"
              alt="VIK Kurdistan Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 180px, 220px"
              priority
            />
          </div>
        </Link>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className='relative text-white text-base font-medium w-fit block after:block after:content[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="px-4 py-1.5 sm:px-6 sm:py-2 md:px-12 md:py-2.5 text-blue-950 text-xs sm:text-sm md:text-base bg-yellow-300 hover:bg-yellow-400 transition-all duration-200 rounded-lg whitespace-nowrap font-semibold">
            Book Now
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
