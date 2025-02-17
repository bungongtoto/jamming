import "../styles/tracklist.css";
import Track from "./Track.jsx";

function Tracklist({ tracklist, isPlaylist, btnFunc }) {



    return (
        <div className="tracklist">
            <ul>
                {tracklist.map((track, index) => {
                    return <Track  key={index} index={index} track={track} isPlaylist={isPlaylist} btnFunc={btnFunc} />;
                })}
            </ul>
        </div>
    );
}

export default Tracklist;