import React from 'react';
import AboutProduct from '../AboutProduct/AboutProduct';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <AboutProduct></AboutProduct>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;