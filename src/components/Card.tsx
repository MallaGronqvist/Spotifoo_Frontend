import { useEffect, useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";

interface iProps {
  title: string;
  pathToAlbum: string;
}

export default function Card({ title, pathToAlbum }: iProps) {
  const [image, setImage] = useState("");
  let imageSource: string = "http://localhost:8080".concat(pathToAlbum);

  useEffect(() => {
    fetch(imageSource)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Image not found");
        }
        return response;
      })
      .then((data) => setImage(data.url))
      .catch((error) => {
        console.log(error);
        setImage(PlaceHolder);
      });
  }, []);

  return (
    <article className="Card">
      <img
        className="Card-image"
        src={image}
        alt="Album art"
        width={192}
        height={192}
      ></img>
      <h3>{title}</h3>
    </article>
  );
}
