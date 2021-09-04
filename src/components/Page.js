import React from "react";

const Page = (props) => {
  return (
    <div className="h-screen bg-gray-50">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Page;
