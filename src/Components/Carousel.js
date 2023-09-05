import React from "react";

import { Link } from "react-router-dom";
function carousel(props) {
  return (
    <div>
      <div className="hero">
        <div className="text">
          <h1>Fresh Premium Flowers</h1>
          <p>
            Blossoms is glad to give quality flowers and plants to our
            customers.
          </p>
          <Link className="bttn" to="/products" role="button">
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default carousel;
