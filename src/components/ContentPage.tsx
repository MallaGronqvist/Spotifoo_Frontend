import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iSong from "../interfaces/iSong";
import Banner from "./Banner";
import MusicPlayer from "./MusicPlayer";
import Table from "./Table";

interface iProps {
    setCurrentSong: Function;
}

export default function ContentPage({setCurrentSong}: iProps) {
  const { name } = useParams();
  const title: string = name !== undefined ? name : "";

  const [songs, setSongs] = useState([]);

  const path: string = "http://localhost:8080/music/"
    .concat("?search=")
    .concat(title)
    .concat("&filter=artist");

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  useEffect(() => {
    setCurrentSong(songs[0]);
  }, []);

  if (songs.length === 0) return <p>Loading</p>;

  return (
    <div>
      <main className="page">
        <Banner song={songs[0]} />
        <Table songs={songs} setCurrentSong={setCurrentSong} />
      </main>
    </div>
  );
}
