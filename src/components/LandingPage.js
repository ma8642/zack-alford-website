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
      <section id={props.id} className="flex mb-20 h-xl bg-black text-white">
        <div className="flex flex-col content-start justify-end">
          <h1 className="text-left font-display text-9xl  w-1/2">{title}</h1>
        </div>
        <div className="flex flex-col justify-end">
          <img
            className="carousel animate-fade"
            // className="carousel" // TODO I prefere this one
            src={carouselData[currentImage].src}
            alt={carouselData[currentImage].alt}
          />
        </div>
      </section>
    </Element>
  );
};

export default LandingPage;
