import React, { useEffect } from "react";
import { Element } from "react-scroll";
import carouselData from "../assets/carousel/carousel.json";

const LandingPage = (props) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  useEffect(() => {
    const next = (currentImage + 1) % carouselData.length;
    const id = setTimeout(() => setCurrentImage(next), 5000);
    return () => clearTimeout(id);
  }, [currentImage]);

  const title = props.siteTitle ? props.siteTitle : props.title;

  return (
    <Element name={props.id} className="element">
      <section id={props.id} className="mb-20 h-xl bg-black text-white">
        <h1 className="text-left font-display text-9xl w-1/2 z-10 absolute bottom-0 left-0">
          {title}
        </h1>
        <div className="flex justify-end content-end h-xl">
          <img
            className="carousel animate-fade"
            // className="carousel" // TODO I prefer this one
            src={carouselData[currentImage].src}
            alt={carouselData[currentImage].alt}
          />
        </div>
      </section>
    </Element>
  );
};

export default LandingPage;
