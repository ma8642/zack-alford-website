import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
// import galleryData from "../assets/gallery/galleries";
import collectionsData from "../assets/gallery/gallery-collections";

const GalleryCollection = ({ gallery, handleCloseClick }) => {
  // One big photo
  // a row of small thumbnails underneath. Each one clicked becomes the big one shown.
  const collection = collectionsData[gallery.id];
  const [focusedImage, setFocusedImage] = useState(collection[0]);

  return (
    <div className="collection-container">
      <div className="flex justify-between">
        <div className="gallery-info flex font-body">
          <h2 className="mr-2">{gallery.title.toUpperCase()}</h2>{" "}
          <h3>{gallery.year}</h3>
        </div>
        <CloseOutlined
          className="flex justify-end mb-2 text-xl"
          onClick={handleCloseClick}
        />
      </div>
      <div className="flex flex-col justify-center content-center">
        <div className="focused-image flex justify-center">
          <img src={focusedImage.src} height="100vh" alt={focusedImage.alt} />
        </div>

        <div className="thumbnail-row grid gap-1 grid-cols-6 grid-rows-1 overflow-x-auto">
          {collection.map((photo, i) => {
            return (
              <div
                key={i}
                onClick={() => setFocusedImage(photo)}
                className="cursor-pointer"
              >
                <img
                  key={i}
                  src={photo.src}
                  height="70px"
                  width="70px"
                  alt={photo.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryCollection;
