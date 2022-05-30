import React, { useState } from "react";
// import galleryData from "../assets/gallery/galleries";

const GalleryCollection = ({ photos }) => {
  // One big photo
  // a row of small thumbnails underneath. Each one clicked becomes the big one shown.
  const [focusedImage, setFocusedImage] = useState(photos[0]);

  return (
    <div className="collection flex flex-col justify-center content-center">
      <div className="focused-image flex justify-center">
        <img src={focusedImage} height="100vh" />
      </div>

      <div className="thumbnail-row flex">
        {photos.map((url, i) => {
          return (
            <div
              key={i}
              onClick={() => setFocusedImage(url)}
              className="cursor-pointer mx-1"
            >
              <img key={i} src={url} height="70px" width="70px" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryCollection;
