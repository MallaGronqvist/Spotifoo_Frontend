import { useRef, useState } from "react";
import iSong from "../interfaces/iSong";


interface iProps {
  songs: iSong[];
  setCurrentSong: Function;
}

export default function Table({ songs, setCurrentSong }: iProps): JSX.Element {
  function handleClick(song: iSong) {
    console.log("Clicked on song:");
    console.log(song.title);
    setCurrentSong(song);
  }

  return (
    <table className="table">
      <tbody>
        {songs.map((song) => {
          return (
            <tr
              key={song.id}
              className="tableRow"
              onClick={() => handleClick(song)}
            >
              <td>{song.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
