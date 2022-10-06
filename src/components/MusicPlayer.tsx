import { useEffect, useRef, useState } from "react";
import iSong from "../interfaces/iSong";

interface iProps {
  pathToSong: string
}
export default function MusicPlayer({ pathToSong }: iProps) {
  
  const [currentSong, setCurrentSong] = useState(pathToSong);
  /*
const imageSource: string = song.pathToAlbum;

  const audioSource = currentSong.pathTomusic;
  const audioRef = useRef(new Audio(audioSource));
  const intervalref = useRef();

  useEffect(() => {

    setCurrentSong(song);
    
    audioRef.current.play();
  }, [song]);
  */

  return (
    <div id="musicPlayer">
      <audio src={currentSong} controls>
       </audio>
    </div>
  );
}
