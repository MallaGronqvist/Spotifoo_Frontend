import { useState, useEffect } from "react";

import "../styles/style.css";

import iSong from "../interfaces/iSong";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";

interface iProps {
  songs: iSong[];
}

export default function HomePage({ songs }: iProps) {
  return (
    <div>
      <main className="page">
        <section id="artist-section">
          <h2 id="Artist-title">Artist</h2>
          <div id="cardsDivArtist">
            <ArtistList songs={songs} />
          </div>
        </section>
        <section>
          <h2 id="albums-title">Albums</h2>
                    <div id="cardsDivAlbum">
            <AlbumList songs={songs} />
          </div>
        </section>
        <section>
          <h2 id="genres-title">Genres</h2>
        </section>
      </main>
    </div>
  );
}
