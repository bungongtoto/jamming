import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import '../styles/track.css'

function Track({ track, isPlaylist,  btnFunc}) {
    const handleClick = () => {
       isPlaylist ?  btnFunc(track.id) : btnFunc(track)
    }


    return (
        <div className="track">
            <div className='track-left'>
                <h2>{track.name}</h2>
                <p>{track.artist} | <span>{track.album}</span></p>
            </div>
            <div className='track-right'>
                <button onClick={handleClick}>
                    {
                        isPlaylist ? <FaMinusCircle /> : <FaPlusCircle />
                    }
                </button>
            </div>
        </div>
    );
}

Track.defaultProps = {
    isPlaylist: false,
}

export default Track;