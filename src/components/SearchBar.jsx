import  '../styles/searchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <div className={"searchBar"}>
            <form className='' >
                <input type="text" id="search" name="search" placeholder="what do you want to play ?" />
                <button className='submit-btn' type="submit" ><FaSearch /></button>
            </form>

            <form id='secondform'>
                <input className='filter-input' type="text" id="artistFilter" name="artistFilter" placeholder="filter by artist"  />
                <input className='filter-input' type="text" id="albumFilter" name="albumFilter" placeholder="filter by album"  />
            </form>
        </div>
    );
}

export default SearchBar;