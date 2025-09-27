import { NewsItem } from "@/types/CategoryDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Link from "next/link";
import React from "react";

interface CategoryNewsProps {
  items: NewsItem[];
}

const LatestCategoryNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const displayItems = items.slice(0, 7); // allow up to 7 if needed
  const fallbackImage = "/images/placeholder.webp";

  const firstItem = displayItems[0];
  const otherItems = displayItems.slice(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* Left column → first big item */}
      {firstItem && (
        <div className="relative h-[400px] overflow-hidden group cursor-pointer shadow-lg">
          <Link
            href={`/category/${firstItem.category_id}/news/${firstItem.id}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(https://ajkal.us/img/news/${firstItem.title_img}), url(${fallbackImage})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 p-4 text-white text-2xl font-bold">
              {firstItem.news_title}
              <br />
              <span className="text-sm text-gray-300">
                <NewsTimeShower newsTime={firstItem.news_time} />
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* Right column → grid of 2 rows × 3 cols */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {otherItems.map((news) => (
          <div
            key={news.id}
            className="relative h-[196px] overflow-hidden group cursor-pointer shadow"
          >
            <Link href={`/category/${news.category_id}/news/${news.id}`}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://ajkal.us/img/news/${news.title_img}), url(${fallbackImage})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 p-2 text-white text-sm font-semibold">
                {news.news_title}
                <br />
                <span className="text-xs text-gray-300">
                  <NewsTimeShower newsTime={news.news_time} />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCategoryNews;
