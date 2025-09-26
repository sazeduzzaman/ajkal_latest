import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { getLatestNewsData } from "@/services/latestNewsData";
import { getmostViewdNewsData } from "@/services/mostViewdNewsData";
import MonstViewdNews from "./MostViewdNews/MonstViewdNews";
import SpotLightNews from "./SpotLightNews/SpotLightNews";
import { getmoSpotlightNewsData } from "@/services/spotLightNewsData";
import { getBreakingNewsData } from "@/services/breakingNewsData";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsWithSidebar from "./NewsWithSidebar/NewsWithSidebar";
import { getNewYorkNewsData } from "@/services/newYorkNewsData";
import SportsNews from "./SportsNews";
import { getSportsNewsData } from "@/services/sportsNewsData copy";
import HomeSidebar from "./HomeSidebar/HomeSidebar";

export default async function HomePage() {
  const latestNewsData = await getLatestNewsData();
  const mostViewdNewsData = await getmostViewdNewsData();
  const spotLightNewsData = await getmoSpotlightNewsData();
  const breakingNewsData = await getBreakingNewsData();
  const newYorkNewsData = await getNewYorkNewsData();
  const sportsNewsData = await getSportsNewsData();
  return (
    <div>
      <HeroSection items={latestNewsData} />
      <MonstViewdNews items={mostViewdNewsData} />
      <SpotLightNews items={spotLightNewsData} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 mt-6">
        {/* Main content */}
        <div className="md:col-span-2 lg:col-span-9">
          <BreakingNews items={breakingNewsData} />
          <NewsWithSidebar items={newYorkNewsData} />
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 lg:col-span-3">
          <HomeSidebar />
        </div>
      </div>

      <SportsNews items={sportsNewsData} />
    </div>
  );
}
