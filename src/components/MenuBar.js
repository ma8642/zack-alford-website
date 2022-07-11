import React from "react";
import { Link } from "react-scroll";

const MenuBar = ({ pages }) => {
  const menuItems = pages.map((title) => {
    const style =
      title === "connect"
        ? "inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-black hover:bg-green-400  lg:mt-0"
        : "block lg:inline-block lg:mt-0 hover:text-green-400 mr-4";

    return (
      <div key={title} className={`text-white mt-4 ${style}`}>
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
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black z-50 w-xl">
      <div className="w-full block">
        <div className="text-sm flex flex-row justify-end items-center font-body">
          {menuItems}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
