import "./Navbar.scss";

 import Logo from "../../images/logo-img/Black-logo.svg";
 import Burger from "../../images/Icons/menu-dark.svg";
import HomeIcon from "../../images/Icons/home-icon.svg";
import Trending from "../../images/Icons/trending-icon.svg";
import Subscriptions from "../../images/Icons/subscriptions-icon.svg";
import Library from "../../images/Icons/library-icon.svg";
import History from "../../images/Icons/history-icon.svg";
import WatchLater from "../../images/Icons/watch-later-icon.svg";
import Favourites from "../../images/Icons/favourites-icon.svg";
import LikedVideos from "../../images/Icons/liked-videos-icon.svg";
import Music from "../../images/Icons/music-icon.svg";
import Games from "../../images/Icons/games-icon.svg";
import { NavLink } from "react-router-dom";
import dollie from "../../images/influcer-img/dollie.svg";
import InflucerSecound from "../../images/influcer-img/influcer-secound.svg";
import InflucerThird from "../../images/influcer-img/influcer-third.svg";
import InflucerFourth from "../../images/influcer-img/influcer-fourth.svg";
import InflucerFifth from "../../images/influcer-img/influcer-fifth.svg";
import InflucerSixth from "../../images/influcer-img/influcer-sixth.svg";

import SettingImg from "../../images/Icons/setting-icon.svg";

import Header from "../Header/Header";

function Navbar() {
  return (
    <div className="bnma">
      <div className="container">
         <div className="youtube__imgs">
          <NavLink to="/">
            <img className="youtube__burger" src={Burger} alt="" />
          </NavLink>

          <NavLink to="/">
            <img className="logo" src={Logo} alt="Youtube's logo" />
          </NavLink>
        </div> 

        <nav>
          <div>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  <img className="nav__icons" src={HomeIcon} alt="" />
                  <p className="nav_title">Home</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={Trending} alt="" />
                  <p className="nav_title">Trending</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={Subscriptions} alt="" />
                  <p className="nav_title">Subscriptions</p>
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={Library} alt="" />
                  <p className="nav_title">Library</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={History} alt="" />
                  <p className="nav_title">History</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={WatchLater} alt="" />
                  <p className="nav_title">Watch later</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={""}>
                  <img className="nav__icons" src={Favourites} alt="" />
                  <p className="nav_title">Favourites</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={LikedVideos} alt="" />
                  <p className="nav_title">Liked videos</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={Music} alt="" />
                  <p className="nav_title">Music</p>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to={''}>
                  <img className="nav__icons" src={Games} alt="" />
                  <p className="nav_title">Games</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <section className="influcer__section">
          <h2 className="influcer__title">Subscriptions</h2>

          <ul className="influcer__list">
            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={dollie}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Gussie Singleton</p>
              </NavLink>
            </li>

            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={InflucerSecound}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Nora Francis</p>
              </NavLink>
            </li>

            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={InflucerThird}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Belle Briggs</p>
              </NavLink>
            </li>

            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={InflucerFourth}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Eunice Cortez</p>
              </NavLink>
            </li>

            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={InflucerFifth}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Emma Hanson</p>
              </NavLink>
            </li>

            <li className="influcer__item">
              <NavLink className="influcer__link" to="/chanel">
                <img
                  className="influcer__avatar"
                  src={InflucerSixth}
                  alt="influcer's avatar"
                />
                <p className="influcer__name">Leah Berry</p>
              </NavLink>
            </li>
          </ul>
        </section>

        <div className="nav__box">
          <div className="nav__setting">
            <img className="nav__setting__img" src={SettingImg} alt="" />
          </div>
          <p className="nav__setting">Setting</p>
        </div>
      </div>
      <Header/>
    </div>
  );
}

export default Navbar;
