import PlaceHolder from "../assets/picture-no-album.png";
import { useNavigate } from "react-router-dom";

interface iProps {
  title: string;
  pathToAlbum: string;
}

export default function Card({ title, pathToAlbum  }: iProps) {
  // Properties
  const imageSource: string = "http://localhost:8080".concat(pathToAlbum);
  let navigate = useNavigate();
  return (
    <article
      className="card"
      onClick={() => {
        const path: string = "/content/".concat(title);
        navigate(path);
      }}
    >
      <img
        src={imageSource}
        alt="Album art"
        onError={(event) => (event.currentTarget.src = PlaceHolder)}
      />

      <h3 className="cardTitle">{title}</h3>
    </article>
  );
}
