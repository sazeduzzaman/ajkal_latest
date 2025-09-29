import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import LatestCategoryNews from "./LatestCategoryNews";
import RemainingNews from "./RemainingNews";
import CommonSidebar from "../CommonSidebar/CommonSidebar";

interface CategoryNewsProps {
  items: NewsItem[];
}

const CategoryNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const latestNews = items.slice(0, 7);
  const remainingNews = items.slice(7);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <LatestCategoryNews items={latestNews} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-9">
            <RemainingNews items={remainingNews} />
          </div>
          <div className=" col-span-3">
            <CommonSidebar showCount={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
