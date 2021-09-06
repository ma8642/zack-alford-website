import React from "react";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation();
  const text = [];
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 1) {
      text.push(<br />);
    } else {
      text.push(
        <p key={i} className="mb-10 text-lg">
          {t(`biography-para-${counter + 1}`)}
        </p>
      );
      counter += 1;
    }
  }
  return <div className="font-body text-left pt-5 pl-20 pr-20">{text}</div>;
};

export default Biography;
