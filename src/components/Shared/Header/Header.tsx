import React from "react";
import Topbar from "./Topbar";
import HeaderCenter from "./HeaderCenter";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <div>
      <Topbar />
      <HeaderCenter />
      <HeaderCategory />
    </div>
  );
};

export default Header;
