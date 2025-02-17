import "../styles/tracklist.css";
import Track from "./Track.jsx";

function Tracklist({ tracklist, isPlaylist, btnFunc }) {



    return (
        <div className="tracklist">
            <ul>
                {tracklist.map((track) => {
                    return <Track  key={track.id} track={track} isPlaylist={isPlaylist} btnFunc={btnFunc} />;
                })}
            </ul>
        </div>
    );
}

export default Tracklist;