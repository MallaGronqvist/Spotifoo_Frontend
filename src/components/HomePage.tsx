import { useState, useEffect } from "react";
import CardList from "./CardList";


import "../styles/style.css";
import NavigationBar from "./NavigationBar";
import iSong from "../interfaces/iSong";

interface iProps {
songs: iSong[]
}

export default function HomePage({ songs }:iProps) {

    return (
    <div className="App">
      <div id="NavBar">
        <NavigationBar />
      </div>
      <main id="HomePage">
        <section id= "Artist-section">
          <h2 id="Artist-title">Artist</h2>
          <div id="CardsDiv">
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

