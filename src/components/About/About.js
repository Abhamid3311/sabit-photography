import React from 'react';
import './About.css';
import sabit3 from '../../images/sabit1.png';
import { AiFillHome, AiTwotoneMail, AiFillPhone } from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <h1 className='text-primary text-center mt-3'>About Myself</h1>
            <div className='about-container d-flex row '>
                <div className='about-info  col  '>
                    <div className='mb-5'>
                        <h1>
                            Hi, I'm  <span className='text-primary'> Zaman Sabit </span></h1>
                        <h3> I'm a <span className='text-primary'> Photographar </span>
                        </h3>
                    </div>

                    <p>
                        I was born in Khulna, and like little Sonadanga, I always dreamed that a hurricane would take me somewhere to another country. And once I really ended up in another country - in China, studying at a business school. There I began to photography a lot around Asia in my free time and then moved to work in Dhaka.</p>

                    <p> I discovered the world of low-cost airlines and began to fly somewhere and see the world every weekend and capture beauty. Being somewhere in the 15th country, I realized that I had enough experience and knowledge to share with others - and so this blog appeared. Here you will find useful tips, my photography experiences, shoot hacks and the usual daily thoughts about everything that surrounds me.</p>
                </div>
                <img className='col ' src={sabit3} alt="" />
            </div>

            <div className='ms-5'>
                <h2 className='text-primary '>Contact Me</h2>
                <p className='fs-4'><AiFillHome></AiFillHome> Sonadanga, Khulna, Bangladesh</p>
                <p className='fs-4'><AiTwotoneMail></AiTwotoneMail> sabitXXX@gmail.com</p>
                <p className='fs-4'><AiFillPhone></AiFillPhone> +880 018XXXXXXXXX</p>
            </div>
        </div>
    );
};

export default About;