import { useRef, useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";
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
              <td>
                <img
                  src={"http://localhost:8080".concat(song.pathToAlbum)}
                  alt="Album art"
                  onError={(event) => (event.currentTarget.src = PlaceHolder)}
                />
              </td>

              <td>{song.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
