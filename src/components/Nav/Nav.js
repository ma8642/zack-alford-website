import React from "react";
import MenuBar from "./MenuBar";
import MobileMenu from "./MobileMenu";

const Nav = ({ pages }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black z-50 w-xl">
      <MobileMenu pages={pages} />
      <MenuBar pages={pages} />
    </nav>
  );
};

export default Nav;
