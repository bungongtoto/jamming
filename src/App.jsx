import './styles/App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx'

function App() {

  return (
    <>
      <main>
        <SearchBar />
        <div className='app-bottom'>
          <SearchResults />
          <Playlist />
        </div>
      </main>
    </>
  )
}

export default App
