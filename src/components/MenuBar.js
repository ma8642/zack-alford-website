import React, { useState } from "react";
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
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
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
        background: white;
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
