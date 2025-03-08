import './Header.css';
import searchIcon from '../assets/search.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [navState, setNavState] = useState("HOME");
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchClick = () => {
        if (search.trim()) {
            navigate(`/search?query=${encodeURIComponent(search)}`);
        }
    };

    const activeEnter = (e) => {
        if(e.key === "Enter") {
          handleSearchClick();
        }
      }

    const handleNavClick = (category) => {
    setNavState(category);
    if (category === "HOME") {
        navigate("/")
    } else {
        navigate(`/category/${category.toLowerCase()}`);
    }};

    const categories = ["HOME", "CAMPUS", "SOCIETY", "BUSINESS", "SCIENCE", "CULTURE", "ARCHIVE"];

    return (
        <div>
            <div className='header'>
                <div className='logo'>The Soongsil Times</div>
                <p className='logo-sub'>since 1981</p>
            </div>
            <div className='nav-wrapper'>
                <div className='nav'>
                    <div className='nav-link'>
                        {categories.map((category) => (
                            <div
                                key={category}
                                onClick={() => handleNavClick(category)}>
                                {category}
                                {navState == category && <div className='selected '/>}
                            </div>
                        ))}
                    </div>

                    <div className='search-container'>
                        <img 
                        onClick={handleSearchClick}
                        src={searchIcon} 
                        alt="searh icon"/>
                        <input
                        value={search}
                        onChange={onChangeSearch} 
                        onKeyDown={(e) => activeEnter(e)}
                        placeholder='Search Articles..'/>
                    </div>
                    <button>Subscribe</button>
                </div>

            </div>
        </div>
    );
};

export default Header;