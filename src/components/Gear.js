import React from "react";
import gearData from "../assets/gear/gear";
import bgImage from "../assets/gear/gear-bg.png";

const Gear = () => {
  // TODO figure out a better way to have the on-hover happen so i don't have the a-tag warning anymore
  const gear = gearData.map((gear) => (
    <div className="w-1/2">
      <a href={gear.href}>
        <img key={gear.id} src={gear.src} alt={gear.alt} maxWidth="5%" />
      </a>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <img
          src={bgImage}
          alt="Zack playing drums in dim, red lighting."
          maxWidth="30%"
        />
      </div>
      <div className="flex flex-col justify-around items-center">{gear}</div>
    </div>
  );
};

export default Gear;
