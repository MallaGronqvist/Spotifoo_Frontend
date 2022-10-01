import { Key, useEffect, useState } from "react";
import Card from "./components/Card";

import "./styles/style.css";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  // Get songs somehow and give them to useState as a JSON
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    fetch("localhost:8080/music")
      .then((response) => response.json())
      .then(setSongs);
  }, []);
  /*
if(songs) {
  Cards = songs.map((item: { id: Key | null | undefined; title: string; })=> (
    <Card key = {item.id} title = {item.title}/>
    ));
};
*/

  return (
    <div className="App">
      <div id="NavBar">
        <NavigationBar />
      </div>
      <main id="HomePage">
        <section>
          <h2 id="Artist-title">Artist</h2>
          <div>
            <Card title={"Test card"} />
            // Get artist names and album arts.
          </div>
        </section>
        <section>
          <h2 id="Albums-title">Albums</h2>
          <div></div>
        </section>
        <section>
          <h2 id="Genres-title">Genres</h2>
          <div></div>
        </section>
      </main>
      <div id="MusicPlayer">HTML Music Player here</div>
    </div>
  );
}
