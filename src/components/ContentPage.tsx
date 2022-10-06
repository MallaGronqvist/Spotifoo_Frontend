import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iSong from "../interfaces/iSong";
import Banner from "./Banner";

interface iProps {
  songs: iSong[];
}

export default function ContentPage() {
  const { name } = useParams();
  const title: string = name !== undefined ? name : "";

  const [songs, setSongs] = useState([]);

  const path: string = "http://localhost:8080/music/"
    .concat("?search=")
    .concat(title)
    .concat("&filter=artist");

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => setSongs(json));
  }, []);

  if (songs.length === 0) return <p>Loading</p>

  return (
    <div>
      <main className="page">
        <Banner songs={songs} />

        <table className="table">
          <tbody>
            <tr>
              <th>
                {" "}
                <p>#</p>
              </th>
              <th>
                <p>TITLE</p>
              </th>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
