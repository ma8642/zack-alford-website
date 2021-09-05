import React from "react";
import { Element } from "react-scroll";

const Page = (props) => {
  return (
    <Element name={props.id} className="element">
      <section id={props.id} className="mt-20 h-screen bg-black text-white">
        <h1>{props.title}</h1>
        {props.children}
      </section>
    </Element>
  );
};

export default Page;
