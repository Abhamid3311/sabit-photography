import React from 'react';
import './About.css';
import sabit3 from '../../../images/sabit1.png';
import sabit2 from '../../../images/sabit vai.jpg';
import { AiFillHome, AiTwotoneMail, AiFillPhone } from 'react-icons/ai';

const About = () => {
    return (
        <div >
            <h1 className='text-primary text-center mt-3'>About Myself</h1>
            <div class=" container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={sabit2} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <div className='mb-5'>
                            <h1>
                                Hi, I'm  <span className='text-primary'> Zaman Sabit </span></h1>
                            <h3> I'm a <span className='text-primary'> Professional Photographar </span>
                            </h3>
                        </div>

                        <p>
                            I was born in Khulna, and like little Sonadanga, I always dreamed that a hurricane would take me somewhere to another country. And once I really ended up in another country - in China, studying at a business school. There I began to photography a lot around Asia in my free time and then moved to work in Dhaka.</p>
                        <p> I discovered the world of low-cost airlines and began to fly somewhere and see the world every weekend and capture beauty. Being somewhere in the 15th country, I realized that I had enough experience and knowledge to share with others - and so this blog appeared. Here you will find useful tips, my photography experiences, shoot hacks and the usual daily thoughts about everything that surrounds me.</p>

                    </div>
                </div>
            </div>

            <div className='p-3'>
                <p>
                    I approach photography with a romantic, fine art sensibility. My imagery is understated yet evocative, resulting from clear and polished creative direction that elicits light-filled, painterly portraits. My use of fresh and simple composition, and natural light has evolved from a deep love and respect for the old masters - Rembrandt, Vermeer, Botticelli. I am a fiercely dedicated medium format film photographer and my creative process is imaginative, industrious and detailed. In each capture, I aim for perfection and beauty.

                    I am a former New Yorker living in Southern California with my husband, two rambunctious little boys, and an elderly french bulldog named Gatsby. When I am not working, I can be found at the Santa Barbara House where we host beautifully styled, al fresco dinners that feature the talents of our expansive and generous network, and benefit local non-profits that mean a lot to us.
                </p>
            </div>

           {/*  <div class=" container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={sabit3} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">

                        <p > I also have an active role in educating photographers on the art and craft of shooting film. My written works include “The Master Guide to Fine Art Wedding Photography,” now in its third edition, “The Portraiture Reference Guides,” a 3 book series on natural and expressive portraiture and composition, and The Focused Guides, a series for advanced instruction and methodology. Upcoming conference appearances can be found on my press page.</p>
                        <p>
                            Over the last ten years, my work has taken me to spectacular celebrations and sophisticated soirees in over twenty countries on six different continents. Past clients have included prominent global leaders, celebrated directors and actors, and distinguished executives. I have been named one of the top 25 film photographers in the world and a “photographer's photographer” by Martha Stewart Weddings. My work has been featured in numerous international publications, including Rangefinder, Elle, Harper's Bazaar, Town and Country Weddings, Brides Magazine, The Knot, Martha Stewart Magazine, The Boston Globe and New York Magazine. My clients describe my work as “painterly,” “nuanced,” “refined” and I am honored to be a leading choice amongst internationally acclaimed planners and designers.
                        </p>

                    </div>
                </div>
            </div> */}



           {/*  <div className='ms-5 container'>
                <h3 className='text-primary'>Contact Me  </h3>
                <p className='fs-4'><AiFillHome></AiFillHome> Sonadanga, Khulna, Bangladesh</p>
                <p className='fs-4'><AiTwotoneMail></AiTwotoneMail> sabitXXX@gmail.com</p>
                <p className='fs-4'><AiFillPhone></AiFillPhone> +880 018XXXXXXXXX</p>
            </div> */}

        </div>
    );
};

export default About;