import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

const style =
  "p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const Email = (props) => (
  <a
    href={`mailto:${process.env.REACT_APP_FIRST}@${process.env.REACT_APP_LAST}`}
  >
    {props.children}
  </a>
);

const Connect = (props) => {
  return (
    <div className="flex justify-evenly text-3xl">
      <a
        href="https://www.instagram.com/gourmetjedi/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <div className={style}>
          <InstagramOutlined alt="instagram" />
        </div>
      </a>
      <a
        href="https://www.facebook.com/zachary.alford.3"
        target="_blank"
        rel="noreferrer"
      >
        <div className={style}>
          <FacebookFilled alt="facebook" />
        </div>
      </a>
      <Email>
        <div className={style}>
          <MailOutlined alt="email" />
        </div>
      </Email>
    </div>
  );
};

export default Connect;
