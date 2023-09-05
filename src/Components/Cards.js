import React from 'react';
import { Link } from 'react-router-dom';
// images
import img1 from "../Images/b.jpg";
import img2 from "../Images/b1.jpg";
import img3 from "../Images/b2.jpg";
import img4 from "../Images/b3.jpg";
import img5 from "../Images/b4.jpg";

function Cards(props) {
    return (
        <div>
            <div className="cards">
                <div className="outer">
                    <div className="card" style={{ "--delay": "-1" }}>
                        <div className="content">
                            <div className="img"><img src={img1} alt="img" /></div>
                            <div className="details">
                                <span className="name">Bouquets</span>
                                <p>Fresh Flowers</p>
                            </div>
                        </div>
                        <Link to="/home">See More</Link>
                    </div>
                    <div className="card" style={{ "--delay": "0" }}>
                        <div className="content">
                            <div className="img"><img src={img2} alt="" /></div>
                            <div className="details">
                                <span className="name">Basket</span>
                                <p>Customized Baskets</p>
                            </div>
                        </div>
                        <Link to="/home">See More</Link>
                    </div>
                    <div className="card" style={{ "--delay": "1" }}>
                        <div className="content">
                            <div className="img"><img src={img3} alt="" /></div>
                            <div className="details">
                                <span className="name">Box</span>
                                <p>Different Occasions</p>
                            </div>
                        </div>
                        <Link to="/home">See More</Link>
                    </div>
                    <div className="card" style={{ "--delay": "2" }}>
                        <div className="content">
                            <div className="img"><img src={img4} alt="" /></div>
                            <div className="details">
                                <span className="name">Wdding Special</span>
                                <p>For your special day</p>
                            </div>
                        </div>
                        <Link to="/home">See More</Link>
                    </div>
                    <div className="card" style={{ "--delay": "2" }}>
                        <div className="content">
                            <div className="img"><img src={img5} alt="" /></div>
                            <div className="details">
                                <span className="name" >Cone Bouquets</span>
                                <p>Customize</p>
                            </div>
                        </div>
                        <Link to="/home">See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;