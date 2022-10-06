import { useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";
import iSong from "../interfaces/iSong";

interface iProps {
  songs: iSong[];
}

export default function Banner({ songs }: iProps) {
  let artist: string = songs[0].artist;
 const imageURL: string = "http://localhost:8080".concat(songs[0].pathToAlbum);
  
  return(
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
