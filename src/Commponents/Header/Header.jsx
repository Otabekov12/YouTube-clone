import './Header.scss';
import { NavLink } from 'react-router-dom';

import AddingVideo from '../../images/Icons/adding-icon.svg'
import PointsIcon from '../../images/Icons/points-icon.svg'
import BellIcon from '../../images/Icons/bell-icon.svg'
import UserAvatar from '../../images/influcer-img/influcer-zero.svg'
import SearchIcon from "../../images/Icons/search-icon.svg"
import HomeContent from "../../Commponents/Content/Content";

import Logo from "../../images/logo-img/Black-logo.svg";
import Burger from "../../images/Icons/menu-dark.svg";

function Header(){
    return(
        <>
        <div className='container'>
        <section className='header__section'>
        <div className='search__box'>
            <form>
                <input 
                    className='search__input' 
                    type="text" 
                    name="search__input" 
                    placeholder='Search'
                />
                <button className='btn'>
                    <img src={SearchIcon} alt="btn" />
                </button>
            </form>
        </div>
        
        <div className='header__icons'>
            <img className='header__icon' src={AddingVideo} alt="header icons" />
            <img className='header__icon' src={PointsIcon} alt="header icons" />
            <img className='header__icon' src={BellIcon} alt="header icons" />
            <img className='header__avatar' src={UserAvatar} alt="header avatar"/>
        </div>
        </section>

        
          <HomeContent/>  
        
        </div>
        </>
        );
    }
    
    export default Header;