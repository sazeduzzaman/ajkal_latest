import { NewsItem } from "@/types/CategoryDataType";
import React from "react";
import LatestCategoryNews from "./LatestCategoryNews";
import RemainingNews from "./RemainingNews";

interface CategoryNewsProps {
  items: NewsItem[];
}

const CategoryNews: React.FC<CategoryNewsProps> = ({ items }) => {
  const latestNews = items.slice(0, 5);
  const remainingNews = items.slice(5);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <LatestCategoryNews items={latestNews} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <RemainingNews items={remainingNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
