import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import MenuBar from "./MenuBar";
import Page from "./Page";

const App = () => {
  const { t } = useTranslation();
  const pages = ["main", "bio", "discography", "gallery", "gear", "connect"];
  const [page, setPage] = useState("main");

  return (
    <div className="App">
      <MenuBar pages={pages} />
      <Page>
        <h1>Zachary Alford</h1>
      </Page>
      <Page id="main" title={t("bio")}>
        <p>{t("biography-text")}</p>
      </Page>
    </div>
  );
};

export default App;
