import React, { useState } from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import EmailDiv from "./EmailDiv";
import FilledContactButton from "./buttons/FilledContactButton";

const style =
  "p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const Connect = (props) => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div className="flex flex-col items-center text-3xl h-full">
      <a
        href={process.env.REACT_APP_INSTA}
        target="_blank"
        rel="noreferrer"
        className="pb-8"
      >
        <div className={style}>
          <InstagramOutlined
            alt="instagram"
            onClick={() => setShowEmail(false)}
          />
        </div>
      </a>
      <a
        href={process.env.REACT_APP_FB}
        target="_blank"
        rel="noreferrer"
        className="pb-8"
      >
        <div className={style}>
          <FacebookFilled alt="facebook" onClick={() => setShowEmail(false)} />
        </div>
      </a>
      <div className="flex items-center pb-8">
        <FilledContactButton onClick={() => setShowEmail(!showEmail)}>
          {showEmail ? <EmailDiv /> : <MailOutlined alt="email" />}
        </FilledContactButton>
      </div>
    </div>
  );
};

export default Connect;
