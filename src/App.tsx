
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import iSong from "./interfaces/iSong";

interface iProps {
  songs: iSong[]
  }


export default function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage songs={songs}/>}/>
      </Routes>
    </Router>
  )
}


