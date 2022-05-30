import React, { useState } from "react";
import GalleryCollection from "./GalleryCollection";
import galleryData from "../assets/gallery/galleries";
import collectionsData from "../assets/gallery/gallery-collections";

const Gallery = () => {
  // TODO figure out a better way to have the on-hover happen so i don't have the a-tag warning anymore
  const [openCollection, setOpenCollection] = useState(null);
  const galleries = galleryData.map((gallery) => (
    <div
      className="relative"
      onClick={() => setOpenCollection(collectionsData[gallery.id])}
    >
      <div className="absolute inset-0 z-10 bg-green-300 text-center text-black flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 cursor-pointer">
        <h1 className="tracking-wider">{gallery.title}</h1>
        <p className="mx-auto">{gallery.year}</p>
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
    return <GalleryCollection photos={openCollection} />;
  }

  return <div className="grid grid-cols-4 gap-4">{galleries}</div>;
};

export default Gallery;
