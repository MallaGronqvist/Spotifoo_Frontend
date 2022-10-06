import { useEffect, useRef, useState } from "react";
import iSong from "../interfaces/iSong";

interface iProps {
  pathToSong: string
}
export default function MusicPlayer({ pathToSong }: iProps) {
  
  const [currentSong, setCurrentSong] = useState("http://localhost:8080".concat(pathToSong));

  /*
const imageSource: string = song.pathToAlbum;

  const audioSource = currentSong.pathTomusic;
  const audioRef = useRef(new Audio(audioSource));
  const intervalref = useRef();
  */

  useEffect(() => {
    console.log("In useEffect!")
    setCurrentSong("http://localhost:8080".concat(pathToSong));
    
  }, [currentSong]);

  return (
    <div id="musicPlayer">
      <audio src={currentSong} controls>
       </audio>
    </div>
  );
}
