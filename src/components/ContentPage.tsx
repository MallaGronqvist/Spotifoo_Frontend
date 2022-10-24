import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iSong from "../interfaces/iSong";
import Banner from "./Banner";
import MusicPlayer from "./MusicPlayer";
import Table from "./Table";

interface iProps {
  setCurrentSong: Function;
}

export default function ContentPage({ setCurrentSong }: iProps) {
  const { name } = useParams();
  const title: string = name !== undefined ? name : "";

  const [songs, setSongs] = useState([]);

  const path: string = "http://localhost:8080/music/"
    .concat("?search=")
    .concat(title);

  /**
   * You should have a separate method called onSuccess() that handle:
   * 1. setSongs
   * 2. setCurrentSong
   * in a single method instead of using 2 separate useEffect. Having multiple useEffect is 
   * a recipe for causing weird bugs inside React
   */
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
        <Banner song={songs[0]} title={title} />
        <Table songs={songs} setCurrentSong={setCurrentSong} />
      </main>
    </div>
  );
}
