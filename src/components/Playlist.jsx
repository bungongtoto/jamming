import { FaPlusCircle } from 'react-icons/fa';
import '../styles/playlist.css'
import Tracklist from './Tracklist.jsx';

function Playlist({playlist, removeTrack}) {
    return (
        <div className="playlist">
            <form className='playlist-from'>
                <input className=''  type="text" name="playlistName" id="playlistName" placeholder='Playlist' />
                <button type='submit'><FaPlusCircle /></button>
            </form>
            <Tracklist btnFunc={removeTrack} tracklist={playlist} isPlaylist={true} />
        </div>
    );
}

export default Playlist;