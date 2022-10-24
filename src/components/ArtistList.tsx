import iSong from "../interfaces/iSong";
import Card from "./Card";

interface iProps {
  songs: iSong[];
}

export default function ArtistList({ songs }: iProps) {
  let artists: Array<string> = [];
  let data: Array<[string, string]> = [];

  // Don't Repeat Yourself -1
  /**
   * Similar to Album list regarding the album image
   *
   * But most importantly why to components with very similar funcitonality:
   * AlbumList and ArtistList
   */
  const getArtists = () => {
    songs.map((song) => {
      if (!artists.includes(song.artist)) {
        artists.push(song.artist);
        var artistName: string = song.artist;
        var pathToAlbum: string = "";
        if (song.pathToAlbum) {
          pathToAlbum = song.pathToAlbum;
        }

        data.push([artistName, pathToAlbum]);
      }
    });
  };

  function renderArtists() {
    getArtists();
    return data.map((artist, index) => {
      return (
        <>
          <div>
            <Card key={index} title={artist[0]} pathToAlbum={artist[1]} />
          </div>
        </>
      );
    });
  }

  return <div id="card-container"> {renderArtists()} </div>;
}
