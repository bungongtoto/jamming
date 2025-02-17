import { useState } from "react";
import "../styles/tracklist.css";
import Track from "./Track.jsx";

function Tracklist({isPlaylist}) {
    const [tracklist, setTracklist] = useState([])
    return (
        <div className="tracklist">
            <ul>
                <Track isPlaylist={isPlaylist} />
                <Track isPlaylist={isPlaylist} />
                <Track isPlaylist={isPlaylist} />
                <Track isPlaylist={isPlaylist} />
                <Track isPlaylist={isPlaylist} />
            </ul>
        </div>
    );
}

export default Tracklist;