import iSong from "../interfaces/iSong";
import MusicPlayer from "./MusicPlayer";

interface iProps {
  songs: iSong[];
}

export default function Table({ songs }: iProps): JSX.Element {
  function handleClick(song: iSong) {
    console.log("Clicked!");
    <MusicPlayer pathToSong={song.pathTomusic} />
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
