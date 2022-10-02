import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Reviews from './review/Reviews/Reviews';
import Services from './service/Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Contact></Contact>


        </div>
    );
};

export default Home;