import React from "react";
import { Element } from "react-scroll";
import { carouselData } from "../assets/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LandingPage = (props) => {
  const title = props.siteTitle ? props.siteTitle : props.title;

  const carouselArr = carouselData.map((data, i) => {
    return (
      <div>
        <img src={carouselData[i].src} alt={carouselData[i].alt} />
      </div>
    );
  });

  return (
    <Element name={props.id} className="element">
      <section id={props.id} className="mb-20 h-xl bg-black text-white">
        <h1 className="text-left font-display text-7xl md:text-9xl w-1/2 z-10 absolute bottom-12 md:bottom-0 left-0">
          {title}
        </h1>
        <Carousel
          className="flex justify-end content-end max-h-full"
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {carouselArr}
        </Carousel>
      </section>
    </Element>
  );
};

export default LandingPage;
