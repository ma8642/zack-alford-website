import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
// import galleryData from "../assets/gallery/galleries";

const GalleryCollection = ({ photos, handleBackClick }) => {
  // One big photo
  // a row of small thumbnails underneath. Each one clicked becomes the big one shown.
  const [focusedImage, setFocusedImage] = useState(photos[0]);

  return (
    <div className="collection-container">
      <ArrowLeftOutlined className="mb-2 text-xl" onClick={handleBackClick} />
      <div className="flex flex-col justify-center content-center">
        <div className="focused-image flex justify-center">
          <img src={focusedImage.src} height="100vh" alt={focusedImage.alt} />
        </div>

        <div className="thumbnail-row grid gap-1 grid-cols-6 grid-rows-1 overflow-x-auto">
          {photos.map((photo, i) => {
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
