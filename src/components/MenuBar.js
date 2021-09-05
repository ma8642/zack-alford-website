import React from "react";
import { Link, scroller } from "react-scroll";

const MenuBar = ({ pages }) => {
  const menuItems = pages.map((title) =>
    title === "connect" ? (
      <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">
        <Link
          activeClass="active"
          to={title}
          spy={true}
          smooth={true}
          duration={250}
          containerId="main-container"
        >
          {title}
        </Link>
      </div>
    ) : (
      <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        <Link
          activeClass="active"
          to={title}
          spy={true}
          smooth={true}
          duration={250}
          containerId="main-container"
        >
          {title}
        </Link>
      </div>
    )
  );
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black sticky top-0 z-50">
      <div className="w-full block">
        <div className="text-sm flex flex-row justify-end items-center uppercase">
          {menuItems}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
