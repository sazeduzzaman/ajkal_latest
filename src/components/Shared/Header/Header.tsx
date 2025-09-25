import React from "react";
import Topbar from "./Topbar";
import HeaderCenter from "./HeaderCenter";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <div>
      <Topbar />
      <div className="sticky top-0 z-50 w-full">
        <HeaderCenter />
        <HeaderCategory />
      </div>
    </div>
  );
};

export default Header;
