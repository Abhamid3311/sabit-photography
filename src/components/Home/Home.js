import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Featured></Featured>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;