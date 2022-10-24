import { useRef, useState } from "react";
import PlaceHolder from "../assets/picture-no-album.png";
import iSong from "../interfaces/iSong";

interface iProps {
  songs: iSong[];
  setCurrentSong: Function;
}

//good
export default function Table({ songs, setCurrentSong }: iProps): JSX.Element {
  function handleClick(song: iSong) {
    console.log("Clicked on song:"); // no console log on production -1
    console.log(song.title); // no console log on production -1
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
              <td className="imageCell">
                <img
                  src={"http://localhost:8080".concat(song.pathToAlbum)}
                  alt="Album art"
                  onError={(event) => (event.currentTarget.src = PlaceHolder)}
                />
              </td>

              <td className="tableTitle">
                {song.title}
                <br /> {song.album}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
