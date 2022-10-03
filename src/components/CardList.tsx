import React from "react";

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

  const getArtists = () => {
    songs.map((song) => {
      if (!artists.includes(song.artist)) {
        artists.push(song.artist);
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
    return artists.map((artist) => {
      return (
        <li>
          <p className="SongTitle">{artist}</p>
        </li>
      );
    });
  };

  return <ul>{renderArtists()}</ul>;
};

export default CardList;
