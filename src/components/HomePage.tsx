import { useState, useEffect } from "react";

import "../styles/style.css";

import iSong from "../interfaces/iSong";
import ArtistList from "./ArtistList";

interface iProps {
  songs: iSong[];
}

export default function HomePage({ songs }: iProps) {
  return (
    <div>
      <main className="page">
        <section id="artist-section">
          <h2 id="Artist-title">Artist</h2>
          <div id="cardsDiv">
            <ArtistList songs={songs} />
          </div>
        </section>
        <section>
          <h2 id="albums-title">Albums</h2>
        </section>
        <section>
          <h2 id="genres-title">Genres</h2>
        </section>
      </main>
    </div>
  );
}
