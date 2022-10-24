import iSong from "../interfaces/iSong";
import Card from "./Card";

interface iProps {
  songs: iSong[];
}

export default function ArtistList({ songs }: iProps) {
  let albums: Array<string> = [];
  let data: Array<[string, string]> = [];

  // Nesting -1
  /**
   * This code is complex because the planning was over complicated.
   *
   * Instead of the parent trying to micro manage (babysit) the cards
   * to make sure they have an album image.
   *
   * The card itself should verify that it had a correct image and handle the
   * failure scenario inside the card.
   *
   * Continues on the next message
   */
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

  /**
   * Then this function does not need to call getAlbums()
   * And can be a variable instead of a function
   */
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

  // You should not call a method inside the return renderAlbums() call a variable instead
  return <div id="card-container"> {renderAlbums()} </div>;
}
