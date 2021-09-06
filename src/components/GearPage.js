import React from "react";
import { Element } from "react-scroll";

const GearPage = (props) => {
  const contentFormat = props.siteTitle
    ? "flex flex-col content-start justify-end"
    : "flex flex-col align-center";
  const title = props.siteTitle ? props.siteTitle : props.title;
  // TODO make site title vibrate when you mouse over it

  return (
    <Element name={props.id} className="element">
      <section
        id={props.id}
        className={`${contentFormat} mb-20 h-xl bg-black text-white`}
        style={{
          "background-image": `url(${props.background})`,
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
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
        {props.children}
      </section>
    </Element>
  );
};

export default GearPage;
