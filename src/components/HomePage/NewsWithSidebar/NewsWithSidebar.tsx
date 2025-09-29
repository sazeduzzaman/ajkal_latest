import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryNewsProps {
  items: NewsItem[];
}

const NewsWithSidebar: React.FC<CategoryNewsProps> = ({ items }) => {
  // Take first 7 items (3+1+3)
  const newsItems = items.slice(0, 7);
  const firstColumn = newsItems.slice(0, 2); // 2 items
  const middleColumn = newsItems.slice(2, 3); // 1 item
  const fallbackImage = "/images/placeholder.webp";
  return (
    <div className="px-4 md:px-0">
      <div className="flex items-center gap-3 mb-3 mt-5">
        <h1 className="text-2xl font-bold text-primary">
          {newsItems?.[0]?.category_name_bangla || "অন্যান্য সংবাদ"}
        </h1>
        <div className="flex-1 border-t border-gray-300"></div>
        <a
          href={`/${newsItems?.[0]?.category_name || ""}/${
            items?.[0]?.id || ""
          }`}
          className="text-primary font-semibold hover:underline"
        >
          আরও দেখুন
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-0 md:gap-4 mt-6">
        {/* First Column: 3 items */}
        <div className="flex flex-col gap-4 col-span-4">
          {firstColumn.map((item) => (
            <Link
              key={item.id}
              href={`/${item.category_name}/${item.category_id}/news/${item.id}`}
              className="group flex flex-col overflow-hidden bg-white border border-gray-200 flex-1"
            >
              <div className="relative h-46 w-full">
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
              </div>
              <div className="flex flex-col p-3 flex-1 justify-between">
                <h3 className="text-xl mb-1  text-black">{item.news_title}</h3>
                <p className="text-xs text-gray-500 mt-auto">
                  {item.category_name_bangla || "Category"}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Middle Column: 1 item */}
        <div className="flex flex-col gap-8 col-span-8">
          {middleColumn.map((item) => (
            <Link
              key={item.id}
              href={`/${item.category_name}/${item.category_id}/news/${item.id}`}
              className="group flex flex-col overflow-hidden bg-white border border-gray-200 flex-1"
            >
              <div className="relative h-[calc(3*10rem+2*1rem)] w-full">
                {/* ~3 times the side card height + gaps */}
                <Image
                  src={
                    item.title_img
                      ? `https://ajkal.us/img/news/${item.title_img}`
                      : "/images/placeholder.webp"
                  }
                  alt={item.news_title || "News"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-3 flex-1 justify-between">
                <h3 className="text-xl mb-1 text-black">{item.news_title}</h3>
                <p className="text-xs text-gray-500 mt-auto">
                  {item.category_name_bangla || "Category"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsWithSidebar;
