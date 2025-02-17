import { FaPlusCircle } from 'react-icons/fa';
import '../styles/playlist.css'
import Tracklist from './Tracklist.jsx';

function Playlist() {
    return (
        <div className="playlist">
            <form className='playlist-from'>
                <input className=''  type="text" name="playlistName" id="playlistName" placeholder='Playlist' />
                <button type='submit'><FaPlusCircle /></button>
            </form>
            <Tracklist isPlaylist={true} />
        </div>
    );
}

export default Playlist;