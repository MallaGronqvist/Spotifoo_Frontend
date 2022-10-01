import { Key, useEffect, useState } from "react";
import Card from "./components/Card";

import "./styles/style.css";
import NavigationBar from "./components/NavigationBar";


export default function App() {
  // Get songs somehow and give them to useState as a JSON
  const [songs, setSongs] = useState(null);

/*
useEffect(() => {
  fetch(
    'localhost:8080/music?search=Andy you are'
    ).then((response) => response.json())
    .then(setSongs);
}, []
)
if(songs) {
  Cards = songs.map((item: { id: Key | null | undefined; title: string; })=> (
    <Card key = {item.id} title = {item.title}/>
    ));
};

*/


  return (
    <div className="App">
      <div className="NavBar">
      <NavigationBar />
      </div>
      <main className="HomePage">
        <section>
          <h2 className="Artist-title">Artist</h2>
        </section>
        <section>
          <h2 className="Albums-title">Albums</h2>
        </section>
        <section>
          <h2 className="Genres-title">Genres</h2>
        </section>
      </main>
      <div className = "MusicPlayer">HTML Music Player here</div>
    </div>
  );

}
