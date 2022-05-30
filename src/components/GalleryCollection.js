import React, { useState } from "react";
// import galleryData from "../assets/gallery/galleries";

const GalleryCollection = ({ photos }) => {
  // One big photo
  // a row of small thumbnails underneath. Each one clicked becomes the big one shown.
  const [focusedImage, setFocusedImage] = useState(photos[0]);

  return (
    <div className="collection flex flex-col justify-center content-center">
      <div className="focused-image flex justify-center">
        <img src={focusedImage.src} height="100vh" alt={focusedImage.alt} />
      </div>

      <div className="thumbnail-row flex">
        {photos.map((photo, i) => {
          return (
            <div
              key={i}
              onClick={() => setFocusedImage(photo)}
              className="cursor-pointer mx-1 overflow-x-auto" // TODO fix overflow
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
  );
};

export default GalleryCollection;
