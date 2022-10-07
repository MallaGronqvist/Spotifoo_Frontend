import { useEffect, useRef, useState } from "react";
import iSong from "../interfaces/iSong";

interface iProps {
  song: iSong;
}

export default function MusicPlayer({ song }: iProps) {
  const [currentSong, setCurrentSong] = useState(song);
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    console.log(song);
    setCurrentSong(song);
  }, [song]);

  useEffect(() => {
    setCurrentURL("http://localhost:8080".concat(currentSong.pathTomusic));
  }, [currentSong]);

  return (
    <div id="musicPlayer">
      <div>
        <p>{currentSong.title}</p>
      </div>
      <audio src={currentURL} controls />
    </div>
  );
}
