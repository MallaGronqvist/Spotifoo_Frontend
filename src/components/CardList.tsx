import React from "react";
import Card from "./Card";

interface IProps {
  songs: {
    id: string;
    title: string;
    artist: string;
    album: string;
    pathTomusic?: string;
    pathToAlbum?: string;
  }[];
}

const CardList: React.FC<IProps> = ({ songs }) => {
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

  const renderList = (): JSX.Element[] => {
    return songs.map((song) => {
      return (
        <li key={song.id}>
          <p className="SongTitle">{song.title}</p>
        </li>
      );
    });
  };

  const renderArtists = (): JSX.Element[] => {
    getArtists();
    return artists.map((artist, index) => {
      return (
        <li key= {index}>
          <p className="SongTitle">{artist}</p>
        </li>
      );
    });
  };

  const renderArtistsAndPaths = (): JSX.Element[] => {
    getArtists();
    return data.map((artist, index) => {
      return (
        <>
        <div key= {index}>
          <Card key = {index} title={artist[0]} pathToAlbum={artist[1]} />
        </div>
        </>
      );
    });
  };

  return <div id= "Card-container"> {renderArtistsAndPaths()} </div>;
};

export default CardList;
