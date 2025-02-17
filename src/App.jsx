import './styles/App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx'
import { useEffect, useState } from 'react'
import { requestAccessToken, searchSpotify } from './api/api.js'



function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState([]);

  const handleAddPlaylistTrack = (track) => {
    setPlaylist(prev => [...prev, track])
  }

  const handleRemoveTrack = (trackId) => {
    setPlaylist(prev => {
      return prev.filter((prevTrack) => prevTrack.id !== trackId);
    });
  }

  const handleSearch = (searchInput,  artistInput, albumInput) => {
    searchSpotify(searchInput)
    .then((response) => {
      // console.log(response)
      setSearchResults(response);
    })
  }

  useEffect(() => {
    requestAccessToken().then((response) => {
      console.log(response)
      localStorage.setItem("access_token", response);
    });
    
  }, []);


  return (
    <>
      <main>
        <SearchBar searchFunc={handleSearch} />
        <div className='app-bottom'>
          <SearchResults addTrack={handleAddPlaylistTrack} searchResults={searchResults} />
          <Playlist removeTrack={handleRemoveTrack} playlist={playlist} />
        </div>
      </main>
    </>
  )
}

export default App;
