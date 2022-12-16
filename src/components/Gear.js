import React from "react";
import { gearData } from "../assets/gear";
import bgImage from "../assets/gear/gear-bg.png";

const Gear = () => {
  // TODO figure out how to align-items-center this page content!
  const gear = gearData.map((gear) => (
    <div className="transform hover:scale-105">
      <a href={gear.href} target="_blank" rel="noreferrer">
        <img key={gear.id} src={gear.src} alt={gear.alt} maxWidth="100%" />
      </a>
    </div>
  ));

  return (
    <div className="grid grid-cols-gear">
      <div data-testid="gear-photo">
        <img
          src={bgImage}
          alt="Zack playing drums in dim, red lighting."
          maxWidth="30%"
        />
      </div>
      <div className="flex flex-col justify-center">{gear}</div>
    </div>
  );
};

export default Gear;
