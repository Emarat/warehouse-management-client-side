import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;