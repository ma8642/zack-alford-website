import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "./MenuBar";
import LandingPage from "./LandingPage";
import Page from "./Page";
import Biography from "./Biography";
import Discography from "./Discography";
import Gallery from "./Gallery";
import GearPage from "./GearPage";
import ConnectPage from "./ConnectPage";
import bgImage from "../assets/zack-site-bg-2.jpg";

const App = () => {
  const { t } = useTranslation();
  const pages = ["main", "bio", "discography", "gallery", "gear", "connect"];

  return (
    <div className="App px-12 bg-black text-white">
      <MenuBar pages={pages} />
      <main
        id="main-container"
        className="bg-black fixed top-20 left-0 bottom-0 overflow-y-scroll p-5"
      >
        <LandingPage
          id="main"
          siteTitle="Zachary Alford"
          background={bgImage}
        ></LandingPage>
        <Page id="bio" title={t("bio")}>
          <Biography />
        </Page>
        <Page id="discography" title={t("discography")}>
          <Discography />
        </Page>
        <Page id="gallery" title={t("gallery")}>
          <Gallery />
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
