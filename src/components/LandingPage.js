import React, { useCarousel, useEffect } from "react";
import { Element } from "react-scroll";
import carouselData from "../assets/carousel/carousel.json";

const ImageCarousel = ({ slideTime }) => {
  const carouselBehavior = useCarousel(slideTime);
  return <div className="carousel">...</div>;
};

const LandingPage = (props) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  useEffect(() => {
    const next = (currentImage + 1) % carouselData.length;
    const id = setTimeout(() => setCurrentImage(next), 5000);
    return () => clearTimeout(id);
  }, [currentImage]);

  const contentFormat = props.siteTitle
    ? "flex flex-col content-start justify-end"
    : "flex flex-col align-center";
  const title = props.siteTitle ? props.siteTitle : props.title;
  // TODO make site title vibrate when you mouse over it

  return (
    <Element name={props.id} className="element">
      <section
        id={props.id}
        className={`carousel ${contentFormat} mb-20 h-xl bg-black text-white`}
        // style={{
        //   // "background-image": `url(${carouselData[currentImage].src})`,
        //   backgroundPosition: "right",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h1
          className={
            props.siteTitle
              ? "text-left font-display text-9xl  w-1/2"
              : "text-center font-display text-3xl"
          }
        >
          {title}
        </h1>
        <div>
          <img
            className="carousel"
            src={carouselData[0].src}
            alt={carouselData[0].alt}
          />
          <img
            className="carousel"
            src={carouselData[1].src}
            alt={carouselData[1].alt}
          />
          <img
            className="carousel"
            src={carouselData[2].src}
            alt={carouselData[2].alt}
          />
        </div>
        {props.children}
      </section>
    </Element>
  );
};

export default LandingPage;
