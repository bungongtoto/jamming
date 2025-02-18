import { useState } from 'react';
import '../styles/playlist.css'
import Tracklist from './Tracklist.jsx';
import { FaSave } from 'react-icons/fa';

function Playlist({ playlist, removeTrack, addPlaylist }) {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let uris = playlist.map((track) => track.uri);
        addPlaylist(uris, name);
        setName("");
    }
    return (
        <div className="playlist">
            <form onSubmit={handleSubmit} className='playlist-from'>
                <input value={name} onChange={(e) => setName(e.target.value)} className='' type="text" name="playlistName" id="playlistName" placeholder='Playlist' required />
                <button type='submit' title='Save to Spotify'><FaSave /></button>
            </form>
            <Tracklist btnFunc={removeTrack} tracklist={playlist} isPlaylist={true} />
        </div>
    );
}

export default Playlist;