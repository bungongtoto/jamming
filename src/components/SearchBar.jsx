import { useState } from 'react';
import '../styles/searchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchFunc }) {
    const [search, setSearch] = useState("");
    // const [artist, setArtist] = useState("");
    // const [album, setAlbum] = useState("");

    const handleSearchForm = (e) => {
        e.preventDefault();
        if (search !== "") {
            searchFunc(search);
            setSearch("")
        }
    }
    return (
        <div className={"searchBar"}>
            <form onSubmit={handleSearchForm} className='' >
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search" name="search" placeholder="what do you want to play ?" />
                <button className='submit-btn' type="submit" ><FaSearch /></button>
            </form>

            {/* <form id='secondform'>
                <input value={artist} onChange={(e) => setArtist(e.target.value)} className='filter-input' type="text" id="artistFilter" name="artistFilter" placeholder="filter by artist" />
                <input value={album} onChange={(e) => setAlbum(e.target.value)} className='filter-input' type="text" id="albumFilter" name="albumFilter" placeholder="filter by album" />
            </form> */}
        </div>
    );
}

export default SearchBar;