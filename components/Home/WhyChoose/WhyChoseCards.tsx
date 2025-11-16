import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
};
const WhyChoseCards = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={image}
        width={70}
        height={70}
        className="mx-auto"
      />
      {/* Content */}
      <h1 className="text-lg text-center text-gray-900 mt-6 font-medium">
        {title}
      </h1>
      <p className="text-center text-gray-700 mt-2 font-medium text-xs">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
};

export default WhyChoseCards;
