import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative aspect-[16/10] w-full min-h-[350px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      {/* Content */}

      <h1 className="mt-6 text-gray-950 text-lg font-semibold hover:text-blue-950 cursor-pointer transition-all duration-200">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCard;
