import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

interface CategoryNewsProps {
  items: NewsItem[];
}

const HeroSection: React.FC<CategoryNewsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  const fallbackImage = "/images/placeholder.webp";

  const mainItem = items[0];
  const sideItems = items.slice(1, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 px-0">
      {/* Left Big Card */}
      <Link
        href={`/category/${mainItem.category_id}/news/${mainItem.id}`}
        className="group md:col-span-1 relative h-[300px] md:h-[465px] flex items-end overflow-hidden"
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

        <div className="absolute bottom-4 left-4 z-10 bg-black/0 p-2 px-3 md:p-4">
          <h2 className="text-xl md:text-4xl font-bold text-white">
            {mainItem.news_title}
          </h2>
          <small className="text-sm md:text-sm text-white">
            <NewsTimeShower newsTime={mainItem.news_time} />
          </small>
        </div>
      </Link>

      {/* Right Side Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {sideItems.map((item, index) => (
          <Link
            key={item.id ?? index}
            href={`/category/${item.category_id}/news/${item.id}`}
            className="group relative w-full h-[180px] sm:h-[228px] overflow-hidden"
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

            <div className="absolute bottom-0 left-0 z-10 bg-black/0 p-4 px-4 text-white">
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
