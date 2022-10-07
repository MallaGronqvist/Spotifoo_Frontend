import { useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";
import iSong from "../interfaces/iSong";

interface iProps {
  song: iSong;
}

export default function Banner({ song }: iProps) {
  let artist: string = song.artist;
  const imageURL: string = "http://localhost:8080".concat(song.pathToAlbum);

  return (
    <header className="banner">
      <img
        src={imageURL}
        alt="Album art"
        onError={(event) => (event.currentTarget.src = PlaceHolder)}
      />
      <h1 className="bannerTitle">{artist}</h1>
    </header>
  );
}
