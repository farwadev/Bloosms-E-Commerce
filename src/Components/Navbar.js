import React from "react";
import { Link } from "react-router-dom";

function navbar(props) {
  return (
    <div>
   

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto"align="center" >
              <li className="nav-item ">
                <Link className="nav-link" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                 
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="d-flex align-items-center">
            <Link className="nav-link" to="/products" align="center">
              <i className="fa fa-shopping-cart" style={{ fontSize: "22px" }}></i>
              CART
            </Link>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default navbar;
