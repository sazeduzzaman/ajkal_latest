"use client";
import { NewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Link from "next/link";
import React from "react";

interface CategoryNewsProps {
  items: NewsItem[];
}

const RemainingNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const fallbackImage = "/images/placeholder.webp"; // local placeholder
  return (
    <div className="space-y-6 mt-10">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-primary">
          {items?.[0]?.category_name_bangla || "অন্যান্য সংবাদ"} এর আরও সংবাদ ।
        </h1>
        <div className="flex-1 " style={{ border: "1px solid #e5e7eb" }}></div>
      </div>
      {items.map((news) => (
        <Link
          href={`/category/${news.category_id}/news/${news.id}`}
          key={news.id}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b p-4 px-0 border-gray-300">
            {/* Left Side - Square Image */}
            <div className="md:col-span-4 w-100 h-50 aspect-square relative overflow-hidden">
              <img
                src={
                  `https://ajkal.us/img/news/${news.title_img}` || fallbackImage
                }
                alt={news.news_title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
              />
            </div>
            {/* Right Side - Text */}
            <div className="md:col-span-8 flex flex-col justify-center h-full">
              <h2 className="font-bold text-primary text-2xl lg:text-3xl leading-snug md:leading-tight">
                {news.news_title}
              </h2>
              <div
                className="text-gray-700 mt-2 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: news.news_short_brief ?? "",
                }}
              />
              <p className="text-sm text-black mt-5">
                <span className="text-red-500">
                  {news.category_name_bangla}
                </span>{" "}
                <span className="px-1">|</span>
                <NewsTimeShower newsTime={news.news_time} />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RemainingNews;
