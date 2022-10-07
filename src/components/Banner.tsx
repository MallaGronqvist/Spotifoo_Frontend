import { useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";
import iSong from "../interfaces/iSong";

interface iProps {
  song: iSong;
  title: string;
}

export default function Banner({ song, title }: iProps) {
  const imageURL: string = "http://localhost:8080".concat(song.pathToAlbum);

  return (
    <header className="banner">
      <img
        src={imageURL}
        alt="Album art"
        onError={(event) => (event.currentTarget.src = PlaceHolder)}
      />
      <h1 className="bannerTitle">{title}</h1>
    </header>
  );
}
