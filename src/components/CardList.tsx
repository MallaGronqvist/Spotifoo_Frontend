import iSong from "../interfaces/iSong";
import Card from "./Card";

interface iProps {
  songs: iSong[]
}

export default function CardList ({ songs }:iProps) {
  let artists: Array<string> = [];
  let data: Array<[string, string]> = [];

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

  function renderArtists (){
    getArtists();
    return data.map((artist, index) => {
      return (
        <>
          <div key={index}>
            <Card key={index} title={artist[0]} pathToAlbum={artist[1]} />
          </div>
        </>
      );
    });
  };

  return <div id="Card-container"> {renderArtists()} </div>;
};

