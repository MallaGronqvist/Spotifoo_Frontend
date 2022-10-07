import { FormEvent, useEffect, useState } from "react";
import Table from "./Table";

interface iProps {
  setCurrentSong: Function;
}

export default function SearchPage({ setCurrentSong }: iProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/?search=".concat(searchTerm))
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, [submitted]);

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    setSubmitted(!submitted);
    event.preventDefault();
  }

  return (
    <div>
      <main className="page">
        <h2 id="searchTitle">Search</h2>
        <form id="searchForm" onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <input type="submit" value="search" />
        </form>
        <section id="results">
          <h2 id="resultsTitle">Results</h2>
          <div id = "resultsTable">
            <Table songs={songs} setCurrentSong={setCurrentSong} />
          </div>
          
        </section>
      </main>
    </div>
  );
}
