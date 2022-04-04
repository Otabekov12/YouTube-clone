import React from "react";
import './PlayerContent.scss';
import { NavLink } from "react-router-dom";
import Pero from '../../Commponents/Pero/Pero';
import LikeIcon from '../../images/Icons/like-icon.svg';
import DiselikeIcon from '../../images/Icons/diselike-icon.svg';
import Share from '../../images/Icons/share-icon.svg';
import points from '../../images/Icons/points.svg';

import Food from '../../images/influcer-img/food.svg';


function Player() {

  const [photos6,  setPhotos6] = React.useState([]);
  const [photos7,  setPhotos7] = React.useState([]);

  React.useEffect(()=>{
      (async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/photos');

          const data = await res.json();

          if (data) {
              setPhotos6(data.slice(1, 2));
              setPhotos7(data.slice(1, 7));
          }
      })();
  }, []);

  
  return (
    <>
             <Pero/>
        <div className="play__box">


                <div className="left">
                    <div className="player__list">
                        {photos6?.length > 0 &&
                        photos6.map((user6) => (
                            <div key={user6.id}>
                            <NavLink className="homecontent__link" to="/player">
                                <img
                                className="homecontent__video"
                                src={user6.url}
                                alt={user6.title + "'s video"}
                                />
                            </NavLink>
                            </div>
                        ))}
                    </div>

                    <div>

                        <h2 className="player__title">Dude You Re Getting A Telescope</h2>

                         <div className="player__tool__box">
                              <p className="player__text">123k views</p>
                                  <div className="player__tools">
                                      <span className="player__tool">
                                        <div className="player__toolers">
                                          <img className="player__icon" src={LikeIcon} alt="like icon" />
                                          <p className="player__tool__text">123k</p>
                                        </div>
                                      </span>

                                      <span className="player__tool">
                                        <div className="player__toolers">
                                          <img className="player__icon" src={DiselikeIcon} alt="like icon" />
                                          <p className="player__tool__text">435k</p>
                                        </div>
                                      </span>

                                      <span className="player__tool">
                                        <div className="player__toolers">
                                          <img className="player__icon"  src={Share} alt="like icon" />
                                          <p className="player__tool__text">Share</p>
                                        </div>
                                      </span>

                                      <button className='player__btn' title='more'>
                                        <img src={points} alt="more" />
                                      </button>
                                </div>
                            </div>

                            <div className="line">
                                <hr className="hr-line" /> 
                            </div>
                        <div className="play__boxer">
                            <div className="accaunt">
                                <NavLink className='accaunt__link' to={'/chanel'}>
                                <img
                                className="accaunt__img" 
                                src={Food} 
                                alt="Influncer avatar" 
                                /></NavLink>
       
                                <div className="accaunt__text__box">
                                    <NavLink className='accaunt__link' to={"/chanel"}> <h2 className="accaunt__title">Food & Drink</h2> </NavLink>

                                    <p className="accaunt__texter">Published on 14 Jun 2019</p>
                                    <p className="accaunt__text">
                                        A successful marketing plan relies heavily on the pulling-power of advertising copy. 
                                        Writing result-oriented ad copy is difficult, as it must appeal to,
                                        entice, and convince consumers to take action. 
                                        There is no magic formula to write perfect ad copy; it is based on a number of factors, 
                                        including ad placement, demographic, even the consumer’s mood when they see your ad. 
                                    </p>

                                    <p className="accaunt__texte">Show more</p>
                                </div> 
                            </div>
                                
                            <div className="accaunt__button__box">
                                <button className="accaunt__button">
                                     Subscribe 2.3m
                                </button>
                            </div> 
                        </div>
                </div>
                    

                </div>


            <div className="right">
                <div>

                    <div className="accaunt__right">
                        <h2 className="accaunt__right__title">Next</h2>
                        <p  className="accaunt__right__text">Autoplay</p>
                    </div>
                
                </div>

                <ul className="homecontent__videos">
                     {photos7?.length > 0 &&
                     photos7.map((user7) => (
                        <li className="play__link"  key={user7.id}>
                            <NavLink className="homecontent__link" to="/player">
                                <img
                                className="homecont__img"
                                src={user7.url}
                                alt={user7.title + "'s video"}
                                />

                                <p className="homecontent__text">
                                    {user7.title}
                                </p>
                            </NavLink>
                            <div className="player__boxes">
                                <p className="play__text pla">123k views</p>
                                <p className="play__text">Dollie Blair</p>
                            </div>
                        </li>
                        
                     ))}
                </ul>
            </div>

        </div>  
    </>
  );
};

export default Player;