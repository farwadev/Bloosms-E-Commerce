import React from 'react';
import Ticker from '../Components/Ticker';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
function About(props) {
    return (
        <div>
            <Ticker/>
            <Navbar/>
            <Info/>
            <Footer/>
        </div>
    );
}

export default About;