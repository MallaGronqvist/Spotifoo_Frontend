import PlaceHolder from "../assets/picture-no-album.png";
import { useEffect, useState } from "react";
import iSong from "../interfaces/iSong";

interface iProps {
  song: iSong;
}

// good
export default function MusicPlayer({ song }: iProps) {
  const [currentSong, setCurrentSong] = useState(song);

  useEffect(() => {
    setCurrentSong(song);
  }, [song]);

  function getURL(): string {
    console.log(currentSong.pathToMusic);

    return "http://localhost:8080".concat(currentSong.pathToMusic);
  }

  return (
    <div id="musicPlayer">
      <div>
        <p>{currentSong.title}</p>
      </div>
      <audio src={getURL()} controls />
    </div>
  );
}
