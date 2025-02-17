import './styles/App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx'
import { useState } from 'react'

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
    console.log("i am clicked")
    setPlaylist(prev => [...prev, track])
  }


  return (
    <>
      <main>
        <SearchBar />
        <div className='app-bottom'>
          <SearchResults addTrack={handleAddPlaylistTrack}  searchResults={searchResults} />
          <Playlist playlist={playlist} />
        </div>
      </main>
    </>
  )
}

export default App;
