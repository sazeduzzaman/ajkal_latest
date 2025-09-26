import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { getLatestNewsData } from "@/services/latestNewsData";
import { getmostViewdNewsData } from "@/services/mostViewdNewsData";
import MonstViewdNews from "./MostViewdNews/MonstViewdNews";
import SpotLightNews from "./SpotLightNews/SpotLightNews";
import { getmoSpotlightNewsData } from "@/services/spotLightNewsData";
import { getBreakingNewsData } from "@/services/breakingNewsData";
import BreakingNews from "./BreakingNews/BreakingNews";

export default async function HomePage() {
  const latestNewsData = await getLatestNewsData();
  const mostViewdNewsData = await getmostViewdNewsData();
  const spotLightNewsData = await getmoSpotlightNewsData();
  const breakingNewsData = await getBreakingNewsData();
  return (
    <div>
      <HeroSection items={latestNewsData} />
      <MonstViewdNews items={mostViewdNewsData} />
      <SpotLightNews items={spotLightNewsData} />
      <BreakingNews items={breakingNewsData} />
    </div>
  );
}
