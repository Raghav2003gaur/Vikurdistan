import React from "react";
type Props = { heading: string };
const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p className=" text-gray-700 mt-2 sm:text-base text-sm font-medium">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
};

export default SectionHeading;
