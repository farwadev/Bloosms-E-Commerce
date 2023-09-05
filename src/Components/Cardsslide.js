import React from "react";
import img from "../Images/top1.jpg";
import img1 from "../Images/top2.jpg";
import img2 from "../Images/top3.jpg";
import img3 from "../Images/top4.jpg";
import img4 from "../Images/top5.jpg";
import img5 from "../Images/top6.jpg";
import img6 from "../Images/top7.jpg";
import img7 from "../Images/top8.jpg";
import img8 from "../Images/top9.jpg";
// heading img
import img9 from "../Images/wheat.png";
// import img1 from "../Images/wheat.png"
function Hovercards(props) {
  return (
    <div>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="imagg text-center">
                {" "}
                <img src={img9} alt="img" />{" "}
                <h3 className="mb-3 text-center">TOP PRODUCTS</h3>
                <br></br>
              </div>
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img className="img-fluid" alt="100%x280" src={img} />
                          <div className="card-body">
                            <h4 className="card-title">LILIES LOVE</h4>
                            <p className="card-text">PKR 7450.00</p>
                            {/* <button type="button" class="btn btn-link">Link</button> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img1}
                          />
                          <div className="card-body">
                            <h4 className="card-title">BOUQUET FOREVER</h4>
                            <p className="card-text">PKR 4999.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img2}
                          />
                          <div className="card-body">
                            <h4 className="card-title">FLORAL PURPLISH</h4>
                            <p className="card-text ">PKR 7999.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img3}
                          />
                          <div className="card-body">
                            <h4 className="card-title">FLORAL SIDE BASKET</h4>
                            <p className="card-text">PKR 4999.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img4}
                          />
                          <div className="card-body">
                            <h4 className="card-title">CUSTOMIZE BUNCH</h4>
                            <p className="card-text">PKR 8499.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img5}
                          />
                          <div className="card-body">
                            <h4 className="card-title">BLACK ROSES</h4>
                            <p className="card-text">PKR 8499.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img6}
                          />
                          <div className="card-body">
                            <h4 className="card-title">BIRTHDAY BOX</h4>
                            <p className="card-text">PKR 5999.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img7}
                          />
                          <div className="card-body">
                            <h4 className="card-title"> REGULAR CUSTOMIZE</h4>
                            <p className="card-text">PKR 5950.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 text-center">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={img8}
                          />
                          <div className="card-body">
                            <h4 className="card-title">PINK PRESENT BOX</h4>
                            <p className="card-text">PKR 7999.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center">
                <button
                  type="button"
                  class="btn  mb-3 mr-3"
                  href="#carouselExampleIndicators2"
                  data-slide="prev"
                >
                  {" "}
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button
                  className="btn  mb-3 "
                  href="#carouselExampleIndicators2"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hovercards;
