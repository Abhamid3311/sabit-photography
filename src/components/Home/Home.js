import React from 'react';
import Banner from '../Banner/Banner';

import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Contact from './Contact';
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