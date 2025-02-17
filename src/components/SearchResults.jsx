import Tracklist from './Tracklist.jsx';
import '../styles/searchResults.css';


function SearchResults() {
    return (
        <div className="search-results">
            <h2 id='header-title'>Search Results</h2>
            <Tracklist isPlaylist={false} />
        </div>
    );
}

export default SearchResults;