import { useState, useEffect } from "react";
import CardList from "./CardList";

import "../styles/style.css";
import NavigationBar from "./NavigationBar";
import iSong from "../interfaces/iSong";

interface iProps {
  songs: iSong[];
}

export default function HomePage({ songs }: iProps) {
  return (
    <div className="app">
      <NavigationBar />

      <main id="homePage">
        <section id="artist-section">
          <h2 id="Artist-title">Artist</h2>
          <div id="cardsDiv">
            <CardList songs={songs} />
          </div>
        </section>
        <section>
          <h2 id="albums-title">Albums</h2>
        </section>
        <section>
          <h2 id="genres-title">Genres</h2>
        </section>
      </main>
      <div id="musicPlayer">HTML Music Player here</div>
    </div>
  );
}
