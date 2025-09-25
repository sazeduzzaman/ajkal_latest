import SocialMedia from "@/components/SocialMedia/SocialMedia";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import React from "react";
import TopMenus from "./TopMenus";

const Topbar = () => {
  return (
    <div className="w-full bg-site text-white mobile-none">
      <div className="flex justify-between items-center py-1 text-sm max-w-7xl mx-auto">
        <div>
          <CurrentTimeShower />
        </div>
        <div>
          <TopMenus />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
