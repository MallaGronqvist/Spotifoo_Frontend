import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentPage from "./components/ContentPage";
import HomePage from "./components/HomePage";
import MusicPlayer from "./components/MusicPlayer";
import NavigationBar from "./components/NavigationBar";
import SearchPage from "./components/SearchPage";
import iSong from "./interfaces/iSong";

interface iProps {
  songs: iSong[];
}

export default function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  useEffect(() => {
    setCurrentSong(songs[0]);
  }, []);

  if (songs.length === 0) return <p>Loading</p>;

  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage songs={songs} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/content/:name"
            element={<ContentPage setCurrentSong={setCurrentSong} />}
          />
        </Routes>
        <MusicPlayer song={currentSong} />
      </Router>
    </div>
  );
}
