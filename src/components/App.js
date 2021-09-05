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
    <div className="App px-12 bg-black">
      <MenuBar pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll"
      >
        <Page id="main">
          <h1>Zachary Alford</h1>
        </Page>
        <Page id="bio" title={t("bio")}>
          <p>{t("biography-text")}</p>
        </Page>
      </main>
    </div>
  );
};

export default App;
