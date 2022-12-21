import React from "react";
import { useTranslation } from "react-i18next";
import Nav from "./Nav/Nav";
import LandingPage from "./LandingPage";
import Page from "./Page";
import Biography from "./Biography";
import Discography from "./Discography";
import Gallery from "./Gallery";
import Gear from "./Gear";
import Connect from "./Connect";

const App = () => {
  const { t } = useTranslation();
  const pages = ["main", "bio", "discography", "gallery", "gear", "connect"];

  return (
    <div className="App px-12 bg-black text-white">
      <Nav pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll p-5"
      >
        <LandingPage id="main" siteTitle="Zachary Alford" />
        <Page id="bio" title={t("bio")}>
          <Biography />
        </Page>
        <Page id="discography" title={t("discography")} expandable={true}>
          <Discography />
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <Gallery />
        </Page>
        <Page id="gear" title={t("gear")}>
          <Gear />
        </Page>
        <Page id="connect" title={t("connect")}>
          <Connect />
        </Page>
        <p>{t("zack-alford-copywrite")}</p>
        <small>{t("marley-alford-site")}</small>
      </main>
    </div>
  );
};

export default App;
