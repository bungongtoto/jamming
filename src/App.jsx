import './styles/App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx'
import { useEffect, useState } from 'react'
import { requestAccessToken } from './api/api.js'

const Data = [
  {
    title: "song title",
    artist: "Artist",
    album: "Album"
  },
  {
    title: "song title",
    artist: "Artist",
    album: "Album"
  },
  {
    title: "song title",
    artist: "Artist",
    album: "Album"
  },
  {
    title: "song title",
    artist: "Artist",
    album: "Album"
  },
  {
    title: "song title",
    artist: "Artist",
    album: "Album"
  }, {
    title: "song title",
    artist: "Artist",
    album: "Album"
  }
];

function App() {
  const [searchResults, setSearchResults] = useState(Data)
  const [playlist, setPlaylist] = useState([]);

  const handleAddPlaylistTrack = (track) => {
    setPlaylist(prev => [...prev, track])
  }

  const handleRemoveTrack = (trackIndex) => {
    setPlaylist(prev => {
      return prev.filter((prevTrack, index) => index !== trackIndex);
    });
  }

  useEffect(() => {
    requestAccessToken().then((response) => {
      console.log(response)
      localStorage.setItem("access_token", response);
    });
    
  }, [])


  return (
    <>
      <main>
        <SearchBar />
        <div className='app-bottom'>
          <SearchResults addTrack={handleAddPlaylistTrack} searchResults={searchResults} />
          <Playlist removeTrack={handleRemoveTrack} playlist={playlist} />
        </div>
      </main>
    </>
  )
}

export default App;
