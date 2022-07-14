import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GalleryCollection from "./GalleryCollection";
import galleryData from "../assets/gallery/galleries";

const Gallery = () => {
  const { t } = useTranslation();
  const [openCollection, setOpenCollection] = useState(null);

  const laptop =
    "lg:hover:bg-green-300 lg:hover:bg-opacity-90 lg:hover:text-black";
  const mobile = "bg-green-300 bg-opacity-90";
  const largeScreen = "lg:bg-transparent";

  const galleries = galleryData.map((gallery) => (
    <div className="relative" onClick={() => setOpenCollection(gallery)}>
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-between ${laptop} duration-300 cursor-pointer`}
      >
        <div>
          <h1
            className={`tracking-wider text-3xl font-black -mt-2 ${mobile} ${largeScreen}`}
          >
            {gallery.title.toUpperCase()}
          </h1>
          <p className={`mx-auto tracking-wider ${mobile} ${largeScreen}`}>
            {gallery.year}
          </p>
        </div>
        <div className="p-6"></div>
      </div>
      <a href={gallery.href} className="relative">
        <div className="h-48 flex flex-wrap content-center">
          <img
            key={gallery.id}
            src={gallery.src}
            alt={`${gallery.title} gallery`}
            maxWidth="10%"
          />
        </div>
      </a>
    </div>
  ));

  if (openCollection) {
    return (
      <GalleryCollection
        gallery={openCollection}
        handleCloseClick={() => setOpenCollection(null)}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{galleries}</div>
  );
};

export default Gallery;
