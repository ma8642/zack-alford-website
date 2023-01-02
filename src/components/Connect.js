import React from "react";
import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";

const style =
  "p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const Connect = (props) => {
  return (
    <div className="flex justify-around items-center text-lg lg:text-3xl h-full">
      <a href={process.env.REACT_APP_INSTA} target="_blank" rel="noreferrer">
        <div className={style}>
          <InstagramOutlined alt="instagram" />
        </div>
      </a>
      <a href={process.env.REACT_APP_FB} target="_blank" rel="noreferrer">
        <div className={style}>
          <FacebookFilled alt="facebook" />
        </div>
      </a>
    </div>
  );
};

export default Connect;
