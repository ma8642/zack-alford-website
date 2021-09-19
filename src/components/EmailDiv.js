import React from "react";

const EmailDiv = () => {
  return (
    <a
      href={`mailto:${process.env.REACT_APP_FIRST}@${process.env.REACT_APP_LAST}`}
      className="hover:text-green-400"
    >{`${process.env.REACT_APP_FIRST}@${process.env.REACT_APP_LAST}`}</a>
  );
};

export default EmailDiv;
