import React, { useState } from "react";
import albums from "../assets/discography";
import FilledButton from "./buttons/FilledButton";

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
  console.log(maxAlbums);
  console.log(albumsData.length);

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {albumsData.slice(0, maxAlbums)}
      </div>
      <div className="flex justify-center mt-4">
        <FilledButton
          onClick={handleClickButton}
          disabled={maxAlbums >= albumsData.length}
        >
          {buttonCopy}
        </FilledButton>
      </div>
    </div>
  );
};

export default Discography;
