import './Header.css';
import searchIcon from '../assets/search.svg';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='logo'>The Soongsil Times</div>
                <p className='logo-sub'>since 1981</p>
            </div>
            <div className='nav-wrapper'>
                <div className='nav'>
                    <div className='nav-link'>
                        <div>HOME</div>
                        <div>CAMPUS</div>
                        <div>SOCIETY</div>
                        <div>BUSINESS</div>
                        <div>SCIENCE</div>
                        <div>CULTURE</div>
                        <div>ARCHIEVE</div>
                    </div>

                    <div className='search-container'>
                        <img src={searchIcon} alt="searh icon"/>
                        <input placeholder='Search Articles..'/>
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Header;