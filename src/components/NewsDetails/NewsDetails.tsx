"use client";

import React, { useState, useRef } from "react";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Link from "next/link";
import {
  MdTextFormat,
  MdOutlineTextIncrease,
  MdOutlineTextDecrease,
} from "react-icons/md";
import FontSizeController from "@/utils/FontSizeController/FontSizeController";

interface NewsDetailItem {
  id: number;
  news_title: string;
  news_detail: string;
  title_img: string;
  category_name_bangla: string;
  news_time: string;
  news_short_brief: string;
  news_author: string;
}

interface NewsDetailsProps {
  item: NewsDetailItem;
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ item }) => {
  const [fontSize, setFontSize] = useState(18);
  const newsRef = useRef<HTMLDivElement>(null);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 32));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const resetFont = () => setFontSize(18);

  return (
    <div className="container mx-auto mt-5">
      {/* Category */}
      <div className="flex items-center mb-2">
        <h1 className="text-xl text-gray-600 flex items-center underline line-clamp-2">
          <Link href="/">{item?.category_name_bangla}</Link>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          {/* Title */}
          <h1
            className="text-black font-semibold my-4"
            style={{ fontSize: `${fontSize * 1.8}px`, lineHeight: 1.3 }}
          >
            {item?.news_title}
          </h1>

          {/* Author & Time */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                  <small className="text-white font-bold text-[10px] leading-tight">
                    সাপ্তাহিক <br />
                    আজকাল
                  </small>
                </div>
                <div>
                  <span className="font-medium text-gray-700">প্রকাশিত:</span>
                  <p className="text-gray-500 mt-1">
                    <NewsTimeShower newsTime={item.news_time} />
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-500 text-sm">
                <span className="mb-2 sm:mb-0 font-medium">
                  নিউজটি শেয়ার করুন:
                </span>
                <div className="flex gap-3 text-2xl justify-center">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Short Brief */}
          <p
            className="pb-4 text-black"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.5 }}
          >
            {item?.news_short_brief}
          </p>

          {/* Image */}
          <div>
            <img
              src={`https://ajkal.us/img/news/${item?.title_img}`}
              alt={item?.news_title}
              className="w-full h-auto mb-4 rounded-[5px]"
            />
          </div>
          {/* Author & Font Size Icons */}
          <FontSizeController
            author={item?.news_author}
            onIncrease={increaseFont}
            onDecrease={decreaseFont}
            onReset={resetFont}
          />

          {/* Content */}
          <div
            ref={newsRef}
            className="text-gray-700 mt-2"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: item?.news_detail ?? "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
