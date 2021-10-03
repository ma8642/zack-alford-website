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

  // TODO make this album page only show more if user chooses to

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">{albumsElt}</div>
  );
};

export default Discography;
