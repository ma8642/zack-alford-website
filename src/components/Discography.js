import React, { useEffect, useState } from "react";
import albums from "../assets/discography/albums";
import FilledButton from "./buttons/FilledButton";

const Discography = () => {
  const [increment, setIncrement] = useState(8);
  const [maxAlbums, setMaxAlbums] = useState(increment);
  const albumsElt = albums.map((album) => (
    <img
      key={album.id}
      src={album.src}
      alt={`Album cover for ${album.title} by ${album.artist}`}
      maxWidth="50%"
    />
  ));

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 480px)");
    let mobileView = mql.matches;
    if (mobileView) {
      console.log("mobile view!");
      setIncrement(6);
      setMaxAlbums(6);
    }
  }, []);

  // TODO make this album page only show more if user chooses to

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {albumsElt.slice(0, maxAlbums)}
      </div>
      <div className="flex justify-center mt-4">
        <FilledButton onClick={() => setMaxAlbums(maxAlbums + increment)}>
          More
        </FilledButton>
      </div>
    </div>
  );
};

export default Discography;
