import { useEffect, useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";

interface iProps {
  title: string;
  pathToAlbum: string;
}

export default function Card({ title, pathToAlbum }: iProps) {


  // Properties
  const imageSource: string = "http://localhost:8080".concat(pathToAlbum);

  return (
    <article className="Card">
      <img
        className="Card-image"
        src={imageSource}
        alt="Album art"
        onError={(event) => (event.currentTarget.src = PlaceHolder)}
        width={192}
        height={192}
      />
      <h3>{title}</h3>
    </article>
  );
}
