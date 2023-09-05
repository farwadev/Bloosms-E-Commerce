import React from 'react';
import Ticker from '../Components/Ticker';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import Product from '../Components/product';

function Products(props) {
    return (
        <div>
            <Ticker/>
            <Navbar/>
            <Cards/>
            <Product/>
            <Footer/>
        </div>
    );
}

export default Products;