import iSong from "../interfaces/iSong";
import Card from "./Card";

interface iProps {
  songs: iSong[];
}

export default function ArtistList({ songs }: iProps) {
  let albums: Array<string> = [];
  let data: Array<[string, string]> = [];

  const getAlbums = () => {
    songs.map((song) => {
      if (!albums.includes(song.album)) {
        albums.push(song.album);
        var albumName: string = song.album;
        var pathToAlbum: string = "";
        if (song.pathToAlbum) {
          pathToAlbum = song.pathToAlbum;
        }

        data.push([albumName, pathToAlbum]);
      }
    });
  };

  function renderAlbums() {
    getAlbums();
    return data.map((album, index) => {
      return (
        <>
          <div>
            <Card key={index} title={album[0]} pathToAlbum={album[1]} />
          </div>
        </>
      );
    });
  }

  return <div id="card-container"> {renderAlbums()} </div>;
}
