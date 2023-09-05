import React from "react";
import img from "../Images/info.jpg";
import img2 from "../Images/info1.jpg";
import img1 from "../Images/info2.jpg";
import img3 from "../Images/info3.jpg";
import img4 from "../Images/wheat.png";
function Info(props) {
  return (
    <div>
      <section className="history-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="imge text-center">
                {" "}
                <img src={img4} alt="img" />{" "}
                <h3
                  className="section-title wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="400ms"
                >
                  <span> About Us</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                id="history-slid"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item row">
                    <div className="col-lg-6 col-md-12 pl-0">
                      <div className="history-img">
                        <img className="img-fluid" src={img} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-0">
                      <div className="history-content">
                        <p
                          className="title-bg-small primary-bg "
                          data-wow-duration="1.5s"
                          data-wow-delay="500ms"
                        >
                          Blossoms
                        </p>
                        <h2
                          className="column-title wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="700ms"
                        >
                          Blossoms <span>Mission</span>
                        </h2>
                        <p>
                          Blossoms Florals is glad to give quality flowers and
                          plants to our customers.
                        </p>
                        <p>
                          About us Blossoms Florals Our retail premises opened
                          in 1999 after much interest from the general public of
                          our humble work here and there. From that point
                          forward, we have bloomed into a full administration.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item row">
                    <div className="col-lg-6 col-md-12 pl-0">
                      <div className="history-img">
                        <img className="img-fluid" src={img1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-0">
                      <div className="history-content">
                        <p
                          className="title-bg-small primary-bg wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="500ms"
                        >
                          Blossoms
                        </p>
                        <h2
                          className="column-title wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="700ms"
                        >
                          Blossoms <span>Vision</span>
                        </h2>
                        <p>
                          We trust that the best, freshest flowers deliver the
                          most noteworthy presentations.
                        </p>
                        <p>
                          We owe quite a bit of our prosperity to our
                          extraordinary customers who move us to make unique and
                          dazzling products and combinations,we have bloomed
                          into a full administration flower specialist with both
                          private and corporate customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item row">
                    <div className="col-lg-6 col-md-12 pl-0">
                      <div className="history-img">
                        <img className="img-fluid" src={img2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-0">
                      <div className="history-content">
                        <p
                          className="title-bg-small primary-bg wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="500ms"
                        >
                          Blossoms
                        </p>
                        <h2
                          className="column-title wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="700ms"
                        >
                          Blossoms <span>Events</span>
                        </h2>
                        <p>
                          Blossoms sit amet, consectetur adipisicing elit, sed
                          do eiusmod tempor incididunt ut labore et e magna
                          aliqua
                        </p>
                        <p>
                          If you’re planning high-profile private parties,
                          events, or wedding, look no further than Blossom Decor
                          by Al-Jannat Event Management. The big value of team,
                          led by Blossoms specializes in bringing an element of
                          surprise to the most elegant of events.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item row active">
                    <div className="col-lg-6 col-md-12 pl-0">
                      <div className="history-img">
                        <img className="img-fluid" src={img3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-0">
                      <div className="history-content">
                        <p
                          className="title-bg-small primary-bg wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="500ms"
                        >
                          Blossoms
                        </p>
                        <h2
                          className="column-title wow fadeInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="700ms"
                        >
                          Blossoms It's always <span>Spring</span>
                        </h2>
                        <p>
                          A flower retail and delivery service offering fresh,
                          premium flowers across Lahore. So simply stop, smell
                          the roses and shop your picks from our blooming
                          collection of flowers!
                        </p>
                        <p>
                          A flower retail and delivery service offering fresh,
                          premium flowers across Lahore. So simply stop, smell
                          the roses and shop your picks from our blooming
                          collection of flowers!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* icons */}
                <ol className="carousel-indicators text-center">
                  <li
                    data-target="#history-slid"
                    data-slide-to="0"
                    className="active"
                  >
                    Mission
                  </li>
                  <li data-target="#history-slid" data-slide-to="1">
                    Vision
                  </li>
                  <li data-target="#history-slid" data-slide-to="2">
                    Events
                  </li>
                  <li data-target="#history-slid" data-slide-to="3">
                    About
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
