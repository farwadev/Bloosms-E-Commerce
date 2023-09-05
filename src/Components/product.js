import React from "react";
import { Link } from "react-router-dom";
import img4 from "../Images/wheat.png";
// json
import Card from "../Data/card.json";

function product(props) {
  return (
    <div>
      {/* heading */}
      <div className="imge text-center">
        {" "}
        <img src={img4} alt="img" />{" "}
        <h3 className="mb-3 text-center">BOUQUETS - GIFT BOXES - JEWELRIES</h3>
      </div>
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            {Card.products.map((item) => (
              <div key={item.id} className="el-wrapper">
                
                <div className="box-up">
                  <img className="img" src={item.img} alt="" />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">{item.name}</span>
                      <span className="p-company">{item.company}</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>
                  {/*Add to cart button */}
                  <Link className="cart" to={`/product/${item.id}`}>
                    <span className="price">{item.price}</span>
                    <span className="add-to-cart">
                      <span className="txt">{item.txt}</span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
