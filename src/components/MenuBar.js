import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";

const MenuBar = ({ pages }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopMenuItems = pages.map((title) => {
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

  const mobileMenuItems = pages.map((title) => {
    return (
      <li className="text-green-400">
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
      </li>
    );
  });
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black w-xl">
      <div className="w-full block">
        <div className="text-sm flex flex-row justify-end items-center font-body">
          <div
            className="MOBILE-MENU flex flex-col lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <>
              <span className="w-8 bg-green-400 px-4 py-0.5 mb-2 mr-4"> </span>
              <span className="w-8 bg-green-400 px-4 py-0.5 mb-2 mr-4"> </span>
              <span className="w-8 bg-green-400 px-4 py-0.5 mb-2 mr-4"> </span>
            </>
            <div className={isMobileMenuOpen ? "showMenuNav" : "hideMenuNav"}>
              <CloseOutlined
                className="absolute top-0 right-0 px-4 py-4 text-2xl text-green-400 bg-black"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <ul>{mobileMenuItems}</ul>
            </div>
          </div>
          <div className="DESKTOP-MENU hidden lg:flex">{desktopMenuItems}</div>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-weight: bolder;
        line-height: 2.5;
      }
    `}</style>
    </nav>
  );
};

export default MenuBar;
