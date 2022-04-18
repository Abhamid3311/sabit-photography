import React from 'react';
import './About.css';

import sabit2 from '../../images/sabit vai.jpg'
import sabit from '../../images/sabit.png'
import sabit3 from '../../images/sabit1.png'

const About = () => {
    return (
        <div>
            <h1 className='text-primary text-center my-5'>About Me</h1>
            <div className='about-container'>
                <div className='about-info col'>
                    <h2 className='mb-5 text-primary'>Hi, I'm Zaman Sabit and <br /> I am a Photographar</h2>
                    <p>
                        I was born in Khulna, and like little Sonadanga, I always dreamed that a hurricane would take me somewhere to another country. And once I really ended up in another country - in China, studying at a business school. There I began to photography a lot around Asia in my free time and then moved to work in Dhaka.</p>

                    <p> I discovered the world of low-cost airlines and began to fly somewhere and see the world every weekend and capture beauty. Being somewhere in the 15th country, I realized that I had enough experience and knowledge to share with others - and so this blog appeared. Here you will find useful tips, my photography experiences, shoot hacks and the usual daily thoughts about everything that surrounds me.</p>
                </div>
                <img className='col' src={sabit3} alt="" />
            </div>
        </div>
    );
};

export default About;