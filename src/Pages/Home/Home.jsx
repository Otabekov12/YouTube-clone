import React from "react";
import './Home.scss';
import { NavLink } from "react-router-dom";
import Navbar from "../../Commponents/Navbar/Navbar";
import Content from "../../Commponents/Content/Content";
import Header from '../../Commponents/Header/Header';


function HomePage() {
  return(
    <>
    <div className="home__box">
      <Navbar/>
      {/* <Header/> */}
      {/* <Content/> */}
    </div>
    </>
  )
}  ;

export default HomePage;