import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryNewsProps {
  items: NewsItem[];
}

const RajnitiNews: React.FC<CategoryNewsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  // first 2 for row 1, next 4 for row 2
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2, 8);

  const fallbackImage = "/images/placeholder.webp";

  return (
    <>
      <div className="bg-blue-100 border-b-1 border-blue-300 my-6">
        <div className="flex justify-center items-center bg-gray-200 ">
          <div className="relative w-[1080px] h-[120px]">
            <Link href="/">
              <Image
                src="/images/6.gif"
                alt="Advertisement"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="mt-3 p-3">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl font-bold text-primary">
              {firstRow?.[0]?.category_name_bangla || "অন্যান্য সংবাদ"}
            </h1>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {firstRow.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.category_id}/news/${item.id}`}
                className="col-span-6 group flex flex-col"
              >
                <div className="relative w-full h-96 overflow-hidden">
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
                <h3 className="mt-2 text-2xl font-semibold">
                  {item.news_title}
                </h3>
                <p className="text-xs text-gray-500 mt-auto pt-3">
                  {item.category_name_bangla || "Category"}
                </p>
              </Link>
            ))}
          </div>
          <hr className="my-6 border-t-1 border-blue-200" />
          {/* Second Row (4 items) */}
          <div className="grid grid-cols-12 gap-6 my-6">
            {secondRow.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.category_id}/news/${item.id}`}
                className="flex flex-col col-span-2 group border-r-1 border-blue-200 last:border-r-0 pe-5"
              >
                <div className="relative w-full h-40 overflow-hidden">
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
                <h4 className="mt-2 text-xl">{item.news_title}</h4>
                {/* Category name always at bottom */}
                <p className="text-xs text-gray-500 mt-auto">
                  {item.category_name_bangla || "Category"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RajnitiNews;
