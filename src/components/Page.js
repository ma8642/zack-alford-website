import React from "react";
import { Element } from "react-scroll";

const Page = (props) => {
  // TODO Add a View All button to see all albums
  return (
    <Element name={props.id} className="element min-h-screen">
      <section
        id={props.id}
        className="section h-full flex flex-col justify-center items-center"
      >
        <h1 className="title text-center font-display text-3xl md:text-5xl">
          {props.title}
        </h1>
        <div className="p-10 h-full">{props.children}</div>
      </section>
    </Element>
  );
};

export default Page;
