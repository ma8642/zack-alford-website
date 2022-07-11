import React from "react";

const FilledContactButton = (props) => {
  return (
    <button
      className="p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FilledContactButton;
