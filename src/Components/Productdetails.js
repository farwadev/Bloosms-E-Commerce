import React from "react";
// Import Link from react-router-dom
import { useParams, Link } from "react-router-dom";
import card from "../Data/card.json";
// images
import img1 from "../Images/visa.jpg";
import img2 from "../Images/master.jpg";
import img3 from "../Images/paypal.jpg";
import img4 from "../Images/congratulations.gif";
function Productdetails() {
  // Get the product ID from the URL
  const { id } = useParams();
  const product = card.products.find((item) => item.id === id);
  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div class="cart_section">
      {/* cart section */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cart_container">
              <div class="cart_title">
                Shopping Cart<small> (1 item in your cart) </small>
              </div>
              <div class="cart_items">
                <ul class="cart_list">
                  <li class="cart_item clearfix">
                    <div class="cart_item_image">
                      <img src={product.img} alt="" />
                    </div>
                    <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                      <div class="cart_item_name cart_info_col">
                        <div class="cart_item_title">PRODUCT</div>
                        <div class="cart_item_text">{product.name}</div>
                      </div>
                      <div class="cart_item_name cart_info_col">
                        <div class="cart_item_title">BOUQUET/BOX/JEWELRY</div>
                        <div class="cart_item_text">{product.company}</div>
                      </div>
                      <div class="cart_item_quantity cart_info_col">
                        <div class="cart_item_title">QUANTITY</div>
                        <div class="cart_item_text">1</div>
                      </div>
                      <div class="cart_item_price cart_info_col">
                        <div class="cart_item_title">PRICE</div>
                        <div class="cart_item_text">{product.price}</div>
                      </div>
                      <div class="cart_item_total cart_info_col">
                        <div class="cart_item_title">Total</div>
                        <div class="cart_item_text">{product.price}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <br></br>
              {/* payment */}
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="row">
                      <div class="col-lg-3 radio-group">
                        <div class="row d-flex px-3 radio">
                          <img class="pay" src={img1} alt="" />
                          <p class="my-auto">Credit Card</p>
                        </div>
                        <div class="row d-flex px-3 radio gray">
                          <img class="pay" src={img2} alt="" />
                          <p class="my-auto">Debit Card</p>
                        </div>
                        <div class="row d-flex px-3 radio gray mb-3">
                          <img class="pay" src={img3} alt="" />
                          <p class="my-auto">PayPal</p>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="row px-2">
                          <div class="form-group col-md-6">
                            <label class="form-control-label">
                              Name on Card
                            </label>
                            <input
                              type="text"
                              id="cname"
                              name="cname"
                              placeholder="Farwa Adil"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label class="form-control-label">
                              Card Number
                            </label>
                            <input
                              type="number"
                              id="cnum"
                              name="cnum"
                              placeholder="1111 2222 3333 4444"
                            />
                          </div>
                        </div>
                        <div class="row px-2">
                          <div class="form-group col-md-6">
                            <label class="form-control-label">
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              id="exp"
                              name="exp"
                              placeholder="MM/YYYY"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label class="form-control-label">CVV</label>
                            <input
                              type="password"
                              id="cvv"
                              name="cvv"
                              placeholder="***"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart_buttons">
                {" "}
                {/* back to shop button */}
                <Link to="/products" className="btn card_btn">
                  Back to Shop
                </Link>{" "}
                {/* checkout button */}
                <button
                  type="button"
                  class="btn btn-lg btn-warning"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Checkout
                </button>
                <div class="container d-flex justify-content-center">
                  <div class="row">
                    <div class="col-md-6"> </div>
                  </div>
                </div>
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                    <div class="card">
                      <div class="text-right cross">
                        {" "}
                        <i class="fa fa-times"></i>{" "}
                      </div>
                      <div class="card-body text-center">
                        {" "}
                        <img src={img4} alt="" />
                        <p>
                          YOUR ORDER HAS BEEN PLACED AND WILL BE DISPATCH SOON.
                          THANKS FOR SHOPPING!
                        </p>{" "}
                        <button class="btn  continue">CONTINUE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productdetails;
