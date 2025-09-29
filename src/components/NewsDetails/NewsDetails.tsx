"use client";

import React, { useState, useRef } from "react";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Link from "next/link";
import FontSizeController from "@/utils/FontSizeController/FontSizeController";
import ShareToolbar from "@/utils/ShareToolbar/ShareToolbar";
import CommonSidebar from "../CommonSidebar/CommonSidebar";
import { NewsItem } from "@/types/CategoryDataType";

interface NewsDetailsProps {
  item: NewsItem;
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ item }) => {
  const [fontSize, setFontSize] = useState(18);
  const newsRef = useRef<HTMLDivElement>(null);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 32));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const resetFont = () => setFontSize(18);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
      {/* Category */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="md:col-span-9">
          {/* Category */}
          <div className="flex flex-wrap items-center mb-2 mt-5">
            <h2 className="text-lg sm:text-xl text-gray-600 underline line-clamp-2">
              <Link href={`/${item.category_name}/${item.id}`}>
                {item?.category_name_bangla}
              </Link>
            </h2>
          </div>

          {/* Title */}
          <h1
            className="text-black font-bold my-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
            style={{ fontSize: `${fontSize * 2.2}px`, lineHeight: 1.3 }}
          >
            {item?.news_title}
          </h1>

          {/* Author & Time */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <div className="flex sm:flex-row justify-between items-center sm:items-center gap-3">
              {/* Published Time */}
              <div className="flex flex-row sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex justify-center sm:justify-start">
                  <div className="w-[2px] h-12 bg-red-500"></div>
                </div>
                <div className="text-left sm:text-left">
                  <span className="font-medium text-black">প্রকাশিত:</span>
                  <p className="text-red-500 mb-0 text-sm">
                    <NewsTimeShower newsTime={item.news_time} />
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-500 text-sm mt-2 sm:mt-0">
                <ShareToolbar
                  title={item.news_title || "No Title"}
                  slug={item.id?.toString() || "0"}
                  category={item.category_id?.toString() || "0"}
                />
              </div>
            </div>
          </div>

          {/* Short Brief */}
          <p
            className="pb-4 text-black text-base sm:text-lg"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.5 }}
          >
            {item?.news_short_brief}
          </p>

          {/* Image */}
          {item?.title_img && (
            <div className="mb-4">
              <img
                src={`https://ajkal.us/img/news/${item?.title_img}`}
                alt={item?.news_title}
                className="w-full h-auto rounded-md"
              />
              <p className="text-sm text-gray-500 text-center mt-1">
                ছবি: আজকাল
              </p>
            </div>
          )}

          {/* Font Size Controller */}
          <div className="mb-4">
            <FontSizeController
              author={item?.news_author}
              onIncrease={increaseFont}
              onDecrease={decreaseFont}
              onReset={resetFont}
            />
          </div>

          {/* Content */}
          <div
            ref={newsRef}
            className="text-gray-700 mt-2 text-base sm:text-lg"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: item?.news_detail ?? "" }}
          />
        </div>

        {/* Sidebar */}
        <div className="md:col-span-3 mt-6 md:mt-0">
          <CommonSidebar showCount={1} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
