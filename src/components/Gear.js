import React from "react";
import gearData from "../assets/gear/gear";
import bgImage from "../assets/gear/gear-bg.png";

const Gear = () => {
  // TODO figure out how to align-items-center this page content!!  and how to add space between brand logos
  const gear = gearData.map((gear) => (
    <div>
      <a href={gear.href}>
        <img key={gear.id} src={gear.src} alt={gear.alt} maxWidth="5%" />
      </a>
    </div>
  ));

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col justify-center">
        <img
          src={bgImage}
          alt="Zack playing drums in dim, red lighting."
          maxWidth="30%"
        />
      </div>
      <div className="flex flex-col justify-evenly items-center h-full w-1/2">
        {gear}
      </div>
    </div>
  );
};

export default Gear;
