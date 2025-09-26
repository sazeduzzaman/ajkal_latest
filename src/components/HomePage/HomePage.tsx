import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { getLatestNewsData } from "@/services/latestNewsData";
import SpotLightNews from "./SpotLightNews/SpotLightNews";

export default async function HomePage() {
  const latestNewsData = await getLatestNewsData();
  return (
    <div>
      <HeroSection items={latestNewsData} />
      <SpotLightNews />
    </div>
  );
}
