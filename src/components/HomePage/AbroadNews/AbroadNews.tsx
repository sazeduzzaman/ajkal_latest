import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryNewsProps {
  items: NewsItem[];
}

const AbroadNews: React.FC<CategoryNewsProps> = ({ items }) => {
  // Take only first 6 items
  const mostViewdItems = items.slice(0, 5);

  const fallbackImage = "/images/placeholder.webp";

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-2xl font-bold text-primary">
          {mostViewdItems?.[0]?.category_name_bangla || "অন্যান্য সংবাদ"}
        </h1>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {mostViewdItems.map((item) => (
          <Link
            key={item.id}
            href={`/${item.category_name}/${item.category_id}/news/${item.id}`}
            className="group flex flex-col overflow-hidden bg-transparent border-r-1 border-gray-200 last:border-r-0 pe-2"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 lg:h-64 w-full">
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

            {/* Content */}
            <div className="flex flex-col flex-1 justify-between p-3">
              <div>
                {/* Title */}
                <h3 className="text-1xl font-semibold mb-1 text-black">
                  {item.news_title}
                </h3>
                <div
                  className="text-lg text-gray-700 mb-2 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: item.news_short_brief || "",
                  }}
                />
              </div>

              {/* Category name always at bottom */}
              <p className="text-xs text-gray-500 mt-auto">
                {item.category_name_bangla || "Category"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AbroadNews;
