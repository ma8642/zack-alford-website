import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

const style = "p-5 bg-green-400 rounded flex items-center";

const Connect = (props) => {
  return (
    <div className="flex justify-evenly text-3xl">
      <a
        href="https://www.instagram.com/gourmetjedi/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <div className={style}>
          <InstagramOutlined />
        </div>
      </a>
      <a
        href="https://www.facebook.com/zachary.alford.3"
        target="_blank"
        rel="noreferrer"
      >
        <div className={style}>
          <FacebookFilled />
        </div>
      </a>
      <div className={style}>
        <MailOutlined />
      </div>
    </div>
  );
};

export default Connect;
