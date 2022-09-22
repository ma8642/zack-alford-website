import React, { useState } from "react";
import albums from "../assets/discography";
import FilledContactButton from "./buttons/FilledContactButton";
// import coverImages from "../assets/img/album_covers";
// import { albumCovers } from "../assets/img";

const Discography = () => {
  const increment = 8;
  const [maxAlbums, setMaxAlbums] = useState(increment);
  const albumsData = albums.map((album, i) => (
    <img
      key={album.id}
      src={album.src}
      alt={`Album cover for ${album.title} by ${album.artist}`}
      maxWidth="50%"
    />
  ));

  const handleClickButton = () => {
    if (maxAlbums < albumsData.length) {
      setMaxAlbums(maxAlbums + increment);
    } else {
      setMaxAlbums(increment);
    }
  };

  const buttonCopy = maxAlbums < albumsData.length ? "More" : "Less";

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {albumsData.slice(0, maxAlbums)}
      </div>
      <div className="flex justify-center mt-4">
        <FilledContactButton onClick={handleClickButton}>
          {buttonCopy}
        </FilledContactButton>
      </div>
    </div>
  );
};

export default Discography;
