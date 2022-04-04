import React from "react";
import './Chanel.scss';
import Navbar from "../../Commponents/Navbar/Navbar";
import NavChanel from "../../Commponents/NavChanel/NavChanel";
// import Content from "../"

function Chanel() {

  return (
   <>
   <div className="container">
      <div className="chanel__box">
        <NavChanel/>
        {/* <h1>ersv</h1> */}
      </div>
   </div>
    
   </> 
  );
};

export default Chanel;