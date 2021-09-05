import React from "react";
import { Link } from "react-scroll";

const MenuBar = ({ pages }) => {
  const menuItems = pages.map((title) => {
    const style =
      title === "connect"
        ? "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
        : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4";

    return (
      <div key={title} className={style}>
        <button className="uppercase">
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
        </button>
      </div>
    );
  });
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black sticky top-0 z-50">
      <div className="w-full block">
        <div className="text-sm flex flex-row justify-end items-center font-body">
          {menuItems}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
