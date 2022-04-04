import React from "react";
import './Player.scss';
import { NavLink } from "react-router-dom";
import Header from "../../Commponents/Header/Header";
import PlayerContent from "../../Commponents/PlayerContent/PlayerContent";
import LikeIcon from '../../images/Icons/like-icon.svg';
import DiselikeIcon from '../../images/Icons/diselike-icon.svg';
import Share from '../../images/Icons/share-icon.svg';
import points from '../../images/Icons/points.svg';

import Food from '../../images/influcer-img/food.svg';


function Player() {

  const [photos3,  setPhotos3] = React.useState([]);
  const [photos4,  setPhotos4] = React.useState([]);

  React.useEffect(()=>{
      (async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/photos');

          const data = await res.json();

          if (data) {
              setPhotos3(data.slice(1, 2));
              setPhotos4(data.slice(1, 15));
          }
      })();
  }, []);

  
  return (
    <>
       <PlayerContent/>
    </>
  );
};

export default Player;
