import Tracklist from './Tracklist.jsx';
import '../styles/searchResults.css';


function SearchResults({searchResults, addTrack}) {
    return (
        <div className="search-results">
            <h2 id='header-title'>Search Results</h2>
            <Tracklist addTrack={addTrack} tracklist={searchResults} isPlaylist={false} />
        </div>
    );
}

export default SearchResults;