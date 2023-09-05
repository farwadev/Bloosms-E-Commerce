import React from 'react';
import "../App.css"
import Ticker from "../Components/Ticker"
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Cardslide from '../Components/Cardsslide';
import Latest from '../Components/Latest';


function Home(props) {
    return (
        <div>
            <Ticker/>
            <Navbar/>
            <Carousel/>
            <Latest/>
            <Cardslide/>           
            <Footer/>
        </div>
    );
}

export default Home;