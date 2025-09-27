import React from "react";
import { getEpaperData } from "@/services/epaperData";
import EpaperPage from "./EpaperPage";
import EpaperSidebar from "../EpaperSidebar/EpaperSidebar";

export default async function Epaper() {
  const epaperNews = await getEpaperData();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-9">
          <EpaperPage items={epaperNews} />
        </div>
        <div className="col-span-3">
          <EpaperSidebar showCount={2} />
        </div>
      </div>
    </div>
  );
}
