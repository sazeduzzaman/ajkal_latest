"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

interface CategoryNewsProps {
  items?: NewsItem[]; // optional in case data is undefined
}

const ArchiveNews: React.FC<CategoryNewsProps> = ({ items = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter news based on search query, show all if searchQuery is empty
  const filteredNews = items.filter((news) =>
    searchQuery
      ? news?.news_title?.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );
  const fallbackImage = "/images/placeholder.webp"; // local placeholder
  return (
    <div className="max-w-7xl mx-auto py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        আর্কাইভ এ  সংবাদ খুঁজুন।
      </h1>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="খুঁজুন আপনার পছন্দের খবর..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-2/3 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* News List */}
      <div className="grid gap-4">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <Link
              key={news.id}
              href={`/${news.category_name}/${news.category_id}/news/${news.id}`}
              className="block p-4 bg-white rounded-lg transition border-b border-gray-300 last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 px-0 pt-0 ">
                {/* Left Side - Square Image */}
                <div className="md:col-span-4 w-full h-50 aspect-square relative overflow-hidden items-center flex">
                  <img
                    src={
                      `https://ajkal.us/img/news/${news.title_img}` ||
                      fallbackImage
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
                  <h2 className="text-primary text-2xl lg:text-3xl leading-snug md:leading-tight">
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
          ))
        ) : (
          <p className="text-center text-gray-500">কোনো খবর পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  );
};

export default ArchiveNews;

{
  /* <h2 className="text-lg font-semibold text-gray-800">
                {news.news_title}
              </h2>
              <NewsTimeShower newsTime={news.news_time} /> */
}
