import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import '../styles/track.css'

function Track({ ID, track, isPlaylist, addTrack }) {
    return (
        <div className="track">
            <div className='track-left'>
            <h2>{track.title}</h2>
            <p>{track.artist} | <span>{track.album}</span></p>
            </div>
            <div className='track-right'>
                {
                    isPlaylist ? <button ><FaMinusCircle /></button> : <button onClick={(e) => addTrack(track)}><FaPlusCircle /></button>
                }
            </div>
        </div>
    );
}

Track.defaultProps = {
    isPlaylist: false,
}

export default Track;