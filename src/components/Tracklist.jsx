import "../styles/tracklist.css";
import Track from "./Track.jsx";

function Tracklist({ tracklist, isPlaylist, addTrack }) {



    return (
        <div className="tracklist">
            <ul>
                {tracklist.map((track, index) => {
                    return <Track  key={index} track={track} isPlaylist={isPlaylist} addTrack={addTrack} />;
                })}
            </ul>
        </div>
    );
}

export default Tracklist;