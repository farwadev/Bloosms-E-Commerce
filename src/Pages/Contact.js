import React from 'react';
import Ticker from "../Components/Ticker";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import Form from '../Components/Form';
function Contact(props) {
    return (
        <div>
            <Ticker/>
            <Navbar/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Contact;