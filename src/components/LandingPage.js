import React from "react";
import { Element } from "react-scroll";
import carouselData from "../assets/carousel/carousel.json";

const LandingPage = (props) => {
  const title = props.siteTitle ? props.siteTitle : props.title;
  const carousel = carouselData.map((data) => (
    <img key={data.id} src={data.src} alt={data.alt} />
  ));

  return (
    <Element name={props.id} className="element">
      <section id={props.id} className="flex mb-20 h-xl bg-black text-white">
        <div className="flex flex-col content-start justify-end">
          <h1 className="text-left font-display text-9xl  w-1/2">{title}</h1>
        </div>
        <div className="carousel">{carousel}</div>
      </section>
    </Element>
  );
};

export default LandingPage;
