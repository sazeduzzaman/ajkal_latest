"use client";
import { NewsItem } from "@/types/CategoryDataType";
import React, { useState } from "react";
import Link from "next/link";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

interface CategoryNewsProps {
  items: NewsItem[];
}

const OnnanoNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const fallbackImage = "/images/placeholder.webp";
  const mainItem = items[0];
  const stackedItems = items.slice(1, 6); // Next 5 items

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="px-4 md:px-0">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-2xl font-bold text-primary">
          {items?.[0]?.category_name_bangla || "অন্যান্য সংবাদ"}
        </h1>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 relative ">
        {/* Left Column → Big News */}
        {mainItem && (
          <Link
            href={`/${mainItem.category_name}/${mainItem.category_id}/news/${mainItem.id}`}
            className="relative h-[350px] overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://ajkal.us/img/news/${mainItem.title_img}), url(${fallbackImage})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="text-lg font-bold">{mainItem.news_title}</h2>
              <span className="text-sm text-gray-300">
                <NewsTimeShower newsTime={mainItem.news_time} />
              </span>
            </div>
          </Link>
        )}

        {/* Right Column → Stacked List */}
        <div className="flex flex-col gap-3">
          {stackedItems.map((news) => (
            <div
              key={news.id}
              className="relative group cursor-pointer border-b border-gray-200 last:border-b-0"
              onMouseEnter={() =>
                setHoveredImage(
                  `https://ajkal.us/img/news/${news.title_img}` || fallbackImage
                )
              }
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Link
                href={`/${news.category_name}/${news.category_id}/news/${news.id}`}
                className="block text-xl text-gray-800 hover:text-primary pb-3"
              >
                {news.news_title}

                {/* Tooltip Image on Hover */}
                {hoveredImage &&
                  hoveredImage.includes(news.title_img ?? "___") && (
                    <div className="absolute center-full top-0 w-80 h-36 bg-gray-200 shadow-lg overflow-hidden z-50">
                      <img
                        src={hoveredImage}
                        alt={news.news_title}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackImage;
                        }}
                      />
                    </div>
                  )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnnanoNews;
