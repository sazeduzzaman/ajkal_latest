import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryNewsProps {
  items: NewsItem[];
}

const HeroSection: React.FC<CategoryNewsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  const fallbackImage = "/images/placeholder.webp";

  const mainItem = items[0];
  const sideItems = items.slice(1, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
      {/* Left Big Card */}
      <Link
        href={`/category/${mainItem.category_id}/news/${mainItem.id}`}
        className="group md:col-span-2 relative h-[300px] md:h-[465px] flex items-end overflow-hidden rounded-[5px]"
      >
        <Image
          src={
            mainItem.title_img
              ? `https://ajkal.us/img/news/${mainItem.title_img}`
              : fallbackImage
          }
          alt={mainItem.news_title || "Main news"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

        <div className="absolute bottom-4 left-4 z-10 bg-black/0 p-2 md:p-4 rounded">
          <h2 className="text-lg md:text-2xl font-bold">
            {mainItem.news_title}
          </h2>
        </div>
      </Link>

      {/* Right Side Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {sideItems.map((item, index) => (
          <Link
            key={item.id ?? index}
            href={`/category/${item.category_id}/news/${item.id}`}
            className="group relative w-full h-[180px] sm:h-[228px] overflow-hidden rounded-[5px]"
          >
            <Image
              src={
                item.title_img
                  ? `https://ajkal.us/img/news/${item.title_img}`
                  : fallbackImage
              }
              alt={item.news_title || "News"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 left-0 z-10 bg-black/0 p-2 rounded">
              <h3 className="text-sm md:text-lg font-semibold">
                {item.news_title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
