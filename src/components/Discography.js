import React from "react";
import albums from "../assets/discography/albums";

const Discography = () => {
  const albumsElt = albums.map((album) => (
    <img
      key={album.id}
      src={album.src}
      alt={`Album cover for ${album.title} by ${album.artist}`}
      maxWidth="50%"
    />
  ));

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">{albumsElt}</div>
  );
};

export default Discography;
