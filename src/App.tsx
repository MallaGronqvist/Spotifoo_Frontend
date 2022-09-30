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
      <NavigationBar />
      <h1> Test title </h1>

      <Card title="Enter artist name here" />
    </div>
  );
}
