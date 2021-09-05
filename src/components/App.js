import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import MenuBar from "./MenuBar";
import Page from "./Page";

const App = () => {
  const { t } = useTranslation();
  const pages = ["main", "bio", "discography", "gallery", "gear", "connect"];

  return (
    <div className="App px-12 bg-black text-white">
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
        <Page id="discography" title={t("discography")}>
          <div>Discography albums</div>
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <div>Gallery photos</div>
        </Page>
        <Page id="gear" title={t("gear")}>
          <div>Gear</div>
        </Page>
        <Page id="connect" title={t("connect")}>
          <div>Connect</div>
        </Page>
        <p>{t("zack-alford-copywrite")}</p>
        <small>{t("marley-alford-site")}</small>
      </main>
    </div>
  );
};

export default App;
