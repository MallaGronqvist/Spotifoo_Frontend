import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import React from "react";

import "./styles/style.css";
import NavigationBar from "./components/NavigationBar";

interface IState {
  songs: {
    id: string;
    title: string;
    artist: string;
    album: string;
    pathTomusic?: string;
    pathToAlbum?: string;
  }[];
}

export default function App() {
  const [songs, setSongs] = useState<IState["songs"]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  return (
    <div className="App">
      <div id="NavBar">
        <NavigationBar />
      </div>
      <main id="HomePage">
        <section>
          <h2 id="Artist-title">Artist</h2>
          <div>
            <CardList songs={songs} />
          </div>
        </section>
        <section>
          <h2 id="Albums-title">Albums</h2>
        </section>
        <section>
          <h2 id="Genres-title">Genres</h2>
        </section>
      </main>
      <div id="MusicPlayer">HTML Music Player here</div>
    </div>
  );
}
