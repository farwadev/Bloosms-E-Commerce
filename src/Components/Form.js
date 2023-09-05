import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Images/logo.png";
import img2 from "../Images/p.png";
import img3 from "../Images/e.png";

import img1 from "../Images/l.png";
function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };
  return (
    <div>
      <div className="container px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10 my-5">
                  <div className="row justify-content-center px-3 mb-3">
                    <img id="logo" src={img} alt="img" />
                  </div>
                  <h3 className="mb-5 text-center heading">We are Blossoms</h3>
                  <h6 className="msg-info">Please login to your account</h6>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Password
                    </label>
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="row justify-content-center my-3 px-3">
                    <button
                      className="btn-block btn-color"
                      onClick={handleLogin}
                    >
                      Login to Blossoms
                    </button>
                  </div>
                  <div className="row justify-content-center my-2">
                    <Link to="#">
                      <small className="text-muted">Forgot Password?</small>
                    </Link>
                  </div>
                  <div className="bottom text-center mb-8">
                    <Link to="#" className="sm-text mx-auto mb-3">
                      Don't have an account?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right text-center">
                <h3 className="text-black">Join OUR TEAM OF EXPERTS</h3>
                <br></br>
                <small className="text-black ">
                  Our expert staff is here to enable all customers to pick the
                  best flowers and plants for all events and purposes.Blossoms
                  Florals is glad to give quality flowers and plants to our
                  customers. Blossoms Florals Our retail premises opened in 1999
                  after much interest from the general public of our humble work
                  here and there. From that point forward, we have bloomed into
                  a full administration flower specialist with both private and
                  corporate customers. We owe quite a bit of our prosperity to
                  our extraordinary customers who move us to make unique and
                  dazzling products and combinations.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card mt-4 border-0 mb-4">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center justify-content-center c-detail pl-0">
                <div className="mr-3 align-self-center">
                  <img src={img1} alt="" />
                </div>
                <div className="">
                  <h6 className="font-weight-medium">Address</h6>
                  <p className="">137/P Mini Market Gullberg II Lahore</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center justify-content-center c-detail">
                <div className="mr-3 align-self-center">
                  <img src={img2} alt="" />
                </div>
                <div className="">
                  <h6 className="font-weight-medium">Phone</h6>
                  <p className="">+92-7697649109</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center justify-content-center c-detail">
                <div className="mr-3 align-self-center">
                  <img src={img3} alt="" />
                </div>
                <div className="">
                  <h6 className="font-weight-medium">Email</h6>
                  <p className="">blossomflowersshop@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
