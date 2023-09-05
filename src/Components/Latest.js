import React from "react";
import { Link } from "react-router-dom";
// images
import img from "../Images/l2.jpg";
import img1 from "../Images/l1.jpg";
import img2 from "../Images/l3.jpg";
import img3 from "../Images/L4.jpg";
import img4 from "../Images/wheat.png";
function Latest(props) {
  return (
    <div>
      <section>
        <div className="imge text-center">
          {" "}
          <img src={img4} alt="img" />{" "}
          <h3 className="mb-3 text-center">LATEST PRODUCTS</h3>
        </div>
        <div class="containerr">
          <div class="cardd">
            <div class="contentt">
              <div class="imgBx">
                <img src={img} alt="img" />
              </div>
              <div class="contentBx">
                <h3>
                  Present Box<br></br>
                  <span>PKR 5690.00</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link to="/Products">See More</Link>
              </li>
            </ul>
          </div>
          <div class="cardd">
            <div class="contentt">
              <div class="imgBx">
                <img src={img2} alt="img" />
              </div>
              <div class="contentBx">
                <h3>
                  Choclate BUNCH<br></br>
                  <span>PKR 5999.00</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link to="/Products">See More</Link>
              </li>
            </ul>
          </div>
          <div class="cardd">
            <div class="contentt">
              <div class="imgBx">
                <img src={img1} alt="img" />
              </div>
              <div class="contentBx">
                <h3>
                  Eid wish article<br></br>
                  <span>PKR 6950.00</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link to="/Products">See More</Link>
              </li>
            </ul>
          </div>

          <div class="cardd">
            <div class="contentt">
              <div class="imgBx">
                <img src={img3} alt="img" />
              </div>
              <div class="contentBx">
                <h3>
                  Gift parcel basket<br></br>
                  <span>PKR 12500.00</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <Link to="/Products">See More</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Latest;
