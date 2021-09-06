import React from "react";
import { Element } from "react-scroll";

const Page = (props) => {
  // TODO Add a View All button to see all albums
  return (
    <Element name={props.id} className="element">
      <section
        id={props.id}
        className={"flex flex-col align-center mb-20 h-xl bg-black text-white"}
        style={{
          "background-image": `url(${props.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center font-display text-3xl">{props.title}</h1>
        <div className="pt-10 pl-20 pr-20 h-full">{props.children}</div>
      </section>
    </Element>
  );
};

export default Page;
