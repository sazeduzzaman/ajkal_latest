"use client";
import { EpaperNewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import React, { useState } from "react";

interface CategoryNewsProps {
  items: EpaperNewsItem[];
}

const EpaperPage: React.FC<CategoryNewsProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item active by default

  if (!items || items.length === 0) {
    return (
      <p className="text-center text-gray-500">কোনো ই-পেপার পাওয়া যায়নি</p>
    );
  }

  // Utility function to convert English digits to Bangla digits
  const toBanglaNumber = (num: number | string) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((d) => banglaDigits[parseInt(d)] || d)
      .join("");
  };

  const fallbackImage = "/images/placeholder.webp"; // local placeholder
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-5">
      {/* Left Sidebar → Thumbnails */}
      <div className="col-span-3 flex flex-col gap-3 border-r-1 border-gray-400 pe-3">
        <div className="h-[1150px] overflow-scroll overflow-x-hidden">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`cursor-pointer border overflow-hidden  ${
                activeIndex === index
                  ? "border-red-500 shadow-lg border-4"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={
                  item.epaper_image
                    ? `https://ajkal.us/img/epaper/${item.epaper_image}`
                    : fallbackImage
                }
                alt={`E-paper ${item.id}`}
                className="w-full h-24 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right → Active Image */}
      <div className="col-span-9">
        <div className="overflow-hidden">
          {/* <p className="text-center text-gray-500">
            পৃষ্ঠা সংখ্যা
            {toBanglaNumber(items[activeIndex]?.page_number || "")}
          </p> */}
          <p className="text-center text-gray-500 flex justify-between bg-white shadow-md p-2 border-b-3 mb-3 border-gray-200">
            <span>
              পৃষ্ঠা সংখ্যা
              {toBanglaNumber(items[activeIndex]?.page_number || "")}
            </span>
            <NewsTimeShower newsTime={items[activeIndex]?.epaper_date} />
          </p>
          <img
            // src={items[activeIndex].image_url}
            src={
              `https://ajkal.us/img/epaper/${items[activeIndex].epaper_image}` ||
              fallbackImage
            }
            alt={`E-paper ${items[activeIndex].id}`}
            className="w-full h-[800px] md:h-[1080px] object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/placeholder.webp";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EpaperPage;
