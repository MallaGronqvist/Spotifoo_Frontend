import PlaceHolder from "../assets/picture-no-album.png";

interface iProps {
  title: string;
  pathToAlbum: string;
}

export default function Card({ title, pathToAlbum }: iProps) {
  // Properties
  const imageSource: string = "http://localhost:8080".concat(pathToAlbum);

  return (
    <article className="card">
      <img
        src={imageSource}
        alt="Album art"
        onError={(event) => (event.currentTarget.src = PlaceHolder)}
      />

      <h3 className="cardTitle">{title}</h3>
    </article>
  );
}
