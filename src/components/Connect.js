import React, { useState } from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import EmailDiv from "./EmailDiv";
import FilledButton from "./buttons/FilledButton";

const style =
  "p-5 text-black bg-green-400 rounded flex items-center transform hover:scale-105";

const Connect = (props) => {
  const [showEmail, setShowEmail] = useState(false);
  console.log(process.env);
  return (
    <div className="flex flex-col items-center justify-around text-3xl h-full">
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
      <div className="flex items-center">
        <FilledButton onClick={() => setShowEmail(!showEmail)}>
          {showEmail ? <EmailDiv /> : <MailOutlined alt="email" />}
        </FilledButton>
      </div>
    </div>
  );
};

export default Connect;
