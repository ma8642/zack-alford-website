import React from "react";

const FilledButton = (props) => {
  return (
    <button
      className={`p-5 text-black ${
        props.disabled ? "bg-gray-400" : "bg-green-400"
      } rounded flex items-center transform hover:scale-105`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FilledButton;
