/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
// import images
import img from "../Images/logo.png";
import "../App.css";
// routing links

function ticker(props) {
  return (
    // navbar
    <div >
      <div className="ticker">
        <marquee>
          <p>Delivery Services Available Here in Lahore&nbsp;</p>
        </marquee>
      </div>
      <br></br>
      <div className="ticker1" align="center" >
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
export default ticker;
