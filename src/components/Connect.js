import React, { useState } from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

const style =
  "p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const Connect = (props) => {
  const [email, showEmail] = useState(false);
  console.log(process.env);
  return (
    <div className="flex justify-evenly text-3xl">
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
      <button className={style} onClick={() => alert("Hi!")}>
        <MailOutlined alt="email" />
      </button>
    </div>
  );
};

export default Connect;
