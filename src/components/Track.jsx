import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import '../styles/track.css'

function Track({ track, isPlaylist }) {
    return (
        <div className="track">
            <div className='track-left'>
                <h2>Song Title</h2>
                <p>Artist | <span>Album</span></p>
            </div>
            <div className='track-right'>
                {
                    isPlaylist ? <button><FaMinusCircle /></button> : <button><FaPlusCircle /></button>
                }
            </div>
        </div>
    );
}

Track.defaultProps = {
    isPlaylist: false,
}

export default Track;