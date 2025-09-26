"use client";
import { NewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import React from "react";

interface CategoryNewsProps {
  items: NewsItem[];
}

const RemainingNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const fallbackImage = "/images/placeholder.webp"; // local placeholder

  return (
    <div className="space-y-6 mt-20">
      {items.map((news) => (
        <div
          key={news.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b pb-4"
        >
          {/* Left Side - Square Image */}
          <div className="md:col-span-4 w-100 h-50 aspect-square relative overflow-hidden rounded">
            <img
              src={
                `https://ajkal.us/img/news/${news.title_img}` || fallbackImage
              }
              alt={news.news_title}
              className="w-full h-full object-cover rounded transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>

          {/* Right Side - Text */}
          <div className="md:col-span-8 flex flex-col justify-center h-full">
            <h2 className="font-bold text-2xl lg:text-3xl leading-snug md:leading-tight line-clamp-3">
              {news.news_title}
            </h2>
            <div
              className="text-gray-700 mt-2 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: news.news_short_brief ?? "",
              }}
            />
            <p className="text-sm text-gray-400 mt-1">
              {news.category_name_bangla} |{" "}
              <NewsTimeShower newsTime={news.news_time} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RemainingNews;
