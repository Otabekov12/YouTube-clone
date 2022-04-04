import "./ChanelContent.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Margaret from "../../images/influcer-img/influcer-secound.svg";
import Flora from '../../images/influcer-img/FloraBenson.svg';
import Violet from '../../images/influcer-img/VioletCobb.svg';
import Phillip  from '../../images/influcer-img/PhillipMullins.svg';
import bell from "../../images/Icons/bell-solid.svg";
import search from "../../images/Icons/search-icon.svg";

function HomeContent() {
  const [photos, setPhotos] = React.useState([]);
  const [photos2, setPhotos2] = React.useState([]);
  const [photos3, setPhotos3] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();

      if (data) {
        setPhotos(data.slice(1, 15));
        setPhotos2(data.slice(1, 2));
        setPhotos3(data.slice(1, 2));
      }
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="">
          <ul className="homecontent__list2">
            {photos2?.length > 0 &&
              photos2.map((user2) => (
                <li className="homecontent__item2" key={user2.id}>
                  <NavLink className="homecontent__link" to="/player">
                    <img
                      className="homecontent__img2"
                      src={user2.url}
                      alt={user2.title + "'s video"}
                    />
                  </NavLink>
                </li>
              ))}
          </ul>

          <div className="chan">
            <div>
              <NavLink className="homecontent__box" to={"/chanel"}>
                <img className="homecontent__img7" src={Margaret} alt="" />
                <div className="chan__text">
                <h2 className="homecontent__title">Margaret Phelps</h2>
                <p className="chan__paragraph">245K subscribed</p>
                </div>
              </NavLink>
            </div>
            <div className="inko">
                <img className="bell__icon" src={bell} alt="bell" />
                <button className="accaunt__button">Subscribe 2.3m</button>
            </div>
          </div>

         <div className="chan__box">
         <div className="chan__nav">
              <p className="chan__texter fg">Home</p>
              <p className="chan__texter">Videos</p>
              <p className="chan__texter" >Playlists</p>
              <p className="chan__texter" >Channels</p>
              <p className="chan__texter" >Discussion</p>
              <p className="chan__texter chan__text">About</p>
          </div>
               <img className="search__icon" src={search} alt="search icon" />
         </div>

          <div className="chan__about">
              <div className="first">

                 <ul className="homecontent__list3">
                    {photos3?.length > 0 &&
                    photos3.map((user3) => (
                        <li className="homecontent__item2" key={user3.id}>
                        <NavLink className="homecontent__link" to="/player">
                            <img
                            className="homecontent__img3"
                            src={user3.url}
                            alt={user3.title + "'s video"}
                            />
                        </NavLink>
                        </li>
                    ))}
                </ul>

                  <div>
                      <h3 className="chan__title">
                            Choosing The Best Audio 
                            Player Software For Your 
                            Computer
                      </h3>
                        <p className="chanel__text">
                             Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                        </p>

                        <p className="chanel__paragraph">
                             11k views  ·  6 months ago
                        </p>
                  </div>
              </div>
              <div className="second">
                  <div className="user__box">
                      <NavLink className='user__link' to={"/chanel"}>
                        <img className="users__img" src={Flora} alt="" />
                        <p className="users__text">Flora Benson</p>
                      </NavLink>
                  </div>
                  <div className="user__box">
                     <NavLink className='user__link' to={"/chanel"}>
                        <img className="users__img" src={Violet} alt="" />
                        <p className="users__text">Violet Cobb</p>
                     </NavLink>
                  </div>
                  <div className="user__box">
                      <NavLink className='user__link' to={"/chanel"} >
                        <img className="users__img" src={Phillip} alt="" />
                        <p className="users__text">Phillip Mullins</p>
                      </NavLink>
                  </div>
              </div>
          </div>

          <div className="homecontents">
            <ul className="homecontent__list">
              {photos?.length > 0 &&
                photos.map((user) => (
                  <li className="homecontent__item" key={user.id}>
                    <NavLink className="homecontent__link" to="/player">
                      <img
                        className="homecontent__img"
                        src={user.url}
                        alt={user.title + "'s video"}
                      />
                      <strong className="homecontent__text">
                        {user.title}
                      </strong>
                      <p className="homecontent__text__p">
                        80k views · 3 days ago Dollie Blair
                      </p>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
